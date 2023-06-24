import { ScrollView } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import styles from "../../../common/styles";
import { Pressable } from "react-native";
import { Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextInput } from "react-native";
import style from "./EditProfileStyle";


const EditProfile = () => {
    const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.warn(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "Zeinab",
      lastName: "Nabil",
      email:"zeinab@gmail.com",
      phoneNumber:"01111111111",
      password:"zeinab1234"
    },
  });
  const onSubmit = (data) => console.warn(data);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.viewStyle}>
        {/* <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <IonIcon name="create-outline" size={25} />
          <Text
            style={{
              fontSize: styles.header1Size,
              fontFamily: styles.fontFamilySemiBold,
              marginLeft: 5,
            }}
          >
            Edit profile
          </Text>
        </View> */}
        <View style={{padding: 20, display:"flex", justifyContent:"center", alignItems:"center"}}>
            <View style={{backgroundColor:"white", height:200, width:200, borderRadius:100}}>
            {image? <Image source={{ uri: image }} style={{width:"100%", height:"100%", borderRadius:100}} /> : <Image style={{width:"100%", height:"100%", borderRadius:100}} source={require("../../../../assets/Images/user.png")}></Image>}
                
            </View>
            <Pressable onPress={pickImage} style={{backgroundColor:styles.mainColor, paddingHorizontal:20, paddingVertical:10, borderRadius:10, marginTop:15}}>
                <Text style={{color:"white", fontFamily:styles.fontFamilySemiBold, fontSize:15}}>Change photo</Text>
            </Pressable>
        </View>
        <View>
            {/* First Name */}
            <View style={style.inputContainer}>
                <Text style={style.labelStyle}>First Name:</Text>
              <Controller
                control={control}
                name="firstName"
                rules={{
                  required: "first name is required",
                  pattern: {
                    value: /^[a-zA-Z]{3,}$/gi,
                    message: "name must be at least 3 char.",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={ style.inputStyle}
                    placeholder="Set First Name"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
            </View>
            {errors.firstName && (
                <Text style={style.errorMsg}>
                {errors.firstName.message}
              </Text>
            )}
            
            {/* Last Name */}
            <View style={style.inputContainer}>
                <Text style={style.labelStyle}>Last Name:</Text>
              <Controller
                control={control}
                name="lastName"
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
                    placeholder="Set last Name"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
            </View>
            {errors.lastName && (
                <Text style={style.errorMsg}>
                {errors.lastName.message}
              </Text>
            )}

            {/* Email */}
            <View style={style.inputContainer}>
                <Text style={style.labelStyle}>Email:</Text>
                <Controller
                control={control}
                name="email"
                rules={{
                  required: "email is required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi,
                    message:"invalid email",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={style.inputStyle}
                    placeholder="Set email"
                keyboardType="email-address"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
            </View>
            {errors.email && (
                <Text style={style.errorMsg}>
                {errors.email.message}
              </Text>
            )}

            {/* Phone */}
            <View style={style.inputContainer}>
                <Text style={style.labelStyle}>Phone Number:</Text>
                <Controller
                control={control}
                name="phoneNumber"
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
                    placeholder="Set new phone number"
                keyboardType="phone-pad"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
            </View>
            {errors.phoneNumber && (
                <Text style={style.errorMsg}>
                {errors.phoneNumber.message}
              </Text>
            )}

            {/* Password */}
            <View style={style.inputContainer}>
                <Text style={style.labelStyle}>Password:</Text>
                <Controller
                control={control}
                name="password"
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
                    placeholder="Set new password"
                    secureTextEntry
                    textContentType={"password"}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
            </View>
            {errors.password && (
                <Text style={style.errorMsg}>
                {errors.password.message}
              </Text>
            )}

            {/* Sign up */}
            <Pressable
              onPress={handleSubmit(onSubmit)}
              style={style.signInUpBtnStyle}
            >
              <Text style={style.signInUpBtnText}>Save</Text>
            </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
