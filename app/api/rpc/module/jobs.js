const { createRpcApi } = require('../util')
const {clients} = require("../clients");
const {FindAllJobRequest} = require("kptl-grpc-js/lib/job");


const createFindAllJobRequest = (reqRaw) => {
  const req = new FindAllJobRequest()
  req.setSize(reqRaw.size)
  req.setIndex(reqRaw.index)
  return req
}

const handleFindAllJobResponse = (res) => {
  const temp = []
  for (const job of res.getJobmsgList()) {
    temp.push(job.toObject())
  }
  return temp
}

const fetchAllJobs = createRpcApi(
  clients.job,
  clients.job.findAllJobs,
  createFindAllJobRequest,
  handleFindAllJobResponse
)

module.exports = {
  fetchAllJobs
}
