import { opendir } from 'node:fs/promises'
import * as path from 'node:path'
import { StoreModule } from "@/store/type";
import {EggLogger} from "egg";

export async function init(loggerGetter: () => EggLogger) {
  const modules: StoreModule[] = []
  const logger = loggerGetter()

  const dir = await opendir(path.join(__dirname, 'modules'))
  for await (const dirent of dir) {
    if (dirent.isDirectory()) {
      modules.push(require(dirent.path).default)
    }
  }

  let root = Promise.resolve()

  for (const module of modules) {
    logger.info(`Initializing store module ${module.name}`)
    root = root.then(() => module.init())
      .then(() => {
        logger.info(`Initialized store module ${module.name}`)
      })
      .catch(reason => {
        logger.error(`Failed to initialize store module ${module.name}: ${reason}`)
      })
  }

  return root
}
