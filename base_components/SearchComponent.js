


import React from 'react';
import {
  View,
  TextInput,Dimensions
} from 'react-native';
import Styles from '../uistyles/Styles';
import images from '../util/img';
const window = Dimensions.get('window');
import Icon1 from 'react-native-vector-icons/FontAwesome';

export default SearchComponent=() => (


  <View style={{flexDirection: 'row', height:60,alignItems:'center'}}>
        
  
  <Icon1 style={{marginLeft:10}} name="angle-left" size={30} color="white" />

        <View style={[Styles.EditSectionStyle,{}]}> 
       <Icon1 name="search" color="gray" size={20} style={{marginLeft:10,marginRight:10}}/>
                  
       <TextInput
  
          underlineColorAndroid="transparent"
          placeholder="Search Service"
        />
                 
               </View> 

               </View> 

);