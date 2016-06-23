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
  TextInput
} from 'react-native';

type Props = {
  realname: string;
  username: string;
}

class SettingView extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  _logout() {

  }

  render() {
    var backgroundColor = Colors.colorPrimary;
    return (
      <View style={styles.container} >
        <Header
          title="系统设置"
          style={[{backgroundColor}]} />

        <Text style={{margin: 10, fontSize: 16}} >华夏中专OA手机端 </Text>
        <Text style={{marginLeft: 10, fontSize: 12}} >当前版本：0.3.5</Text>
        <Text style={{margin: 10, fontSize: 16}} >当前用户：{this.props.realname}/{this.props.username}</Text>

        <TouchableOpacity onPress={this._logout.bind(this)} >
          <View style={styles.row}>
            <Text style={styles.rowTitle} >注销</Text>
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
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowTitle: {
    fontSize: 16,
    color: 'white'
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

const mapStateToProps = (state) => {
  return {
    realname: state.user.realname,
    username: state.user.username,
  }
}

export default connect(mapStateToProps)(SettingView)
