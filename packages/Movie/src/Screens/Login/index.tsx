import React, { useContext } from "react";
import Styled from "styled-components/native";
import { Linking } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { UserContext } from "~/Context/User";

import Input from "~/Components/Input";
import Button from "~/Components/Button";

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #141414;
  align-items: center;
  justify-content: center;
`;
const FormContainer = Styled.View`
  width: 100%;
  padding: 40px;
`;

const PasswordReset = Styled.Text`
  width: 100%;
  font-size: 12px;
  color: #FFFFFF;
  text-align: center;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList, "Login">;
interface Props {
  navigation: NavigationProp;
}

function Login({ navigation }: Props) {
  const { login } = useContext<IUserContext>(UserContext);

  return (
    <Container>
      <FormContainer>
        <Input style={{ marginBottom: 16 }} placeholder="이메일" />
        <Input
          style={{ marginBottom: 16 }}
          placeholder="비밀번호"
          secureTextEntry={true}
        />
        <Button
          style={{ marginBottom: 24 }}
          label="로그인"
          onPress={() => {
            login("my_first_user@email.com", "SuperSecuredPasswordIs1234");
          }}
        />
        <PasswordReset
          onPress={() => {
            Linking.openURL(
              "https://github.com/hellosamuel/smoothie-rn-practices"
            );
          }}
        >
          비밀번호 재설정
        </PasswordReset>
      </FormContainer>
    </Container>
  );
}

export default Login;
