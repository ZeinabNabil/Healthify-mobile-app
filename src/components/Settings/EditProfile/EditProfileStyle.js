import { StyleSheet } from "react-native";
import styles from "../../../common/styles";

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
  inputContainer: { marginTop: 15 },
  labelStyle: {
    fontFamily: styles.fontFamilySemiBold,
    fontSize: 18,
    marginBottom: 10,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: styles.backgroundPrimaryColor,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    fontFamily: styles.fontFamilyReg,
    backgroundColor: "white",
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
});
