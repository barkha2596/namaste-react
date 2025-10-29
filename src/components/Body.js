import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {


const[listOfRestaurant, setListOfRestaurant] = useState([]);
const [filteredRestaurant,setFilteredRestaurant] = useState([]);
const[searchText, setSearchText] = useState([]);


useEffect(()=>{
  fetchData();
  console.log("HEllo")
},[]);

const fetchData = async () => {
  //const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
  const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json();
  console.log(json);
  setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  // setListOfRestaurant(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  // setFilteredRestaurant(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

}

// if(listOfRestaurant.length===0){
//   return <Shimmer/>
// }

const onlineStatus = useOnlineStatus();
console.log(onlineStatus)

if(onlineStatus == false){
  return(
    <h1>Looks like you are offline !! please check your internet connection;</h1>
  )
}


  return listOfRestaurant.length===0? <Shimmer/> :(
    <div className = "body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
          />
          
          <button onClick={()=>{
            console.log(searchText)
           const filteredRestaurant =  listOfRestaurant.filter((res) =>{
              return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            })
            setFilteredRestaurant(filteredRestaurant);
          }}>Search</button>
          
        </div>
        <button className="filter-btn" 
        onClick={()=>{
          const filteredList = listOfRestaurant.filter((res) => res.info.avgRating>4.3)
          setFilteredRestaurant(filteredList)
          }
        }
        >Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {
          filteredRestaurant.map((restaurant)=> (
          <Link
          key={restaurant.info.id} 
          to={"/restaurants/" + restaurant.info.id}
          >
          <RestaurantCard resData = {restaurant}/>
          </Link>)
          )
        }

      </div>
    </div>
  )
}
export default Body;