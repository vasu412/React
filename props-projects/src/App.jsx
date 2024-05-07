import "./App.css";

const Box = ({name,hex}) => 
  (
  <div className="box">
    <div className="color" style={{backgroundColor:hex}}></div>
    <div className="colorName">
      <h3>{hex}</h3>
      <p style={{color:hex}}>{name}</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="body">
      <Box name={"PINK"} hex={"#FF6663"}/>
      <Box name={"GRAY"} hex={"#333333"}/>
      <Box name={"BLACK"} hex={"#000000"}/>
      <Box name={"GREEN"} hex={"#38BB14"}/>
      <Box name={"RED"} hex={"#C90B0B"}/>
      <Box name={"ORANGE"} hex={"#FF8000"}/>
      <Box name={"YELLOW"} hex={"#FFF500"}/>
      <Box name={"LIGHT GRAY"} hex={"#CCCCCC"}/>
      <Box name={"PURPLE"} hex={"#7E41A2"}/>
      <Box name={"BROWN"} hex={"#C14911"}/>
      <Box name={"CANARY"} hex={"#000FF9"}/>
      <Box name={"RUSTY RED"} hex={"#DA2C43"}/>
    </div>
  )
}
export default App;
