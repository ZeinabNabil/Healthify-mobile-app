import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View } from "react-native";
import styles from "../common/styles"
import { Image } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import { useAuth } from "../Context/AuthContext";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import routes from "../common/routes"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImage, getName } from "../redux/userSlice";

const CustomDrawer = (props) => {
    const {navigate} = useNavigation()
    const { currentUserData, currentUser, logout, userImage, } = useAuth();
    const [error, setError] = useState("");
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();
    const { userImageRed, userNameReg } = useSelector((state) => state.user);

    useEffect(() => {
        currentUserData?.firstName != null
          ? setUsername(
            `${currentUserData?.firstName} ${currentUserData?.lastName}`
          )
          : setUsername(currentUser?.displayName);
      }, [currentUser?.displayName, currentUserData?.firstName, currentUserData?.lastName]);

      useEffect(()=>{
        dispatch(getImage());
        dispatch(getName());
      })

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
          setError("");
          await logout();
          navigate(routes.home)
        } catch (err) {
          setError(err.message);
        }
      };

    return ( 
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:styles.mainColor}}>
                {currentUser && userImageRed?<View style={{padding:20}}>
                    <Image source={{uri: userImageRed}} style={{width:80, height:80, borderRadius:40, marginBottom:10}}></Image>
                    {userNameReg?<Text style={{color:"white", fontSize:18, fontFamily:styles.fontFamilyReg}}>{userNameReg}</Text>:<Text style={{color:"white", fontSize:18, fontFamily:styles.fontFamilyReg}}>{username}</Text>}
                </View>: currentUser ? <View style={{padding:20}}>
                    <Image source={userImage?{uri: userImage} : require("../../assets/Images/userWhite.png")} style={{width:80, height:80, borderRadius:40, marginBottom:10}}></Image>
                    {userNameReg?<Text style={{color:"white", fontSize:18, fontFamily:styles.fontFamilyReg}}>{userNameReg}</Text>:<Text style={{color:"white", fontSize:18, fontFamily:styles.fontFamilyReg}}>{username}</Text>}
                </View> : <View style={{padding:20}}>
                    <Image source={require("../../assets/Images/userWhite.png")} style={{width:80, height:80, borderRadius:40, marginBottom:10}}></Image>
                    <Text style={{color:"white", fontSize:18, fontFamily:styles.fontFamilyReg}}>User</Text>
                </View>}
            <View style={{backgroundColor:"#fff", flex:1, paddingTop:10}}>
            <DrawerItemList {...props}/>
            </View>
        </DrawerContentScrollView>
        {currentUser && <View style={{padding:20, borderTopWidth:1, borderTopColor:"#ccc"}}>
            <TouchableOpacity onPress={handleLogout} style={{paddingVertical:15}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <IonIcon name="exit-outline" size={22}/>
                    <Text style={{fontSize:15, fontFamily:styles.fontFamilyReg, marginLeft:5}}>Logout</Text>
                </View>
            </TouchableOpacity>
        </View>}
        </View>
     );
}
 
export default CustomDrawer;