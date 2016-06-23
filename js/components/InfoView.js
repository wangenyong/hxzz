/**
*  @flow
*/

'use strict';

import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component, PropTypes } from 'react';
import Header from '../common/Header';
import Colors from '../common/Colors';
import styleUtils from '../common/styleUtils';
import PureListView from '../common/PureListView';
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
  infoCount: string;
}

class InfoView extends Component {
  props: Props;
  renderRow: (item: string) => void;

  constructor(props: Props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
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
  renderRow(item: any) {
    return (
      <TouchableOpacity onPress={this._onPress.bind(this, item.class_id, item.class_name)} >
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
          title="校园资讯"
          style={[{backgroundColor}]} />
        <View style={styles.count} >
          <Text>栏目数量： {this.props.infoCount}</Text>
          <Text style={{marginLeft: 48}} >文章数量： 0</Text>
        </View>
        <PureListView
          renderRow={this.renderRow}
          {...this.props}
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
  },
  count: {
    flexDirection: 'row',
    margin: 10,
  }
})

const cards = StyleSheet.create(styleUtils.card)

export default InfoView
