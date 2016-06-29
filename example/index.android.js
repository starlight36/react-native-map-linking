/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import MapLinking from 'react-native-map-linking';

class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {MapLinking.markLocation({lat: 40, lng: 118}, 'aaa', 'bbb')}}>
          <View style={styles.button}>
            <Text style={styles.text}>在地图上标记位置</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {MapLinking.planRoute({lat:40, lng: 118, title: '起点'}, {lat:40, lng: 119, title: '终点'}, 'drive')}}>
          <View style={styles.button}>
            <Text style={styles.text}>规划线路</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {MapLinking.navigate({lat:40, lng: 118, title: '终点'})}}>
          <View style={styles.button}>
            <Text style={styles.text}>导航</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    padding: 10,
    backgroundColor: '#3B5998',
    marginBottom: 10,
  },
  text: {
    color: 'white',
  },
});

AppRegistry.registerComponent('Example', () => Example);
