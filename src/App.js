import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Accueil from './assets/components/Accueil/Accueil';
import Info from './assets/components/Info/Info';
import Menu from './assets/components/Menu/Menu';

function App() {
  const Nav = createDrawerNavigator();

  return (
    <View style={styles.mainView}>
      <NavigationContainer>
        <Nav.Navigator
          initialRouteName="Accueil"
          openByDefault={false}
          drawerType="slide">
          <Nav.Screen
            name="Accueil"
            component={Accueil}
            options={{title: 'Accueil'}}
          />
          <Nav.Screen name="Menu" component={Menu} options={{title: 'Menu'}} />
          <Nav.Screen name="Info" component={Info} options={{title: 'Info'}} />
        </Nav.Navigator>
      </NavigationContainer>
    </View>
  );
}
export default App;
