import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import MainPage from "./pages/MainPage.jsx";
import Categories from "./pages/CategoriesPage.jsx";
import AllProductsPage from "./pages/AllProducts.jsx";
import AllSales from "./pages/AllSales.jsx";
import ToolsAndEquipment from "./components/ToolsAndEquipment/ToolsAndEquipment.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Discount from "./components/Discount/Discount.jsx"; 

function App() {

  return (
    <CartProvider>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/tools-and-equipment" element={<ToolsAndEquipment />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/sales" element={<AllSales />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
