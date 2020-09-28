import Icon from "../Icon/Icon.tsx";
import styled from "@emotion/styled";
import avatar from "./avatar.png";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0 15px;
`;

const IconContainer = styled.div`
  cursor: pointer;
`;

const UserName = styled.div`
  cursor: pointer;
  font-family: Jost;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  text-align: right;
  padding: 10px;
`;

const Img = styled.img`
  border-radius: 33px;
  width: 43px;
  height: 43px;
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <IconContainer>
        <Icon icon="newNotification" />
      </IconContainer>
      <Divider />
      <UserName>Alexander Gerasimuk</UserName>
      <Img src={avatar} />
    </ProfileContainer>
  );
};

export default Profile;
