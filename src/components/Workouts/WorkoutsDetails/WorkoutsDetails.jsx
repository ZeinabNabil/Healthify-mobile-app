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
  import style from "./WorkDetails";
  import styles from "../../../common/styles";
  
  // Icons
  import IonIcon from "react-native-vector-icons/Ionicons";
  
  // uuid
  import uuid from "react-native-uuid";
  
  // Components
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getAllWorkouts, getWorkoutByID } from "../../../redux/workoutsSlice";
import WorkDetailsCard from "./WorkDetailsCard";
  
  const WorkoutsDetails = () => {
    let randomFitness = Math.floor(Math.random() * 19);
  let randomCardio = Math.floor(Math.random() * 10);
    const {params}=useRoute();
    const { workout, cardios, fitnesses, isLoading, error } = useSelector(
        (state) => state.workouts
      );
    
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(getAllWorkouts());
      }, []);
    
      useEffect(() => {
        dispatch(getWorkoutByID(params.id));
      }, [params.id, dispatch]);
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
      {isLoading?<View><Text>Loading...</Text></View>:error?<View><Text>{error}</Text></View>:workout?<ScrollView style={style.viewStyle} showsVerticalScrollIndicator={false}>
        <Text style={style.headerStyle}>{workout.name}</Text>
        <Image
          style={{ width: w - 30, ...style.imgStyle }}
          source={{uri: workout.gifUrl}}
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
        <Text style={{color:styles.mainColor}}>{workout.name}</Text> is one of the best exercises to target your {workout.target}. It
            will help you improve your mood and gain energy.
        </Text>
        <Text
          style={{ ...style.headerStyle, textAlign: "center", marginTop: 25 }}
        >
          Another Workouts
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginVertical:15}}>
        {workout.bodyPart === "cardio" && cardios
                  ? cardios
                      .filter(
                        (cardio) =>
                          // cardio.equipment === "body weight" &&
                           cardio.id !== params.id
                      )
                      .slice(randomCardio, randomCardio+3)
                      .map((cardio) => (
                        <WorkDetailsCard key={cardio.id} imgWidth={200} imgHeight={200} id={cardio.id} name={cardio.name} img={cardio.gifUrl} another={cardio.equipment} />
                      ))
                  : fitnesses
                  ? fitnesses
                      .filter(
                        (fitness) =>
                          // fitness.bodyPart === workout.bodyPart &&
                          fitness.id !== params.id
                      )
                      .slice(randomFitness, randomFitness+5)
                      .map((fitness) => (
                        <WorkDetailsCard key={fitness.id} imgWidth={200} imgHeight={200} id={fitness.id} name={fitness.name} img={fitness.gifUrl} another={fitness.equipment} />
                      ))
                  : <View></View>}
      </ScrollView>
        {/* {workout.bodyPart ==="cardio" && cardios?<FlatList
          style={{ marginLeft: -8 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={cardios
            .filter(
              (cardio) =>
                cardio.equipment === "body weight" && cardio.id !== params.id
            )
            .slice(0, 5)}
          renderItem={({ item }) => (
            <WorkDetailsCard imgWidth={200} imgHeight={200} id={item.id} name={item.name} img={item.gifUrl} another={item.equipment} />
          )}
          keyExtractor={(key) => key.id}
        ></FlatList>:fitnesses?<FlatList
        style={{ marginLeft: -8 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={fitnesses
            .filter(
              (fitness) =>
                fitness.bodyPart === workout.bodyPart &&
                fitness.id !== params.id
            )
            .slice(0, 5)}
        renderItem={({ item }) => (
          <WorkDetailsCard imgWidth={200} imgHeight={200} id={item.id} name={item.name} img={item.gifUrl} another={item.equipment} />
        )}
        keyExtractor={(key) => key.id}
      ></FlatList>:<View></View>} */}
      </ScrollView>:<View></View>}
      </>
    );
  };
  
  export default WorkoutsDetails;
  