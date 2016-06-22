/**
 *  @flow
 */

'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Signin from './containers/Signin';
import Navigator from './Navigator';
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';

class Hxzz extends Component {


  render() {
    if (!this.props.isLoggedIn) {
      return <Signin />;
    }

    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="light-content"
         />
        <Navigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
}

export default connect(mapStateToProps)(Hxzz)
