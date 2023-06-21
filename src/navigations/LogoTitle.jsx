import { View } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import styles from "../common/styles"

const LogoTitle = () => {
    return ( <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 22,
            color: styles.mainColor,
            fontFamily: styles.fontFamilyBold,
          }}
        >
          Healthify
        </Text>
        <Image
          style={{ width: 23, height: 23, paddingTop: 5, marginLeft: 2 }}
          source={require("../../assets/Images/logo.png")}
        />
      </View> );
}
 
export default LogoTitle;