import { NavLink } from "react-router";
import { useCartStore } from "../store/cartStore";

export default function NavBar() {
  // ดึงจำนวนสินค้าจาก Store
  const cartCount = useCartStore((state) => state.cart.length);

  return (
    <nav>
      <NavLink to="/">Shop</NavLink> |&nbsp;
      <NavLink to="/cart">Cart ({cartCount})</NavLink> |&nbsp;
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}
