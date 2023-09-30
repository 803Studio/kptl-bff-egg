const Controller = require('egg').Controller;

const asNums = strList => {
  return strList.map(str => {
    if (str === '') return Number.NaN
    return +str
  })
}

class JobsController extends Controller {
  getJobsByIndex() {
    const query = asNums([this.ctx.query.index, this.ctx.query.size])
    if (query.some(Number.isNaN)) {
      this.ctx.status = 400
      return
    }
    const [index, size] = query
    this.ctx.body = this.service.jobs.getJobsByIndex(index, size)
  }

  getJobById() {
    const idRaw = this.ctx.query.id
    if (idRaw === '' || Number.isNaN(+idRaw)) {
      this.ctx.status = 400
      return
    }

    const job = this.service.jobs.getJobById(+idRaw)
    if (job === undefined) {
      this.ctx.status = 404
      return;
    }

    this.ctx.body = job
  }
}

module.exports = JobsController
