import { FlatList } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import styles from "../../../common/styles";
import uuid from "react-native-uuid";
import { Pressable } from "react-native";
import routes from "../../../common/routes";

const Help = ({navigation}) => {
  const questions = [
    "How do I get started with a fitness routine?",
    "What are some effective meditation techniques for beginners?",
    "How can I set realistic fitness goals for myself?",
    "What are some healthy and balanced meal plans for weight loss?",
    "How do I stay motivated to exercise regularly?",
    "What are the benefits of incorporating mindfulness into my daily routine?",
    "How can I prevent injuries during workouts?",
    "What are some recommended meditation apps or resources?",
    "How can I improve my flexibility and mobility?",
    "What are some nutritious and convenient snack options for pre and post-workout?",
  ];
  return (
    <FlatList showsVerticalScrollIndicator={false} data={questions} renderItem={({item, index})=>(<View
       key={uuid.v4()}
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",...styles.viewStyle, marginRight:20
        }}
      >
        <IonIcon
          name="alert-circle"
          size={30}
          color={styles.mainColor}
        />
        <Pressable onPress={()=>{navigation.navigate(routes.helpContent, {id:index+1})}}>
        <Text
          style={{
            marginLeft: 8,
            marginRight:10,
            fontFamily: styles.fontFamilySemiBold,
            fontSize: 18,
          }}
        >
          {item}
        </Text>
        </Pressable>
        {/* <IonIcon name="open-outline" size={25}/> */}
      </View>)}></FlatList>
    // <View>
    //   <Text>Help</Text>
    // </View>
  );
};

export default Help;
