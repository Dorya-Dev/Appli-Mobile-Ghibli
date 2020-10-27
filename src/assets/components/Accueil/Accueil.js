import styles from './styles';
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import {Card, Tile} from 'react-native-elements';

function Accueil() {
  const [data, setData] = useState([]);

  const Display = data.map((value, index) => (
    <View key={index} style={styles.cardView}>
      <Card containerStyle={styles.bgCard}>
        <View style={styles.top}>
          <Text style={styles.title}>
            {value.title} - {value.release_date}
          </Text>
          <Card.Divider />
          <Text style={styles.desc}>{value.description}</Text>
          <Card.Divider />
          <Text style={styles.rate}> Rating : {value.rt_score} /100 </Text>
          <Card.Divider />
          <View style={styles.img}>
            <Card.Image
              source={require('../../images/y.gif')}
              style={styles.image}
            />
          </View>
          {/*<Text style={styles.date}>{value.people[0].name}</Text>*/}
        </View>
      </Card>
    </View>
  ));

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch('https://ghibliapi.herokuapp.com/films', options)
      .then((response) => {
        return response.json();
      })
      .then(
        (data) => {
          console.log(data);
          if (data) {
            setData(data);
          }
        },
        (error) => {
          console.log(error);
        },
      );
  }
  return (
    <View style={styles.main}>
      <ImageBackground
        style={styles.bg}
        source={require('../../images/bg.jpg')}>
        <View style={styles.main2}>
          <ScrollView horizontal={false} style={styles.scroll}>
            <Image
              style={styles.bg}
              source={require('../../images/logo.png')}
            />
            <Text style={styles.hello}> Liste des films </Text>
            {/* <View style={styles.but}>
              <TouchableOpacity style={styles.button}>
                <Text>Connexion</Text>
              </TouchableOpacity>
            </View>*/}
            {Display}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Accueil;
