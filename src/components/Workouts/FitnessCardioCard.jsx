import { Pressable } from "react-native";
import { View } from "react-native";
import routes from "../../common/routes";
import { Image } from "react-native";
import styles from "../../common/styles";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import style from "./WorkoutsStyle";

const FitnessCardioCard = ({
  width,
  id,
  img,
  name,
  equipment,
  bodyPart,
  target,
}) => {
  const { navigate } = useNavigation();
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <Pressable
        onPress={() => {
          navigate(routes.workoutsDetails, { id: id });
        }}
        style={style.workoutsItem}
      >
        <Image
          style={{ ...style.exerciseImg, width: width - 32 }}
          source={{ uri: img }}
        ></Image>
        <View style={{ borderTopWidth: 1, paddingHorizontal: 10 }}>
          <Text style={style.exerciseName}>{name}</Text>
          <Text style={style.exerciseEquipment}>{equipment}</Text>
          <View style={style.partTargetContainer}>
            <View
              style={{ backgroundColor: styles.mainColor, ...style.partTarget }}
            >
              <Text style={style.partTargetText}>{bodyPart}</Text>
            </View>
            <View
              style={{
                backgroundColor: styles.backgroundPrimaryColor,
                marginLeft: 8,
                ...style.partTarget,
              }}
            >
              <Text style={style.partTargetText}>{target}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default FitnessCardioCard;
