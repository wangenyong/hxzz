/**
*  @flow
*/

'use strict';

import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component, PropTypes } from 'react';
import Button from 'apsl-react-native-button';
import Colors from '../common/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Image
} from 'react-native';

type Props = {
  onLoginSuccess: (json: Object) => void;
  onLoginError: () => void;
}

class SigninView extends Component {
  props: Props;

  state: {
    username: string,
    password: string,
    isLoading: boolean,
    error: string
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoading: false,
      error: ''
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

    fetch('http://www.ynhxzz.cn:5000/login/' + this.state.username + '/' + this.state.password)
    .then((response) => response.text())
    .then((responseText) => JSON.parse(responseText))
    .then((json) => {
      onLoginSuccess(json);
    })
    .catch((error) => {
      this.setState({isLoading: false, error: '用户名或密码错误，请检查'});
    });
  }

  render() {
    return (
      <KeyboardAwareScrollView style={styles.container} >
        <View style={styles.header} /* Logo */ >
          <Image
            source={require('./img/logo.png')} />
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
          <View style={styles.error} >
            <Text style={{color: 'red'}} >{this.state.error}</Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 50,
    marginBottom: 50
  },
  title: {
    alignItems: 'center',
  },
  inputs: {
    marginTop: 20
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
  error: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default SigninView
