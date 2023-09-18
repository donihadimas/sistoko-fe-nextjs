export const logger = {
  info: (message: any) => {
    console.info("[INFO]", message);
  },
  error: (message: any) => {
    console.error("[ERROR]", message);
  },
  warning: (message: any) => {
    console.warn("[WARNING]", message);
  },
};
