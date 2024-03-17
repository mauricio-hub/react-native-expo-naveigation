import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import { globalStyles } from "./src/presentation/theme/theme";
import { SideNavigation } from "./src/presentation/routes/SideNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <SideNavigation />
    
    </NavigationContainer>
  );
}



