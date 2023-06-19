import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import routes from "../../common/routes";

const Meditation = () => {
  const { navigate } = useNavigation();
  return (
    <View>
      <Pressable
        onPress={() => {
          navigate(routes.meditationDetails);
        }}
      >
        <Text>Hello</Text>
      </Pressable>
    </View>
  );
};

export default Meditation;
