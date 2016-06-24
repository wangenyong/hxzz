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
  Navigator,
  Image
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

        <Image style={styles.school} resizeMode='cover'
          source={require('./img/school.png')} />

        <TouchableOpacity onPress={this._onPress.bind(this, '100', '规章制度')} >
          <View style={[styles.row, {backgroundColor: '#03a9f4'}]}>
            <View style={styles.center} >
              <Text style={styles.rowTitle} >规章制度</Text>
            </View>
            <Icon name="ios-arrow-forward" size={20} color='white' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPress.bind(this, '81', '校务通知')} >
          <View style={[styles.row, {backgroundColor: Colors.colorPrimary}]}>
            <View style={styles.center} >
              <Text style={styles.rowTitle} >校务通知</Text>
            </View>
            <Icon name="ios-arrow-forward" size={20} color='white' />
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
    justifyContent: 'center',
  },
  rowTitle: {
    fontSize: 16,
    color: 'white'
  },
  school: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width*274/480
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default PostView
