import { ScrollView, Text, Pressable, Image } from "react-native";
import { View } from "react-native";
import style from "./NutrationStyle";
import styles from "../../common/styles";
import { Dimensions } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import Slider from "@react-native-community/slider";
import * as Progress from "react-native-progress";

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
      <View style={{ ...style.Card, paddingVertical: 60 }}>
        <Text style={{ textAlign: "center", color: "grey" }}>
          Calculate BMI First
        </Text>
      </View>
      <View style={style.Card}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 5,
          }}
        >
          <Text
            style={{
              ...style.CardText,
              fontSize: 16,
              fontFamily: styles.fontFamilySemiBold,
              marginBottom: 20,
              color: "grey",
            }}
          >
            Day 1
          </Text>
          <Text
            style={{
              ...style.CardText,
              fontSize: 16,
              fontFamily: styles.fontFamilySemiBold,
              color: "grey",
              marginBottom: 20,
            }}
          >
            24/10/2023
          </Text>
        </View>
        <View>
          <Text
            style={{
              ...style.CardText,
              fontSize: 20,
              fontFamily: styles.fontFamilySemiBold,
              marginBottom: 10,
            }}
          >
            Breakfast
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={style.TrackText}>Beans</Text>
            <Text style={style.TrackText}>100 g</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={style.TrackText}>Egg</Text>
            <Text style={style.TrackText}>2</Text>
          </View>
          <Text
            style={{
              backgroundColor: "#0066ff60",
              textAlign: "center",
              color: "white",
              fontWeight: styles.fontFamilyBold,
              fontSize: 18,
              borderRadius: 20,
              paddingVertical: 3,
              marginVertical: 15,
            }}
          >
            +
          </Text>
        </View>
        <View>
          <Text
            style={{
              ...style.CardText,
              fontSize: 20,
              fontFamily: styles.fontFamilySemiBold,
              marginBottom: 10,
            }}
          >
            Lunch
          </Text>
          <Text
            style={{
              backgroundColor: "#0066ff60",
              textAlign: "center",
              color: "white",
              fontWeight: styles.fontFamilyBold,
              fontSize: 18,
              borderRadius: 20,
              paddingVertical: 3,
              marginVertical: 15,
            }}
          >
            +
          </Text>
        </View>
        <View>
          <Text
            style={{
              ...style.CardText,
              fontSize: 20,
              fontFamily: styles.fontFamilySemiBold,
              marginBottom: 10,
            }}
          >
            Dinner
          </Text>
          <Text
            style={{
              backgroundColor: "#0066ff60",
              textAlign: "center",
              color: "white",
              fontWeight: styles.fontFamilyBold,
              fontSize: 18,
              borderRadius: 20,
              paddingVertical: 3,
              marginVertical: 15,
            }}
          >
            +
          </Text>
        </View>
        <View>
          <Text
            style={{
              ...style.CardText,
              fontSize: 20,
              fontFamily: styles.fontFamilySemiBold,
              marginBottom: 10,
            }}
          >
            Snacks
          </Text>
          <Text
            style={{
              backgroundColor: "#0066ff60",
              textAlign: "center",
              color: "white",
              fontWeight: styles.fontFamilyBold,
              fontSize: 18,
              borderRadius: 20,
              paddingVertical: 3,
              marginVertical: 15,
            }}
          >
            +
          </Text>
        </View>
      </View>
      <View
        style={{
          ...style.Card,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 30,
        }}
      >
        <Text style={style.CardText}>Water</Text>
        <Image source={require("../../../assets/Images/water.webp")}></Image>
        <Text
          style={{
            ...style.TrackText,
            marginBottom: 0,
            marginTop: 20,
            fontSize: 18,
            fontWeight: styles.fontFamilyBold,
          }}
        >
          0.4/4 L
        </Text>
        <Progress.Bar
          style={{ marginVertical: 30 }}
          progress={0.3}
          width={w - 100}
          borderWidth={0}
          color={styles.mainColor}
          height={10}
        />
        <Text
          style={{
            backgroundColor: "#0066ff60",
            textAlign: "center",
            color: "white",
            fontWeight: styles.fontFamilyBold,
            fontSize: 18,
            borderRadius: 20,
            paddingVertical: 3,
            marginTop: 15,
            width: w - 80,
          }}
        >
          +
        </Text>
      </View>
    </ScrollView>
  );
};

export default Nutration;
