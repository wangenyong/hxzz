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
  Navigator,
  Image
} from 'react-native';

type Props = {
  navigator: Navigator;
  dataSource: any;
  isFetching: boolean;
  fetchRootInfo: () => void;
}

class InfoThirdView extends Component {
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
    var date = new Date(item.updatetime);
    return (
      <TouchableOpacity>
        <View style={styles.newsContainer} >
          <Image style={styles.newsImage} source={{uri: item.img}} />
          <View style={styles.newsTitleContainer} >
            <Text numberOfLines={1} >{item.title}</Text>
            <Text numberOfLines={1} style={styles.newsDate} >{date.toLocaleString()}</Text>
          </View >
          <Icon name="ios-arrow-forward" size={20} color={Colors.colorPrimary} style={{margin: 15}} />
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

  render() {
    var backgroundColor = Colors.colorPrimary;
    return (
      <View style={styles.container} >
        <Header
          title="校园资讯"
          style={[{backgroundColor}]} />
          <PureListView
            renderRow={this.renderRow}
            {...this.props} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  newsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    marginLeft: 10,
    alignItems: 'center'
  },
  newsImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  newsTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10
  },
  newsTitle: {

  },
  newsDate: {
    fontSize: 12,
    color: 'darkgray',
    marginTop: 5
  },
})

export default InfoThirdView
