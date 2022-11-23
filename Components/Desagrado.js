import React from 'react';
import {SafeAreaView} from 'react-native';
import Sentimiento from './Sentimiento';

const Desagrado = props => {
  return (
    <SafeAreaView>
      <Sentimiento
        navigation={props.navigation}
        sentimiento="desagrado"
        descripcion="Aparece hacia algo o alguien"
        route={require('../assets/img/desagrado.png')}
        color="#86CA00"
      />
    </SafeAreaView>
  );
};

export default Desagrado;
