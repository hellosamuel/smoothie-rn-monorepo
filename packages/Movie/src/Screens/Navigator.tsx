import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { UserContext } from "~/Context/User";

import Loading from "~/Screens/Loading";

import Login from "~/Screens/Login";
import MovieHome from "~/Screens/MovieHome";
import MovieDetail from "~/Screens/MovieDetail";

const Stack = createStackNavigator();

function LoginNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Movie App",
          headerTransparent: true,
          headerTintColor: "#E70915",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}

function MovieNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MovieHome"
        component={MovieHome}
        options={{
          title: "Movie App",
          headerTintColor: "#E70915",
          headerStyle: {
            backgroundColor: "#141414",
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{
          title: "Movie App",
          headerTintColor: "#E70915",
          headerStyle: {
            backgroundColor: "#141414",
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default () => {
  const { isLoading, userInfo } = useContext<IUserContext>(UserContext);

  console.log("isLoading=> ", isLoading);
  console.log("userInfo=> ", userInfo);

  if (isLoading) return <Loading />;

  return (
    <NavigationContainer>
      {userInfo ? <MovieNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
};
