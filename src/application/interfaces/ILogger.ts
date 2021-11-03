export type LogData<T> = {
  type: string;
  payload?: T;
  message?: string;
  error?: Error;
}

export type LogMethod = <T>(logData: LogData<T>) => void;

export interface ILogger {
  debug: LogMethod;
  info: LogMethod;
  warn: LogMethod;
  error: LogMethod;
};