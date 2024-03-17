import { View, Text } from "react-native"
import { globalStyles } from "../../theme/theme"
import { HamburgerMenu } from "../../components/shared/HamburgerMenu"


export const Tab3Screen = () => {
  return (
    <View style={globalStyles.container}>
      <HamburgerMenu />
      <Text>
      Tab3Screen
      </Text>
    </View>
  )
}
