import { Text, View, Dimensions, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

// Styles
import styles from "../../common/styles";
import style from "./MeditationStyle";

// uuid
import uuid from 'react-native-uuid';

// Components
import Selection from "./Selection";
import MeditationCard from "./MeditationCard";
import { useDispatch, useSelector } from "react-redux";
import { getInstructors, getTypes } from "../../redux/meditationSlice";

const Meditation = () => {
  const [filterdInst, setFilterdInst] = useState([]);
  const { instructors, types, isLoading, error } = useSelector((state) => state.meditation);
  // let filterdInst;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInstructors());
    dispatch(getTypes());
    // setFilterdInst(instructors?.slice(1, instructors.length));
  }, []);

  useEffect(()=>{
    setFilterdInst(instructors?.slice(1, instructors.length));
  },[instructors])

  const onInstructorChanged = (itemValue) => {
    if (itemValue === "All") {
      setFilterdInst(instructors.slice(1, instructors.length));
    } else {
      setFilterdInst(
        instructors.filter((ins) => ins.name === itemValue)
      );
    }
  };

  const onTypeChanged = (itemValue) => {
    setFilterdInst(types.filter((ins) => ins.name === itemValue));
  };
  const { navigate } = useNavigation();
  const w = Dimensions.get("window").width;
  const data = [1, 2, 3, 4];
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <>
    {isLoading?<View><Text>Loading...</Text></View>:error?<View><Text>{error}</Text></View>:instructors&&types?<FlatList
    ListHeaderComponent={()=>(
      <>
      <View style={style.viewStyle}>
        <Text style={style.headerStyle}>Filter</Text>
        <Selection onChanged={onTypeChanged} options={types} title="Meditation Type" titleValue="meditation-type" />
        <Selection onChanged={onInstructorChanged} options={instructors} title="Instructor" titleValue="instructor"  />
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
          <Text style={{ color: styles.mainColor }}>{filterdInst?.length &&
                filterdInst.map((item) => item.articles?.length)}</Text> Result(s)
        </Text>
      </View>
      </>
    )}
      showsVerticalScrollIndicator={false}
        
        data={filterdInst?.length &&
          filterdInst.map((item) =>
            item.articles)}
        renderItem={({ item }) => (
          // console.warn(item)
          item.map((i)=>(<MeditationCard key={i.id} id={i.id}
            title={i.title}
            description={i.description}
            poster={i.poster}
            author={i.author} />))
        )}
        keyExtractor={(data)=>uuid.v4()}
      ></FlatList>:<View></View>}
      {/* <View style={style.viewStyle}>
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
      </View> */}
      
    </>
  );
};

export default Meditation;
