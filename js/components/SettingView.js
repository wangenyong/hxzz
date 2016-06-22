/**
*  @flow
*/

'use strict';

import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component, PropTypes } from 'react';
import Header from '../common/Header';
import Colors from '../common/Colors';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';

class SettingView extends Component {
  render() {
    var backgroundColor = Colors.colorPrimary;
    return (
      <View style={styles.container} >
        <Header
          title="系统设置"
          style={[{backgroundColor}]} />
        <View style={styles.center} >
          <Text> Setting </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default SettingView
