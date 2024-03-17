import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tab1Screen } from "../screen/tabs/Tab1Screen";
import { globalColors } from "../theme/theme";
import { Text } from "react-native";
import { TopTabNavigator } from "./TopTabNaivgator";
import { StackNavigator } from "./StackNavigator";
import { Ionicon } from "../components/shared/IonIcon";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: "transparent",
          shadowColor: "transparent",
        },
        tabBarBadgeStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Tab1"
        options={{
          title: "Tab1",
          tabBarIcon: ({ color }) => (
            <Ionicon name="menu-outline" color={color} />
          ),
        }}
        component={Tab1Screen}
      />

      <Tab.Screen
        name="Tab2"
        options={{
          title: "Tab2",
          tabBarIcon: ({ color }) => (
            <Ionicon name="accessibility-outline" color={color} />
          ),
        }}
        component={TopTabNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: "Tab3",
          tabBarIcon: ({ color }) => (
            <Ionicon name="bar-chart-outline" color={color} />
          ),
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
