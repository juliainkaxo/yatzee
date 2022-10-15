import React from 'react';
import { Text, View, Pressable } from 'react-native'; 
import Entypo from "@expo/vector-icons/Entypo"
import styles from '../style/style'
import { useState, useEffect, useCallback } from 'react';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

let board = [];
const NBR_OF_DICES = 5;
const NBR_OF_THROWS = 3; 

export default function Gameboard() { 
    const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
    const [status, setStatus] = useState('');
    const [total, setTotal] = useState(0);
    const [sum, setSum] = useState(0);
    const [selectedDices, setSelectedDices] =
        useState(new Array(NBR_OF_DICES).fill(false));

    const row = [];
    for (let i = 0; i < NBR_OF_DICES; i++) {
            row.push(
                <Pressable 
                    key={"row" + i}
                    onPress={() => selectDice(i)}>
                    <MaterialCommunityIcons
                        name={board[i]}
                        key={"row" + i}
                        size={70}
                        color={getDiceColor(i)}/>
                    </Pressable>
     );   
}

function getDiceColor(i) {
  if (board.every((val, i, arr) => val === arr[0])) {
    return "orange";
  }
  else {
    return selectedDices[i] ? "black" : "steelblue";
  }
}

function selectDice(i) {
  let dices = [...selectedDices];
  dices[i] = selectedDices[i] ? false : true;
  setSelectedDices(dices);
}

function throwDices(selectDice) {

let sum = 0; 
  for (let i = 0; i < NBR_OF_DICES; i++) {
    if (!selectedDices[i]) {
      let randomNumber = Math.floor(Math.random() * 6 + 1);
      board[i] = 'dice-' + randomNumber;
      sum = board[randomNumber];
  }
    setSum(sum);
  }
  setNbrOfThrowsLeft(nbrOfThrowsLeft-1);
}


function chechThrows() {
  if (board.every((val, i , arr) => val === arr[0]) && nbrOfThrowsLeft > 0) {

    setStatus('Game has not started yet');
  }
  else if (board.every((val, i , arr) => val === arr[0]) && nbrOfThrowsLeft === 0) {
    setStatus('All same numbers!');
    setSelectedDices(new Array(NBR_OF_DICES).fill(false));
}
  else if (nbrOfThrowsLeft === 0) {
    setStatus('Choose the numbers you want to choose from below');
    setSelectedDices(new Array(NBR_OF_DICES).fill(false));
  }
  else { 
    setStatus('Keep on throwing');
  }
}


useEffect (() => {
  chechThrows();

  if (nbrOfThrowsLeft < 0) {
    setNbrOfThrowsLeft(NBR_OF_THROWS-1);
  }
}, [nbrOfThrowsLeft]);

return(
    <View style={styles.gameboard}>
              <View style={styles.flex}>{row}</View>
      <Text style={styles.gameinfo}> Throws left: {nbrOfThrowsLeft}</Text> 
      <Text style={styles.gameinfo}>{status}</Text> 
      <Text style={styles.gameinfo}>Total sum is:{sum}</Text> 
      <Pressable style={styles.button}
        onPress={() => throwDices()}>
          <Text style={styles.buttonText}>
            Throw dices
          </Text>
      </Pressable>

      <Pressable style={styles.button2}
        onPress={() => selectDice('dice-1')}>
          <Text style={styles.buttonText}>
            1
          </Text>
      </Pressable>
            <Pressable style={styles.button2}
        onPress={() => selectDice(2)}>
          <Text style={styles.buttonText}>
            2
          </Text>
      </Pressable>
            <Pressable style={styles.button2}
        onPress={() => selectDice(3)}>
          <Text style={styles.buttonText}>
          3
          </Text>
      </Pressable>
            <Pressable style={styles.button2}
        onPress={() => selectDice(4)}>
          <Text style={styles.buttonText}>
           4
          </Text>
      </Pressable>
            <Pressable style={styles.button2}
        onPress={() => selectDice(4)}>
          <Text style={styles.buttonText}>
            5
          </Text>
      </Pressable>
            <Pressable style={styles.button2}
        onPress={() => selectDice(i)}>
          <Text style={styles.buttonText}>
            6
          </Text>
      </Pressable>
      
      

    </View>
  );
}