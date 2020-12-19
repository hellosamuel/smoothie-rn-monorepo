import React from "react";
import { StatusBar } from "expo-status-bar";

import Navigator from "~/Screens/Navigator";
import { UserContextProvider } from "~/Context/User";
import { RandomUserDataProvider } from "~/Context/RandomUserData";

interface Props {}

const App = ({}: Props) => {
  return (
    <RandomUserDataProvider cache={true}>
      <UserContextProvider>
        <StatusBar />
        <Navigator />
      </UserContextProvider>
    </RandomUserDataProvider>
  );
};
export default App;
