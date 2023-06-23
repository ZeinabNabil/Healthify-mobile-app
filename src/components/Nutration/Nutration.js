import { ScrollView, Text, Pressable } from "react-native";
import { View } from "react-native";
import style from "./NutrationStyle";
import styles from "../../common/styles";
import { Dimensions } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import Slider from "@react-native-community/slider";

const Nutration = () => {
  const w = Dimensions.get("window").width;
  return (
    <ScrollView style={{ width: w - 40, marginHorizontal: 20 }}>
      <View style={style.Card}>
        <Text style={style.CardText}>BMI Calculator</Text>
        <View
          style={{ display: "flex", flexDirection: "row", marginBottom: 30 }}
        >
          <Pressable style={{ width: "50%" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                padding: 5,
                paddingVertical: 7,
                backgroundColor: styles.mainColor,
              }}
            >
              <IonIcon
                style={{ marginRight: 5, fontSize: 25, color: "white" }}
                name="male"
              ></IonIcon>
              <Text style={{ marginLeft: 5, fontSize: 20, color: "white" }}>
                Male
              </Text>
            </View>
          </Pressable>
          <Pressable style={{ width: "50%" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                padding: 5,
              }}
            >
              <IonIcon
                style={{
                  marginRight: 5,
                  fontSize: 25,
                  color: styles.paragraphColor,
                }}
                name="female"
              ></IonIcon>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 20,
                  color: styles.paragraphColor,
                }}
              >
                Female
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={{ marginBottom: 30 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                ...style.CardText,
                fontSize: 20,
                fontFamily: styles.fontFamilyReg,
              }}
            >
              Height
            </Text>
            <Text
              style={{
                ...style.CardText,
                fontSize: 16,
                fontFamily: styles.fontFamilyReg,
                color: "grey",
              }}
            >
              170 cm
            </Text>
          </View>
          <Slider
            style={{ width: "100%", height: 20 }}
            minimumValue={120}
            maximumValue={240}
            minimumTrackTintColor={styles.mainColor}
            maximumTrackTintColor="#000000"
            thumbTintColor={styles.mainColor}
          />
        </View>
        <View style={{ marginBottom: 40 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                ...style.CardText,
                fontSize: 20,
                fontFamily: styles.fontFamilyReg,
              }}
            >
              Weight
            </Text>
            <Text
              style={{
                ...style.CardText,
                fontSize: 16,
                fontFamily: styles.fontFamilyReg,
                color: "grey",
              }}
            >
              70 kg
            </Text>
          </View>
          <Slider
            style={{ width: "100%", height: 20 }}
            minimumValue={30}
            maximumValue={400}
            minimumTrackTintColor={styles.mainColor}
            maximumTrackTintColor="#000000"
            thumbTintColor={styles.mainColor}
          />
        </View>
        <Pressable
          style={{
            width: "100%",
            backgroundColor: styles.mainColor,
            padding: 5,
            paddingVertical: 7,
            marginBottom: 10,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 20,
              fontFamily: styles.fontFamilySemiBold,
            }}
          >
            Calculate BMI
          </Text>
        </Pressable>
      </View>
      <View style={{ ...style.Card, paddingVertical: 50 }}>
        <Text style={{ textAlign: "center", color: "grey" }}>
          Calculate BMI First
        </Text>
      </View>
    </ScrollView>
  );
};

export default Nutration;
