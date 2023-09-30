const { Client, credentials } = require('@grpc/grpc-js')

let clients = {}

const createTypeFile = async () => {}

/**
 * @param {Record<string, {classType: Client, url: string}>} serviceMap
 * @param {() => import('egg-logger').EggLogger} loggerGetter
 * @returns {Promise<void>}
 */
async function init(loggerGetter, serviceMap) {
  const logger = loggerGetter()

  for (const [key, value] of Object.entries(serviceMap)) {
    const { classType, url } = value
    clients[key] = new classType(url, credentials.createInsecure())
    logger.info(`grpc client ${key} init success`)
  }

  await createTypeFile()
}

/**
 * @param {() => import('egg-logger').EggLogger} loggerGetter
 */
async function shutdown(loggerGetter) {
  const logger = loggerGetter()

  for (const [key, value] of Object.entries(clients)) {
    value.close()
    logger.info(`grpc client ${key} close success`)
  }

  clients = {}
}

module.exports = {
  clients,
  init,
  shutdown
}
