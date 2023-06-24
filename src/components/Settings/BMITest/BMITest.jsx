import { ScrollView } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import styles from "../../../common/styles"

const BMITest = () => {
    return ( 
        <ScrollView>
            <View style={styles.viewStyle}>
            <Text>BMI Test</Text>
        </View>
        </ScrollView>
     );
}
 
export default BMITest;