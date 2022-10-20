import React from 'react';
import {SafeAreaView} from 'react-native';
import Sentimiento from './Sentimiento';

const Tristeza = () => {
  return (
    <SafeAreaView>
      <Sentimiento
        sentimiento="tristeza"
        descripcion="Aparece ante la pérdida o el dolor"
        route={require('../assets/img/tristeza.png')}
        color="#30A1E9"
      />
    </SafeAreaView>
  );
};

export default Tristeza;
