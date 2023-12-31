import { Text, View } from "react-native";
import fitnessVid from "../../../../assets/videos/gym.mp4";
import { ImageBackground } from "react-native";
import { ScrollView } from "react-native";
import { Dimensions } from "react-native";
import styles from "../../../common/styles";
import { FlatList } from "react-native";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllWorkouts } from "../../../redux/workoutsSlice";
import routes from "../../../common/routes";
import { useNavigation } from "@react-navigation/native";
import { ResizeMode, Video } from "expo-av";
import FitnessCardioCard from "../FitnessCardioCard";

const Fitness = () => {
  const { fitnesses, isLoading, error } = useSelector(
    (state) => state.workouts
  );
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllWorkouts());
  // }, []);
  const { navigate } = useNavigation();
  const h = Dimensions.get("window").height;
  const w = Dimensions.get("window").width;
  return (
    <>
      {isLoading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : error ? (
        <View>
          <Text>{error}</Text>
        </View>
      ) : fitnesses ? (
        <>
          <FlatList
            ListHeaderComponent={() => (
              <View>
                <View
                  style={{
                    position: "relative",
                    zIndex: 1,
                    backgroundColor: "black",
                  }}
                >
                  <Video
                    source={require("../../../../assets/videos/gym.mp4")}
                    style={{ height: 300, zIndex: 5 }}
                    // useNativeControls
                    resizeMode={ResizeMode.COVER}
                    shouldPlay
                    isMuted
                    isLooping
                    // onPlaybackStatusUpdate={status => setStatus(() => status)}
                  />
                  <View
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      top: 0,
                      left: 0,
                      backgroundColor: "#00000087",
                      zIndex: 10,
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
                      Fitness Workouts
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        fontFamily: styles.fontFamilyReg,
                        marginTop:8
                      }}
                    >
                      Fall in love with fitness
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    ...styles.viewStyle,
                    textAlign: "center",
                    fontFamily: styles.fontFamilyBold,
                    fontSize: styles.header1Size,
                  }}
                >
                  Fitness of the day
                </Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
            data={fitnesses}
            renderItem={({ item }) => (
            <FitnessCardioCard width={w} id={item.id} img={item.gifUrl} name={item.name} equipment={item.equipment} bodyPart={item.bodyPart} target={item.target}/>
              
            )}
            keyExtractor={(fitness) => fitness.id}
          ></FlatList>
        </>
      ) : (
        <View></View>
      )}
    </>
  );
};

export default Fitness;
