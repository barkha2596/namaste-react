import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet }  from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utils/UserContext";
//import Grocery from "./src/components/Grocery";

const Grocery = lazy(() => import("./src/components/Grocery"))



const AppLayout = () => {
  const[userName, setUserName] = useState();



  //Authentication
useEffect(() =>{
  const data = {
    name: "Barkha Bandana"
  }
  setUserName(data.name)
},[])


   return(
  <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
    <div className="app">
      <UserContext.Provider value={{ loggedInUser: "Elon Musk"}}>
      <Header />
      </UserContext.Provider>
      <Outlet />
    </div>
    </UserContext.Provider>
  )
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children : [
    {
      path: "/",
      element: <Body />
    },
      {
      path: "/about",
      element: <About />
    },
      {
      path: "/contact",
      element: <Contact />
    },

     {
      path: "/grocery",
      element: (
        <Suspense fallback = {<h1>Loading.....</h1>}>
          <Grocery />
          </Suspense>
      ),

    },
    {
      path: "/restaurants/:resId",
      element: <RestaurantMenu />

    }

    ],


  
    errorElement: <Error />
  },
  ])
 

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />)
root.render(<RouterProvider router = {appRouter} />)