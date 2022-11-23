import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import Landing from './Landing';

const Introduccion = props => {
  return (
    <Landing navigation={props.navigation}>
      <ScrollView style={{marginHorizontal: 20}}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>
            Introducción
          </Text>
          <Button
            style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10}}
            title="Qué es?"
            onPress={() => props.navigation.navigate('QueEs')}
          />
        </View>
        <Text>
          El suicidio es y será una problemática que ha llamado el interés por
          diferentes organizaciones y comunidades. Cada vez más se ha hecho
          evidente este fenómeno, puesto que se ha detectado un aumento en el
          número de personas que cometen suicidio o intentas acciones
          autoinflingidas, los adolescentes (15-24 años) y adultos jóvenes
          (30-45 años). Según el libro de Organización Mundial de la Salud de
          2014 titulado “La prevención del suicidio: un imperativo mundial” la
          prevención del suicidio requiere de esfuerzos coordinados y de la
          colaboración de múltiples sectores de la sociedad, donde las entidades
          públicas y privadas deben manifestar su interés de ayudar. Asimismo,
          se requiere de la participación de sectores sanitarios y no sanitarios
          como las instituciones educativas, las empresas, la política, la
          defensa y por supuesto los medios de comunicación. En síntesis, el
          objetivo final es poder generar esfuerzo y acciones integradas que
          propenden por el cuidado, atención, información y seguimiento tanto a
          los intentos suicidas y a las acciones consumadas.
        </Text>
        <Text>
          Teniendo en cuenta lo antes planteado, esta investigación pretende
          aporta a esta problemática desde el diseño de un prototipo de app de
          carácter informativa y educativa, para apoyar los pensamiento o
          acciones suicidas de población estudiantil de entre los 15 y 24 años
          de edad. Haciendo uso de las TICs y en este caso particular las apps,
          como estrategia innovadora y cautivadora teniendo en cuenta el uso
          constante de la población a estas aplicaciones.
        </Text>
        <Text style={{fontSize: 24, fontWeight: 'bold', marginVertical: 10}}>
          Justificación
        </Text>
        <Text>
          La conducta suicida es un conjunto de eventos complejos, que pueden
          afectar a personas de cualquier edad o condición; cuando se manifiesta
          como el suicidio consumado, tiene consecuencias devastadoras para el
          individuo, su familia y comunidad, y sus efectos son duraderos. Los
          pensamientos y acciones suicidas se encuentran asociados a diversos
          factores de riesgo, que pueden ser intervenidos con acciones
          específicas que, abarquen el espectro de la promoción de la salud
          mental, la prevención y atención a los problemas y trastornos
          mentales; involucrando a diferentes sectores e instituciones y a la
          sociedad civil, que permita evitar así los desenlaces fatales. Para la
          Torre, Castillo, Arambarri, López- Coronado y Franco (2017) “las
          comunidades juegan un papel clave en la prevención del suicidio:
          pueden brindar apoyo social a las personas más vulnerables (…)” (pág.
          2). Es claro que, como comunidad educativa, estamos llamados a
          identificar de manera temprana algunos comportamiento, situaciones o
          estados de ánimo que puedan desencadenar una acción suicida. En ese
          sentido, estos Torre, et al., (2017) plantean que “Las tecnologías de
          la información y las comunicaciones (TIC) pueden proporcionar
          innovaciones para apoyar el trabajo de los profesionales de la salud
          para abordar este problema” (pág.2). Derivado de lo anterior, y con el
          fin de aprovechar las características y potencialidades del uso de
          aplicaciones móviles, surge la siguiente pregunta de investigación:
          ¿Qué características o componentes debe tener un prototipo de APP que
          puede direccionarse para la prevención de pensamientos y acciones
          suicidas en estudiantes de la Universidad Autónoma de Manizales?
        </Text>
      </ScrollView>
    </Landing>
  );
};

export default Introduccion;
