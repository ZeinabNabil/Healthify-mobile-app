import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

// Styles
import style from "./MeditationStyle"

// uuid
import uuid from 'react-native-uuid';

const Selection = ({title, titleValue, options, onChanged}) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return ( 
        <Picker
        //   mode="dropdown"
          style={style.pickerStyle}
          selectedValue={titleValue}
          // selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            onChanged(itemValue)
        }
        >
          <Picker.Item
            enabled={false}
            label={title}
            value={titleValue}
          />
          {options.map((option)=><Picker.Item key={uuid.v4()} label={option.name} value={option.name} />)}
        </Picker>
     );
}
 
export default Selection;