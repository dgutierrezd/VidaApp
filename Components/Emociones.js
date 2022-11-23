import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import Landing from './Landing';

const listEmociones = [
  'Enojo',
  'Tristeza',
  'Miedo',
  'Alegria',
  'Sorpresa',
  'Desagrado',
];

const Emociones = props => {
  return (
    <Landing navigation={props.navigation}>
      <ScrollView style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 30,
            marginHorizontal: 20,
            textAlign: 'center',
          }}>
          Emociones
        </Text>
        {listEmociones.map((emocion, index) => (
          <Button
            key={index}
            title={emocion}
            onPress={() => props.navigation.navigate(emocion)}
          />
        ))}
      </ScrollView>
    </Landing>
  );
};

export default Emociones;
