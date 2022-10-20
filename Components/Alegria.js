import React from 'react';
import {SafeAreaView} from 'react-native';
import Sentimiento from './Sentimiento';

const Alegria = () => {
  return (
    <SafeAreaView>
      <Sentimiento
        sentimiento="alegría"
        descripcion="Sensación de placer y bienestar que aparece ante situaciones agradables"
        route={require('../assets/img/alegria.png')}
        color="#FFCB00"
      />
    </SafeAreaView>
  );
};

export default Alegria;
