import { View, Text } from "react-native"
import { globalStyles } from "../../theme/theme"
import { HamburgerMenu } from "../../components/shared/HamburgerMenu"


export const Tab1Screen = () => {
  return (
    <View style={globalStyles.container}>
      <HamburgerMenu />
      <Text>
      Tab1Screen
      </Text>
    </View>
  )
}
