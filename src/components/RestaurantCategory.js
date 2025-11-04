
import  { useEffect, useState,  } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

    //  const[showItems, setShowItems] = useState(false);
    const[showAcc, setShowAcc] = useState(true);
    // // console.log(data);
    const handleClick = () =>{
        setShowIndex();
       // onToggle(setShowIndex(!))
       setShowAcc(!showAcc);  
    };

    return(
        <div>
            {/* Accordian Header */}    
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" 
                onClick={handleClick}>

                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                     </div>
                    {  showAcc && showItems && <ItemList  items={data.itemCards}/>}
              
               
            </div>
            {/* Accordian  Body */}

            
        </div>
    )
}

export default RestaurantCategory;