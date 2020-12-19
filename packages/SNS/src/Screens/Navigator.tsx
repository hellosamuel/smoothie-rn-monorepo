import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { UserContext } from "~/Context/User";
import SearchBar from "~/Components/SearchBar";
import Loading from "~/Components/Loading";

import Login from "~/Screens/Login";
import PasswordReset from "~/Screens/PasswordReset";
import Signup from "~/Screens/Signup";

import MyFeed from "~/Screens/MyFeed";
import Feeds from "~/Screens/Feeds";
import FeedListOnly from "~/Screens/FeedListOnly";
import Upload from "~/Screens/Upload";
import Notification from "~/Screens/Notification";
import Profile from "~/Screens/Profile";
import CustomDrawer from "~/Screens/Drawer";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
    </Stack.Navigator>
  );
};

const MyFeedTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyFeed"
        component={MyFeed}
        options={{ title: "SNS App" }}
      />
    </Stack.Navigator>
  );
};

const FeedsTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feeds"
        component={Feeds}
        options={{
          header: () => <SearchBar />,
        }}
      />
      <Stack.Screen
        name="FeedListOnly"
        component={FeedListOnly}
        options={{
          headerBackTitleVisible: false,
          title: "둘러보기",
          headerTintColor: "#292929",
        }}
      />
    </Stack.Navigator>
  );
};

const UploadTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Upload"
        component={Upload}
        options={{ title: "사진 업로드" }}
      />
    </Stack.Navigator>
  );
};

const ProfileTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
    </Stack.Navigator>
  );
};

const MainTabs = () => {
  return (
    <BottomTab.Navigator tabBarOptions={{ showLabel: false }}>
      <BottomTab.Screen
        name="MyFeed"
        component={MyFeedTab}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              size={28}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Feeds"
        component={FeedsTab}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "feature-search" : "feature-search-outline"}
              size={28}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Upload"
        component={UploadTab}
        options={{
          tabBarLabel: "Third",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "plus-box" : "plus-box-outline"}
              size={28}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "heart" : "heart-outline"}
              size={28}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "account" : "account-outline"}
              size={28}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerType="slide"
      drawerContent={(props) => <CustomDrawer props={props} />}
    >
      <Drawer.Screen name="MainTabs" component={MainTabs} />
    </Drawer.Navigator>
  );
};

export default () => {
  const { isLoading, userInfo } = useContext<IUserContext>(UserContext);

  console.log("isLoading=> ", isLoading);
  console.log("userInfo=> ", userInfo);
  if (isLoading) return <Loading />;

  return (
    <NavigationContainer>
      {userInfo ? <MainNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
};
