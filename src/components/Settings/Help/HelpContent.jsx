import {
    ScrollView,
    Text,
    View,
    Image,
    Dimensions,

  } from "react-native";
  import { useEffect, useState } from "react";
  
  // Styles
  import styles from "../../../common/styles";
  
  
  // Components

  import { useRoute } from "@react-navigation/core";
  import axios from "axios";
import { Pressable } from "react-native";
import routes from "../../../common/routes";

  
  const HelpContent = ({navigation}) => {
    const [data, setData] = useState([]);
    const {params}=useRoute();
    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://192.168.56.1:3001/help/${params.id}`);
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    const w = Dimensions.get("window").width;
    
    return (
      <>
{data && <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.viewStyle}>
        <Text style={{
    fontFamily: styles.fontFamilySemiBold,
    fontSize: 18,
  }}>{data?.header}</Text>
        <Image
          style={{ width: w - 30, height: 430,
            marginVertical: 15, }}
          source={{uri: data?.poster}}
        ></Image>
        <Text style={{ fontSize: 15, marginTop: 15, fontFamily:styles.fontFamilyReg }}>
        {data?.description}
        </Text>
        <Pressable style={{backgroundColor:styles.mainColor, alignSelf:"flex-start", paddingHorizontal:10, paddingVertical:8, borderRadius:10, marginTop:15}} onPress={()=>navigation.navigate(routes.help)}>
          <Text style={{color:"white", fontFamily:styles.fontFamilyReg}}>Back to help page</Text>
        </Pressable>
        </View>
      </ScrollView>}
      </>
    );
  };
  
  export default HelpContent;
  