import { View, Text } from "react-native"
import { globalStyles } from "../../theme/theme"
import { HamburgerMenu } from "../../components/shared/HamburgerMenu"
import { Ionicon } from "../../components/shared/IonIcon";

export const Tab1Screen = () => {
  return (
    <View style={globalStyles.container}>
      <HamburgerMenu />
      <Text>
      Tab1Screen aqui
      </Text>

      <Ionicon name="airplane-sharp"  />
      <Ionicon name="accessibility-outline" />
      
 
    </View>
  )
}
