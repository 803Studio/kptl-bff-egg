import type {StoreModule} from "../../type";
import {JobInfo} from "../../../model/jobs/JobInfo"
import {createStoreIndexes, StoreIndexes} from "../../utils"
import {randJobInfo} from "../../../model/jobs/randJobInfo";

interface JobStore extends StoreModule {
  indexes: StoreIndexes<JobInfo>
}

const jobStoreIndexes = createStoreIndexes<JobInfo>(
  [
    'id',
    'companyId',
    'recruiterId'
  ]
)

const jobStore: JobStore = {
  name: 'job',
  init: async () => {
    for (let i = 0; i < 200; i++) {
      jobStoreIndexes.addItem(randJobInfo())
    }
  },
  indexes: jobStoreIndexes,
}

export default jobStore
