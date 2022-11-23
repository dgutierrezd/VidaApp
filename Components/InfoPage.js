import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import Landing from './Landing';

const InfoPage = props => {
  return (
    <Landing navigation={props.navigation}>
      <View
        style={{
          backgroundColor: '#e3e3e3',
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}>
        <ImageBackground
          source={require('../assets/img/logo-vidaapp.png')}
          resizeMode="cover"
          imageStyle={{opacity: 0.1}}>
          <View style={{alignItems: 'center', marginTop: 210}}>
            <Image
              style={{width: 180, height: 180, alignSelf: 'center'}}
              source={require('../assets/img/peopleFlowers.png')}
            />
            <View
              style={[
                {
                  width: 300,
                  height: 150,
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                {backgroundColor: '#30A1E9'},
              ]}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'white',
                  width: 230,
                  textAlign: 'center',
                }}>
                Fija tus ojos hacia adelante en lo qué puedes hacer, no hacia
                atrás en lo que no puedes cambiar
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  fontWeight: '900',
                  marginTop: 10,
                  textTransform: 'uppercase',
                }}>
                #ESTÁBIENPEDIRAYUDA
              </Text>
            </View>
            <Image
              style={{width: 80, height: 60, marginTop: 50, marginBottom: 20}}
              source={require('../assets/img/lineaVida.png')}
            />
          </View>
        </ImageBackground>
      </View>
    </Landing>
  );
};

export default InfoPage;
