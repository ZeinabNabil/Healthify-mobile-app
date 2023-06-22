import { StyleSheet } from "react-native";
import styles from "../../common/styles";

export default StyleSheet.create({
  Section1View: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  HomeImage: {
    width: "100%",
  },
  child: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  child2: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 3,
    top: "40%",
    width: "80%",
  },
  text: {
    color: "white",
    fontSize: 25,
    textAlign: "left",
  },
  btnStyle: {
    backgroundColor: styles.mainColor,
    paddingVertical: 8,
    width: "87%",
    marginTop: 30,
    borderRadius: 10,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontFamily: styles.fontFamilySemiBold,
  },
  SectionText: {
    textAlign: "center",
    marginVertical: 40,
    fontSize: 28,
    fontFamily: styles.fontFamilySemiBold,
    color: styles.paragraphColor,
  },
  NutrationText: {
    textAlign: "center",
    fontFamily: styles.fontFamilyReg,
    fontSize: 18,
    marginVertical: 10,
  },
  Card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    marginBottom: 15,
  },
  input: {
    height: 40,
    marginVertical: 10,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: styles.paragraphColor,
  },
});
