
import { Link } from "react-router-dom";
import cn from "./sale.module.css";
import SaleProductCard from "../SaleProductCard/SaleProductCard.jsx"; 

import saleImg01 from "../../assets/saleImg01.png";
import saleImg02 from "../../assets/saleImg02.png";
import saleImg03 from "../../assets/saleImg03.png";
import saleImg04 from "../../assets/saleImg04.png";

const saleCard = [
  { id: 1, title: "Decorative forged bridge", img: saleImg01, price: 500, oldPrice: 1000, discount: "-50%" },
  { id: 2, title: "Flower basket", img: saleImg02, price: 100, oldPrice: 150, discount: "-34%" },
  { id: 3, title: "Aquarium lock", img: saleImg03, price: 150, oldPrice: 200, discount: "-24%" },
  { id: 4, title: "Secateurs", img: saleImg04, price: 199, oldPrice: 240, discount: "-17%" },
];

const Sale = () => {

  return (
    <div className={cn.blockSale}>
      <div className={cn.topSale}>
        <h2 className={cn.titleSale}>Sale</h2>
        <hr className={cn.lineSale} />
        <Link to="/sales">
          <button className={cn.btnSale}>All sales</button>
        </Link>
      </div>

      <div className={cn.blockSaleCard}>
        {saleCard.map((item) => (
          <SaleProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Sale;
