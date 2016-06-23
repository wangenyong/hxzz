/**
*  @flow
*/

'use strict';

import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component, PropTypes } from 'react';
import Header from '../common/Header';
import Colors from '../common/Colors';
import styleUtils from '../common/styleUtils';
import GiftedSpinner from 'react-native-gifted-spinner';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ListView,
  Navigator
} from 'react-native';

type Props = {
  navigator: Navigator;
  dataSource: any;
  isFetching: boolean;
  fetchRootInfo: () => void;
}

class InfoView extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  /**
   * 当页面加载完成，发布获取新闻Action
   */
  componentDidMount(){
    const { fetchRootInfo } = this.props;
    fetchRootInfo();
  }

  /**
   * 渲染列表项
   * @param  item 列表项内容
   * @return 返回样式格式化后的内容
   */
  _renderRow(item: any) {
    return (
      <TouchableOpacity onPress={this._onPress.bind(this, item.class_id)} >
        <View style={styles.row}>
          <Text style={styles.rowTitle} >{item.class_name}</Text>
          <Icon name="ios-arrow-forward" size={20} color={Colors.colorPrimary} />
        </View>
      </TouchableOpacity>
    );
  }

  /**
   * 给Navigator传递参数
   * @param id 参数
   * @private
   */
  _onPress(id: string) {
    this.props.navigator.push({
      name: 'InfoSecond',
      id
    })
  }

  /**
   * 渲染 Loading
   * @return 返回 Loading 指示器
   */
  _renderLoading() {
    return (
      <View style={styles.center}>
        <GiftedSpinner styleAttr="Small" />
      </View>
    );
  }

  render() {
    var backgroundColor = Colors.colorPrimary;
    if (this.props.isFetching) {
      return this._renderLoading();
    }

    return (
      <View style={styles.container} >
        <Header
          title="校园资讯"
          style={[{backgroundColor}]} />
        { /* 校园咨询根目录列表 */ }
        <ListView style={styles.listView}
          dataSource={this.props.dataSource}
          renderRow={(rowData) => this._renderRow(rowData)}
          enableEmptySections={true}
          contentInset={{top:0, left:0, bottom: 64, right: 0}}
          automaticallyAdjustContentInsets={false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...styleUtils.containerBg
  },
  listView: {
  },
  row: {
    ...styleUtils.listCell,
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowTitle: {
    flex: 1,
    fontSize: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const cards = StyleSheet.create(styleUtils.card)

export default InfoView
