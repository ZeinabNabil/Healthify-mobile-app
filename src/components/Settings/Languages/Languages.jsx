import { ScrollView } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import styles from "../../../common/styles.js";
import { useForm, Controller } from "react-hook-form";
import SelectDropdown from "react-native-select-dropdown";
import { Pressable } from "react-native";

const Languages = () => {
    const language = ["Arabic", "English"];
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.warn(data);
  return (
    <ScrollView>
      <View style={styles.viewStyle}>
        <View>
            <Text style={{
    fontFamily: styles.fontFamilySemiBold,
    fontSize: 18,
    marginBottom: 10,
  }}>Choose Language</Text>
  <View>
  <Controller
                control={control}
                rules={{
                  required: "language is required",
                }}
                render={({ field: { onChange, value } }) => (
                    <SelectDropdown
                    data={language}
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
                      fontSize: 16,
                    }}
                    defaultButtonText="Select language"
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
                name="language"
              />
  </View>
  {errors.language && (
                <Text style={{color:"red"}}>
                {errors.language.message}
              </Text>
            )}
  <Pressable
            onPress={handleSubmit(onSubmit)}
          style={{
            marginTop: 15,
            backgroundColor: styles.mainColor,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontFamily: styles.fontFamilySemiBold,
              color: "white",
              textAlign: "center",
            }}
          >
            Save
          </Text>
        </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Languages;
