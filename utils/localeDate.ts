import moment from "moment";

const localeDate = (date) => {
  return moment(date).locale("ru");
};

export default function localeDates(...dates) {
  if (dates.length == 1) {
    return localeDate(dates[0]);
  }
  return dates.map(localeDate);
}
