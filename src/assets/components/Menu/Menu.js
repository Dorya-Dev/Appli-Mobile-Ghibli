import React from 'react';
import styles from './styles';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Menu() {
  {
    getDetails = async () => {
      try {
        console.log('Success');
        const data = await AsyncStorage.getItem('data');
        console.log(data);
      } catch (e) {
        console.log('Wrong');
        // read error
      }

      console.log('Done.');
    };
    const handleData = (value) => {
      getDetails(value);
    };
  }
  return (
    <View style={styles.main}>
      <ImageBackground
        style={styles.bg}
        source={require('../../images/set.jpg')}>
        <View style={styles.menu}>
          <Text style={styles.niv1}> Connexion </Text>
        </View>
        <View style={styles.input}>
          <View style={styles.input1}>
            <Text style={styles.niv2}> Nom : </Text>
            <TextInput style={styles.text} />
          </View>
          <View style={styles.input1}>
            <Text style={styles.niv2}> Prénom : </Text>
            <TextInput style={styles.text} />
          </View>
          <View style={styles.input1}>
            <Text style={styles.niv2}> Email : </Text>
            <TextInput style={styles.text} />
          </View>
          <View style={styles.input1}>
            <Text style={styles.niv2}> Mot de passe : </Text>
            <TextInput style={styles.text} />
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.txt}>Soumettre</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default Menu;
