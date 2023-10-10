import "./restMenuList.css";
import addCartImage from "../../ImageFolder/addCart.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useData } from "../../Body/Context.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem } from "../../ReduxStore/cartSlice";
import { nanoid } from "@reduxjs/toolkit";


const RestaurantMenuList = () => {
  let cuisines = [
    "Idli Dosa",
    "Pizzas",
    "Maggie",
    "Burgers",
    "Aloo potato",
    "Fried rice",
    "Desserts",
    "Butter Maggie",
    "Burgers",
    "Biryani",
    "Chili Potato",
    "Snacks",
    "Mashroom",
    "Pastas",
    "Italian-Pizzas",
    "Ice-Creams",
    "Cold Drinks",
    "Kaju korma",
    "Butter Paneer"
  ];

  if (document.body.scrollTop === 0) {
    document.documentElement.scrollTop = 0;
  }

  // it will give us id of restaurant
  const param = useParams();
  const { id } = param;
  // console.log(id);

  const { filterRestData } = useData();
  // console.log(filterRestData);

  const clickedRest = filterRestData.find((res) => res.info.id === id);
  // console.log(clickedRest);

  const cartItems = useSelector((store) => store.cart.items); //from redux part
  console.log(cartItems)

  // send item in our store
  const dispatch = useDispatch();
  const addFoodItems = (menuItems) => {

    if(cartItems.length === 0){
      dispatch(addItem(menuItems));
      console.log("dispatch == 0");
    }

    else if(cartItems.length > 0) {
      for(let i=0; i<cartItems.length; i++){
        if(cartItems[i].itemNo === menuItems.itemNo){
          console.log("quantity ++");
          cartItems[i].quantity = cartItems[i].quantity + 1
        }
      }
    }
    // else{
    //   dispatch(addItem(menuItems));
    // }
  };

  return (
    <div className="menu-list">
      <div className="cart-header">
        {!clickedRest ? (
          <h2 style={{ margin: "7px 0 0 0" }}>Restaurant Name : Loading...</h2>
        ) : (
          <h2 style={{ margin: "7px 0 0 0" }}>
            Restaurant Name : {clickedRest.info.name}
          </h2>
        )}
        <Link to="/cart">
          <h2 className="cart-Text">
            Cart &nbsp; <span>{cartItems.length}</span>
          </h2>
          <img src={addCartImage} alt="cartimg" />
        </Link>
      </div>

      <div className="menu-list-item">
        {cuisines.map((menuItems, idx) => (
          <div className="items" key={idx}>
            <div className="item-price">
              <h2>{menuItems}</h2>
              <p className="price">
                {Math.floor(Math.random() * (300 - 150 + 1)) + 150}₹
                <span className="discount">
                  {Math.floor(Math.random() * 11) + 10}% OFF | USE @Empire
                </span>
              </p>
            </div>
            <button
              onClick={() => {
                addFoodItems({
                  itemNo:idx,
                  id:nanoid(),
                  item: menuItems,
                  price: Math.floor(Math.random() * (300 - 150 + 1)) + 150,
                  quantity:1
                });
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenuList;
