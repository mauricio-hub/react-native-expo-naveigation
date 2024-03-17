import { DrawerActions, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Pressable, Text } from "react-native";
import { Ionicon } from "./IonIcon";

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{ marginLeft: 10 }}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
        >
                <Ionicon name="menu-outline" />

        </Pressable>
      ),
    });
  }, []);

  return <></>;
};
