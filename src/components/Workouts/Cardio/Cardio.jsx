import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getAllWorkouts } from "../../../redux/workoutsSlice";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { FlatList } from "react-native";
import { useEffect } from "react";
import { Dimensions } from "react-native";
import styles from "../../../common/styles"
import routes from "../../../common/routes";

const Cardio = () => {
    const { cardios, isLoading, error } = useSelector(
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
      {isLoading?<View><Text>Loading...</Text></View>:error?<View><Text>{error}</Text></View>:cardios?<><FlatList
        ListHeaderComponent={() => (
          <View>
            <ImageBackground
              style={{ height: h - parseInt("123px") }}
              source={require("../../../../assets/Images/fitnessGym1.webp")}
              resizeMode="cover"
            >
              <View
                style={{
                  backgroundColor: "#00000087",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 25,
                    fontFamily: styles.fontFamilyBold,
                  }}
                >
                  Cardio Workout
                </Text>
              </View>
            </ImageBackground>
            <Text
              style={{
                ...styles.viewStyle,
                textAlign: "center",
                fontFamily: styles.fontFamilyBold,
                fontSize: styles.header1Size,
              }}
            >
              Cardios of the day
            </Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        data={cardios}
        renderItem={({ item }) => (
          <View style={{ paddingHorizontal: 15 }}>
            <Pressable
              onPress={() => {
                navigate(routes.workoutsDetails,{id:item.id})
              }}
              style={{ marginBottom: 15, borderWidth: 1, borderRadius: 10, backgroundColor:"white" }}
            >
              <Image
                style={{
                  width: w - 32,
                  height: 320,
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
          </View>
        )}
        keyExtractor={(fitness)=>fitness.id}
      ></FlatList></>:<View></View>}
    </>
  );
}
 
export default Cardio;