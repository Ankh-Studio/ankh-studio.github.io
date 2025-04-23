
type LogBase = {
  timestamp? : boolean,
  msg?       : any,
  source?    : string,
  line?      : number;
} | any;

export type LogInfo  = LogBase & { level: "info"  };
export type LogWarn  = LogBase & { level: "warn"  };
export type LogError = LogBase & { level: "error" };
export type LogInput = LogInfo | LogWarn | LogError;

const isBase = (obj: any): obj is LogBase => {
  return typeof obj === "object"
    && obj !== null
    && ("msg" in obj || "source" in obj || "timestamp" in obj || "line" in obj)
};

const _push_log = (
  info: LogInput | string,
  ...optionalParams: any[]
) => {
  const logger = (() => {
    if( typeof info === "object" && info!.level){
      switch( info.level ){
        case "info":
          return console.log
        case "warn":
          return console.warn
        case "error":
          return console.error
      }
    }
    return console.log;
  })();

  if( !isBase(info) ){
    if( !info ){
      return logger()
    }
    return logger(`${info}`, ...optionalParams);
  }

  var fmt = "";
  if( info?.timestamp ){
    const now = new Date();
    const pad = (n: number, len: number = 2) => String(n).padStart(len, "0");
    const [
      hour,
      min,
      sec,
      ms
    ] = [
      pad(now.getHours()),
      pad(now.getMinutes()),
      pad(now.getSeconds()),
      pad(now.getMilliseconds(), 3),
    ];

    fmt += `[ ${hour}:${min}:${sec}:${ms} ]`;
  }

  if( info?.source ){
    fmt += `[ ${info?.source} ]`;
  }
  if( info?.line ){
    fmt += `[ ${info?.line} ]`
  }
  if( info?.msg) {
    fmt += " || ";

    const lines = info.msg.split("\n");
    if( lines.length === 1 ){
      fmt += info.msg;
    } else {
      const fmtLen     = fmt.length;
      const totalLines = lines.length;
      fmt += lines[0] + '\n';

      for(let i = 1; i < totalLines; i++){
        fmt += `${" ".repeat(fmtLen)}${lines[i]}\n`;
      }
    }
  }

  logger(`${fmt}`, ...optionalParams);
};

export const Info = (
  info? : Omit<LogInfo, "level"> | any,
  ...optionalParams: any[]
) => {
  _push_log(
    typeof info === "object" && info !== null
      ? { ...info, level: "info"}
      : info,
    ...optionalParams,
  );
};

export const Warn = (
  info? : Omit<LogWarn, "level"> | any,
  ...optionalParams: any[]
) => {
  _push_log(
    typeof info === "object" && info !== null
      ? { ...info, level: "warn"}
      : info,
      ...optionalParams,
  );
};

export const Err = (
  info? : Omit<LogError, "level"> | any,
  ...optionalParams: any[]
) => {
  _push_log(
    typeof info === "object" && info !== null
      ? { ...info, level: "error"}
      : info,
      ...optionalParams,
  );
};

