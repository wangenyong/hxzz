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
import PureListView from '../common/PureListView';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ListView,
  Navigator,
  Image
} from 'react-native';

type Props = {
  navigator: Navigator;
  id: string;
  dataSource: any;
  username: string;
  isFetching: boolean;
  fetchSecondInfo: (id: string, username: string) => void;
  infoCount: string;
  newsCount: string;
  title: string;
}

class InfoMixView extends Component {
  props: Props;
  dismiss: () => void;
  renderRow: (item: string) => void;
  _renderLink: (title: string, id: string) => void;
  _renderNew: (title: string, date: string, img: string) => void;

  constructor(props: Props) {
    super(props);
    this.dismiss = this.dismiss.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this._renderLink = this._renderLink.bind(this);
    this._renderNew = this._renderNew.bind(this);
  }

  /**
   * 当页面加载完成，发布获取新闻Action
   */
  componentDidMount(){
    const { id, username, fetchSecondInfo } = this.props;
    fetchSecondInfo(id, username);
  }

  /**
   * 渲染列表项
   * @param  item 列表项内容
   * @return 返回样式格式化后的内容
   */
  renderRow(item: any) {
    if (item.class_id) {
      return (
        this._renderLink(item.class_name, item.class_id)
      )
    } else {
      var date = new Date(item.updatetime);
      return (
        this._renderNew(item.title, date.toLocaleString(), item.img, item.newsid)
      )
    }
  }

  _renderLink(title: string, id: string) {
    return (
      <TouchableOpacity onPress={this._onInfoPress.bind(this, id, title)} >
        <View style={styles.row}>
          <View style={styles.center}>
            <Text style={styles.rowTitle} >{title}</Text>
          </View>
          <Icon name="ios-arrow-forward" size={20} color='white' />
        </View>
      </TouchableOpacity>
    )
  }

  _renderNew(title: string, date: string, img: string, id: string) {
    return (
      <TouchableOpacity onPress={this._onNewsPress.bind(this, id, title)} >
      <View style={styles.newsContainer} >
        <Image style={styles.newsImage} source={{uri: img}} />
        <View style={styles.newsTitleContainer} >
          <Text numberOfLines={1} >{title}</Text>
          <Text numberOfLines={1} style={styles.newsDate} >{date}</Text>
        </View >
        <Icon name="ios-arrow-forward" size={20} color={Colors.colorPrimary} style={{margin: 15}} />
      </View>
      </TouchableOpacity>
    )
  }

  _onInfoPress(id: string, title: string) {
    this.props.navigator.push({
      name: 'InfoThird',
      id,
      title
    })
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
          title={this.props.title}
          style={[{backgroundColor}]} />

          <View style={styles.count} >
            <Text>栏目数量： {this.props.infoCount}</Text>
            <Text style={{marginLeft: 48}} >文章数量： {this.props.newsCount}</Text>
          </View>

          <PureListView
            renderRow={this.renderRow}
            {...this.props} />
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
  row: {
    ...styleUtils.listCell,
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowTitle: {
    fontSize: 16,
    color: 'white'
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

export default InfoMixView
