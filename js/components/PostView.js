/**
*  @flow
*/

'use strict';

import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component, PropTypes } from 'react';
import Header from '../common/Header';
import styleUtils from '../common/styleUtils';
import Colors from '../common/Colors';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Navigator
} from 'react-native';

type Props = {
  navigator: Navigator;
}


class PostView extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  _onPress(id: string, title: string) {
    this.props.navigator.push({
      name: 'InfoSecond',
      id,
      title
    })
  }

  render() {
    var backgroundColor = Colors.colorPrimary;
    return (
      <View style={styles.container} >
        <Header
          title="通知公告"
          style={[{backgroundColor}]} />

          <TouchableOpacity onPress={this._onPress.bind(this, '100', '规章制度')} >
            <View style={styles.row}>
              <Text style={styles.rowTitle} >规章制度</Text>
              <Icon name="ios-arrow-forward" size={20} color={Colors.colorPrimary} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPress.bind(this, '81', '校务通知')} >
            <View style={styles.row}>
              <Text style={styles.rowTitle} >校务通知</Text>
              <Icon name="ios-arrow-forward" size={20} color={Colors.colorPrimary} />
            </View>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...styleUtils.containerBg
  },
  row: {
    ...styleUtils.listCell,
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowTitle: {
    flex: 1,
    fontSize: 16,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default PostView
