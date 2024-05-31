import "./App.css";
//variables
const styleImg = {
  width: "200px",
  borderRadius: "5%",
  border: "1px solid #FB9300",
  padding: "10px",
};
let text = "test variable";
const style = {
  fontSize: "24px",
  fontStyle: "italic",
  color: "red",
};
// app
function App() {
  let text2 = "222";
  return (
    <>
      <div className="container">
        <h1 style={style}>app_1</h1>
        
        <img
          src="/images/image-01.png"
          alt="image_01"
          title="image_01"
          style={styleImg}
        />
        <ul>
          <li>Hello</li>
          <li>{text + text2}</li>
        </ul>
      </div>
    </>
  );
}

export default App;
