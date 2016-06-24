/**
 * @flow
 */

'use strict'

import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component, PropTypes } from 'react';
import type { Tab } from '../reducers/navigation';
import Colors from '../common/Colors';
import PostView from '../components/PostView';
import Info from '../containers/Info';
import Setting from '../containers/Setting';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  TabBarIOS,
  Navigator
} from 'react-native';

type Props = {
  tab: Tab;
  onTabSelect: (tab: Tab) => void;
  navigator: Navigator
}

class TabsView extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  /**
   * TabBar 选择切换
   * @param  {[Tab]} tab [选中的Tab]
   */
  onTabSelect(tab: Tab) {
    if (this.props.tab !== tab) {
      this.props.onTabSelect(tab);
    }
  }


  render() {
    return (
      <TabBarIOS tintColor={Colors.colorPrimary} >
        <Icon.TabBarItem
          title="通知公告"
          iconName="ios-mail-outline"
          selectedIconName="ios-mail"
          selected={this.props.tab === 'post'}
          onPress={this.onTabSelect.bind(this, 'post')}
          >
          <PostView navigator={this.props.navigator} />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="校园资讯"
          iconName="ios-chatboxes-outline"
          selectedIconName="ios-chatboxes"
          selected={this.props.tab === 'info'}
          onPress={this.onTabSelect.bind(this, 'info')}
          >
          <Info navigator={this.props.navigator} />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="系统设置"
          iconName="ios-settings-outline"
          selectedIconName="ios-settings"
          selected={this.props.tab === 'setting'}
          onPress={this.onTabSelect.bind(this, 'setting')}
          >
          <Setting navigator={this.props.navigator} />
        </Icon.TabBarItem>
      </TabBarIOS>
    )
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
})

export default TabsView
