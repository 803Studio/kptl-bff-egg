import type { StoreModule } from "../../type";
import { JobInfo } from "../../../model/jobs/JobInfo";
import { StoreIndexes } from "../../utils";
interface JobStore extends StoreModule {
    indexes: StoreIndexes<JobInfo>;
}
declare const jobStore: JobStore;
export default jobStore;
