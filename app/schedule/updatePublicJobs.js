const Subscription = require('egg').Subscription

class UpdatePublicJobs extends Subscription {
  static get schedule() {
    return {
      interval: '5m',
      type: 'all'
    }
  }

  async subscribe() {
    await this.ctx.service.jobs.updatePublicJobs()
    console.log('update public jobs')
  }
}

module.exports = UpdatePublicJobs
