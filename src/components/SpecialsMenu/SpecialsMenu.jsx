import GreekSalad from "../../assets/greekSalad.jpg";
import LemonDesert from "../../assets/lemonDessert.jpg";
import Bruchetta from "../../assets/bruchetta.svg";
import "./SpecialsMenu.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const SpecialsMenu = () => {

    // Get the navigate function
    const navigate = useNavigate();

    // Define the button click handler menu
    const navigateToMenu = () => {
      navigate("/menu");
    }

    // Define the button click handler order
    const navigateToOrder = () => {
      navigate("/order");
    }

  return (
    <section className="special-menu">
      <div className="container">
        <section className="special-menu-wrap">
          <div className="heading">
            <p className="title">This weeks specials!</p>
            <Button ariaLabel="Navigate to menu" text="View Full Menu" onClick={navigateToMenu}/>
          </div>
          <div className="flex-items">
            <div className="flex-item">
              <div className="img-wrap">
                <img src={GreekSalad} alt="Greek Salad" />
              </div>
              <div className="content-wrap">
                <div className="heading">
                  <p className="title">Greek Salad</p>
                  <p className="price">$12.99</p>
                </div>
                <p className="desc">
                The famous greek salad of crispy lettuce, peppers, 
                olives and our Chicago style feta cheese, 
                garnished with crunchy garlic and rosemary croutons. 
                </p>
                <Button ariaLabel="Navigate to order" text="Order Delivery" onClick={navigateToOrder}/>
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Bruchetta} alt="Bruchetta" />
              </div>
              <div className="content-wrap">
                <div className="heading">
                  <p className="title">Bruchetta</p>
                  <p className="price">$5.99</p>
                </div>
                <p className="desc">
                Our Bruschetta is made from grilled bread
                 that has been smeared with garlic and seasoned
                 with salt and olive oil.
                </p>
                <Button ariaLabel="Navigate to order" text="Order Delivery" onClick={navigateToOrder}/>
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={LemonDesert} alt="Lemon Dessert" />
              </div>
              <div className="content-wrap">
                <div className="heading">
                  <p className="title">Lemon Dessert</p>
                  <p className="price">$5.00</p>
                </div>
                <p className="desc">
                This comes straight from grandma’s recipe book,
                 every last ingredient has been sourced 
                 and is as authentic as can be imagined.
                </p>
                <Button ariaLabel="Navigate to order" text="Order Delivery" onClick={navigateToOrder}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SpecialsMenu;
