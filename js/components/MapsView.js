/**
*  @flow
*/

'use strict';

import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component, PropTypes } from 'react';
import Header from '../common/Header';
import styleUtils from '../common/styleUtils';
import Colors from '../common/Colors';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  MapView
} from 'react-native';

class MapsView extends Component {

  render() {
    var backgroundColor = Colors.colorPrimary;
    return (
      <View style={styles.container} >
        <Header
          title="位置协同"
          style={[{backgroundColor}]} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...styleUtils.containerBg
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default MapsView
