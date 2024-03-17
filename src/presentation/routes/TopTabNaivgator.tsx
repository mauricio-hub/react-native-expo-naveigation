import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ProfileScreen } from "../screen/profile/ProfileScreen";
import { AboutScreen } from "../screen/about/AboutScreen";
import { HamburgerMenu } from "../components/shared/HamburgerMenu";

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <>
      <HamburgerMenu />
      <Tab.Navigator>
        <Tab.Screen name="Perfil" component={ProfileScreen} />
        <Tab.Screen name="Abaut" component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
};
