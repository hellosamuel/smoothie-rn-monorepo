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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = (email: string, password: string): void => {
    setIsLoading(true);
    AsyncStorage.setItem("token", "your token").then(() => {
      setUserInfo({
        name: "username",
        email: "username@email.com",
      });
      setIsLoading(false);
    });
  };

  const getUserInfo = (): void => {
    setIsLoading(true);
    AsyncStorage.getItem("token")
      .then((value) => {
        if (value) {
          setUserInfo({
            name: "username",
            email: "username@email.com",
          });
        }
      })
      .catch(() => {
        setUserInfo(undefined);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logout = (): void => {
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
