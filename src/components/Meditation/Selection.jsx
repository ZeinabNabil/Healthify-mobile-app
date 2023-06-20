import { Picker } from "@react-native-picker/picker";
import style from "./MeditationStyle"
import uuid from 'react-native-uuid';
import { useState } from "react";
const Selection = ({title, titleValue, options}) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return ( 
        <Picker
        //   mode="dropdown"
          style={style.pickerStyle}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
        >
          <Picker.Item
            enabled={false}
            label={title}
            value={titleValue}
          />
          {options.map((option)=><Picker.Item key={uuid.v4()} label={option.label} value={option.value} />)}
        </Picker>
     );
}
 
export default Selection;