import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Landing from './Landing';

const Ingreso = props => {
  return (
    <Landing navigation={props.navigation}>
      <Image
        style={{width: 250, height: 250, alignSelf: 'center', marginTop: 50}}
        source={require('../assets/img/logo.png')}
      />
      <View style={{alignItems: 'center', marginTop: 250}}>
        <TouchableOpacity
          style={{
            width: 300,
            height: 50,
            backgroundColor: '#755AC6',
            borderRadius: 50,
            justifyContent: 'center',
          }}
          onPress={() => props.navigation.navigate('Login')}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
            }}>
            Ingresa
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 300,
            height: 50,
            borderColor: '#755AC6',
            borderWidth: 2,
            borderRadius: 50,
            justifyContent: 'center',
            marginTop: 20,
          }}
          onPress={() => props.navigation.navigate('Registro')}>
          <Text
            style={{
              textAlign: 'center',
            }}>
            Regístrate
          </Text>
        </TouchableOpacity>
      </View>
    </Landing>
  );
};

export default Ingreso;
