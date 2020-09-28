import { useRouter } from "next/router";
import Link from "next/link";
import styled from "@emotion/styled";
import Icon from "../Icon/Icon.tsx";

const textMenuItem = [
  {
    icon: "calendar",
    text: "Занятия",
    url: "/404/1",
  },
  {
    icon: "pupil",
    text: "Учащиеся",
    url: "/404/2",
  },
  {
    icon: "book",
    text: "Тренеры",
    url: "/",
  },
  {
    icon: "ruble",
    text: "Финансисты",
    url: "/404/3",
  },
  {
    icon: "ticket",
    text: "Абонементы",
    url: "/404/4",
  },
  {
    icon: "flag",
    text: "Доступ в CRM",
    url: "/404/5",
  },
  {
    icon: "mail",
    text: "Рассылки",
    url: "/404/6",
  },
  {
    icon: "diagram",
    text: "Отчеты",
    url: "/404/7",
  },
  {
    icon: "settings",
    text: "Настройки",
    url: "/404/8",
  },
];

const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 13px 0;
  position: relative;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  &:hover {
    color: #000000;
    path {
      fill: #000000;
    }
  }
  path {
    fill: rgba(0, 0, 0, 0.5);
  }
  border-left: 3px solid transparent;
  ${(props) => {
    return (
      props.active &&
      `
    background-color: #EDF0F5;
    color: black;
    path {
      fill: #000000;
      fill-opacity: 1;
    }
    border-left: 3px solid #2E71F3;
    border-radius: 6px 0px;
  `
    );
  }}
`;

const MenuItemText = styled.div`
  font-family: Jost;
  font-size: 13px;
  line-height: 19px;
`;

const IconContainer = styled.div`
  padding-left: 31.5px;
  padding-right: 11px;
`;

const Menu = () => {
  const router = useRouter();
  return textMenuItem.map((item) => {
    return (
      <Link href={item.url} key={item.url}>
        <MenuItemContainer active={router.asPath === item.url}>
          <IconContainer>
            <Icon icon={item.icon} />
          </IconContainer>
          <MenuItemText>{item.text}</MenuItemText>
        </MenuItemContainer>
      </Link>
    );
  });
};

export default Menu;
