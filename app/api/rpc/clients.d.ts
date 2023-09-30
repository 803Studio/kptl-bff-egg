import { EggLogger } from 'egg'
import {Client} from "@grpc/grpc-js";
import {JobClient} from "kptl-grpc-js/lib/job";


type LoggerGetter = () => EggLogger

export function init(
  loggerGetter: LoggerGetter,
  serviceMap: Record<string, {
    classType: Client,
    url: string
  }>
): Promise<void>

export function shutdown(loggerGetter: LoggerGetter): Promise<void>

export let clients: {
  job: JobClient
}
