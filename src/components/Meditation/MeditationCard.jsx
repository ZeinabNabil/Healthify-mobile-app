import { Text } from "react-native";
import { Dimensions } from "react-native";
import { Image } from "react-native";
import { Pressable } from "react-native";
import styles from "../../common/styles";
import { useNavigation } from "@react-navigation/native";
import routes from "../../common/routes";

const MeditationCard = ({imgWidth, imgHeight}) => {
    const { navigate } = useNavigation();
    const w = Dimensions.get("window").width;
    return ( 
        <Pressable
            onPress={() => {
              navigate(routes.meditationDetails);
            }}
            style={{ paddingLeft: imgWidth? 8 : 15, paddingRight: imgWidth? 0 : 15, paddingVertical: 15 }}
          >
            <Image
              style={{ width: imgWidth? imgWidth : w - 30, height: imgHeight? imgHeight : 250 }}
              source={require("../../../assets/Images/meditaion2.jpg")}
            ></Image>
            <Text
              style={{ color: styles.mainColor, marginTop: 10, fontSize: imgWidth? 13 : 18, fontFamily: styles.fontFamilyReg }}
            >
              Yoga meditation for sleep
            </Text>
            <Text
              style={{
                color: styles.backgroundPrimaryColor,
                marginTop: 6,
                fontSize: imgWidth? 11 : 13,
                fontFamily: styles.fontFamilyReg
              }}
            >
              Devid Procyshyn
            </Text>
          </Pressable>
     );
}
 
export default MeditationCard;