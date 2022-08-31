import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const Input = ({onChangeNumber,number}) => {
//   const [text, onChangeText] = useState("Useless Text");
//   const [number, onChangeNumber] = useState(null);

  return (
    <SafeAreaView style={styles.inputBox}>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        value={number}
        // placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    inputBox:{
        // flex:1,
        // flexDirection:'row',
    },
  input: {
    height: 60,
    width:400,
    // borderWidth: 0.5,
    padding: 10,
  },
});

export default Input;