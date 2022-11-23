import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import Landing from './Landing';

const QueEs = props => {
  return (
    <Landing navigation={props.navigation}>
      <Button
        title="Volver"
        onPress={() => props.navigation.navigate('Introduccion')}
      />
      <ScrollView style={{marginHorizontal: 20}}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>
            Qué es?
          </Text>
        </View>
        <Text>
          Según la Organización Mundial de la Salud define el suicidio es “un
          fenómeno multideterminado” (OMS, 2018) y al tener esa característica
          exigen que todas las ciencias, disciplinas y campos profesionales
          renuncien a sus pretensiones de brindar explicaciones e intervenciones
          totalizantes, con el fin de establecer un diálogo interdisciplinario
          para comprender e intervenir dicho fenómeno. Teniendo en cuenta lo
          antes planteado, el suicidio consumado y los pensamientos no pueden
          verse desde una sola dimensión, el reconocimiento de los diferentes
          factores individuales, sociales y biológicos nos demandan a pensar en
          procesos de orientación holística que reconozcan al dividuo desde
          todas sus dimensiones, con el fin de poder tomar decisiones claras
          sobre cuáles son aquellas determinaciones sobre las que podemos
          incidir y cuáles están por fuera de nuestro campo de influencia.
        </Text>
        <Text style={{fontSize: 24, fontWeight: 'bold', marginVertical: 10}}>
          Determinaciones sociológicas
        </Text>
        <Text style={{marginBottom: 30}}>
          De las múltiples determinaciones que contribuyen a la comprensión y
          prevención del suicidio, las que se refieren a las dinámicas sociales
          son aquellas en las que tenemos mayores posibilidades de incidir en la
          vida cotidiana desde casi cualquier rol social, profesión u oficio.
        </Text>
        <Button
          style={{fontSize: 24, fontWeight: 'bold'}}
          title="Mitos y Creencias"
          onPress={() => props.navigation.navigate('MitosCreencias')}
        />
        <Button
          style={{fontSize: 24, fontWeight: 'bold'}}
          title="Datos e información importante"
          onPress={() => props.navigation.navigate('DatosInformacion')}
        />
      </ScrollView>
    </Landing>
  );
};

export default QueEs;
