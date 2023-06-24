import { StyleSheet } from "react-native";
import styles from "../../common/styles";

export default StyleSheet.create({
  headerStyle: {
    backgroundImage: `url(${"../../../assets/Images/fitnessGym1.webp"})`,
    height: 100,
  },
  workoutsItem: {
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
  },
  exerciseImg: {
    height: 370,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  exerciseName: {
    color: styles.mainColor,
    fontSize: 18,
    fontFamily: styles.fontFamilySemiBold,
    marginTop: 10,
  },
  exerciseEquipment: {
    fontSize: 18,
    fontFamily: styles.fontFamilyReg,
  },
  partTargetContainer: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
  },
  partTarget: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
  },
  partTargetText: {
    fontSize: 18,
    fontFamily: styles.fontFamilyReg,
    color: "white",
  },
});
