import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";

// Styles
import style from "./MedDetailsStyle";
import styles from "../../../common/styles";

// Icons
import IonIcon from "react-native-vector-icons/Ionicons";

// uuid
import uuid from "react-native-uuid";

// Components
import MeditationCard from "../MeditationCard";
import { useDispatch, useSelector } from "react-redux";
import { useRoute } from "@react-navigation/core";
import axios from "axios";
import { getTypes } from "../../../redux/meditationSlice";

const MeditationDetails = () => {
  const [artDetails, setArtDetails] = useState();
  const {params}=useRoute();
  const { types, isLoading, error } = useSelector((state) => state.meditation);
  let randomNum = Math.floor(Math.random());
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`http://192.168.56.1:3001/articles/${params.id}`)
        .then(function (response) {
          setArtDetails(response.data);
        });
    };
    fetchData();
  }, [params.id]);

  useEffect(() => {
    dispatch(getTypes());
  }, []);
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
    <>
    {isLoading?<View><Text>Loading...</Text></View>:error?<View><Text>{error}</Text></View>:types?<ScrollView style={style.viewStyle} showsVerticalScrollIndicator={false}>
      <Text style={style.headerStyle}>{artDetails?.title}</Text>
      <Image
        style={{ width: w - 30, ...style.imgStyle }}
        source={{uri: artDetails?.poster}}
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
      <Text style={{ fontSize: 15, marginTop: 15, fontFamily:styles.fontFamilyReg }}>
      {artDetails?.description}
      </Text>
      <Text style={{ fontSize: 15, marginTop: 15, fontFamily:styles.fontFamilySemiBold }}>
      Instructor: <Text style={{color:styles.mainColor}}>({artDetails?.author})</Text>
      </Text>
      <Text
        style={{ ...style.headerStyle, textAlign: "center", marginTop: 25 }}
      >
        Another Meditations
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom:15}}>
        {types?.length &&
              types.map((item) =>
                item.articles?.filter((i)=>i.id !== params.id).slice(0,5).map((i)=>(<MeditationCard key={i.id} imgWidth={200} imgHeight={150} id={i.id}
            title={i.title}
            description={i.description}
            poster={i.poster}
            author={i.author} />)))}
      </ScrollView>
      {/* <FlatList
        style={{ marginLeft: -8 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={types?.length &&
          types.map((item) =>
            item.articles)}
        renderItem={({ item }) => (
          item.filter((i)=>i.id !== params.id).slice(0,5).map((i)=>(<MeditationCard key={i.id} imgWidth={200} imgHeight={150} id={i.id}
            title={i.title}
            description={i.description}
            poster={i.poster}
            author={i.author} />))
        )}
        keyExtractor={(data) => uuid.v4()}
      ></FlatList> */}
    </ScrollView>:<View></View>}
    </>
  );
};

export default MeditationDetails;
