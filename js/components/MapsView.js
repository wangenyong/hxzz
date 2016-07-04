/**
*  @flow
*/

'use strict';

import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component, PropTypes } from 'react';
import Header from '../common/Header';
import styleUtils from '../common/styleUtils';
import Colors from '../common/Colors';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  MapView
} from 'react-native';

type Props = {
  navigator: Navigator;
  annotations: Array<Object>;
}

type State = {
  region: {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number
  }
}

class MapsView extends Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      }
    }
  }

  render() {
    var backgroundColor = Colors.colorPrimary;
    return (
      <View style={styles.container} >
        <Header
          title="位置协同"
          style={[{backgroundColor}]} />

        <View style={styles.info}>
          <Text>经度：{this.state.region.latitude.toFixed(6)}</Text>
          <Text style={{marginLeft: 10}} >纬度：{this.state.region.longitude.toFixed(6)}</Text>
        </View>

        <MapView
          style={{flex: 1}}
          regin={this.state.region}
          onRegionChange={this._onRegionChange.bind(this)}
          annotations={this.props.annotations}
          showsUserLocation={true}
          followUserLocation={true} />
      </View>
    )
  }

  _onRegionChange(region: any) {
    this.setState({
      region: region
    });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...styleUtils.containerBg
  },
  info: {
    flexDirection: 'row',
    padding: 10
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default MapsView
