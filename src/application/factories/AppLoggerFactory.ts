import { ILogger } from "@/application/interfaces";
import { PinoLogger } from '@/infra/adapters/pino-logger'
export class AppLoggerFactory {
  static pinoLogger: ILogger
  static getInstance(): ILogger {
    if (!AppLoggerFactory.pinoLogger) {
      AppLoggerFactory.pinoLogger = new PinoLogger()
      return AppLoggerFactory.pinoLogger
    }
    return AppLoggerFactory.pinoLogger
  }
}