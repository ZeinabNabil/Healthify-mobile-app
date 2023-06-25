import { ScrollView } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import styles from "../../../common/styles";
import { useState } from "react";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Switch } from "react-native";
import { Pressable } from "react-native";
import uuid from "react-native-uuid";
// Context
import { useAuth } from "../../../Context/AuthContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase";

import ToastManager, { Toast } from "toastify-react-native";
import { Dimensions } from "react-native";

const Notifications = () => {
  const w = Dimensions.get("window").width;
  const { currentUserData } = useAuth();
  const [notification, setNotification] = useState({
    exercise: currentUserData?.notification?.exercise,
    dailyMeditation: currentUserData?.notification?.dailyMeditation,
    fitnessGoals: currentUserData?.notification?.fitnessGoals,
    personalizedRecomendations: currentUserData?.notification?.personalizedRecomendations,
    weeklyBMI: currentUserData?.notification?.weeklyBMI,
  });

  const handleSubmit = async () => {
    console.warn(currentUserData?.notification)
    const userDoc = doc(db, "users", currentUserData?.userId)
    await updateDoc(userDoc, {notification: {...notification}});
    Toast.success("Updateed successfully", "top");
  }

  const notifications = [
    {
      name: "Reminders to exercise",
      switchName: "exercise",
    },
    {
      name: "Daily meditation",
      switchName: "dailyMeditation",
    },
    {
      name: "Updates on fitness goals",
      switchName: "fitnessGoals",
    },
    {
      name: "Personalized recommendations",
      switchName: "personalizedRecomendations",
    },
    {
      name: "BMI weekly test notifications",
      switchName: "weeklyBMI",
    },
  ];

  const toggleSwitch = (name) => {
    setNotification({ ...notification, [name]: !notification[name] });
  };
  return (
    <>
    <ToastManager width={w - 10} />
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.viewStyle}>
        <View>
          {notifications.map((n) => (
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
                {n.name}
              </Text>
              <Switch
                style={{ marginLeft: "auto" }}
                trackColor={{ false: "#767577", true: styles.mainColor }}
                thumbColor={"#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch(n.switchName)}
                value={notification[n.switchName]}
              />
            </View>
          ))}
        </View>
        <Pressable
            onPress={handleSubmit}
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
    </>
  );
};

export default Notifications;
