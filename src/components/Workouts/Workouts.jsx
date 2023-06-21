import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";

// Styles
import styles from "../../common/styles";

// Components
import Fitness from "./Fitness";
import Cardio from "./Cardio";

const Workouts = () => {
  const h = Dimensions.get("window").height;
  const data = [1, 2, 3, 4];
  return (
    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
      <View>
        <ImageBackground
          style={{ height: h - parseInt("123px") }}
          source={require("../../../assets/Images/fitnessGym1.webp")}
          resizeMode="cover"
        >
          <View
            style={{
              backgroundColor: "#00000087",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 25,
                fontFamily: styles.fontFamilyBold,
              }}
            >
              Fitness & Cardio
            </Text>
          </View>
        </ImageBackground>
      </View>
      <Fitness data={data} />
      <Cardio data={data} />
    </ScrollView>
  );
};

export default Workouts;
