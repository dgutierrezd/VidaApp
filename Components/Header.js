import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Header = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
      }}>
      <TouchableOpacity
        style={{flexDirection: 'column'}}
        onPress={() => props.navigation.openDrawer()}>
        <View
          style={{
            height: 2,
            width: 30,
            backgroundColor: '#755AC6',
            marginBottom: 4,
          }}></View>
        <View
          style={{
            height: 2,
            width: 30,
            backgroundColor: '#755AC6',
            marginBottom: 4,
          }}></View>
        <View style={{height: 2, width: 30, backgroundColor: '#755AC6'}}></View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 100,
          height: 30,
          backgroundColor: '#755AC6',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
