import React, { useContext } from "react";
import Styled from "styled-components/native";
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { UserContext } from "~/Context/User";

const Header = Styled.View`
  border-bottom-width: 1px;
  border-color: #D3D3D3;
  padding: 8px 16px;
`;
const Title = Styled.Text``;
const Button = Styled.TouchableHighlight`
  padding: 8px 16px;
`;
const ButtonContainer = Styled.View`
  flex-direction: row;
  align-items: center;
`;
const Icon = Styled(MaterialCommunityIcons)`
  margin-right: 8px;
`;
const Label = Styled.Text`
  font-size: 16px;
`;
const Footer = Styled.View`
  width: 100%;
  border-top-width: 1px;
  border-color: #D3D3D3;
`;

interface Props {
  props: DrawerContentComponentProps<DrawerContentOptions>;
}

const Drawer = ({ props }: Props) => {
  const { logout } = useContext<IUserContext>(UserContext);

  return (
    <DrawerContentScrollView {...props}>
      <Header>
        <Title>Sara Lambert</Title>
      </Header>
      <Button>
        <ButtonContainer>
          <Icon name="camera-outline" size={28} />
          <Label>사진</Label>
        </ButtonContainer>
      </Button>
      <Button>
        <ButtonContainer>
          <Icon name="television-play" size={28} />
          <Label>라이브</Label>
        </ButtonContainer>
      </Button>
      <Button>
        <ButtonContainer>
          <Icon name="heart-outline" size={28} />
          <Label>팔로워</Label>
        </ButtonContainer>
      </Button>
      <Footer>
        <Button
          onPress={() => {
            logout();
          }}
        >
          <ButtonContainer>
            <Icon name="account-outline" size={28} />
            <Title>로그아웃</Title>
          </ButtonContainer>
        </Button>
      </Footer>
    </DrawerContentScrollView>
  );
};

export default Drawer;
