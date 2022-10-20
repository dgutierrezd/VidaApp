import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from './Components/MyDrawer';
import Registro from './Components/Registro';

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
