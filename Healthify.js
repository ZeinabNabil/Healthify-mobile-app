import { Dimensions } from "react-native";
import { useAuth } from "./src/Context/AuthContext";
import DrawerNavigation from "./src/navigations/DrawerNavigation";
import { useEffect } from "react";
import ToastManager, { Toast } from "toastify-react-native";

export default function Healthify() {
  const { currentUserData } = useAuth();
  const w = Dimensions.get("window").width;

  const notificationsArr = {
    dailyMeditation: [
      "Meditation: Take 10 minutes to meditate",
      "Meditation: Practice deep breathing exercises",
      "Meditation: Listen to calming music",
    ],
    fitnessGoals: [
      "Go for a 30-minute jog",
      "Do 20 push-ups and 30 sit-ups",
      "Attend a yoga class",
    ],
    personalizedRecommendations: [
      "Try a new healthy recipe",
      "Explore a new workout routine",
      "Read a book on mindfulness",
    ],
    weeklyBMI: [
      "Calculate your BMI using a trusted online calculator",
      "Track your progress with a fitness app",
      "Consider consulting a nutritionist for personalized advice",
    ],
    exercise: [
      "Complete a full-body workout",
      "Try a HIIT (High-Intensity Interval Training) session",
      "Go for a hike in nature",
    ],
  };

  const notifyWith = (message) => {
    const notify = () => Toast.info(message, "top");
    notify();
  };
  useEffect(() => {
    if (currentUserData?.notification?.exercise) {
      var exerciseTimer = setInterval(() => {
        notifyWith(notificationsArr.exercise[Math.trunc(Math.random() * 3)]);
      }, 10000);
      // }, 3.6e+6);
    }
    if (currentUserData?.notification?.dailyMeditation) {
      var dailyMeditationTimer = setInterval(() => {
        notifyWith(
          notificationsArr.dailyMeditation[Math.trunc(Math.random() * 3)]
        );
      }, 8.64e7);
      // }, 8.64e+7);
    }
    if (currentUserData?.notification?.fitnessGoals) {
      var fitnessGoalsTimer = setInterval(() => {
        notifyWith(
          notificationsArr.fitnessGoals[Math.trunc(Math.random() * 3)]
        );
      }, 1.8e6);
      // }, 1.8e+6);
    }
    if (currentUserData?.notification?.personalizedRecommendations) {
      var personalizedRecommendationsTimer = setInterval(() => {
        notifyWith(
          notificationsArr.personalizedRecommendations[
            Math.trunc(Math.random() * 3)
          ]
        );
      }, 600000);
    }
    if (currentUserData?.notification?.weeklyBMI) {
      var weeklyBMITimer = setInterval(() => {
        notifyWith(notificationsArr.weeklyBMI[Math.trunc(Math.random() * 3)]);
      }, 6.048e8);
      // }, 6.048e+8);
    }
    return () => {
      clearInterval(exerciseTimer);
      clearInterval(dailyMeditationTimer);
      clearInterval(fitnessGoalsTimer);
      clearInterval(personalizedRecommendationsTimer);
      clearInterval(weeklyBMITimer);
    };
  }, [currentUserData?.notification]);

  return (
    // <Provider store={store}>
    <>
      <ToastManager width={w - 10} />
      <DrawerNavigation />
    </>
  );
}
