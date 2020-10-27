import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  main: {
    flex: 1,
  },
  cardView: {
    borderRadius: 15,
  },
  bgCard: {
    backgroundColor: '#ffecef',
    borderRadius: 15,
  },
  hello: {
    flex: 1,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffecef',
    height: 40,
    width: 140,
    justifyContent: 'center',
  },
  but: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
  },
  img: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    resizeMode: 'cover',
    width: 300,
    zIndex: 10,
  },
  rate: {
    fontSize: 20,
  },
});
export default styles;
