import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Styled from "styled-components/native";

const Container = Styled.TouchableOpacity`
  padding: 8px;
`;
const Icon = Styled(MaterialCommunityIcons)`
`;

interface Props {
  iconName:
    | "camera"
    | "live"
    | "send"
    | "dotMenu"
    | "favorite"
    | "comment"
    | "bookmark"
    | "menu";
  style?: object;
  onPress?: () => void;
}

const IconButton = ({ iconName, style, onPress }: Props) => {
  const imageSource = {
    camera: "camera-outline",
    live: "television-play",
    send: "send",
    dotMenu: "dots-horizontal",
    favorite: "heart-outline",
    comment: "comment-outline",
    bookmark: "bookmark-outline",
    menu: "menu",
  };

  return (
    <Container
      style={style}
      onPress={() => {
        onPress?.();
      }}
    >
      <Icon name={imageSource[iconName]} size={26} />
    </Container>
  );
};

export default IconButton;
