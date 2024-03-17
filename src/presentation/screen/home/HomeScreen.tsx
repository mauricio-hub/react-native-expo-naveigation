import { View, Text, Pressable } from "react-native"
import { globalStyles } from "../../theme/theme"
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { type NavigationProp, useNavigation, DrawerActions } from '@react-navigation/native';
import { useEffect } from "react";

export const HomeScreen = () => {
  const navigation = useNavigation();


  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer )  }>
          <Text>Menu</Text>
        </Pressable>
      )
    })
  }, [])

  return (
    <View >
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
