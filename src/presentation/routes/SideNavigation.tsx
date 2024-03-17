import { HomeScreen } from "../screen/home/HomeScreen";
import { ProfileScreen } from "../screen/profile/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { globalColors, globalStyles } from "../theme/theme";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, useWindowDimensions } from "react-native";
import { StackNavigator } from "./StackNavigator";
import { BottomTabNavigator } from "./BottonTabNavigator";
import { Ionicon } from "../components/shared/IonIcon";

const Drawer = createDrawerNavigator();

export const SideNavigation = () => {
  const dimensions = useWindowDimensions();

  return (
   
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerType: dimensions.width >= 758 ? "permanent" : "slide",

          headerShown: false,
          drawerActiveBackgroundColor: globalColors.primary,
          drawerActiveTintColor: "white",
          drawerInactiveTintColor: globalColors.primary,
          drawerItemStyle: {
            borderRadius: 100,
            paddingHorizontal: 10,
          },
        }}
      >
        <Drawer.Screen  options={{drawerIcon: ({color})=><Ionicon name="bed-outline" color={color} />}}  name="Tabs" component={BottomTabNavigator} />
        <Drawer.Screen options={{drawerIcon: ({color})=><Ionicon name="bag-add-outline" color={color} />}} name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50,
        }}
      />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
