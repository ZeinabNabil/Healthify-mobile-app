import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import routes from "../../common/routes";
import styles from "../../common/styles";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import style from "./MeditationStyle";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import { FlatList } from "react-native";
import Selection from "./Selection";
import uuid from 'react-native-uuid';
import MeditationCard from "./MeditationCard";

const Meditation = () => {
  const { navigate } = useNavigation();
  const w = Dimensions.get("window").width;
  const data = [1, 2, 3, 4];
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <>
      <View style={style.viewStyle}>
        <Text style={style.headerStyle}>Filter</Text>
        <Selection title="Meditation Type" titleValue="meditation-type" options={[{value: "1", label:"1"}, {value: "2", label:"2"}, {value: "3", label:"3"}]} />
        <Selection title="Instructor" titleValue="instructor" options={[{value: "1", label:"1"}, {value: "2", label:"2"}, {value: "3", label:"3"}]} />
        <Pressable
          style={style.btnStyle}
          onPress={() => {
            navigate(routes.meditationDetails);
          }}
        >
          <Text style={style.btnText}>Apply</Text>
        </Pressable>
      </View>
      <View style={style.resultsTextView}>
        <Text style={{ fontSize: 18, color: styles.backgroundPrimaryColor }}>
          <Text style={{ color: styles.mainColor }}>5</Text> Result(s)
        </Text>
      </View>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <MeditationCard />
        )}
        keyExtractor={(data)=>uuid.v4()}
      ></FlatList>
    </>
  );
};

export default Meditation;
