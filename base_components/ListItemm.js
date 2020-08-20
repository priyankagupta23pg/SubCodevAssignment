


import React from 'react';
import {
  Image,
  Text,View,
  Dimensions
} from 'react-native';
import Styles from '../uistyles/Styles';
import images from '../util/img';
const window = Dimensions.get('window');
import Icon1 from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
export default  ListItemm = (props) => (


  <View >
   
  
  <View style={[{flexDirection:'row',marginBottom:20}]}>
  
  <Image                  style={{ width: 40, height: 40, marginLeft: 12,borderRadius: 40/2,           
  }}
 source={images.defaulticon}

></Image>
  <View style={[{flexDirection:'column'}]}>

    <Text style={Styles.darkText} numberOfLines={1}>  {props.data.item.name} </Text>
    <Text style={Styles.subText} numberOfLines={1}>  {props.data.item.license_required ==1?'License Mandatory':'License Optional'} </Text>
    </View>

    <Icon1  style={{position:'absolute',right:0,alignSelf:'center',marginRight:20}} name="angle-right" size={25} color={'gray'} /> 

    
  
    
  
                </View>
  
  
  
                </View>
                

);

ListItemm.defaultProps = {
 
  data: {},
 
};

ListItemm.propTypes = {
 
    data: PropTypes.object,
   

}