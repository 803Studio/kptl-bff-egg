import type { StoreModule } from "@/store/type";
import { JobInfo } from "@/model/jobs/JobInfo";
import { StoreIndexes } from "@/store/utils";
interface JobStore extends StoreModule {
    indexes: StoreIndexes<JobInfo>;
}
declare const jobStore: JobStore;
export default jobStore;
