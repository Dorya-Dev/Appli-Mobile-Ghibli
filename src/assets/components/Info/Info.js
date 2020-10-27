import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import {Card} from 'react-native-elements';

function Info() {
  const [people, setPeople] = useState([]);

  const DisplayPeople = people.map((value, index) => (
    <View key={index} style={styles.cardView}>
      <Card containerStyle={styles.bgCard}>
        <View>
          <Text style={styles.name}>
            {value.name} - {value.gender}
          </Text>

          <Text style={styles.age}>Age : {value.age}</Text>
          <Card.Divider />
          <Card.Image
            source={require('../../images/studio-ghibli.png')}
            style={styles.image}
          />
        </View>
      </Card>
    </View>
  ));
  useEffect(() => {
    getPeople();
  }, []);

  function getPeople() {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch('https://ghibliapi.herokuapp.com/people/', options)
      .then((response) => {
        return response.json();
      })
      .then(
        (people) => {
          console.log(people);
          if (people) {
            setPeople(people);
          }
        },
        (error) => {
          console.log(error);
        },
      );
  }
  return (
    <View style={styles.main}>
      <View style={styles.main}>
        <ImageBackground
          style={styles.bg}
          source={require('../../images/ghibli.jpg')}>
          <View style={styles.main2}>
            <ScrollView horizontal={false} style={styles.scroll}>
              <Image
                style={styles.bg1}
                source={require('../../images/z.png')}
              />
              <Text style={styles.title}> Personnages</Text>
              <View style={styles.but}>
                <TouchableOpacity style={styles.button}>
                  <Text>Connexion</Text>
                </TouchableOpacity>
              </View>
              {DisplayPeople}
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}
export default Info;
