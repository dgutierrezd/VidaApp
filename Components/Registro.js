import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Registro = props => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <Image
        style={{width: 200, height: 150, marginTop: 30}}
        source={require('../assets/img/logo-vidaapp.png')}
      />
      <Text
        style={{
          color: '#755AC6',
          fontWeight: '900',
          fontSize: 20,
          marginTop: 30,
          marginBottom: 50,
        }}>
        PERFIL DEL USUARIO
      </Text>
      <Text style={{color: '#755AC6', marginTop: 12}}>Nombre y Apellido</Text>
      <TextInput
        style={{
          width: 250,
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          borderRadius: 50,
          borderColor: '#755AC6',
        }}
        onChangeText={setNombre}
        value={nombre}
      />
      <Text style={{color: '#755AC6', marginTop: 12}}>Correo</Text>
      <TextInput
        style={{
          width: 250,
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          borderRadius: 50,
          borderColor: '#755AC6',
        }}
        onChangeText={setCorreo}
        value={correo}
      />
      <Text style={{color: '#755AC6', marginTop: 12}}>Contraseña</Text>
      <TextInput
        style={{
          width: 250,
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          borderRadius: 50,
          borderColor: '#755AC6',
        }}
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate('Ingreso')}>
        <Text style={{color: '#755AC6', marginTop: 20}}>
          R<Text style={{textDecorationLine: 'underline'}}>egistrarm</Text>e
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Registro;
