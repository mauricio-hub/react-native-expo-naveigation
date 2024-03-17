import { View, Text, Pressable } from "react-native"
import { globalStyles } from "../../theme/theme"
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { type NavigationProp, useNavigation, DrawerActions } from '@react-navigation/native';
import { useEffect } from "react";
import { HamburgerMenu } from "../../components/shared/HamburgerMenu";

export const HomeScreen = () => {
  const navigation = useNavigation();




  return (
    <View >
      <HamburgerMenu />
       <PrimaryButton 
        onPress={ () => console.log('products')  }
        label="Productos"
      />

      <PrimaryButton 
        onPress={ () => console.log('settings')  }
        label="Settings"
      />
    </View>
  )
}
