const kptlPb = require("kptl-grpc-js")

const createRpcApi = (client, rpcCall, reqCreator, resHandler) => {
  return (reqRaw, loggerGetter) => new Promise((resolve, reject) => {
    loggerGetter ??= () => console
    const logger = loggerGetter()
    logger.info({
      path: rpcCall.path,
      req: reqRaw
    })

    rpcCall.call(client, reqCreator(reqRaw), (err, res) => {
      if (err !== null) {
        reject(err)
      } else if (res.getHeader().getStatus() !== kptlPb.global.ResponseStatus.OK) {
        reject(new Error(res.getHeader().getMessage()))
      } else {
        resolve(resHandler(res))
      }
    })
  })
}

module.exports = {
  createRpcApi
}
