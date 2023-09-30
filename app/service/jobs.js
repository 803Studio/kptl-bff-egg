const Service = require('egg').Service
const jobStore = require('../store/modules/jobs').default


class JobsService extends Service {
  async updatePublicJobs() {
  }

  getJobsByIndex(index, size) {
    return jobStore.indexes.getAllItems()
      .sort((a, b) => {
        return b.timestamp - a.timestamp
      })
      .slice(index, index + size)
  }

  getJobById(id) {
    return jobStore.indexes.getItem('id', id)
  }
}

module.exports = JobsService;
