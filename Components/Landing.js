import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Footer from './Footer';
import Header from './Header';

const Landing = props => {
  const {navigation, children} = props;

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginBottom: 15,
        }}>
        <TouchableOpacity
          style={{flexDirection: 'column', justifyContent: 'center'}}
          onPress={() => navigation.openDrawer()}>
          <View
            style={{
              width: 20,
              height: 1,
              backgroundColor: '#755AC6',
              marginBottom: 3,
            }}
          />
          <View
            style={{
              width: 20,
              height: 1,
              backgroundColor: '#755AC6',
              marginBottom: 3,
            }}
          />
          <View style={{width: 20, height: 1, backgroundColor: '#755AC6'}} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: 15, height: 15, marginRight: 10}}
            source={require('../assets/img/searchIcon.png')}
          />
          <Image
            style={{width: 15, height: 15, marginRight: 10}}
            source={require('../assets/img/userIcon.png')}
          />
          <Image
            style={{width: 15, height: 15, marginRight: 10}}
            source={require('../assets/img/messagesIcon.png')}
          />
          <TouchableOpacity
            style={{
              width: 80,
              height: 20,
              backgroundColor: '#755AC6',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 8,
                color: 'white',
                textAlign: 'center',
              }}>
              REGISTRARSE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {children}
    </SafeAreaView>
  );
};

export default Landing;
