import { opendir } from 'node:fs/promises'
import * as path from 'node:path'
import { StoreModule } from "@/store/type";
import {EggLogger} from "egg";

export async function init(loggerGetter: () => EggLogger) {
  const modules: StoreModule[] = []
  const logger = loggerGetter()
  const info = (s: string) => logger.info(`[store] ${s}`)

  const dir = await opendir(path.join(__dirname, 'modules'))
  for await (const dirent of dir) {
    if (dirent.isDirectory()) {
      info(`Loading store module ${dirent.name}`)
      try {
        const module = require(dirent.path)
        modules.push(module.default)
        info(`Loaded store module ${dirent.name}`)
      } catch (e) {
        logger.error(`Failed to load store module ${dirent.name}: ${e}`)
      }
    }
  }

  let root = Promise.resolve()

  for (const module of modules) {
    info(`Initializing store module ${module.name}`)
    root = root.then(() => module.init())
      .then(() => {
        info(`Initialized store module ${module.name}`)
      })
      .catch(reason => {
        logger.error(`Failed to initialize store module ${module.name}: ${reason}`)
      })
  }

  return root
}
