import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const Title = ({title}) => {

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} >
        {title}
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    textAlign:"center",
    marginVertical:30,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default Title;