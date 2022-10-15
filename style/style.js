import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(95, 215, 246)'
  },
  header: {
    marginTop: 60,
    marginBottom: 10,
    backgroundColor: 'rgb(47, 246, 48)',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 20,
    backgroundColor: 'rgb(47, 246, 48)',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: 'rgb(95, 215, 246)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: 'rgb(95, 215, 246)',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: 'rgb(47, 246, 48)',
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20
  },
    button2: {
    margin: 5,
    flexDirection: "row",
    padding: 8,
    backgroundColor: 'rgb(47, 246, 48)',
    width: 40,
    borderRadius: 100,
    justifyContent: 'center'
  },
});