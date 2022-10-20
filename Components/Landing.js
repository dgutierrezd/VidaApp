import React from 'react';
import {View} from 'react-native';
import Footer from './Footer';
import Header from './Header';

const Landing = ({children}) => {
  return (
    <View>
      {children}
      <Footer />
    </View>
  );
};

export default Landing;
