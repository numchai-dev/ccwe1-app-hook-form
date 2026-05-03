import { useCartStore } from "../store/cartStore"

export default function CartPage() {
  // ดึงข้อมูลจาก Store และใช้ฟังก์ชันลบสินค้า
  // ... ทำเพิ่มตรงนี้

const cart = useCartStore((state) => state.cart);
const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div>
      <h1>My Cart</h1>
      {/* แสดงข้อความเมื่อตะกร้าว่าง และ Loop แสดงสินค้า */}
      {/* ... ทำเพิ่มตรงนี้ */}
      {cart.map ((item)=> (
        <div>
          {item.title} - ${item.price}{" "}
          <button onClick={() => removeFromCart(item.id)}className="text-red-400 cursor-pointer">ลบ</button>
          </div>
      ))}
    </div>
  )
}
