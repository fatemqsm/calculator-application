import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function NumberButton({number}) {
  return (
    
      <Text >{number}</Text>
  
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // flex:1,
//     // flexDirection: "row",
//     // flexWrap: "wrap",
//     // backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',

//     // flexDirection: "row",
//     // flexWrap: "wrap",

//     backgroundColor: "#7CA1B4",
//     flex: 1,
//     alignItems: "center", // ignore this - we'll come back to it
//     justifyContent: "center", // ignore this - we'll come back to it
//     flexDirection: "row",
//   },
//   numberButton:{
//     // paddingHorizontal: 8,
//     // paddingVertical: 6,
//     // borderRadius: 4,
//     // backgroundColor: "oldlace",
//     // alignSelf: "flex-start",
//     // marginHorizontal: "1%",
//     // marginBottom: 6,
//     // minWidth: "20%",
//     // textAlign: "center",
//     backgroundColor: "#7cb48f",
//     width: 100,
//     height: 100,
//     margin: 4,
//   }
// });

// import React, { useState } from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// const FlexDirectionBasics = () => {
//   const [flexDirection, setflexDirection] = useState("row");

//   return (
//     <PreviewLayout
//       label="flexDirection"
//       values={["column", "row", "row-reverse", "column-reverse"]}
//       selectedValue={flexDirection}
//       setSelectedValue={setflexDirection}
//     >
//       <View
//         style={[styles.box, { backgroundColor: "powderblue" }]}
//       />
//       <View
//         style={[styles.box, { backgroundColor: "skyblue" }]}
//       />
//       <View
//         style={[styles.box, { backgroundColor: "steelblue" }]}
//       />
//     </PreviewLayout>
//   );
// };

// const PreviewLayout = ({
//   label,
//   children,
//   values,
//   selectedValue,
//   setSelectedValue,
// }) => (
//   <View style={{ padding: 10, flex: 1 }}>
//     <Text style={styles.label}>{label}</Text>
//     <View style={styles.row}>
//       {values.map((value) => (
//         <TouchableOpacity
//           key={value}
//           onPress={() => setSelectedValue(value)}
//           style={[
//             styles.button,
//             selectedValue === value && styles.selected,
//           ]}
//         >
//           <Text
//             style={[
//               styles.buttonLabel,
//               selectedValue === value && styles.selectedLabel,
//             ]}
//           >
//             {value}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//     <View style={[styles.container, { [label]: selectedValue }]}>
//       {children}
//     </View>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 8,
//     backgroundColor: "aliceblue",
//   },
//   box: {
//     width: 50,
//     height: 50,
//   },
//   row: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   button: {
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     borderRadius: 4,
//     backgroundColor: "oldlace",
//     alignSelf: "flex-start",
//     marginHorizontal: "1%",
//     marginBottom: 6,
//     minWidth: "48%",
//     textAlign: "center",
//   },
//   selected: {
//     backgroundColor: "coral",
//     borderWidth: 0,
//   },
//   buttonLabel: {
//     fontSize: 12,
//     fontWeight: "500",
//     color: "coral",
//   },
//   selectedLabel: {
//     color: "white",
//   },
//   label: {
//     textAlign: "center",
//     marginBottom: 10,
//     fontSize: 24,
//   },
// });

// export default FlexDirectionBasics;
