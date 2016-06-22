/**
*  @flow
*/

'use strict';

import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component, PropTypes } from 'react';
import Button from 'apsl-react-native-button';
import Colors from '../common/Colors';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';

type Props = {
  onLoginSuccess: (id: string) => void;
  onLoginError: () => void;
}

class SigninView extends Component {
  props: Props;

  state: {
    username: string,
    password: string,
    isLoading: boolean
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoading: false
    }
  }

  /**
   * 登录
   * @return {[void]}
   */
   _signingIn() {
    const stopLoading = () => this.setState({isLoading: false});
    const { onLoginSuccess, onLoginError } = this.props
    // Show spinner
    this.setState({isLoading: true});

    fetch('http://220.165.8.15:5000/login/')
    .then((response) => response.text())
    .then((responseText) => {
      console.log(responseText);
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.header} /* Logo */ >
        </View>
        <View style={styles.title}  /* 标题 */ >
        <Text style={{fontSize: 20}} > 云南省华夏中等专业学校 </Text>
        <Text style={{fontSize: 20, marginTop: 10}} > 综合办公自动化系统手机端 </Text>
        </View>
        <View style={styles.inputs} /* 输入组件 */  >
          <View style={styles.inputContainer} /* 用户名 */ >
            <Icon name="ios-person" size={24} color={Colors.colorPrimary} />
            <TextInput
              style={[styles.input, styles.greyFont]}
              placeholder="请输入OA系统用户名"
              placeholderTextColor="darkgray"
              onChangeText={(text) => this.setState({username: text})}
              value={this.state.username}
            />
          </View>
          <View style={styles.inputContainer} /* 密码 */ >
            <Icon name="ios-lock" size={22} color={Colors.colorPrimary} />
            <TextInput
              password={true}
              style={[styles.input, styles.greyFont]}
              placeholder="请输入OA系统登录密码"
              placeholderTextColor="darkgray"
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
            />
          </View>
          <View style={styles.signin} /* 登录按钮 */ >
            <Button
              style={{backgroundColor: Colors.colorPrimary, borderColor: 'darkgray'}}
              textStyle={{fontSize: 18, color: 'white'}}
              isLoading={this.state.isLoading}
              activityIndicatorColor='white'
              onPress={() => this._signingIn()} >
              登录
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 26
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: .4,
    backgroundColor: 'transparent'
  },
  title: {
    alignItems: 'center',
    flex: .15,
  },
  inputs: {
    flex: .45
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 25,
    marginLeft: 10,
    paddingBottom: 0
  },
  signin: {
    backgroundColor: 'transparent',
    marginTop: 20
  },
  greyFont: {
    color: 'darkgray'
  },
})

export default SigninView
