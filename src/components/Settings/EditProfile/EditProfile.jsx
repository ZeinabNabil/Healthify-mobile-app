import { ScrollView } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import styles from "../../../common/styles";
import { Pressable } from "react-native";
import { Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextInput } from "react-native";
import style from "./EditProfileStyle";
import { useAuth } from "../../../Context/AuthContext";
// firebase/storage
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase";
import { useEffect } from "react";
// firebase
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
// uuid
import uuid from "react-native-uuid";
import ToastManager, { Toast } from "toastify-react-native";
import { Dimensions } from "react-native";
import Swal from "sweetalert2";
import { useNavigation } from "@react-navigation/native";
import routes from "../../../common/routes";
import { useDispatch, useSelector } from "react-redux";
import { getImage, putImage, putName } from "../../../redux/userSlice";

const EditProfile = ({ navigation }) => {
  const { currentUserData } = useAuth();
    const [image, setImage] = useState(null);
    const [currentUserImage, setCurrentUserImage] = useState("");
    const w = Dimensions.get("window").width;
    const [msg, setMsg] = useState("");
    const dispatch = useDispatch();
    const { userImageRed } = useSelector((state) => state.user);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.warn(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      dispatch(putImage(result.assets[0].uri));
      const imageRef = ref(storage, `usersImages/${currentUserData?.userId}`);
      const metadata = {
        contentType: "image/jpeg",
        firebaseStorageDownloadTokens: uuid.v4(),
      };
      uploadBytes(imageRef, image, metadata).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          // setCurrentUserImage(url);
          console.warn("🚀 ~ file: ProfileImage.jsx:24 ~ getDownloadURL ~ upladed:", url)
        })
      })
    }
  };

  const getImageFromFirebase = (imageUrl) => {
    getDownloadURL(ref(storage, imageUrl)).then((url) => {
      setCurrentUserImage(url);
    });
  };

  useEffect(() => {
    const userImageRef = ref(storage, `usersImages/${currentUserData?.userId}`);
    if (userImageRef) {
      getDownloadURL(userImageRef)
        .then((url) => {
          setCurrentUserImage(url);
        })
        .catch((error) => {
          if (currentUserData?.gender === "female") {
            getImageFromFirebase(`usersImages/avatar-female.webp`);

          } else {
            getImageFromFirebase(`usersImages/avatar-male.webp`);
          }
        });
    }
  }, [currentUserData]);

  useEffect(()=>{
    dispatch(getImage());
  },[image])

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: currentUserData?.firstName,
      lastName: currentUserData?.lastName,
      mail: currentUserData?.email,
      phoneNumber: currentUserData?.phoneNumber,
      password: currentUserData?.password,
    },
});
const onSubmit = async (data) => {
  console.log(data);
  const { firstName, lastName, mail, phoneNumber, password } = data;
  const newData = { firstName, lastName, mail, phoneNumber, password }
  const userDoc = doc(db, "users", currentUserData?.userId)
  await updateDoc(userDoc, newData);
  dispatch(putName(`${firstName} ${lastName}`));
  Toast.success("Updated Successfully","top");
  navigation.navigate(routes.home);
  // Swal.fire({
  //   icon: 'success',
  //   title: 'Your work has been saved',
  //   showConfirmButton: false,
  //   timer: 1500
  // })
}
  return (
    <>
      <ToastManager width={w - 10} />
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
{currentUserImage&&<Image source={{ uri: userImageRed? userImageRed : currentUserImage }} style={{width:"100%", height:"100%", borderRadius:100}} />}
                
            </View>
            <Pressable
              onPress={pickImage}
              style={{
                backgroundColor: styles.mainColor,
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10,
                marginTop: 15,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: styles.fontFamilySemiBold,
                  fontSize: 15,
                }}
              >
                Change photo
              </Text>
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
                    style={style.inputStyle}
                    placeholder="Set First Name"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
            </View>
            {errors.firstName && (
              <Text style={style.errorMsg}>{errors.firstName.message}</Text>
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
              <Text style={style.errorMsg}>{errors.lastName.message}</Text>
            )}

            {/* Email */}
            <View style={style.inputContainer}>
              <Text style={style.labelStyle}>Email:</Text>
              <Controller
                control={control}
                name="mail"
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
                    placeholder="Set email"
                    keyboardType="email-address"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
            </View>
            {errors.mail && (
              <Text style={style.errorMsg}>{errors.mail.message}</Text>
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
              <Text style={style.errorMsg}>{errors.phoneNumber.message}</Text>
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
              <Text style={style.errorMsg}>{errors.password.message}</Text>
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
    </>
  );
};

export default EditProfile;
