import pino from 'pino';
import { ILogger, LogData } from '@/application/interfaces';
import config from '@/application/config/config'

export class PinoLogger implements ILogger {
  private pinoLogger;
  constructor() {
    this.pinoLogger = pino({
      level: config.LOG_LEVEL,
    });
  }

  private parseLoggerInputToPinoFormat<T>({ message, error, ...data }: LogData<T>) {
    return {
      msg: message,
      err: error,
      ...data,
    }
  }

  debug<T>(logData: LogData<T>): void {
    this.pinoLogger.debug(this.parseLoggerInputToPinoFormat(logData))
  }
  info<T>(logData: LogData<T>): void {
    this.pinoLogger.info(this.parseLoggerInputToPinoFormat(logData))
  }
  warn<T>(logData: LogData<T>): void {
    this.pinoLogger.warn(this.parseLoggerInputToPinoFormat(logData))
  }
  error<T>(logData: LogData<T>): void {
    this.pinoLogger.error(this.parseLoggerInputToPinoFormat(logData))
  }
}