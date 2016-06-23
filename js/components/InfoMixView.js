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
}

class InfoMixView extends Component {
  props: Props;
  dismiss: () => void;
  renderRow: (item: string) => void;
  _renderLink: (title: string) => void;
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
        this._renderLink(item.class_name)
      )
    } else {
      var date = new Date(item.updatetime);
      return (
        this._renderNew(item.title, date.toLocaleString(), item.img)
      )
    }
  }

  _renderLink(title: string) {
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <Text style={styles.rowTitle} >{title}</Text>
          <Icon name="ios-arrow-forward" size={20} color={Colors.colorPrimary} />
        </View>
      </TouchableOpacity>
    )
  }

  _renderNew(title: string, date: string, img: string) {
    return (
      <TouchableOpacity>
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
    flex: 1,
    fontSize: 16,
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
  }
})

const cards = StyleSheet.create(styleUtils.card)

export default InfoMixView