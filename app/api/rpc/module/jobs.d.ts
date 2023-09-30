import { job } from 'kptl-grpc-js'
import {EggLogger} from "egg";

export function fetchAllJobs(
  reqRaw: job.FindAllJobRequest.AsObject,
  loggerGetter?: () => EggLogger
): Promise<job.FindJobResponse.AsObject[]>
