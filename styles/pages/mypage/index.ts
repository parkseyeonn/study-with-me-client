import styled from "styled-components";

const Profile = styled.div`
  display: flex;
  padding: 16px 10px;
  border-radius: 10px;
  background-color: white;
  box-shadow: ${props => props.theme.boxShadow};
`;

const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 25px;
  background-color: ${props => props.theme.themeColor3};
`;

const ProfileRow = styled.div`
  margin-bottom: 5px;
`;

const Name = styled.span`
  margin-right: 5px;
`;

const Nickname = styled.span`
  padding: 5px;
  border-radius: 5px;
  background-color: ${props => props.theme.themeColor1};
  color: white;
`;

const LinkList = styled.ul`
  display: flex;
  gap: 10px;
  margin-top: 30px;
`;

const LinkWrap = styled.li`
  border-radius: 10px;
  box-shadow: ${props => props.theme.boxShadow};
  transition: .2s;
  cursor: pointer;
  &:hover {
     box-shadow: ${props => props.theme.hoverBoxShadow};
  }
`;

const LinkItem = styled.a`
  display: block;
  width: 100%;
  padding: 20px;
`;

export {
  Profile,
  ProfileImage,
  ProfileRow,
  Name,
  Nickname,
  LinkList,
  LinkWrap,
  LinkItem,
}
