module.exports = app => {
  const { router, controller } = app;

  router.get('/jobs', controller.jobs.getJobsByIndex)
  router.get('/job', controller.jobs.getJobById)
}
