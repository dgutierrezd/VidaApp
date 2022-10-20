import React from 'react';
import {SafeAreaView} from 'react-native';
import Sentimiento from './Sentimiento';

const Desagrado = () => {
  return (
    <SafeAreaView>
      <Sentimiento
        sentimiento="desagrado"
        descripcion="Aparece hacia algo o alguien"
        route={require('../assets/img/desagrado.png')}
        color="#86CA00"
      />
    </SafeAreaView>
  );
};

export default Desagrado;
