import {StyleSheet,Platform,Dimensions} from 'react-native';
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
const Styles = StyleSheet.create({
  containers: {
    flex: 1,
    paddingTop: 10,
  },

  containerr: {
    flex: 1,
    backgroundColor: 'white',
  },
  innercontainerr: {
    flex: 1,
  },
  parallelboxcontainerr: {
    flex: 1, overflow: 'hidden'
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'rgba(0, 0, 0, .7)',

  },
  list: {
    paddingVertical: 2,
    marginLeft: 25,
    marginRight: 25,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  darkText: {
    color: 'black',
    width: 250,
    fontSize: 13,
    fontWeight: 'bold',
  },
  subText: {
    color: '#2CC5B0',
    width: 250,
    fontSize: 12,
  },
  modalline: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgray',
  },
  detailline: {
    height: 1,
    width: '90%',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    marginTop: 5,
    alignSelf: 'center',
  },

  menustyle: {
    alignSelf: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 40,
    width: '100%',
    paddingLeft: 20,
  },
  EditSectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius:10,
    borderColor: 'black',
    height: 45,
    marginTop: 10,
    marginBottom: 10,
    width: '80%',
    alignSelf: 'center',
    marginTop:10,marginLeft:10
  },
 
modalinner:{
  flex:1, justifyContent: 'center', alignItems: 'center',height:150,
},
graymodalinner:{
  backgroundColor:'lightgray'
,height:150,width:'90%',alignContent:'center',justifyContent:'center'
},
modaltext:{color:'black',textAlign:'center'},
removelay:{alignSelf:'flex-end',marginRight:20},
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
  },



  
});

export default Styles;
