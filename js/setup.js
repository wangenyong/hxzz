/**
* @flow
*/

'use strict'

import Hxzz from './Hxzz';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class Setup extends Component {
  state: {
    isLoading: boolean;
    store: () => void;
  };

  /**
   * 初始化操作
   */
  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({isLoading: false})),
    };
  }

  /**
   * 根据isLoading状态显示界面
   * @return 渲染后的界面
   */
  render() {
    if (this.state.isLoading) {
      return null;
    }
    return (
      <Provider store={this.state.store}>
      <Hxzz />
      </Provider>
    );
  }
}

export default Setup
