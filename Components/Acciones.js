import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import Landing from './Landing';

const Acciones = props => {
  return (
    <Landing navigation={props.navigation}>
      <ScrollView style={{marginTop: 20}}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 30,
              marginHorizontal: 20,
              textAlign: 'center',
            }}>
            Acciones para brindar ayuda y para estar atentos
          </Text>
        </View>
        <Button
          title="Factores de Riesgo Individuales"
          onPress={() => props.navigation.navigate('FactorIndividuales')}
        />
        <Button
          title="Factores de Riesgo Familiares"
          onPress={() => props.navigation.navigate('FactorFamiliares')}
        />
        <Button
          title="Factores de Riesgo Sociales"
          onPress={() => props.navigation.navigate('FactorSociales')}
        />
      </ScrollView>
    </Landing>
  );
};

export default Acciones;
