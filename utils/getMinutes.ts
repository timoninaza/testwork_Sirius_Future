import moment from "moment";

export default function getMinutes(date) {
  return moment(date).hours() * 60 + moment(date).minutes();
}
