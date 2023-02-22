import React, {useCallback, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Landing from './Landing';

const Sentimiento = props => {
  const [playing, setPlaying] = useState(false);
  const [openYoutube, setOpenYoutube] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  return (
    <Landing navigation={props.navigation}>
      <View style={styles.containerBackground}>
        <ImageBackground
          source={require('../assets/img/logo-vidaapp.png')}
          resizeMode="cover"
          imageStyle={{opacity: 0.1}}>
          {openYoutube ? (
            <View style={{marginTop: 200}}>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={props.video}
                onChangeState={onStateChange}
              />
              <Button onPress={() => setOpenYoutube(false)} title="Cerrar" />
            </View>
          ) : (
            <View style={styles.container}>
              <TouchableOpacity onPress={() => setOpenYoutube(!!props.video)}>
                <Image style={styles.sentimientoImage} source={props.route} />
              </TouchableOpacity>
              <View
                style={[styles.containerText, {backgroundColor: props.color}]}>
                <Text style={styles.title}>{props.sentimiento}</Text>
                <Text style={styles.description}>{props.descripcion}</Text>
              </View>
              <Image
                style={styles.logo}
                source={require('../assets/img/logo-vidaapp.png')}
              />
            </View>
          )}
        </ImageBackground>
      </View>
    </Landing>
  );
};

const styles = StyleSheet.create({
  containerBackground: {
    backgroundColor: '#e3e3e3',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  container: {alignItems: 'center', marginTop: 210},
  sentimientoImage: {width: 180, height: 180, alignSelf: 'center'},
  containerText: {
    width: 300,
    height: 150,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 34,
    color: 'white',
    fontWeight: '900',
    marginTop: 10,
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  description: {
    fontSize: 18,
    color: 'white',
    width: 230,
    textAlign: 'center',
  },
  logo: {width: 80, height: 60, marginTop: 50, marginBottom: 20},
});

export default Sentimiento;
