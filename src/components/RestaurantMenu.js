import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API, MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY } from "../utils/constants";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {
 
    const[resInfo, setResInfo] = useState(null);
     const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const [menuItems, setMenuItems] = useState([]);

      const { resId } = useParams();
      console.log(resId);

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
    console.log("HI")
    try {
      const response = await fetch(MENU_API + resId);
      const json = await response.json();

      // Set restaurant data
      const restaurantData = json?.data?.cards?.map(x => x.card)?.
                             find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
        console.log(restaurantData);
      setRestaurant(restaurantData);

      // Set menu item data
      const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
                            groupedCard?.cardGroupMap?.REGULAR?.
                            cards?.map(x => x.card?.card)?.
                            filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
                            map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
      
      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find(x => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      })
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  }
 



    // if(resInfo === null) return <Shimmer />

    // const { itemCards } = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    // console.log(itemCards);
    // const {name, cuisines, costForTwoMessage} = resInfo?.card[2]?.card?.card?.info;

   


    return(
        <div className="menu">
            <h1>{restaurant?.name}</h1>
            <p> {restaurant?.cuisines?.join(", ")}  -  {restaurant?.costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {menuItems.map((item) => (
                    <li key= {item.id}>
                        {item.name} - {"Rs."} {item.price/100 || item.defaultPrice/100}

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;