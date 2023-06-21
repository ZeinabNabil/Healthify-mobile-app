import { Text } from "react-native";
import { Dimensions } from "react-native";
import { Image } from "react-native";
import styles from "../../common/styles";
import { View } from "react-native";

const HomeCard = ({ img, title, slogan }) => {
  const w = Dimensions.get("window").width;
  return (
    <View style={{ marginHorizontal: 20, marginBottom: 50 }}>
      <Image
        style={{
          width: w - 40,
          height: 350,
        }}
        source={img}
      ></Image>
      <Text
        style={{
          color: styles.paragraphColor,
          marginTop: 10,
          fontSize: 25,
          textAlign: "center",
          fontFamily: styles.fontFamilySemiBold,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          width: w - 40,
          color: styles.backgroundPrimaryColor,
          marginTop: 6,
          fontSize: 15,
          textAlign: "center",
          fontFamily: styles.fontFamilyReg,
        }}
      >
        {slogan}
      </Text>
    </View>
  );
};

export default HomeCard;
