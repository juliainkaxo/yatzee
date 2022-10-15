import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import uuid from 'react-uuid';
// installitkomennot:
// npm install react-uuid 

export default function App() {
  const NBR_OF_DICES = 5; 
  const [sumOfDices, setSumOfDices] = useState(0);
  const [diceImages, setDiceImages] = useState([]);

function initialize() {
  let imgs = []; 
  for (let i = 0; i < NBR_OF_DICES; i++) {
    imgs[i] = require("./assets/dice-images/smiley.png");
  }
  setDiceImages(imgs);
}

function setImages(throws) {
  let imgs = [];
  for (let i = 0; i < throws.length; i++) {
    switch (throws[i]) {
      case 1: imgs[i] = require("./assets/dice-images/1.png"); break;
      case 2: imgs[i] = require("./assets/dice-images/2.png"); break;
      case 3: imgs[i] = require("./assets/dice-images/3.png"); break;
      case 4: imgs[i] = require("./assets/dice-images/4.png"); break;
      case 5: imgs[i] = require("./assets/dice-images/5.png"); break;
      case 6: imgs[i] = require("./assets/dice-images/6.png"); break;
      default: break;
    }
  }
  setDiceImages(imgs);
}

function throwDices() {
  let throws = []; 
  let sum = 0; 
  for (let i = 0; i < NBR_OF_DICES; i++) {
    throws[i] = Math.floor(Math.random() * 6 + 1); 
    sum += throws[i];
  }
  setSumOfDices(sum);
  setImages(throws); 
}

useEffect(() => {
  initialize();
}, []); 

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Sum of Dices</Text>
      <View style={styles.flex}>
        {diceImages.map(dice => (
          <Image style={styles.dice} source={dice} key={uuid()}/>
        ))}
      </View>
      <Button 
      style={styles.button}
      onPress={throwDices}
      title="Throw dices">
      </Button>
      <Text style={styles.sum}>Sum of dices is {sumOfDices}</Text>
      <StatusBar style="auto" />  

    </View>
  );
}
