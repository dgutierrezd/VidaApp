import React from 'react';
import {SafeAreaView} from 'react-native';
import Sentimiento from './Sentimiento';

const Sorpresa = props => {
  return (
    <SafeAreaView>
      <Sentimiento
        navigation={props.navigation}
        sentimiento="sorpresa"
        descripcion="Cuando ocurre algo que no esperamos"
        route={require('../assets/img/sorpresa.png')}
        color="#FF7C00"
      />
    </SafeAreaView>
  );
};

export default Sorpresa;
