import React from 'react';
import {SafeAreaView} from 'react-native';
import Sentimiento from './Sentimiento';

const Enojo = () => {
  return (
    <SafeAreaView>
      <Sentimiento
        sentimiento="enojo"
        descripcion="Aparece cuando algo nos disgusta o cuando no logramos lo que queremos"
        route={require('../assets/img/enojo.png')}
        color="#EF2634"
      />
    </SafeAreaView>
  );
};

export default Enojo;
