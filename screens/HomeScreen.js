import React, {Component} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {fetchList} from '../actions/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import Styles from '../uistyles/Styles';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import SplashScreen from 'react-native-splash-screen';
import Modal from 'react-native-modal';
import RenderBackground from '../base_components/RenderBackground';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import RenderStickyHeader from '../base_components/RenderStickyHeader';
import RenderForeground from '../base_components/RenderForeground';
import SearchComponent from '../base_components/SearchComponent';
import ListItemm from '../base_components/ListItemm';
class HomeScreen extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isModalVisible: false,
      selectedPos: 0,
    };
  }
  static navigationOptions = {
    headerShown: false,
  };
  componentDidMount() {
    SplashScreen.hide();

    this.props.fetchList();
    this.props.homefetchError=='Network Error'?
    alert('You are not connected to internet'):null
  }

  render() {
    return (
      <View style={Styles.containerr}>
        <View style={Styles.innercontainerr}>
          <ParallaxScrollView
            style={Styles.parallelboxcontainerr}
            renderBackground={() => <RenderBackground />}
            renderStickyHeader={() => <RenderStickyHeader />}
            renderForeground={() => <RenderForeground />}
            parallaxHeaderHeight={350}
            stickyHeaderHeight={50}>
            <View>
              <SearchComponent />

              <FlatList
                style={{marginTop: 20}}
                data={this.props.displayArr}
                renderItem={item => this.renderItem(item)}
                keyExtractor={item => item.id}
                extraData={this.state}
              />
            </View>
          </ParallaxScrollView>
        </View>
        {this.props.homefetchLoading ? (
          <View style={Styles.loading}>
            <ActivityIndicator size="large" color="red" />
          </View>
        ) : null}
        <TouchableWithoutFeedback
          onPress={() => this.setState({isModalVisible: false})}>
          <Modal
            isVisible={this.state.isModalVisible}
            animationType="fade"
            transparent={true}
            backdropColor={'transparent'}
            backdropOpacity={1}
            onBackdropPress={() => this.setState({isModalVisible: false})}
            onRequestClose={() => {
              this.setState({isModalVisible: false});
            }}>
            <View style={Styles.modalinner}>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.setState({
                    isModalVisible: false,
                  });
                }}>
                <Icon1
                  name="remove"
                  color="black"
                  size={20}
                  style={Styles.removelay}
                />
              </TouchableWithoutFeedback>

              <View style={Styles.graymodalinner}>
                {this.props.displayArr ? (
                  <Text style={Styles.modaltext}>
                    {this.props.displayArr[this.state.selectedPos].name}
                  </Text>
                ) : null}
              </View>
            </View>
          </Modal>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  renderItem = data => (
    <TouchableWithoutFeedback
      onPress={() => {
        this.setState({
          isModalVisible: true,
          selectedPos: data.index,
        });
      }}>
      <View>
        <ListItemm data={data} />
      </View>
    </TouchableWithoutFeedback>
  );
}

HomeScreen.defaultProps = {
  homefetchdata: null,
  homefetchError: null,
  homefetchLoading: false,
};

HomeScreen.propTypes = {
  homefetchLoading: PropTypes.bool,
  homefetchdata: PropTypes.object,

  fetchList: PropTypes.func,
  displayArr: PropTypes.array,
};

function initMapStateToProps(state) {
  return {
    displayArr: state.fetch.homefetchdata
      ? state.fetch.homefetchdata.data.categories
      : state.fetch.homefetchdata,
    homefetchLoading: state.fetch.homefetchLoading,
    homefetchError: state.fetch.homefetchError,
  };
}

function initMapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchList,
    },
    dispatch,
  );
}

export default connect(
  initMapStateToProps,
  initMapDispatchToProps,
)(HomeScreen);
