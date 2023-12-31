import { StyleSheet } from "react-native";
import styles from "../../common/styles";

export default StyleSheet.create({
  signInUpContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  signInUp: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#6f6767",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 35,
  },
  signInUpHeader: {
    fontSize: 30,
    fontFamily: styles.fontFamilySemiBold,
  },
  signInUpHeaderUnderline: {
    height: 5,
    width: "15%",
    backgroundColor: styles.mainColor,
  },
  inputContainer: { marginTop: 15, position: "relative" },
  inputStyle: {
    borderWidth: 1,
    borderColor: styles.backgroundPrimaryColor,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    fontFamily: styles.fontFamilyReg,
    paddingLeft: 40,
  },
  inputIconStyle: {
    position: "absolute",
    top: "-50%",
    transform: [{ translateY: 28 }],
    left: 10,
  },
  textLink: {
    fontFamily: styles.fontFamilySemiBold,
    color: styles.mainColor,
  },
  flexViewStyle: {
    marginTop: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  rememberMeText: { fontFamily: styles.fontFamilyReg, marginLeft: 8 },
  signInUpBtnStyle: {
    marginTop: 15,
    backgroundColor: styles.mainColor,
    padding: 10,
    borderRadius: 5,
  },
  signInUpBtnText: {
    fontFamily: styles.fontFamilySemiBold,
    color: "white",
    textAlign: "center",
  },
  textFont: { fontFamily: styles.fontFamilyReg },
  googleImg: { width: 22, height: 22, marginHorizontal: 5 },
  errorMsg: { color: "red", marginTop: 5, fontFamily: styles.fontFamilyReg },
  selectStyle: {
    borderWidth: 1,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 5,
    paddingLeft: 15,
    height: 40,
    borderColor: styles.backgroundPrimaryColor,
  },
  selectTextStyle: {
    textAlign: "left",
    fontFamily: styles.fontFamilyReg,
    paddingLeft: 23,
    fontSize: 16,
  },
});
