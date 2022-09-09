import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from './src/firebaseConnection';

export default function App() {

  const [nome,SetNome] = useState("");

  useEffect (()=>{
    
    async function buscarDados(){
      
      await firebase.database().ref('Alunos/1/Nome').on('value', (snapshot) => {
        
        SetNome(snapshot.val());
      })
    }
    
    buscarDados();

  },[]) 
  
  return (
    <View style={styles.container}>
      <Text>{nome}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
