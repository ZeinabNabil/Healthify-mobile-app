import { StyleSheet } from "react-native";
import styles from "../../common/styles";

export default StyleSheet.create({
  CardText: {
    textAlign: "center",
    fontSize: 23,
    fontFamily: styles.fontFamilySemiBold,
    color: styles.paragraphColor,
    marginBottom: 30,
  },
  Card: {
    backgroundColor: "white",
    padding: 15,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  TrackText: {
    fontSize: 17,
    fontFamily: styles.fontFamilyReg,
    marginBottom: 5,
    color: "gray",
  },
});
