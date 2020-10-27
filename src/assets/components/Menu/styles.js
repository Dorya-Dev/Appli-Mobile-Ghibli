import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
  },

  input: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  niv1: {
    fontSize: 30,
    textAlign: 'center',
  },
  niv2: {
    fontSize: 30,

    color: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffecef',
    height: 40,
    width: 120,
    justifyContent: 'center',
  },
});
export default styles;
