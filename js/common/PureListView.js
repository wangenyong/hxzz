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
  Dimensions,
  TextInput,
  ListView,
  Navigator,
  Image
} from 'react-native';

type Props = {
  isFetching: boolean;
  dataSource: any;
  renderRow: (item: string) => void;
}

class PureListView extends Component {
  props: Props;
  _renderLoading: () => void;

  constructor(props: Props) {
    super(props);
    this._renderLoading = this._renderLoading.bind(this);
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
    if (this.props.isFetching) {
      return this._renderLoading();
    }

    return (
      <ListView
        dataSource={this.props.dataSource}
        renderRow={this.props.renderRow}
        enableEmptySections={true}
        contentInset={{top:0, left:0, bottom: 64, right: 0}}
        automaticallyAdjustContentInsets={false}
      />
    )

  }


}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default PureListView
