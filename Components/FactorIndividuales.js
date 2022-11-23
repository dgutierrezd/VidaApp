import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import Landing from './Landing';

const señales = [
  'Me siento triste constantemente (depresión).',
  'Consumo o abuso de ciertas sustancias.',
  'Me siento ansioso sin saber el porqué, no hay una razón aparente.',
  'Tengo dificultad para conectarme emocionalmente con mis familiares, pares, amigos o con la pareja sentimental',
  'He intentado suicidarme y soy conciente de ello.',
  'He me herido a mí mismo.',
  'No veo nada bueno en mí.',
];

const FactorIndividuales = props => {
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

export default FactorIndividuales;
