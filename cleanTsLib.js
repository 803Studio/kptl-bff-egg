const fsp = require('node:fs/promises')
const path = require('node:path')


const inputDir = './lib/ts'
const outputDir = './app'

const search = async (dirPath) => {
  const dir = await fsp.opendir(dirPath)

  /** @type {string[]} */
  const result = []
  for await (const dirent of dir) {
    if (dirent.isDirectory()) {
      result.push(dirent.name)
    }
  }

  return result
}

const deleteDir = async (dirPath, targets) => {
  let root = Promise.resolve()

  for (const target of targets) {
    root = root.then(() => {
      console.log('delete', path.join(dirPath, target))
      return fsp.rm(path.join(dirPath, target), { recursive: true, force: true })
    })
      .then(() => {
        console.log('deleted', path.join(dirPath, target))
      })
      .catch(reason => {
        console.log('delete failed', path.join(dirPath, target))
        console.log(reason)
      })
  }

  return root
}

const main = async () => {
  const dirs = await search(inputDir)
  await deleteDir(outputDir, dirs)
}

main().catch(reason => {
  console.log(reason)
})
