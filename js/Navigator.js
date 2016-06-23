/**
 * @flow
 */

'use strict'

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Tabs from './containers/Tabs';
import { switchTab } from './actions';
import { connect } from 'react-redux';
import InfoSecond from './containers/InfoSecond';
import InfoThird from './containers/InfoThird';
import NewsDetail from './containers/NewsDetail';
import {
    AppRegistry,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Navigator,
    Platform,
    Route,
    BackAndroid
} from 'react-native';


var CYNavigator = React.createClass({

  render: function() {
    return (
      <Navigator
        ref="navigator"
        style={styles.container}
        configureScene={(route) => {
          if (Platform.OS === 'android') {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
          }
          return Navigator.SceneConfigs.PushFromRight;
        }}
        initialRoute={{}}
        renderScene={this.renderScene} />
    )
  },

  renderScene: function(route: Route, navigator: Navigator) {
    if (route.name == 'InfoSecond') {
      return (
        <InfoSecond id={route.id} navigator={navigator} />
      )
    }
    if (route.name == 'InfoThird') {
      return (
        <InfoThird id={route.id} navigator={navigator} />
      )
    }
    if (route.name == 'NewsDetail') {
      return (
        <NewsDetail id={route.id} navigator={navigator} />
      )
    }
    return <Tabs navigator={navigator} />
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    tab: state.navigation.tab
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTabSelect: (tab) => {
      dispatch(switchTab(tab));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CYNavigator)
