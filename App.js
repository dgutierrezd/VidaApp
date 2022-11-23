import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from './Components/MyDrawer';

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
