import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const defaultContext: IUserContext = {
  isLoading: false,
  userInfo: undefined,
  login: (email: string, password: string) => {},
  getUserInfo: () => {},
  logout: () => {},
};

const UserContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | JSX.Element[];
}

const UserContextProvider = ({ children }: Props) => {
  const [userInfo, setUserInfo] = useState<IUserInfo | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string): Promise<void> => {
    // 원래라면 BE에서 Login처리 후 성공시에 아래의 코드가 실행되어야 한다
    setIsLoading(true);
    await AsyncStorage.setItem("token", "user token");
    setUserInfo({
      name: "MyFirstUser",
      email: "my-first-user@email.com",
    });
    setIsLoading(false);
  };

  const getUserInfo = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const value = await AsyncStorage.getItem("token");
      if (value) {
        // 원래라면 BE에서 유저정보를 취득 해온뒤에 아래의 코드가 실행되어야 한다
        setUserInfo({
          name: "MyFirstUser",
          email: "my-first-user@email.com",
        });
      }
    } catch (error) {
      setUserInfo(undefined);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    AsyncStorage.removeItem("token");
    setUserInfo(undefined);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <UserContext.Provider
      value={{
        isLoading,
        userInfo,
        login,
        getUserInfo,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContextProvider, UserContext };
