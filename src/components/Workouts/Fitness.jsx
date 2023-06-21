import {
  View,
  Text,
  Pressable,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Styles
import styles from "../../common/styles";

// Routes
import routes from "../../common/routes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllWorkouts } from "../../redux/workoutsSlice";

const Fitness = () => {
    const { fitnesses, isLoading, error } = useSelector(
        (state) => state.workouts
      );
      const dispatch = useDispatch();
    
      useEffect(() => {
        dispatch(getAllWorkouts());
      }, []);
  const { navigate } = useNavigation();
  const h = Dimensions.get("window").height;
  const w = Dimensions.get("window").width;
  return (
    <>
    {isLoading? <View><Text>Loading</Text></View> : error? <View><Text>{error}</Text></View>:fitnesses? <>
      <View style={styles.viewStyle}>
        <Text style={{ fontSize: 25, fontFamily: styles.fontFamilySemiBold }}>
          Fitness
        </Text>
      </View>
      <View style={{ backgroundColor: "white", padding: 35 }}>
        <Text style={{ fontSize: 25, fontFamily: styles.fontFamilySemiBold }}>
          Fitness Categories
        </Text>
        <Pressable
          onPress={() => navigate(routes.fitness)}
          style={{ alignSelf: "flex-start", marginTop: 10 }}
        >
          <Text
            style={{
              backgroundColor: styles.mainColor,
              paddingVertical: 8,
              paddingHorizontal: 12,
              color: "white",
              borderRadius: 10,
              fontFamily: styles.fontFamilySemiBold,
              fontSize: 18,
            }}
          >
            View all
          </Text>
        </Pressable>
        <FlatList
          nestedScrollEnabled={true}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={fitnesses.slice(0, 10)}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                navigate(routes.workoutsDetails,{id:item.id});
              }}
              style={{
                marginBottom: 15,
                marginTop: 15,
                marginRight: 10,
                borderWidth: 1,
                borderRadius: 10,
              }}
            >
              <Image
                style={{
                  width: w - 72,
                  height: 250,
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                }}
                source={{uri: item.gifUrl}}
              ></Image>
              <Text
                style={{
                  color: styles.mainColor,
                  fontSize: 18,
                  fontFamily: styles.fontFamilySemiBold,
                  borderTopWidth: 1,
                  padding: 10,
                }}
              >
                {item.name}
              </Text>
            </Pressable>
          )}
        ></FlatList>
      </View>
    </> : <View></View>}
    </>
  );
};

export default Fitness;
