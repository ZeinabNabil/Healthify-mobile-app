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
import styles from "../../common/styles";
import HomeCard from "./HomeCard";
import { TextInput } from "react-native";

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
  const w = Dimensions.get("window").width;
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
      <Text style={style.SectionText}>Nutration</Text>
      <View
        style={{
          width: w - 40,
          marginHorizontal: 20,
          marginBottom: 40,
        }}
      >
        <View style={style.Card}>
          <Image
            style={{
              width: w - 60,
              height: 350,
            }}
            source={require("../../../assets/Images/flat-lay-salad-with-chicken-sesame-seeds.webp")}
          />
          <Text style={style.NutrationText}>
            Power of meal planning and tracking. By taking control of your
            nutrition, you can fuel your body with balanced, nourishing meals
            that support your goals and optimize your well-being.
          </Text>
        </View>
        <View style={style.Card}>
          <Image
            style={{
              width: w - 60,
              height: 350,
            }}
            source={require("../../../assets/Images/plate-with-paleo-diet-food-boiled-eggs-avocado-cucumber-nuts-cherry-strawberries-paleo-breakfast-top-view.webp")}
          />
          <Text style={style.NutrationText}>
            Track your activities and what you eat with the help of our food,
            exercise and water trackers to maintain a balanced everyday life.
          </Text>
        </View>
      </View>
      <View
        style={{ backgroundColor: "white", paddingTop: 30, marginBottom: 30 }}
      >
        <Text style={style.SectionText}>Meditation</Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontFamily: styles.fontFamilySemiBold,
            marginBottom: 10,
            color: styles.paragraphColor,
          }}
        >
          Find Inner Peace and Harmony Meditate with Serenity
        </Text>
        <Image
          style={{ width: w, height: 500 }}
          source={require("../../../assets/Images/yoga.webp")}
        ></Image>
      </View>
      <Text style={style.SectionText}>Workout</Text>
      <View style={{ marginVertical: 20 }}>
        <ImageBackground
          style={{
            width: w,
            height: 300,
          }}
          source={require("../../../assets/Images/fitness.webp")}
        >
          <View style={style.child2} />
        </ImageBackground>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            justifyContent: "space-around",
            width: w,
            top: "12%",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontFamily: styles.fontFamilySemiBold,
            }}
          >
            Train
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontFamily: styles.fontFamilySemiBold,
            }}
          >
            Transform
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontFamily: styles.fontFamilySemiBold,
            }}
          >
            Triumph
          </Text>
        </View>
      </View>
      <Text style={style.SectionText}>Contact Us</Text>
      <View style={{ width: w - 80, marginHorizontal: 40 }}>
        <Text
          style={{
            fontSize: 18,
            color: styles.paragraphColor,
            fontFamily: styles.fontFamilySemiBold,
          }}
        >
          Name
        </Text>
        <TextInput
          style={style.input}
          // onChangeText={onChangeText}
          // value={}
        />
        <Text
          style={{
            fontSize: 18,
            color: styles.paragraphColor,
            fontFamily: styles.fontFamilySemiBold,
          }}
        >
          Email
        </Text>
        <TextInput
          style={style.input}
          // onChangeText={onChangeNumber}
          // value={number}
        />
        <Text
          style={{
            fontSize: 18,
            color: styles.paragraphColor,
            fontFamily: styles.fontFamilySemiBold,
          }}
        >
          Mobile
        </Text>
        <TextInput
          style={style.input}
          // onChangeText={onChangeNumber}
          // value={number}
        />
        <Text
          style={{
            fontSize: 18,
            color: styles.paragraphColor,
            fontFamily: styles.fontFamilySemiBold,
          }}
        >
          Message
        </Text>
        <TextInput
          style={{ ...style.input, height: 100 }}
          // onChangeText={onChangeNumber}
          // value={number}
        />
        <Pressable
          style={{ ...style.btnStyle, width: "100%" }}
          onPress={() => {}}
        >
          <Text style={style.btnText}>Send</Text>
        </Pressable>
      </View>
      <View
        style={{
          backgroundColor: styles.paragraphColor,
          marginTop: 40,
          padding: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontFamily: styles.fontFamilyBold,
            fontSize: 20,
          }}
        >
          About Healthify
        </Text>
      </View>
    </ScrollView>
  );
};

export default Home;
