import { Text, View, Dimensions } from "react-native";
import { ScrollView } from "react-native";
import style from "./ProfileStyle.js";
import styles from "../../common/styles";
import IonIcon from "react-native-vector-icons/Ionicons";

const Profile = () => {
  const w = Dimensions.get("window").width;
  return (
    <ScrollView style={{ width: w - 40, marginHorizontal: 20 }}>
      <Text style={{ ...style.CardText, marginTop: 20 }}>
        Welcome,
        <Text style={{ color: styles.mainColor }}> Ahmed</Text>
      </Text>
      <View style={style.Card}>
        <Text style={style.CardText}>Tip of Today</Text>
        <Text style={style.TrackText}>
          “It’s not until you get tired that you see how strong you really are.”
        </Text>
      </View>
      <View style={style.Card}>
        <Text style={style.CardText}>June 2023</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              // backgroundColor: styles.mainColor,
              borderRadius: 20,
              padding: 5,
            }}
          >
            <Text style={{ ...style.CardText, fontSize: 16, marginBottom: 5 }}>
              SAT
            </Text>
            <Text style={{ ...style.CardText, fontSize: 16, marginBottom: 5 }}>
              24
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              // backgroundColor: styles.mainColor,
              borderRadius: 20,
              padding: 5,
            }}
          >
            <Text style={{ ...style.CardText, fontSize: 16, marginBottom: 5 }}>
              SUN
            </Text>
            <Text style={{ ...style.CardText, fontSize: 16, marginBottom: 5 }}>
              25
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: styles.mainColor,
              borderRadius: 20,
              padding: 5,
            }}
          >
            <Text
              style={{
                ...style.CardText,
                color: "white",
                fontSize: 16,
                marginBottom: 5,
              }}
            >
              MON
            </Text>
            <Text
              style={{
                ...style.CardText,
                color: "white",
                fontSize: 16,
                marginBottom: 5,
              }}
            >
              26
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              // backgroundColor: styles.mainColor,
              borderRadius: 20,
              padding: 5,
            }}
          >
            <Text style={{ ...style.CardText, fontSize: 16, marginBottom: 5 }}>
              TUE
            </Text>
            <Text style={{ ...style.CardText, fontSize: 16, marginBottom: 5 }}>
              27
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              // backgroundColor: styles.mainColor,
              borderRadius: 20,
              padding: 5,
            }}
          >
            <Text style={{ ...style.CardText, fontSize: 16, marginBottom: 5 }}>
              WEN
            </Text>
            <Text style={{ ...style.CardText, fontSize: 16, marginBottom: 5 }}>
              24
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              // backgroundColor: styles.mainColor,
              borderRadius: 20,
              padding: 5,
            }}
          >
            <Text style={{ ...style.CardText, fontSize: 16, marginBottom: 5 }}>
              THU
            </Text>
            <Text style={{ ...style.CardText, fontSize: 16, marginBottom: 5 }}>
              28
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              // backgroundColor: styles.mainColor,
              borderRadius: 20,
              padding: 5,
            }}
          >
            <Text style={{ ...style.CardText, fontSize: 16, marginBottom: 5 }}>
              FRI
            </Text>
            <Text style={{ ...style.CardText, fontSize: 16, marginBottom: 5 }}>
              29
            </Text>
          </View>
        </View>
        <Text style={{ ...style.CardText, marginTop: 20 }}>Today Report</Text>
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "orange",
                borderRadius: 50,
                padding: 10,
              }}
            >
              <IonIcon name="sunny-outline" color={"white"} size={25}></IonIcon>
            </View>
            <View
              style={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Text
                style={{ ...style.CardText, fontSize: 18, marginBottom: 2 }}
              >
                Breakfast
              </Text>
              <Text
                style={{ ...style.TrackText, fontSize: 14, marginBottom: 0 }}
              >
                08:00 AM
              </Text>
            </View>
            <Text style={{ ...style.CardText, fontSize: 15, marginBottom: 0 }}>
              100 kcl
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <View
              style={{
                backgroundColor: styles.mainColor,
                borderRadius: 50,
                padding: 10,
              }}
            >
              <IonIcon
                name="partly-sunny-outline"
                color={"white"}
                size={25}
              ></IonIcon>
            </View>
            <View
              style={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Text
                style={{ ...style.CardText, fontSize: 18, marginBottom: 2 }}
              >
                Lunch
              </Text>
              <Text
                style={{ ...style.TrackText, fontSize: 14, marginBottom: 0 }}
              >
                01:00 PM
              </Text>
            </View>
            <Text style={{ ...style.CardText, fontSize: 15, marginBottom: 0 }}>
              300 kcl
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <View
              style={{
                backgroundColor: styles.paragraphColor,
                borderRadius: 50,
                padding: 10,
              }}
            >
              <IonIcon name="moon-outline" color={"white"} size={25}></IonIcon>
            </View>
            <View
              style={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Text
                style={{ ...style.CardText, fontSize: 18, marginBottom: 2 }}
              >
                Dinner
              </Text>
              <Text
                style={{ ...style.TrackText, fontSize: 14, marginBottom: 0 }}
              >
                07:00 PM
              </Text>
            </View>
            <Text style={{ ...style.CardText, fontSize: 15, marginBottom: 0 }}>
              250 kcl
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
