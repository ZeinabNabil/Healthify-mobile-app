import { Text } from "react-native";
import { View } from "react-native";
import styles from "../../common/styles";
import { TextInput } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Pressable } from "react-native";
import Checkbox from "expo-checkbox";
import routes from "../../common/routes";
import { Image } from "react-native";
import style from "./SignInUpStyle";
import { Picker } from "@react-native-picker/picker";
import { ScrollView } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";

const Signup = ({ navigation }) => {
  const gender = ["Male", "Female"];
  const [error, setError] = useState("");
  const { login, googleSignIn, facebookSignIn, currentUser, t, signup } =
    useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.warn(data);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ ...style.signInUpContainer, paddingVertical: 20 }}>
        <View style={style.signInUp}>
          <Text style={style.signInUpHeader}>Register</Text>
          <View style={style.signInUpHeaderUnderline}></View>
          <View>
            {/* First Name */}
            <View style={style.inputContainer}>
              <Controller
                control={control}
                rules={{
                  required: "first name is required",
                  pattern: {
                    value: /^[a-zA-Z]{3,}$/gi,
                    message: "name must be at least 3 char.",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={style.inputStyle}
                    placeholder="First Name"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="firstName"
              />
              <IonIcon
                name="person"
                size={23}
                color={styles.mainColor}
                style={style.inputIconStyle}
              />
            </View>
            {errors.firstName && (
              <Text style={style.errorMsg}>{errors.firstName.message}</Text>
            )}

            {/* Last Name */}
            <View style={style.inputContainer}>
              <Controller
                control={control}
                rules={{
                  required: "last name is required",
                  pattern: {
                    value: /^[a-zA-Z]{3,}$/gi,
                    message: "name must be at least 3 char.",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={style.inputStyle}
                    placeholder="Last Name"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="lastName"
              />
              <IonIcon
                name="person"
                size={23}
                color={styles.mainColor}
                style={style.inputIconStyle}
              />
            </View>
            {errors.lastName && (
              <Text style={style.errorMsg}>{errors.lastName.message}</Text>
            )}

            {/* Email */}
            <View style={style.inputContainer}>
              <Controller
                control={control}
                rules={{
                  required: "email is required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi,
                    message: "invalid email",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={style.inputStyle}
                    placeholder="E-mail"
                    keyboardType="email-address"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="email"
              />
              <IonIcon
                name="mail"
                size={23}
                color={styles.mainColor}
                style={style.inputIconStyle}
              />
            </View>
            {errors.email && (
              <Text style={style.errorMsg}>{errors.email.message}</Text>
            )}

            {/* Phone number */}
            <View style={style.inputContainer}>
              <Controller
                control={control}
                rules={{
                  required: "phone number is required",
                  pattern: {
                    value: /^(010|011|012|015)\d{8}$/gi,
                    message: "invalid phone number",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={style.inputStyle}
                    placeholder="Phone"
                    keyboardType="phone-pad"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="phoneNumber"
              />
              <IonIcon
                name="call"
                size={23}
                color={styles.mainColor}
                style={style.inputIconStyle}
              />
            </View>
            {errors.phoneNumber && (
              <Text style={style.errorMsg}>{errors.phoneNumber.message}</Text>
            )}

            {/* Gender */}
            <View style={style.inputContainer}>
              <Controller
                control={control}
                rules={{
                  required: "gender is required",
                }}
                render={({ field: { onChange, value } }) => (
                  <SelectDropdown
                    data={gender}
                    buttonStyle={style.selectStyle}
                    buttonTextStyle={style.selectTextStyle}
                    defaultButtonText="Select gender"
                    dropdownIconPosition="right"
                    statusBarTranslucent
                    showsVerticalScrollIndicator={true}
                    onSelect={(selectedItem, index) => {
                      onChange(selectedItem);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      // text represented after item is selected
                      // if data array is an array of objects then return selectedItem.property to render after item is selected
                      return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                      // text represented for each item in dropdown
                      // if data array is an array of objects then return item.property to represent item in dropdown
                      return item;
                    }}
                  />
                )}
                name="gender"
              />
              {/* <SelectDropdown
                data={gender}
                buttonStyle={{
                  borderWidth: 1,
                  backgroundColor: "white",
                  width: "100%",
                  borderRadius: 5,
                  paddingLeft: 15,
                  height: 40,
                  borderColor: styles.backgroundPrimaryColor,
                }}
                buttonTextStyle={{
                  textAlign: "left",
                  fontFamily: styles.fontFamilyReg,
                  paddingLeft: 23,
                  fontSize: 16,
                }}
                defaultButtonText="Select gender"
                dropdownIconPosition="right"
                statusBarTranslucent
                showsVerticalScrollIndicator={true}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              /> */}
              <IonIcon
                name="people"
                size={23}
                color={styles.mainColor}
                style={style.inputIconStyle}
              />
            </View>
            {errors.gender && (
              <Text style={style.errorMsg}>{errors.gender.message}</Text>
            )}

            {/* Password */}
            <View style={style.inputContainer}>
              <Controller
                control={control}
                rules={{
                  required: "password is required",
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gi,
                    message: "at least 8 chars and numbers",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={style.inputStyle}
                    placeholder="Password"
                    secureTextEntry
                    textContentType={"password"}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="password"
              />
              {/* <TextInput
                // onChangeText={onChangeNumber}
                // value={number}
                style={style.inputStyle}
                placeholder="Enter Password"
                // keyboardType="visible-password"
                secureTextEntry
                textContentType={"password"}
                // passwordRules={true}
              /> */}
              <IonIcon
                name="lock-closed"
                size={23}
                color={styles.mainColor}
                style={style.inputIconStyle}
              />
            </View>
            {errors.password && (
              <Text style={style.errorMsg}>{errors.password.message}</Text>
            )}

            {/* Sign up */}
            <Pressable
              onPress={handleSubmit(onSubmit)}
              style={style.signInUpBtnStyle}
            >
              <Text style={style.signInUpBtnText}>Sign up</Text>
            </Pressable>

            {/* Login now */}
            <View style={style.flexViewStyle}>
              <Text style={style.textFont}>Already have an account?</Text>
              <Pressable onPress={() => navigation.navigate(routes.login)}>
                <Text
                  style={{
                    ...style.textLink,
                    marginLeft: 5,
                  }}
                >
                  Login Now!
                </Text>
              </Pressable>
            </View>

            {/* Login with gmail or fb */}
            <View
              style={{
                ...style.flexViewStyle,
                marginTop: 15,
                justifyContent: "center",
              }}
            >
              <Text style={style.textFont}>Try to login with</Text>
              <Pressable onPress={() => navigation.navigate(routes.signup)}>
                <Image
                  source={require("../../../assets/Images/google.png")}
                  style={style.googleImg}
                />
              </Pressable>
              <Text style={style.textFont}>or</Text>
              <Pressable onPress={() => navigation.navigate(routes.signup)}>
                <IonIcon
                  name="logo-facebook"
                  size={25}
                  style={{
                    marginHorizontal: 5,
                  }}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
