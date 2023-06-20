import { StyleSheet } from "react-native";
import styles from "../../common/styles";

export default StyleSheet.create({
  viewStyle: {
    backgroundColor: styles.paragraphColor,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  headerStyle: {
    color: "white",
    fontFamily: styles.fontFamilyBold,
    fontSize: styles.header1Size,
  },
  pickerStyle: {
    backgroundColor: "white",
    marginTop: 10,
  },
  btnStyle: {
    backgroundColor: styles.mainColor,
    paddingVertical: 8,
    width: "30%",
    marginTop: 10,
    borderRadius: 10,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontFamily: styles.fontFamilyBold,
  },
  resultsTextView: {
    paddingHorizontal: styles.paddingHorizontal,
    paddingTop: 15,
  },
  resultsText: { fontSize: 18, color: styles.backgroundPrimaryColor },
  resultsNumber: { color: styles.mainColor },
});
