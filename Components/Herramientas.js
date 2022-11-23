import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Landing from './Landing';

const Herramientas = props => {
  return (
    <Landing navigation={props.navigation}>
      <ScrollView style={{marginHorizontal: 20}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginVertical: 10}}>
          ¿Qué debemos hacer cuando la persona se encuentra en la clínica
          después de un intento de suicidio?
        </Text>
        <Text>
          * Facilitar toda la información posible a los profesionales que están
          atendiendo el caso, sin ocultar datos importantes que puedan ayudar a
          evaluar los motivos de la conducta suicida. Esta información puede
          ser: intentos previos de suicidios, antecedentes familiares frente a
          esta conducta suicida, trastornos mentales y tratamiento actuales,
          información sobre las circunstancias que posiblemente llegaron al
          intento suicida, etc.
        </Text>
        <Text>
          * Reconocer, aceptar y no culpabilizar a la persona por haber
          realizado esta conducta, mantener una actitud empática y de escucha
          hacia la persona.
        </Text>
        <Text>
          * Mantenerse tranquilos para no dramatizar el problema, buscar
          soluciones prácticas para la prevención de una posible repetición del
          acto.
        </Text>
        <Text>
          * Sacar provecho de la hospitalización para analizar en familia las
          posibles causas, soluciones y roles de los integrantes de la familia
          para mitigar una posible repetición del acto.
        </Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginVertical: 10}}>
          ¿Qué debemos hacer cuando una persona regresa a casa después de un
          intento suicida?
        </Text>
        <Text>
          * Tomar las recomendaciones dadas por los profesionales sanitarios.
        </Text>
        <Text>
          * No culpabilizar ni tomar represalias frente a lo ocurrido.
        </Text>
        <Text>
          * Identificar los medios que pueden generar riesgos para cometer de
          nuevo el acto.
        </Text>
        <Text>
          * Saber que esto es un proceso y que se requiere de paciencia para que
          la persona y sus familiares vuelvan a cobrar la confianza de su
          cotidianidad.
        </Text>
        <Text>
          * Proporcionar tareas en el hogar, universidad y trabajo para
          facilitar el proceso de adaptación social.
        </Text>
        <Text>
          * Acudir a psicoterapia y estar bajo control de profesionales de la
          salud mental.
        </Text>
        <Text>
          * Buscar grupos de apoyo desde sus propios intereses personales para
          retomar su día a día y que puedan contar con alguien para sentirse
          escuchado y no juzgado.
        </Text>
        <Text>
          * No subestimar el riesgo de la conducta suicida, pero tampoco estar
          pendiente de él, intentar y resignificar la vida y vivirla con mayor
          sentido.
        </Text>
        <Text>
          * El cuidador o las personas que están en un relacionamiento constante
          con la persona que cometió el acto, en lo posible tener espacios para
          recargar su energía vital o si es necesario buscar ayuda de un
          profesional, ya que esto genera tensión, desgaste físico y
          psicológico.
        </Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginVertical: 10}}>
          ¿Qué debemos hacer para ayudar a un familiar o amigo a enfrentarse a
          la muerte de un ser querido debido al suicidio?
        </Text>
        <Text>
          * No buscar culpables de lo sucedido ni hacer juicios de otras
          personas
        </Text>
        <Text>
          * Hablar con la persona   como con cualquier otra que pierde a un ser
          querido
        </Text>
        <Text>
          * Dejar que la persona se exprese y manifieste sus sentimientos y
          emociones
        </Text>
        <Text>
          * Hacerle saber que usted está preocupado y que está dispuesto a
          ayudar en lo que se requiera
        </Text>
        <Text>* Dejar que hable cuando se sienta preparado para hacerlo</Text>
        <Text>
          * Ofrecer apoyo en las actividades cotidianas, como compras, cuidado
          de niños, entre otros.
        </Text>
        <Text>
          * Apoyar, con acciones simples como un abrazo, caminar juntos, dar un
          paseo, entre otros.
        </Text>
        <Text>
          * Continuar brindando apoyo a través del tiempo en fechas
          significativas, como cumpleaños, aniversarios, entre otras.
        </Text>
        <Text>
          * Solicitar ayuda, si también usted siente que necesita apoyo, tanto
          con familia como con profesionales del área de la salud.
        </Text>
        <Text>* Decir que lo siente tan pronto como sea posible.</Text>
        <Text>
          * Hablar de la persona fallecida y de lo valiosa que era para usted.
        </Text>
        <Text>* Evitar preguntas acerca de los detalles de la muerte.</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginVertical: 10}}>
          ¿Qué debemos hacer para ayudar a la familia después de que un ser
          querido ha tenido un intento de suicidio?
        </Text>
        <Text>
          * Se debe generar un entorno de seguridad y confianza por parte de la
          familia, para que la persona se sienta apoyada y acogida en el seno
          familiar
        </Text>
        <Text>* Fomentar las habilidades de comunicación familiar.</Text>
        <Text>
          * Disminuir las situaciones que generen estrés y sobrecarga familiar.
        </Text>
        <Text>* Ayudar a la solución de problemas en el seno familiar.</Text>
        <Text>
          * Estimular la restauración de los roles sociales y familiares.
        </Text>
        <Text>
          * Romper el aislamiento social y el estigma de las familias de
          personas con enfermedad mental.
        </Text>
        <Text>
          * Se pueden crear en la ciudad escuelas de familia que responda a las
          necesidades de formación, información y apoyo información apoyo a las
          familias, amigos y allegados.
        </Text>
        <Text>
          * También se pueden generar grupos de ayuda que contribuyan a:
        </Text>
        <Text>
          * Brindar orientación a familiares de cómo afrontar los problemas de
          convivencia diaria y las situaciones de crisis.
        </Text>
        <Text>* Desarrollar conductas y actitudes positivas.</Text>
        <Text>* Incrementar las redes de apoyo social.</Text>
        <Text>
          * Vincular a los integrantes de la familia a programas de respiro
          familiar que se orientan al apoyo y respiro de la familia.
        </Text>
      </ScrollView>
    </Landing>
  );
};

export default Herramientas;
