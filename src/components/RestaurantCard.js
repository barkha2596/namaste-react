import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData }= props;
  console.log(resData)  
  const { name, costForTwo, cuisines ,cloudinaryImageId ,avgRating } = resData.info;  
  const{deliveryTime} = resData?.info?.sla;
  return(
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
    <img className="res-logo" src= {CDN_URL+cloudinaryImageId} />
    <h4>{name}</h4>
    <h5>{cuisines.join(",")}</h5>
    <h5>{avgRating}</h5>
    <h5>{costForTwo}</h5>
    <h5>{deliveryTime} mins</h5>
    </div>
  )
}
export default RestaurantCard;