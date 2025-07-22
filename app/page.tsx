"use client"

import { useState } from "react"
import { OpeningPage } from "@/components/opening-page"
import { ProductListingPage } from "@/components/product-listing-page"
import { CartSummaryPage } from "@/components/cart-summary-page"
import { ScheduleDeliveryPage } from "@/components/schedule-delivery-page"

export default function ZeptoApp() {
  const [currentPage, setCurrentPage] = useState<"opening" | "products" | "cart" | "schedule">("opening")
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Onion", price: 35, originalPrice: 68, quantity: 1, weight: "1 Pack (900-1000 Gm)" },
    { id: 2, name: "Potato", price: 82, originalPrice: 142, quantity: 2, weight: "1 Pack (900-1000 gm)" },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id))
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalSavings = cartItems.reduce((sum, item) => sum + (item.originalPrice - item.price) * item.quantity, 0)

  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen">
      {currentPage === "opening" && <OpeningPage onNavigate={setCurrentPage} />}
      {currentPage === "products" && (
        <ProductListingPage onNavigate={setCurrentPage} cartItemCount={totalItems} cartTotal={totalPrice} />
      )}
      {currentPage === "cart" && (
        <CartSummaryPage
          onNavigate={setCurrentPage}
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          totalPrice={totalPrice}
          totalSavings={totalSavings}
        />
      )}
      {currentPage === "schedule" && <ScheduleDeliveryPage onNavigate={setCurrentPage} />}
    </div>
  )
}
