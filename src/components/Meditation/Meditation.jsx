import { Text, View, Dimensions, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

// Styles
import styles from "../../common/styles";
import style from "./MeditationStyle";

// uuid
import uuid from 'react-native-uuid';

// Components
import Selection from "./Selection";
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
        {/* <Pressable
          style={style.btnStyle}
          onPress={() => {
            navigate(routes.meditationDetails);
          }}
        >
          <Text style={style.btnText}>Apply</Text>
        </Pressable> */}
      </View>
      <View style={style.resultsTextView}>
        <Text style={{ fontSize: 18, color: styles.backgroundPrimaryColor }}>
          <Text style={{ color: styles.mainColor }}>5</Text> Result(s)
        </Text>
      </View>
      <FlatList
      showsHorizontalScrollIndicator={false}
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
