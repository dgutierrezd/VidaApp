import {createDrawerNavigator} from '@react-navigation/drawer';
import Acciones from './Acciones';
import Alegria from './Alegria';
import DatosInformacion from './DatosInformacion';
import Desagrado from './Desagrado';
import Emociones from './Emociones';
import Enojo from './Enojo';
import FactorFamiliares from './FactorFamiliares';
import FactorIndividuales from './FactorIndividuales';
import FactorSociales from './FactorSociales';
import Herramientas from './Herramientas';
import InfoPage from './InfoPage';
import Ingreso from './Ingreso';
import Introduccion from './Introduccion';
import Login from './Login';
import Miedo from './Miedo';
import MitosCreencias from './MitosCreencias';
import QueEs from './QueEs';
import Registro from './Registro';
import Sorpresa from './Sorpresa';
import Tristeza from './Tristeza';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const headerApp = {
    headerShown: false,
    drawerLabel: () => null,
    title: null,
    drawerIcon: () => null,
    drawerItemStyle: {height: 0},
  };

  const showDrawer = {
    headerShown: false,
  };

  return (
    <Drawer.Navigator initialRouteName="Ingreso">
      <Drawer.Screen
        name="Acciones"
        component={Acciones}
        options={{title: 'Acciones para brindar ayuda', headerShown: false}}
      />
      <Drawer.Screen
        name="Herramientas"
        component={Herramientas}
        options={{title: 'Herramientas para el ayudador', headerShown: false}}
      />
      <Drawer.Screen
        name="Emociones"
        component={Emociones}
        options={showDrawer}
      />
      <Drawer.Screen
        name="InfoPage"
        component={InfoPage}
        options={{title: 'Información', headerShown: false}}
      />
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
      <Drawer.Screen name="Ingreso" component={Ingreso} options={headerApp} />
      <Drawer.Screen name="Login" component={Login} options={headerApp} />
      <Drawer.Screen
        name="Introduccion"
        component={Introduccion}
        options={headerApp}
      />
      <Drawer.Screen name="QueEs" component={QueEs} options={headerApp} />
      <Drawer.Screen
        name="MitosCreencias"
        component={MitosCreencias}
        options={headerApp}
      />
      <Drawer.Screen
        name="DatosInformacion"
        component={DatosInformacion}
        options={headerApp}
      />
      <Drawer.Screen name="Registro" component={Registro} options={headerApp} />
      <Drawer.Screen
        name="FactorIndividuales"
        component={FactorIndividuales}
        options={headerApp}
      />
      <Drawer.Screen
        name="FactorFamiliares"
        component={FactorFamiliares}
        options={headerApp}
      />
      <Drawer.Screen
        name="FactorSociales"
        component={FactorSociales}
        options={headerApp}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
