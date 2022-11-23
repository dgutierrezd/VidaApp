import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import Landing from './Landing';

const señales = [
  'La violencia constante en mi entorno familiar me afecta.',
  'Siento que en mi casa no cuento con alguien que me ayude, oriente o escuche cuando tengo un inconveniente.',
  'El hecho de haber tenido que salir de mi casa e irme a estudiar o a trabajar a otra ciudad ha afectado mi estado de ánimo.',
];

const FactorFamiliares = props => {
  return (
    <Landing navigation={props.navigation}>
      <Button
        title="Volver"
        onPress={() => props.navigation.navigate('Acciones')}
      />
      <ScrollView style={{marginHorizontal: 20}}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>
            Señales de alarma
          </Text>
        </View>
        {señales.map((señal, index) => (
          <Text key={index} style={{marginBottom: 5}}>
            * {señal}
          </Text>
        ))}
      </ScrollView>
    </Landing>
  );
};

export default FactorFamiliares;
