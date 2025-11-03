import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData }= props;
  // console.log(resData)  
  const { name, costForTwo, cuisines ,cloudinaryImageId ,avgRating } = resData.info;  
  const{deliveryTime} = resData?.info?.sla;
  //console.log(cloudinaryImageId)
  return(
    <div className="m-4 p-4 w-[250px]  bg-gray-100 hover:bg-gray-200" >
    <img className="rounded-lg" src= {CDN_URL+ cloudinaryImageId} />
    <h3 className="font-bold py-4 text-lg">{name}</h3>
    <h5>{cuisines.join(",")}</h5>
    <h5>{avgRating}</h5>
    <h5>{costForTwo}</h5>
    <h5>{deliveryTime} mins</h5>
    </div>
  )
}


//Higher order components
 //input - RestaurantCard =>> RestaurantCardPromoted

 export const withPromotedLabel = (RestaurantCard) => {
  return(props) => {
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    )
  }
 }


export default RestaurantCard;