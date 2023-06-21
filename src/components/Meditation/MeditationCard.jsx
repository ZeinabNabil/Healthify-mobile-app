import { Text, Dimensions, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Style
import styles from "../../common/styles";

// Routes
import routes from "../../common/routes";

const MeditationCard = ({ imgWidth, imgHeight }) => {
  const { navigate } = useNavigation();
  const w = Dimensions.get("window").width;
  return (
    <Pressable
      onPress={() => {
        navigate(routes.meditationDetails);
      }}
      style={{
        paddingLeft: imgWidth ? 8 : 15,
        paddingRight: imgWidth ? 0 : 15,
        paddingVertical: 15,
        marginBottom: 15,
      }}
    >
      <Image
        style={{
          width: imgWidth ? imgWidth : w - 30,
          height: imgHeight ? imgHeight : 250,
        }}
        source={require("../../../assets/Images/meditaion2.webp")}
      ></Image>
      <Text
        style={{
          color: styles.mainColor,
          marginTop: 10,
          fontSize: imgWidth ? 13 : 18,
          fontFamily: styles.fontFamilySemiBold,
        }}
      >
        Yoga meditation for sleep
      </Text>
      <Text
        style={{
          color: styles.backgroundPrimaryColor,
          marginTop: 6,
          fontSize: imgWidth ? 11 : 13,
          fontFamily: styles.fontFamilyReg,
        }}
      >
        Devid Procyshyn
      </Text>
    </Pressable>
  );
};

export default MeditationCard;
