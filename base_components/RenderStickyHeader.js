


import React from 'react';
import {
  View,
  Text,Picker,
  StatusBar,StyleSheet,
  ActivityIndicator, TouchableOpacity, FlatList, Platform, TouchableWithoutFeedback,TextInput,Dimensions
} from 'react-native';
import Styles from '../uistyles/Styles';
import Icon1 from 'react-native-vector-icons/FontAwesome';


export default RenderStickyHeader => (


  <View style={{backgroundColor:'transparent',flexDirection:'row'}}>
  <Icon1 style={{marginLeft:10,marginTop:10}} name="angle-left" size={30} color="white" />
  <Text style={{ textAlign: 'left', color: 'white',marginLeft:10, fontSize: 20 ,marginTop:10}}>Volunteer and Donate</Text>
            </View>

);