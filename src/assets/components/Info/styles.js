import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  bg1: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 50,
  },
  main: {
    flex: 1,
  },

  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  bgCard: {
    flex: 1,
    backgroundColor: '#ffecef',
    borderRadius: 15,
  },
  cardView: {
    borderRadius: 15,
    flex: 1,
  },
  image: {
    flex: 2,
    resizeMode: 'cover',
    zIndex: 1,
  },
  name: {
    fontSize: 25,
  },
  age: {
    fontSize: 20,
  },
});
export default styles;
