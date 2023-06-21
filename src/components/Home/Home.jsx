import {
  Image,
  Text,
  Dimensions,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import { View } from "react-native";
import uuid from "react-native-uuid";
import { ImageBackground } from "react-native";
import style from "./HomeScreenStyle";
import HomeCard from "./HomeCard";

const Home = () => {
  const features = [
    {
      img: require("../../../assets/Images/Master-Your-Nutrition.jpg"),
      title: "Master Your Nutrition",
      slogan: "Achieve Success with Meal Planning and Tracking",
      text: "Unlock the key to a healthier and more organized lifestyle through the power of meal planning and tracking. By taking control of your nutrition, you can fuel your body with balanced, nourishing meals that support your goals and optimize your well-being. ",
    },
    {
      img: require("../../../assets/Images/meditation.jpg"),
      title: "Discover Inner Peace",
      slogan: "Harness the Power of Meditation and Stress Management Tools",
      text: "In our fast-paced, chaotic world, finding moments of tranquility and managing stress is more important than ever. Meditation and stress management tools offer a path to inner peace and emotional well-being. Through the practice of meditation, you can quiet the mind, cultivate mindfulness, and tap into a deep sense of calm and clarity.",
    },
    {
      img: require("../../../assets/Images/Unleash-Your-Potential2.jpg"),
      title: "Unleash Your Potential",
      slogan: "Ignite Your Fitness Journey with Effective Workout Plans",
      text: " It's time to ignite your passion for exercise and achieve your goals with our powerful workout plans. Designed to unlock your hidden strengths and elevate your fitness level, our comprehensive programs offer a clear roadmap to success.",
    },
    {
      img: require("../../../assets/Images/stay_hydrated3.jpg"),
      title: "Stay Hydrated",
      slogan: "Embrace the Power of Minimalism",
      text: "Water is essential for numerous bodily functions, from regulating body temperature to supporting digestion and nutrient absorption. It helps flush out toxins, improves cognitive function, and boosts energy levels",
    },
  ];
  let ScreenHeight = Dimensions.get("window").height;
  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={style.container}>
          <Text style={style.text}>
            Unlock Your Potential. Empowering Health and Wellness for All!
          </Text>
          <Pressable style={style.btnStyle} onPress={() => {}}>
            <Text style={style.btnText}>Start your Journey</Text>
          </Pressable>
        </View>
        <ImageBackground
          style={{ ...style.HomeImage, height: 640 }}
          source={require("../../../assets/Images/HomePage.jpg")}
        >
          <View style={style.child} />
        </ImageBackground>
      </View>
      <Text style={style.SectionText}>What is Healthify ?</Text>
      <FlatList
        horizontal
        data={features}
        renderItem={({ item }) => (
          <HomeCard img={item.img} title={item.title} slogan={item.slogan} />
        )}
        keyExtractor={(data) => uuid.v4()}
      ></FlatList>
    </ScrollView>
  );
};

export default Home;
