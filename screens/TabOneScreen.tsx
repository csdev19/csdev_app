import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { Appearance } from 'react-native'


let colorLetter = 'white';
const colorScheme = Appearance.getColorScheme();
console.log('colorScheme', colorScheme);
if (colorScheme === 'dark') {
  colorLetter = 'white';
  // Use dark color scheme
} else if(colorScheme === 'light') {
  // Use normal color scheme
  colorLetter = 'black';

}


export default function TabOneScreen() {
  const url = 'https://s3.us-east-2.amazonaws.com/csdev19.personal/logo1.png';

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: url }} style={styles.image} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.subtitle}>¡Hola a todos!</Text>
        <Text style={styles.title}>Soy Cristian Sotomayor</Text>
      </View>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colorLetter, //'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colorLetter, //'white',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: "contain"
  },
  imageContainer: {
    width: '100%',
    height: '50%'
  },
  titleContainer: {
    marginBottom: 20,
    marginTop: 20,
  }
});

