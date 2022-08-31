import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../components/Input/Input';
import NumberButton from '../components/NumberButton/NumberButton';
import Title from '../components/Title/Title';
import Wrapper from "../components/Wrapper/Wrapper";
import Screen from "../components/Screen/Screen";
import ButtonBox from "../components/ButtonBox/ButtonBox";
import Button from "../components/Button/Button";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
const toLocaleString = (num) =>String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const math = (a, b, sign) =>sign === "+" ? a + b : sign === "-" ? a - b : sign === "X" ? a * b : a / b;

export default function Home() {

    // const [number, setNumber] = useState(null);

    

    // const onChangeNumber=(event)=>{
    //   console.log(event)
    // }
    let [calc, setCalc] = useState({
      sign: "",
      num: 0,
      res: 0,
    });
  
    const numClickHandler = (e) => {
      e.preventDefault();
      const value = e.target.innerHTML;
      if (removeSpaces(calc.num).length < 16) {
        setCalc({
          ...calc,
          num:
            removeSpaces(calc.num) % 1 === 0 && !calc.num.toString().includes(".")
              ? toLocaleString(Number(removeSpaces(calc.num + value)))
              : toLocaleString(calc.num + value),
          res: !calc.sign ? 0 : calc.res,
        });
      }
    };
  
    const comaClickHandler = (e) => {
      e.preventDefault();
      const value = e.target.innerHTML;
  
      setCalc({
        ...calc,
        num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
      });
    };
  
    const signClickHandler = (e) => {
      setCalc({
        ...calc,
        sign: e.target.innerHTML,
        res: !calc.num
          ? calc.res
          : !calc.res
          ? calc.num
          : toLocaleString(
              math(
                Number(removeSpaces(calc.res)),
                Number(removeSpaces(calc.num)),
                calc.sign
              )
            ),
        num: 0,
      });
    };
  
    const equalsClickHandler = () => {
      if (calc.sign && calc.num) {
        setCalc({
          ...calc,
          res:
            calc.num === "0" && calc.sign === "/"
              ? "Can't divide with 0"
              : toLocaleString(
                  math(
                    Number(removeSpaces(calc.res)),
                    Number(removeSpaces(calc.num)),
                    calc.sign
                  )
                ),
          sign: "",
          num: 0,
        });
      }
    };
  
    const invertClickHandler = () => {
      setCalc({
        ...calc,
        num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
        res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
        sign: "",
      });
    };
  
    const percentClickHandler = () => {
      let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
      let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;
      setCalc({
        ...calc,
        num: (num /= Math.pow(100, 1)),
        res: (res /= Math.pow(100, 1)),
        sign: "",
      });
    };
  
    const resetClickHandler = () => {
      setCalc({
        ...calc,
        sign: "",
        num: 0,
        res: 0,
      });
    };
  return (
    <Wrapper>
      <Screen value={calc.num ? calc.num : calc.res} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={
                btn === "C"
                  ? resetClickHandler
                  : btn === "+-"
                  ? invertClickHandler
                  : btn === "%"
                  ? percentClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                  ? signClickHandler
                  : btn === "."
                  ? comaClickHandler
                  : numClickHandler
              }
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    // flexDirection: "row",
    // flexWrap: "wrap",
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',

    // flexDirection: "row",
    // flexWrap: "wrap",

    flex: 1,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
    flexWrap:"wrap",
  },
  numberButton:{
    // paddingHorizontal: 8,
    // paddingVertical: 6,
    // borderRadius: 4,
    // backgroundColor: "oldlace",
    // alignSelf: "flex-start",
    // marginHorizontal: "1%",
    // marginBottom: 6,
    // minWidth: "20%",
    // textAlign: "center",
    backgroundColor: "#7cb48f",
    width: 100,
    height: 100,
    margin: 4,
  }
});
