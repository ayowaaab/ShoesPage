import gsap from "gsap";
import Box from "./component/Box";


function App() {
  gsap.set("body",{backgroundColor:"#FFC235",delay:2,overflow:"hidden"})
  return (
    <>
  
      <Box />
    </>
  );
}

export default App;
