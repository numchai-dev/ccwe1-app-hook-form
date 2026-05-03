import { useLoaderData } from "react-router"
import { useCartStore } from "../store/cartStore";

export default function ProductDetailPage() {
  // ดึงข้อมูลรายละเอียดสินค้า
  // ใช้ฟังก์ชันจาก Store เพื่อเพิ่มสินค้า
  // ... ทำเพิ่มตรงนี้

  const product = useLoaderData();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddtoCart = () => {
    addToCart(product);
    alert("Add to cart!");
  }

  return (
    <div>
      <h1>Product Detail</h1>
      {/* แสดงรายละเอียดสินค้าที่นี่ */}
      <h3 className="font-bold">{product.title}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddtoCart} className="cursor-pointer font-bold">Add to Cart</button>
    </div>
  )
}
