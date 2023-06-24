import { ScrollView } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import styles from "../../../common/styles";
import { useState } from "react";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Switch } from "react-native";
import { Pressable } from "react-native";
import uuid from "react-native-uuid";

const Notifications = () => {
  const [switches, setSwitches] = useState({
    remindersToExercise: false,
    dailyMeditation: false,
    updatesOnFitnessGoals: false,
    personalizedRecommendations: false,
    bmiWeeklyTestNotifications: false,
  });

  const notifications = [
    {
      name: "Reminders to exercise",
      switchName: "RemindersToExercise",
    },
    {
      name: "Daily meditation",
      switchName: "dailyMeditation",
    },
    {
      name: "Personalized recommendations",
      switchName: "personalizedRecommendations",
    },
    {
      name: "BMI weekly test notifications",
      switchName: "bmiWeeklyTestNotifications",
    },
  ];

  const toggleSwitch = (name) => {
    setSwitches({ ...switches, [name]: !switches[name] });
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.viewStyle}>
        <View>
          {notifications.map((notification) => (
            <View
            key={uuid.v4()}
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <IonIcon
                name="alert-circle"
                size={30}
                color="rgb(33, 150, 243)"
              />
              <Text
                style={{
                  marginLeft: 8,
                  fontFamily: styles.fontFamilySemiBold,
                  fontSize: 18,
                }}
              >
                {notification.name}
              </Text>
              <Switch
                style={{ marginLeft: "auto" }}
                trackColor={{ false: "#767577", true: styles.mainColor }}
                thumbColor={"#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch(notification.switchName)}
                value={switches[notification.switchName]}
              />
            </View>
          ))}
        </View>
        <Pressable
          //   onPress={handleSubmit(onSubmit)}
          style={{
            marginTop: 15,
            backgroundColor: styles.mainColor,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontFamily: styles.fontFamilySemiBold,
              color: "white",
              textAlign: "center",
            }}
          >
            Save
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Notifications;
