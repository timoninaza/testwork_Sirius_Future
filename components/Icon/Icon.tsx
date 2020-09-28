import HideBar from "./hideBar.svg";
import Book from "./book.svg";
import Calendar from "./calendar.svg";
import Mail from "./mail.svg";
import Diagram from "./diagram.svg";
import Flag from "./flag.svg";
import Pupil from "./pupil.svg";
import Ruble from "./ruble.svg";
import Settings from "./settings.svg";
import Ticket from "./ticket.svg";
import Search from "./search.svg";
import Notification from "./notification.svg";
import NewNotification from "./newNotification.svg";
import Plus from "./plus.svg";
import Filter from "./filter.svg";
import Items from "./items.svg";
import EmptyCalendar from "./emptyCalendar.svg";
import LeftArrow from "./leftArrow.svg";
import RightArrow from "./rightArrow.svg";
import Alarm from "./alarm.svg";
import SmallPupil from "./smallPupil.svg";

const iconNames = {
  hideBar: HideBar,
  book: Book,
  calendar: Calendar,
  mail: Mail,
  diagram: Diagram,
  flag: Flag,
  pupil: Pupil,
  ruble: Ruble,
  settings: Settings,
  ticket: Ticket,
  search: Search,
  notification: Notification,
  newNotification: NewNotification,
  plus: Plus,
  filter: Filter,
  emptyCalendar: EmptyCalendar,
  items: Items,
  leftArrow: LeftArrow,
  rightArrow: RightArrow,
  alarm: Alarm,
  "small pupil": SmallPupil,
};

type IconProps = {
  icon: string;
};

const Icon = ({ icon }: IconProps) => {
  const Component = iconNames[icon];
  if (!Component) {
    return null;
  } else return <Component />;
};

export default Icon;
