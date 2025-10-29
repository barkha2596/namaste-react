const CDN_URL= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

const LOGO_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUSqIIV9LaDa3oWLfAxQGKCfNVvV3s4DyRQ&s"

//const MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="
const MENU_API= "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId="
const RESTAURANT_TYPE_KEY =  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
 const MENU_ITEM_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
module.exports={
    CDN_URL,
    LOGO_URL,
    MENU_API,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY

}