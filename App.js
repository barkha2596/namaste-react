import React from "react"
import ReactDOM from "react-dom/client"


//JSX elements

const jsxHeading = <h1>Namaste React</h1>


//jsx element multiline with bracket
const jsxHeadingMultiline = (
  <div>
    <h2>Multi Line element </h2>
  </div>
)
const Title = () => (
   <h1 className = "head" tabIndex="5">Namaste React from JSX 🚀</h1>
  
  
)
//React Component functional component
const value = 10000

const HeadingComponent = () => (
   <div id= "container">
    {value}
      <Title/>
      {jsxHeadingMultiline}
   </div>
)
  

    


const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeadingMultiline);
root.render(<HeadingComponent />)