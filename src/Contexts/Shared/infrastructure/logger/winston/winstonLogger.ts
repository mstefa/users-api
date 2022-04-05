import winston, { createLogger, format, transports} from "winston";
import  'winston-daily-rotate-file';
import moocConfig from "../../../../Auth/Shared/infrastructure/config";

const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

export class Log {
  private static WinstonLogger = createLogger({
    format: combine(
      label({ label: moocConfig.get('env') }), //{ label: 'right meow!' }
      timestamp(),
      myFormat
    ),
    transports: [
      new transports.Console({
        format: format.combine(
          format.timestamp(),
          format.colorize(),
        )
      }),
      new winston.transports.DailyRotateFile({
        filename: './logs/application-%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d'
      })
    ]
  });

  static info(message: string) {
    this.WinstonLogger.info(message)
  }

  static warn(message: string){
    this.WinstonLogger.warn(message)
  }

  static error(message: string){
    this.WinstonLogger.error(message)
  }

}

