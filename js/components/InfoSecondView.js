/**
*  @flow
*/

'use strict';

import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component, PropTypes } from 'react';
import Header from '../common/Header';
import Colors from '../common/Colors';
import styleUtils from '../common/styleUtils';
import BackIcon from '../common/BackButtonIcon';
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
  id: string;
  infoDataSource: any;
  newsDataSource: any;
  onInfoReceived: (json: Array<Object>) => void;
  onNewsListReceived: (json: Object) => void;
}

class InfoView extends Component {
  props: Props;
  dismiss: () => void;

  constructor(props: Props) {
    super(props);
    this.dismiss = this.dismiss.bind(this);
  }

  /**
   * 当页面加载完成，发布获取新闻Action
   */
  componentDidMount(){
    const { id, onInfoReceived } = this.props;

    fetch('http://220.165.8.15:5000/get_class_by_id/' + id)
    .then((response) => response.text())
    .then((responseText) => JSON.parse(responseText))
    .then((json) => {
      console.log(json);
      onInfoReceived(json.data);
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  /**
   * 渲染列表项
   * @param  item 列表项内容
   * @return 返回样式格式化后的内容
   */
  _renderRow(item: any) {
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <Text style={styles.rowTitle} >{item.class_name}</Text>
          <Icon name="ios-arrow-forward" size={20} color={Colors.colorPrimary} />
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    var backgroundColor = Colors.colorPrimary;
    return (
      <View style={styles.container} >
        <Header
          leftItem={{
            layout: 'icon',
            title: 'Back',
            icon: BackIcon,
            onPress: this.dismiss
          }}
          title="校园资讯"
          style={[{backgroundColor}]} />
        { /* 校园咨询根目录列表 */ }
        <ListView style={styles.listView}
          dataSource={this.props.infoDataSource}
          renderRow={(rowData) => this._renderRow(rowData)}
          enableEmptySections={true}
          contentInset={{top:0, left:0, bottom: 64, right: 0}}
          automaticallyAdjustContentInsets={false}
        />
      </View>
    )
  }

  dismiss() {
    this.props.navigator.pop();
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
  }
})

const cards = StyleSheet.create(styleUtils.card)

export default InfoView
