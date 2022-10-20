import {createDrawerNavigator} from '@react-navigation/drawer';
import Alegria from './Alegria';
import Desagrado from './Desagrado';
import Enojo from './Enojo';
import Ingreso from './Ingreso';
import Miedo from './Miedo';
import Registro from './Registro';
import Sorpresa from './Sorpresa';
import Tristeza from './Tristeza';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const headerApp = {headerTitle: '', headerTintColor: '#755AC6'};

  return (
    <Drawer.Navigator initialRouteName="Ingreso">
      <Drawer.Screen name="Ingreso" component={Ingreso} options={headerApp} />
      <Drawer.Screen name="Registro" component={Registro} options={headerApp} />
      <Drawer.Screen name="Enojo" component={Enojo} options={headerApp} />
      <Drawer.Screen name="Tristeza" component={Tristeza} options={headerApp} />
      <Drawer.Screen name="Miedo" component={Miedo} options={headerApp} />
      <Drawer.Screen name="Alegria" component={Alegria} options={headerApp} />
      <Drawer.Screen name="Sorpresa" component={Sorpresa} options={headerApp} />
      <Drawer.Screen
        name="Desagrado"
        component={Desagrado}
        options={headerApp}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
