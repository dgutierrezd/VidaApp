import React from 'react';
import {SafeAreaView} from 'react-native';
import Sentimiento from './Sentimiento';

const Miedo = props => {
  return (
    <SafeAreaView>
      <Sentimiento
        navigation={props.navigation}
        sentimiento="miedo"
        descripcion="Aparece ante amenzas o peligros"
        route={require('../assets/img/miedo.png')}
        color="#755AC6"
      />
    </SafeAreaView>
  );
};

export default Miedo;
