import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import Landing from './Landing';

const Sentimiento = props => {
  return (
    <Landing>
      <View style={styles.containerBackground}>
        <ImageBackground
          source={require('../assets/img/logo-vidaapp.png')}
          resizeMode="cover"
          imageStyle={{opacity: 0.1}}>
          <View style={styles.container}>
            <Image style={styles.sentimientoImage} source={props.route} />
            <View
              style={[styles.containerText, {backgroundColor: props.color}]}>
              <Text style={styles.title}>{props.sentimiento}</Text>
              <Text style={styles.description}>{props.descripcion}</Text>
            </View>
            <Image
              style={styles.logo}
              source={require('../assets/img/logo-vidaapp.png')}
            />
          </View>
        </ImageBackground>
      </View>
    </Landing>
  );
};

const styles = StyleSheet.create({
  containerBackground: {
    backgroundColor: '#e3e3e3',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  container: {alignItems: 'center', marginTop: 210},
  sentimientoImage: {width: 180, height: 180, alignSelf: 'center'},
  containerText: {
    width: 300,
    height: 150,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 34,
    color: 'white',
    fontWeight: '900',
    marginTop: 10,
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  description: {
    fontSize: 18,
    color: 'white',
    width: 230,
    textAlign: 'center',
  },
  logo: {width: 80, height: 60, marginTop: 50, marginBottom: 20},
});

export default Sentimiento;
