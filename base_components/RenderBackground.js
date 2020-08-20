


import React from 'react';
import {
  Image,
  Text,Picker,
  StatusBar,StyleSheet,
  ActivityIndicator, TouchableOpacity, FlatList, Platform, TouchableWithoutFeedback,TextInput,Dimensions
} from 'react-native';
import Styles from '../uistyles/Styles';
import images from '../util/img';
const window = Dimensions.get('window');

export default RenderBackground => (


    <Image              
    style={{width: window.width, height: 350}}
                  source={images.volunteer}
    
                  
                >
                </Image>

);