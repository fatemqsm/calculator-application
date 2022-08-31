import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";

const Button = ({ children }) => {
//   const [text, onChangeText] = useState("Useless Text");
//   const [number, onChangeNumber] = useState(null);

  return (
    <View style={styles.inputBox}>
      {children}
    </View>
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

export default Button;

{/* <style>.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/U7jyR/vt/frame" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div> */}