import moment from "moment";
import "moment/locale/id";

export const showCurrentDateTime = (format: string, locale: string = "id") => {
  moment.locale(locale);
  const currentDateTime = moment().format(format);
  return currentDateTime;
};
