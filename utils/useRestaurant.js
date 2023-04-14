import { useState, useEffect } from "react";
const useRestaurant = (id) => {
    const [restMenu, setRestMenu] = useState({});
    useEffect(()=>{
        getRestDetails();
    }, [])
    const getRestDetails = async () => {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4990039&lng=78.33159289999999&restaurantId=${id}&submitAction=ENTER`
      );
       data.json().then(data=>{
          setRestMenu(data?.data?.cards[0]?.card?.card?.info)
      });
    };
    return restMenu;
}
export default useRestaurant;