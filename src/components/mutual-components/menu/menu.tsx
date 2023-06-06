import { Offcanvas } from "react-bootstrap";
import "../menu/menu-styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import Items from "../menu/menu-products.json";


const Menu = ({ ...props }) => {
  return (
    <div className="menu" id="menu">
      <Offcanvas {...props} id='menu-offcanvas'>
        <Offcanvas.Header>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="menu-products">
            {Items.items.map((product) => (
              <li className="main-menu" id="main-menu" key={product.id}>
                <a className="main-product" id="main-product" href={product.link}>
                  {product.item}
                  <svg xmlns="http://www.w3.org/2000/svg" width="5.284" height="9.598" viewBox="0 0 5.284 9.598">
                    <path id="Chevron_Right" d="M59.257,5.142,54.941,9.457a.485.485,0,0,1-.686-.685L58.229,4.8,54.256.828a.485.485,0,0,1,.686-.685l4.316,4.315A.489.489,0,0,1,59.257,5.142Z" transform="translate(-54.113 -0.001)"></path>
                  </svg>
                </a>
              </li>
            ))}
            <li className="baby-toddler">
              <ul className="baby-ul">
                {Items["Baby&Toddler-products"].map((baby) => (
                  <li className="sub-menu" id="sub-menu" key={baby.id}>
                    <a className="sub-product" id="sub-product" href={baby.link}>
                      {baby.item}
                      <svg xmlns="http://www.w3.org/2000/svg" width="5.284" height="9.598" viewBox="0 0 5.284 9.598">
                        <path id="Chevron_Right" d="M59.257,5.142,54.941,9.457a.485.485,0,0,1-.686-.685L58.229,4.8,54.256.828a.485.485,0,0,1,.686-.685l4.316,4.315A.489.489,0,0,1,59.257,5.142Z" transform="translate(-54.113 -0.001)"></path>
                      </svg>
                    </a>
                  </li>
                ))}
                <li className="baby-accessories" id="baby-accessories">
                  <ul className="accessories-list" id="accessories-list">
                    {Items["Accessories-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                          <svg xmlns="http://www.w3.org/2000/svg" width="5.284" height="9.598" viewBox="0 0 5.284 9.598">
                            <path id="Chevron_Right" d="M59.257,5.142,54.941,9.457a.485.485,0,0,1-.686-.685L58.229,4.8,54.256.828a.485.485,0,0,1,.686-.685l4.316,4.315A.489.489,0,0,1,59.257,5.142Z" transform="translate(-54.113 -0.001)"></path>
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="baby-food" id="baby-food">
                  <ul className="food-list" id="food-list">
                    {Items["BabyFood-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="baby-milk" id="baby-milk">
                  <ul className="milk-list" id="milk-list">
                    {Items["Baby-milk-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nappies" id="nappies">
                  <ul className="nappies-list" id="nappies-list">
                    {Items["Nappies-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="baby-toiletries" id="baby-toiletries">
                  <ul className="baby-toiletries-list" id="baby-toiletries-list">
                    {Items["Baby-toiletries-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
            <li className="bakery-li" id="bakery-li">
              <ul className="bakery-ul" id="bakery-ul">
                {Items["Bakery-products"].map((bake) => (
                  <li className="sub-menu" id="sub-menu" key={bake.id}>
                    <a className="sub-product" id="sub-product" href={bake.link}>
                      {bake.item}
                      <svg xmlns="http://www.w3.org/2000/svg" width="5.284" height="9.598" viewBox="0 0 5.284 9.598">
                        <path id="Chevron_Right" d="M59.257,5.142,54.941,9.457a.485.485,0,0,1-.686-.685L58.229,4.8,54.256.828a.485.485,0,0,1,.686-.685l4.316,4.315A.489.489,0,0,1,59.257,5.142Z" transform="translate(-54.113 -0.001)"></path>
                      </svg>
                    </a>
                  </li>
                ))}
                <li className="bread" id="bread">
                  <ul className="bread-list" id="bread-list">
                    {Items["Bread-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="crumpits" id="crumpits">
                  <ul className="crumpits-list" id="crumpits-list">
                    {Items["Crumpets-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="sweet-treats" id="sweet-treats">
                  <ul className="sweet-treats-list" id="sweet-treats-list">
                    {Items["Sweet-treats-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>

            <li className="beauty-cosmetics" id="beauty-cosmetics">
              <ul className="beauty-ul" id="beauty-ul">
                {Items["Beauty-products"].map((beauty) => (
                  <li className="sub-menu" id="sub-menu" key={beauty.id}>
                    <a className="sub-product" id="sub-product" href={beauty.link}>
                      {beauty.item}
                      <svg xmlns="http://www.w3.org/2000/svg" width="5.284" height="9.598" viewBox="0 0 5.284 9.598">
                        <path id="Chevron_Right" d="M59.257,5.142,54.941,9.457a.485.485,0,0,1-.686-.685L58.229,4.8,54.256.828a.485.485,0,0,1,.686-.685l4.316,4.315A.489.489,0,0,1,59.257,5.142Z" transform="translate(-54.113 -0.001)"></path>
                      </svg>
                    </a>
                  </li>
                ))}
                <li className="facial-skincare" id="facial-skincare">
                  <ul className="facial-skincare-list" id="facial-skincare-list">
                    {Items["Facial-skincare-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="make-up" id="make-up">
                  <ul className="make-up-list" id="make-up-list">
                    {Items["Makeup-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

              </ul>
            </li>
            <li className="beverages" id="beverages">
              <ul className="beverages-ul" id="beverages-ul">
                {Items["Beverages-products"].map((beverage) => (
                  <li className="sub-menu" id="sub-menu" key={beverage.id}>
                    <a className="sub-product" id="sub-product" href={beverage.link}>
                      {beverage.item}
                      <svg xmlns="http://www.w3.org/2000/svg" width="5.284" height="9.598" viewBox="0 0 5.284 9.598">
                        <path id="Chevron_Right" d="M59.257,5.142,54.941,9.457a.485.485,0,0,1-.686-.685L58.229,4.8,54.256.828a.485.485,0,0,1,.686-.685l4.316,4.315A.489.489,0,0,1,59.257,5.142Z" transform="translate(-54.113 -0.001)"></path>
                      </svg>
                    </a>
                  </li>
                ))}
                <li className="coffee" id="coffee">
                  <ul className="coffee-list" id="coffee-list">
                    {Items["Coffee-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="free-from" id="free-from">
                  <ul className="free-from-list" id="free-from-list">
                    {Items["Freefrom-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="long-life" id="long-life">
                  <ul className="long-life-list" id="long-life-list">
                    {Items["Longlifemilk-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="premium-mixers" id="premium-mixers">
                  <ul className="premium-mixers-list" id="premium-mixers-list">
                    {Items["Premium&mixers-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="refrigerated" id="refrigerated">
                  <ul className="refrigerated-list" id="refrigerated-list">
                    {Items["Refrigerated-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="soft-drinks" id="soft-drinks">
                  <ul className="soft-drinks-list" id="soft-drinks-list">
                    {Items["Softdrinks-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="tea" id="tea">
                  <ul className="tea-list" id="tea-list">
                    {Items["Tea-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="water" id="water">
                  <ul className="water-list" id="water-list">
                    {Items["Water-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>


              </ul>
            </li>
            <li className="butchery" id="butchery">
              <ul className="butchery-ul" id="butchery-ul">
                {Items["Butchery-products"].map((butchery) => (
                  <li className="sub-menu" id="sub-menu" key={butchery.id}>
                    <a className="sub-product" id="sub-product" href={butchery.link}>
                      {butchery.item}
                      <svg xmlns="http://www.w3.org/2000/svg" width="5.284" height="9.598" viewBox="0 0 5.284 9.598">
                        <path id="Chevron_Right" d="M59.257,5.142,54.941,9.457a.485.485,0,0,1-.686-.685L58.229,4.8,54.256.828a.485.485,0,0,1,.686-.685l4.316,4.315A.489.489,0,0,1,59.257,5.142Z" transform="translate(-54.113 -0.001)"></path>
                      </svg>
                    </a>
                  </li>
                ))}
                <li className="beef" id="beef">
                  <ul className="beef-list" id="beef-list">
                    {Items["Beef-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="chicken" id="chicken">
                  <ul className="chicken-list" id="chicken-list">
                    {Items["Chicken-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
            <li className="dairy" id="dairy">
              <ul className="dairy-ul" id="dairy-ul">
                {Items["Dairy-products"].map((dairy) => (
                  <li className="sub-menu" id="sub-menu" key={dairy.id}>
                    <a className="sub-product" id="sub-product" href={dairy.link}>
                      {dairy.item}
                      <svg xmlns="http://www.w3.org/2000/svg" width="5.284" height="9.598" viewBox="0 0 5.284 9.598">
                        <path id="Chevron_Right" d="M59.257,5.142,54.941,9.457a.485.485,0,0,1-.686-.685L58.229,4.8,54.256.828a.485.485,0,0,1,.686-.685l4.316,4.315A.489.489,0,0,1,59.257,5.142Z" transform="translate(-54.113 -0.001)"></path>
                      </svg>
                    </a>
                  </li>
                ))}
                <li className="butter-spreads" id="butter-spreads">
                  <ul className="butter-spreads-list" id="butter-spreads-list">
                    {Items["Butter&spreads-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="cheese" id="cheese">
                  <ul className="cheese-list" id="cheese-list">
                    {Items["Cheese-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="cooked-meats" id="cooked-meats">
                  <ul className="cooked-meats-list" id="cooked-meats-list">
                    {Items["CookedMeats-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="deli-counters" id="deli-counters">
                  <ul className="deli-counters-list" id="deli-counters-list">
                    {Items["DeliCounters-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="eggs" id="eggs">
                  <ul className="eggs-list" id="eggs-list">
                    {Items["Eggs-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="food-togo" id="food-togo">
                  <ul className="food-togo-list" id="food-togo-list">
                    {Items["Foodtogo-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="milk-cream" id="milk-cream">
                  <ul className="milk-cream-list" id="milk-cream-list">
                    {Items["Milk&cream-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="pizza" id="pizza">
                  <ul className="pizza-list" id="pizza-list">
                    {Items["Pizza-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="ready-meals" id="ready-meals">
                  <ul className="ready-meals-list" id="ready-meals-list">
                    {Items["Readymeals-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="yoghurts" id="yoghurts">
                  <ul className="yoghurts-list" id="yoghurts-list">
                    {Items["Yoghurts-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
            <li className="flower-shop" id="flower-shop">
              <ul className="flower-shop-ul" id="flower-shop-ul">
                {Items["Flower-products"].map((flower) => (
                  <li className="sub-menu" id="sub-menu" key={flower.id}>
                    <a className="sub-product" id="sub-product" href={flower.link}>
                      {flower.item}
                      <svg xmlns="http://www.w3.org/2000/svg" width="5.284" height="9.598" viewBox="0 0 5.284 9.598">
                        <path id="Chevron_Right" d="M59.257,5.142,54.941,9.457a.485.485,0,0,1-.686-.685L58.229,4.8,54.256.828a.485.485,0,0,1,.686-.685l4.316,4.315A.489.489,0,0,1,59.257,5.142Z" transform="translate(-54.113 -0.001)"></path>
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="food-cupboard" id="food-cupboard">
              <ul className="food-cupboard-ul" id="food-cupboard-ul">
                {Items["Food-coupboard-products"].map((food) => (
                  <li className="sub-menu" id="sub-menu" key={food.id}>
                    <a className="sub-product" id="sub-product" href={food.link}>
                      {food.item}
                      <svg xmlns="http://www.w3.org/2000/svg" width="5.284" height="9.598" viewBox="0 0 5.284 9.598">
                        <path id="Chevron_Right" d="M59.257,5.142,54.941,9.457a.485.485,0,0,1-.686-.685L58.229,4.8,54.256.828a.485.485,0,0,1,.686-.685l4.316,4.315A.489.489,0,0,1,59.257,5.142Z" transform="translate(-54.113 -0.001)"></path>
                      </svg>
                    </a>
                  </li>
                ))}
                <li className="biscuits-crackers" id="biscuits-crackers">
                  <ul className="biscuits-crackers-list" id="biscuits-crackers-list">
                    {Items["Biscuits-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="cans" id="cans">
                  <ul className="cans-list" id="cans-list">
                    {Items["Cans-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="cereals" id="cereals">
                  <ul className="cereals-list" id="cereals-list">
                    {Items["Cereals-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="condiments" id="condiments">
                  <ul className="condiments-list" id="condiments-list">
                    {Items["Condiments-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="confectionary" id="confectionary">
                  <ul className="confectionary-list" id="confectionary-list">
                    {Items["Confectionary-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="cooking-ingredients" id="cooking-ingredients">
                  <ul className="cooking-ingredients-list" id="cooking-ingredients-list">
                    {Items["Cookingingredients-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="crisps" id="crisps">
                  <ul className="crisps-list" id="crisps-list">
                    {Items["Crisps-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="honey" id="honey">
                  <ul className="honey-list" id="honey-list">
                    {Items["Honeyjams-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="jars" id="jars">
                  <ul className="jars-list" id="jars-list">
                    {Items["Jars-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="food-meal-kits" id="food-meal-kits">
                  <ul className="meal-kits-list" id="meal-kits-list">
                    {Items["Foodmealkits-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="pasta" id="pasta">
                  <ul className="pasta-list" id="pasta-list">
                    {Items["Pasta&noodles-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="rice" id="rice">
                  <ul className="rice-list" id="rice-list">
                    {Items["Rice-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="sports" id="sports">
                  <ul className="sports-list" id="sports-list">
                    {Items["Sportsnutrition-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="sugar-home" id="sugar-home">
                  <ul className="sugar-home-list" id="sugar-home-list">
                    {Items["Shugar&home-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
            <li className="frozen" id="frozen">
              <ul className="frozen-ul" id="frozen-ul">
                {Items["Frozen-products"].map((product) => (
                  <li className="sub-menu" id="sub-menu" key={product.id}>
                    <a className="sub-product" id="sub-product" href={product.link}>
                      {product.item}
                      <svg xmlns="http://www.w3.org/2000/svg" width="5.284" height="9.598" viewBox="0 0 5.284 9.598">
                        <path id="Chevron_Right" d="M59.257,5.142,54.941,9.457a.485.485,0,0,1-.686-.685L58.229,4.8,54.256.828a.485.485,0,0,1,.686-.685l4.316,4.315A.489.489,0,0,1,59.257,5.142Z" transform="translate(-54.113 -0.001)"></path>
                      </svg>
                    </a>
                  </li>
                ))}
                <li className="chips" id="chips">
                  <ul className="chips-list" id="chips-list">
                    {Items["Chips&potatoes-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="frozen-desserts" id="frozen-desserts">
                  <ul className="fronzen-desserts-list" id="frozen-desserts-list">
                    {Items["Desserts&icecream-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="frozen-seafood" id="frozen-seafood">
                  <ul className="fronzen-seafood-list" id="frozen-seafood-list">
                    {Items["Frozenseafood-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="fruit-smoothies" id="fruit-smoothies">
                  <ul className="fruit-smoothies-list" id="fruit-smoothies-list">
                    {Items["Fruit&smoothies-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="frozen-herbs" id="frozen-herbs">
                  <ul className="frozen-herbs-list" id="frozen-herbs-list">
                    {Items["Herbs&Vegetables-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="meat-poultry" id="meat-poultry">
                  <ul className="meat-poultry-list" id="meat-poultry-list">
                    {Items["Meat&poultry-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="pastry-dough" id="pastry-dough">
                  <ul className="pastry-dough-list" id="pastry-dough-list">
                    {Items["Pastry&Dough-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="pizza-pies" id="pizza-pies">
                  <ul className="pizza-pies-list" id="pizza-pies-list">
                    {Items["Frozenpizza-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="frozen-vegan" id="frozen-vegan">
                  <ul className="frozen-vegan-list" id="frozen-vegan-list">
                    {Items["Frozenvegetarian-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="world-food" id="world-food">
                  <ul className="world-food-list" id="world-food-list">
                    {Items["Worldfood-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
            <li className="fruit-vegetables" id="fruit-vegetables">
              <ul className="fruit-vegetables-ul" id="fruit-vegetables-ul">
                {Items["Fruit&Vegetables-products"].map((product) => (
                  <li className="sub-menu" id="sub-menu" key={product.id}>
                    <a className="sub-product" id="sub-product" href={product.link}>
                      {product.item}
                      <svg xmlns="http://www.w3.org/2000/svg" width="5.284" height="9.598" viewBox="0 0 5.284 9.598">
                        <path id="Chevron_Right" d="M59.257,5.142,54.941,9.457a.485.485,0,0,1-.686-.685L58.229,4.8,54.256.828a.485.485,0,0,1,.686-.685l4.316,4.315A.489.489,0,0,1,59.257,5.142Z" transform="translate(-54.113 -0.001)"></path>
                      </svg>
                    </a>
                  </li>
                ))}
                <li className="fruit-products" id="fruit-products">
                  <ul className="fruit-products-list" id="fruit-products-list">
                    {Items["Fruit-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="salad-herbs" id="salad-herbs">
                  <ul className="salad-herbs-list" id="salad-herbs-list">
                    {Items["Salads&herbs-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="vegetables-products" id="vegetables-products">
                  <ul className="vegetables-products-list" id="vegetables-products-list">
                    {Items["Vegetables-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
            <li className="home-leisure" id="home-leisure">
              <ul className="home-leisure-ul" id="home-leisure-ul">
                {Items["Home&Leisure-products"].map((product) => (
                  <li className="sub-menu" id="sub-menu" key={product.id}>
                    <a className="sub-product" id="sub-product" href={product.link}>
                      {product.item}
                      <svg xmlns="http://www.w3.org/2000/svg" width="5.284" height="9.598" viewBox="0 0 5.284 9.598">
                        <path id="Chevron_Right" d="M59.257,5.142,54.941,9.457a.485.485,0,0,1-.686-.685L58.229,4.8,54.256.828a.485.485,0,0,1,.686-.685l4.316,4.315A.489.489,0,0,1,59.257,5.142Z" transform="translate(-54.113 -0.001)"></path>
                      </svg>
                    </a>
                  </li>
                ))}
                <li className="electrical" id="electrical">
                  <ul className="electrical-list" id="electrical-list">
                    {Items["Electrical&home-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="entertainment" id="entertainment">
                  <ul className="entertainment-list" id="entertainment-list">
                    {Items["Entertianment-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="kitchen" id="kitchen">
                  <ul className="kitchen-list" id="kitchen-list">
                    {Items["Kitchen&dining-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="leisure-outdoor" id="leisure-outdoor">
                  <ul className="leisure-outdoor-list" id="leisure-outdoor-list">
                    {Items["Leisure&outdoor-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="stationery" id="stationery">
                  <ul className="stationery-list" id="stationery-list">
                    {Items["Stationery&office-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
            <li className="household" id="household">
              <ul className="household-ul" id="household-ul">
                {Items["Household-products"].map((product) => (
                  <li className="sub-menu" id="sub-menu" key={product.id}>
                    <a className="sub-product" id="sub-product" href={product.link}>
                      {product.item}
                      <svg xmlns="http://www.w3.org/2000/svg" width="5.284" height="9.598" viewBox="0 0 5.284 9.598">
                        <path id="Chevron_Right" d="M59.257,5.142,54.941,9.457a.485.485,0,0,1-.686-.685L58.229,4.8,54.256.828a.485.485,0,0,1,.686-.685l4.316,4.315A.489.489,0,0,1,59.257,5.142Z" transform="translate(-54.113 -0.001)"></path>
                      </svg>
                    </a>
                  </li>
                ))}
                <li className="air-fresheners" id="air-fresheners">
                  <ul className="air-fresheners-list" id="air-fresheners-list">
                    {Items["Airfresheners-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="cleaning-cupboard" id="cleaning-cupboard">
                  <ul className="cleaning-cupboard-list" id="cleaning-cupboard-list">
                    {Items["Cleaningcupboard-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="cling-film" id="cling-film">
                  <ul className="cling-film-list" id="cling-film-list">
                    {Items["Clingfilm-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="dishwashing" id="dishwashing">
                  <ul className="dishwashing-list" id="dishwashing-list">
                    {Items["Dishwashing-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="laundry" id="laundry">
                  <ul className="laundry-list" id="laundry-list">
                    {Items["Laundry-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="toilet-rolls" id="toilet-rolls">
                  <ul className="toilet-rolls-list" id="toilet-rolls-list">
                    {Items["Toiletrolls-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
            <li className="non-muslim" id="non-muslim">
              <ul className="non-muslim-ul" id="non-muslim-ul">
                {Items["NonMuslim-products"].map((product) => (
                  <li className="sub-menu" id="sub-menu" key={product.id}>
                    <a className="sub-product" id="sub-product" href={product.link}>
                      {product.item}
                      <svg xmlns="http://www.w3.org/2000/svg" width="5.284" height="9.598" viewBox="0 0 5.284 9.598">
                        <path id="Chevron_Right" d="M59.257,5.142,54.941,9.457a.485.485,0,0,1-.686-.685L58.229,4.8,54.256.828a.485.485,0,0,1,.686-.685l4.316,4.315A.489.489,0,0,1,59.257,5.142Z" transform="translate(-54.113 -0.001)"></path>
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="petcare" id="petcare">
              <ul className="petcare-ul" id="petcare-ul">
                {Items["Petcare-products"].map((product) => (
                  <li className="sub-menu" id="sub-menu" key={product.id}>
                    <a className="sub-product" id="sub-product" href={product.link}>
                      {product.item}
                      <svg xmlns="http://www.w3.org/2000/svg" width="5.284" height="9.598" viewBox="0 0 5.284 9.598">
                        <path id="Chevron_Right" d="M59.257,5.142,54.941,9.457a.485.485,0,0,1-.686-.685L58.229,4.8,54.256.828a.485.485,0,0,1,.686-.685l4.316,4.315A.489.489,0,0,1,59.257,5.142Z" transform="translate(-54.113 -0.001)"></path>
                      </svg>
                    </a>
                  </li>
                ))}
                <li className="cats" id="cats">
                  <ul className="cats-list" id="cats-list">
                    {Items["Cats-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="dogs" id="dogs">
                  <ul className="dogs-list" id="dogs-list">
                    {Items["Dogs-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="small-animals" id="small-animals">
                  <ul className="small-animals-list" id="small-animals-list">
                    {Items["Smallanimals-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
            <li className="seafood" id="seafood">
              <ul className="seafood-ul" id="seafood-ul">
                {Items["SeaFood-products"].map((product) => (
                  <li className="sub-menu" id="sub-menu" key={product.id}>
                    <a className="sub-product" id="sub-product" href={product.link}>
                      {product.item}
                      <svg xmlns="http://www.w3.org/2000/svg" width="5.284" height="9.598" viewBox="0 0 5.284 9.598">
                        <path id="Chevron_Right" d="M59.257,5.142,54.941,9.457a.485.485,0,0,1-.686-.685L58.229,4.8,54.256.828a.485.485,0,0,1,.686-.685l4.316,4.315A.489.489,0,0,1,59.257,5.142Z" transform="translate(-54.113 -0.001)"></path>
                      </svg>
                    </a>
                  </li>
                ))}
                <li className="prawns" id="prawns">
                  <ul className="prawns-list" id="prawns-list">
                    {Items["Prawns&shillfish-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
            <li className="seasonal-events" id="seasonal-events">
              <ul className="seasonal-events-ul" id="seasonal-events-ul">
                {Items["SeasonalEvents-products"].map((product) => (
                  <li className="sub-menu" id="sub-menu" key={product.id}>
                    <a className="sub-product" id="sub-product" href={product.link}>
                      {product.item}
                      <svg xmlns="http://www.w3.org/2000/svg" width="5.284" height="9.598" viewBox="0 0 5.284 9.598">
                        <path id="Chevron_Right" d="M59.257,5.142,54.941,9.457a.485.485,0,0,1-.686-.685L58.229,4.8,54.256.828a.485.485,0,0,1,.686-.685l4.316,4.315A.489.489,0,0,1,59.257,5.142Z" transform="translate(-54.113 -0.001)"></path>
                      </svg>
                    </a>
                  </li>
                ))}
                <li className="big-grill" id="big-grill">
                  <ul className="big-grill-list" id="big-grill-list">
                    {Items["Thebiggrill-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
            <li className="toiletries-health" id="tolietries-health">
              <ul className="toiletries-health-ul" id="toiletries-health-ul">
                {Items["Toiletries&Health-products"].map((product) => (
                  <li className="sub-menu" id="sub-menu" key={product.id}>
                    <a className="sub-product" id="sub-product" href={product.link}>
                      {product.item}
                      <svg xmlns="http://www.w3.org/2000/svg" width="5.284" height="9.598" viewBox="0 0 5.284 9.598">
                        <path id="Chevron_Right" d="M59.257,5.142,54.941,9.457a.485.485,0,0,1-.686-.685L58.229,4.8,54.256.828a.485.485,0,0,1,.686-.685l4.316,4.315A.489.489,0,0,1,59.257,5.142Z" transform="translate(-54.113 -0.001)"></path>
                      </svg>
                    </a>
                  </li>
                ))}
                <li className="deodrants" id="deodrants">
                  <ul className="deodrants-list" id="deodrants-list">
                    {Items["Deodorants-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="female-grooming" id="female-grooming">
                  <ul className="female-grooming-list" id="female-grooming-list">
                    {Items["Femalegrooming-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="first-aid" id="first-aid">
                  <ul className="first-aid-list" id="first-aid-list">
                    {Items["Firstaid-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="haircare" id="haircare">
                  <ul className="haircare-list" id="haircare-list">
                    {Items["Haircare-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="hand-sanitisers" id="hand-sanitisers">
                  <ul className="hand-sanitisers-list" id="hand-sanitisers-list">
                    {Items["Handsanitisers-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="male-grooming" id="male-grooming">
                  <ul className="male-grooming-list" id="male-grooming-list">
                    {Items["Malegrooming-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="oral-care" id="oral-care">
                  <ul className="oral-care-list" id="oral-care-list">
                    {Items["Oralcare-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="shower" id="shower">
                  <ul className="shower-list" id="shower-list">
                    {Items["Shower&paths-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="sun-care" id="sun-care">
                  <ul className="sun-care-list" id="sun-care-list">
                    {Items["Suncare-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="vitamins-supplements" id="vitamins-supplements">
                  <ul className="vitamins-supplements-list" id="vitamins-supplements-list">
                    {Items["Suncare-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
            <li className="world-foods" id="world-foods">
              <ul className="world-foods-ul" id="world-foods-ul">
                {Items["WorldFoods-products"].map((product) => (
                  <li className="sub-menu" id="sub-menu" key={product.id}>
                    <a className="sub-product" id="sub-product" href={product.link}>
                      {product.item}
                      <svg xmlns="http://www.w3.org/2000/svg" width="5.284" height="9.598" viewBox="0 0 5.284 9.598">
                        <path id="Chevron_Right" d="M59.257,5.142,54.941,9.457a.485.485,0,0,1-.686-.685L58.229,4.8,54.256.828a.485.485,0,0,1,.686-.685l4.316,4.315A.489.489,0,0,1,59.257,5.142Z" transform="translate(-54.113 -0.001)"></path>
                      </svg>
                    </a>
                  </li>
                ))}
                <li className="filipino" id="filipino">
                  <ul className="filipino-list" id="filipino-list">
                    {Items["Filipino-products"].map((product) => (
                      <li className="sub-menu" id="sub-menu" key={product.id}>
                        <a className="sub-product" id="sub-product" href={product.link}>
                          {product.item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>

          </ul>

        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
export default Menu;