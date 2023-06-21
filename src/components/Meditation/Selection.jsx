import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

// Styles
import style from "./MeditationStyle"

// uuid
import uuid from 'react-native-uuid';

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