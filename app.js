const Egg = require('egg');
const rpcClients = require("./app/api/rpc/clients");
const store = require("./app/store");


class AppBootHook {
  /** @type {Egg.Application} */
  app
  loggerGetter

  constructor(app) {
    this.app = app;
    this.loggerGetter = () => app.logger
  }

  configWillLoad() {
    // Ready to call configDidLoad,
    // Config, plugin files are referred,
    // this is the last chance to modify the config.
    this.app.logger.info('configWillLoad')
  }

  async configDidLoad() {
    // Config, plugin files have loaded.
    this.app.logger.info('configDidLoad')
    await rpcClients.init(this.loggerGetter, this.app.config.rpc.serviceMap)
    await store.init(this.loggerGetter)
  }

  // All files have loaded, start plugin here.
  async didLoad() {
  }

  async willReady() {
    // All plugins have started, can do something before app ready.
  }

  async didReady() {
    // Worker is ready, can do some things
    // don't need to block the app boot.
  }

  async serverDidReady() {
    // Server is listening.
  }

  // Do something before app close.
  async beforeClose() {
    await rpcClients.shutdown(this.loggerGetter)
  }
}

module.exports = AppBootHook;
