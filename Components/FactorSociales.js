import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import Landing from './Landing';

const señales = [
  'Siento que a mi alrededor me rechazan y juzgan por mi orientación sexual.',
  'Me siento mal o triste de no poder acceder a la carrera que deseo o anhelo estudiar.',
  'El hecho de haber vivido en un entorno marcado por la guerra y la violencia me afectó emocionalmente a mí y a mi familia.',
];

const FactorSociales = props => {
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
        <Text style={{marginBottom: 5}}>
          Soy victima constante de Bullying y no sé qué hacer.
        </Text>
        {señales.map((señal, index) => (
          <Text key={index} style={{marginBottom: 5}}>
            * {señal}
          </Text>
        ))}
      </ScrollView>
    </Landing>
  );
};

export default FactorSociales;
