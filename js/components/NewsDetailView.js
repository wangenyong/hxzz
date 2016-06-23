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
import GiftedSpinner from 'react-native-gifted-spinner';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Navigator,
  Image,
  WebView
} from 'react-native';

type Props = {
  navigator: Navigator;
  detail: string;
  id: string;
  title: string;
  username: string;
  isFetching: boolean;
  fetchNewsDetail: (id: string, username: string) => void;
}

class NewsDetailView extends Component {
  props: Props;
  dismiss: () => void;

  constructor(props: Props) {
    super(props);
    this.dismiss = this.dismiss.bind(this);
  }

  componentDidMount(){
    const { id, fetchNewsDetail, username } = this.props;
    fetchNewsDetail(id, username);
  }

  render() {
    var backgroundColor = Colors.colorPrimary;
    var content;
    if (this.props.isFetching) {
      content = (
        <View style={styles.center}>
          <GiftedSpinner styleAttr="Small" />
        </View>
      )
    } else {
      content = <WebView
        source={{ html: this.props.detail }}
        domStorageEnabled={true}
        javaScriptEnabled={true} />
    }

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
        { content }
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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default NewsDetailView
