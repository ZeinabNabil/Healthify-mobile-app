import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  FlatList,
} from "react-native";
import { useState } from "react";

// Styles
import style from "./MedDetailsStyle";
import styles from "../../../common/styles";

// Icons
import IonIcon from "react-native-vector-icons/Ionicons";

// uuid
import uuid from "react-native-uuid";

// Components
import MeditationCard from "../MeditationCard";

const MeditationDetails = () => {
  const w = Dimensions.get("window").width;
  const [btnsAction, setBtnsAction] = useState({
    save: false,
    rate: false,
    share: false,
    purches: false,
  });

  const handleBtnsAction = (name) => {
    setBtnsAction({ ...btnsAction, [name]: !btnsAction[name] });
  };
  const data = [1, 2, 3, 4];
  const btns = [
    {
      name: "Save",
      icon: "heart-outline",
      icon2: "heart",
      color: "red",
    },
    {
      name: "Rate",
      icon: "star-outline",
      icon2: "star",
      color: "orange",
    },
    {
      name: "Share",
      icon: "share-outline",
      icon2: "share-outline",
      color: "black",
    },
    {
      name: "Purches",
      icon: "card-outline",
      icon2: "card-outline",
      color: "white",
    },
  ];
  return (
    <ScrollView style={style.viewStyle} showsVerticalScrollIndicator={false}>
      <Text style={style.headerStyle}>Meditative Rest and Sleep Magic</Text>
      <Image
        style={{ width: w - 30, ...style.imgStyle }}
        source={require("../../../../assets/Images/meditaion2.webp")}
      ></Image>
      <View>
        {btns.map((btn) => (
          <Pressable
            key={uuid.v4()}
            onPress={() => handleBtnsAction(btn.name.toLowerCase())}
            style={{
              borderWidth: 1,
              borderRadius: 20,
              padding: 15,

              marginBottom: 8,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: btn.name === "Purches" && styles.mainColor,
            }}
          >
            <Text style={{ color: btn.name === "Purches" && "white" }}>
              {btn.name}
            </Text>
            <IonIcon
              name={!btnsAction[btn.name.toLowerCase()] ? btn.icon : btn.icon2}
              color={
                btnsAction[btn.name.toLowerCase()]
                  ? btn.color
                  : btn.name === "Purches"
                  ? "white"
                  : "black"
              }
            />
          </Pressable>
        ))}
      </View>
      <Text style={{ fontSize: 15, marginTop: 15 }}>
        Restful Intuition This practice is a form of intuitive strength training
        and supports clearing overwhelmed sensory pathways, while you rest. It
        can be used any time, day or night. It will invite you to explore your
        intuitive gut, heart and sense of taste, smell, vision, hearing,
        feeling, and inter-connectivity. *Please note the introduction ends at
        4:02, and there is a 45-second pause between each intuitive portal.*
      </Text>
      <Text
        style={{ ...style.headerStyle, textAlign: "center", marginTop: 25 }}
      >
        Another Meditations
      </Text>
      <FlatList
        style={{ marginLeft: -8 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({ item }) => (
          <MeditationCard imgWidth={200} imgHeight={150} />
        )}
        keyExtractor={(data) => uuid.v4()}
      ></FlatList>
    </ScrollView>
  );
};

export default MeditationDetails;
