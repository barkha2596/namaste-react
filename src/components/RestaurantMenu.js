import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API, MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY } from "../utils/constants";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {
 
    const[resInfo, setResInfo] = useState(null);
  //    const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  // const [menuItems, setMenuItems] = useState([]);

      const { resId } = useParams();
      console.log(resId);
      const[showIndex, setShowIndex] = useState(0);


//       const handleToggle = (showIndex) => {
//     // if the same accordion is clicked, close it
//     setShowIndex(showIndex === showIndex ? null : showIndex);
//   };               

  useEffect(() => {
    //fetchMenu();
    getRestaurantInfo();
  }, []);

//   const fetchMenu = async () => {
    
//     const data = await fetch(MENU_API+resId)
//     const json = await data.json();
//     console.log(json);
//     setResInfo(json.data)

// };

 async function getRestaurantInfo() {
  const data = await fetch(MENU_API+resId);
  const json = await data.json();
  console.log(json.data)
  setResInfo(json.data);
    
}
// console.log(resInfo);

   
 



    if(resInfo === null) return <Shimmer />

    const  itemCards  = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards;
    // // console.log(itemCards);
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    console.log(resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
   
console.log(categories);

    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
             {/* <h2>Menu</h2> */}
            {/* <ul>
                {itemCards.map((item) => (
                    <li key= {item.card.info.id}>
                        {item.card.info.name} - {"Rs."} {item.card.info.price/100 || item.card.info.defaultPrice/100}

                    </li>
                ))}
            </ul>  */}

            {categories.map((category,index) => (
                <RestaurantCategory  key={category?.card?.card.title} 
                data={category?.card?.card}
                showItems={index==showIndex ? true:false}
                setShowIndex={()=> setShowIndex(index)}
                //onToggle={handleToggle}
                />
                ))}

        </div>
    )
}


export default RestaurantMenu;