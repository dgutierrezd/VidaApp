import React from 'react';
import {SafeAreaView} from 'react-native';
import Sentimiento from './Sentimiento';

const Tristeza = props => {
  return (
    <SafeAreaView>
      <Sentimiento
        navigation={props.navigation}
        sentimiento="tristeza"
        descripcion="Aparece ante la pérdida o el dolor"
        route={require('../assets/img/tristeza.png')}
        color="#30A1E9"
        video="P7m3SPCqFSs"
      />
    </SafeAreaView>
  );
};

export default Tristeza;
