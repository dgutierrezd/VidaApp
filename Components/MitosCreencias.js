import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import Landing from './Landing';

const mitosYCreencias = [
  {
    title: 'El que se quiere matar no lo dice',
    body: 'criterio equivocado, pues conduce a no prestar atención a las personas que manifiestan sus ideas suicidas o amenazan con suicidarse. El criterio científico indica que de cada 10 personas que se suicidan, nueve de ellas manifestaron, claramente, sus propósitos y la otra dejo entre ver sus intenciones de acabar con su vida.',
  },
  {
    title: 'El que lo dice no lo hace',
    body: 'criterio equivocado, ya que conduce a minimizar las amenazas suicidas, que pueden considerarse erróneamente como chantaje, manipulaciones, alardes, entre otros. El criterio científico nos dice que todo el que se suicida expresó lo que ocurría con palabras, amenazas, gestos o cambios de conducta.',
  },
  {
    title:
      'Si de verdad se hubiese querido matar, se hubiera tirado de un puente',
    body: 'criterio equivocado, que refleja la agresividad que genera estos individuos en aquellos que no están capacitados para abordarlos. El criterio científico indica que todo suicida se encuentra en una situación ambivalente, es decir, con deseos de vivir y de morir. El método elegido, no refleja los deseos de morir de quien lo utiliza y, proporcionarle, otro de mayor letalidad es calificado como un delito de auxilio suicida, penalizado por el código penal vigente.',
  },
  {
    title:
      'El sujeto que se repone de una crisis suicida no corre peligro alguno de recaer',
    body: 'criterio equivocado, que conduce a disminuir las medidas de observación estricta del sujeto y la evolución del riesgo suicida. Según el criterio científico casi la mitad de los que atravesaron por una crisis suicida y consumaron suicidio, lo llevaron a cabo después de los tres primeros intentos tras la crisis emocional, cuando todos creían que el peligro había  pasado. Lo que ocurre es que cuando la persona mejora, sus movimientos se hacen más ágiles, están en condiciones de llevar varias vías de hecho, las ideas suicidas aún persisten antes, y debido a la inactividad o incapacidad de movimiento ágiles, no podía hacerlo.',
  },
  {
    title: 'Todo el que se suicida está deprimido',
    body: 'criterio equivocado que relaciona el suicidio como sinónimo de la depresión, lo cual no se ajusta a los estrictos hallazgos. El criterio científico indica que, aunque toda persona deprimida tiene posibilidades de realizar un intento de suicidio o suicidio, no todos lo que lo hacen presentan este trastorno; la persona puede padecer esquizofrenias, alcoholismo, trastornos de carácter entre otros.',
  },
  {
    title: 'Todo el que se suicida es un enfermo mental',
    body: 'criterio equivocado que intenta encasillar el suicidio como una enfermedad mental. Como criterio científico se encuentra que los enfermos mentales se suicidan con mayor frecuencia que la población en general, pero no necesariamente hay que padecer un trastorno mental para hacerlo. No cabe ninguna duda, todo suicida es una persona que sufre.',
  },
  {
    title: 'El suicida desea morir',
    body: 'criterio equivocado que pretende justificar la muerte por suicidio de quienes lo comenten, y, por lo tanto, tarde o temprano lo llevará a cabo. Criterio científico: el suicida está en una posición ambivalente, es decir, desea morir si su vida continúa de la misma manera y desea vivir sin se produjeran pequeños cambios en ella; su se diagnóstica oportunamente esa ambivalencia, se pueden inclinar la balanza hacia la opción de vida.',
  },
  {
    title: 'El que intenta el suicidio es un cobarde',
    body: 'criterio equivocado que pretende evitar el suicidio equiparándolo con una cualidad negativa de la personalidad. Criterio científico: los que intentan el suicidio no son cobardes sino personas que sufren.',
  },
];

const MitosCreencias = props => {
  return (
    <Landing navigation={props.navigation}>
      <Button
        title="Volver"
        onPress={() => props.navigation.navigate('QueEs')}
      />
      <ScrollView style={{marginHorizontal: 20}}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>
            Mitos y Creencias
          </Text>
        </View>
        {mitosYCreencias.map((mito, index) => (
          <View key={index}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', marginVertical: 10}}>
              {mito.title}
            </Text>
            <Text>{mito.body}</Text>
          </View>
        ))}
        <View style={{marginBottom: 70}} />
      </ScrollView>
    </Landing>
  );
};

export default MitosCreencias;
