import { useState } from "react";
import { Card } from "./Card";

export function CardStyling() {
  const [style, setstyle] = useState({
    height: "260px",
    width: "200px",
    overflow: "hidden",
    textAlign: "center",
    border: "3px solid black",
    margin: "2px"
  });

  const [Display,setDisplay] = useState(true)

  function HandleTheme(bgcolor, textcolor) {
    setstyle({
      ...style,
      backgroundColor: bgcolor,
      color: textcolor,
    });
  }

  return (
    <>
    <h1>Card Styling</h1>
      <button onClick={() => HandleTheme("black", "white")}>Dark Theme</button>
      <button onClick={() => HandleTheme("white", "black")}>Light Theme</button>
      <button onClick={()=>setDisplay(!Display)}>Grid</button>

      <div style={{ display : Display? "flex" : null , flexWrap:"wrap", margin:"2px"}}>
        <Card style={style}></Card>
        <Card style={style}></Card>
        <Card style={style}></Card>
        <Card style={style}></Card>
        <Card style={style}></Card>
        <Card style={style}></Card>
        <Card style={style}></Card>
        <Card style={style}></Card>
        <Card style={style}></Card>
        <Card style={style}></Card>
        <Card style={style}></Card>
        <Card style={style}></Card>
        <Card style={style}></Card>
        <Card style={style}></Card>
        <Card style={style}></Card>
      </div>
    </>
  );
}
