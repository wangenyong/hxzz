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
import BackIcon from '../common/BackButtonIcon';
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
  id: string;
  username: string;
  isFetching: boolean;
  fetchThirdNews: (id: string, username: string) => void;
  newsCount: string;
}

class InfoThirdView extends Component {
  props: Props;
  renderRow: (item: string) => void;
  dismiss: () => void;

  constructor(props: Props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.dismiss = this.dismiss.bind(this);
  }

  /**
   * 当页面加载完成，发布获取新闻Action
   */
  componentDidMount(){
    const { id, fetchThirdNews, username } = this.props;
    fetchThirdNews(id, username);
  }

  /**
   * 渲染列表项
   * @param  item 列表项内容
   * @return 返回样式格式化后的内容
   */
  renderRow(item: any) {
    var date = new Date(item.updatetime);
    return (
      <TouchableOpacity onPress={this._onNewsPress.bind(this, item.newsid, item.title)} >
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

  _onNewsPress(id: string, title: string) {
    this.props.navigator.push({
      name: 'NewsDetail',
      id,
      title
    })
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

        <View style={styles.count} >
          <Text>栏目数量： 0</Text>
          <Text style={{marginLeft: 48}} >文章数量： {this.props.newsCount}</Text>
        </View>

        <PureListView
          renderRow={this.renderRow}
          {...this.props}
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
  count: {
    flexDirection: 'row',
    margin: 10,
  }
})

export default InfoThirdView
