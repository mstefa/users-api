import winston, { createLogger, format, transports} from 'winston';
import  'winston-daily-rotate-file';
import moocConfig from '../../../../Auth/Shared/infrastructure/config';

// const myFormat = format.printf(({ level, message, timestamps }) =>
//     `${timestamps} ${level}: ${message}`);

export class Log {
  private static WinstonLogger = createLogger({
    format: format.combine(
      format.label({ label: moocConfig.get('env') }),
      format.timestamp(),
      format.json()
    ),
    transports: [
      new transports.Console(),
      new winston.transports.DailyRotateFile({
        filename: './logs/application-%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',

      })
    ]
  });

  static info(message: string) {
    this.WinstonLogger.info(message);
  }

  static warn(message: string) {
    this.WinstonLogger.warn(message);
  }

  static error(message: string) {
    this.WinstonLogger.error(message);
  }

}
