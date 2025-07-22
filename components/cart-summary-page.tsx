"use client"

import { ArrowLeft, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CartItem {
  id: number
  name: string
  price: number
  originalPrice: number
  quantity: number
  weight: string
}

interface CartSummaryPageProps {
  onNavigate: (page: "opening" | "products" | "cart" | "schedule") => void
  cartItems: CartItem[]
  updateQuantity: (id: number, quantity: number) => void
  totalPrice: number
  totalSavings: number
}

export function CartSummaryPage({
  onNavigate,
  cartItems,
  updateQuantity,
  totalPrice,
  totalSavings,
}: CartSummaryPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 text-sm">
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 bg-black rounded-full"></div>
          <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span>12:16</span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span>89%</span>
          <div className="w-6 h-3 border border-black rounded-sm">
            <div className="w-5 h-2 bg-black rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      {/* Header Tabs */}
      <div className="flex px-4 py-3 bg-white border-b">
        <div className="flex w-full">
          <div className="bg-gray-800 text-white px-6 py-2 text-sm font-medium flex-1 text-center">Zepto</div>
          <div className="bg-gray-100 text-gray-700 px-6 py-2 text-sm flex-1 text-center">Zepto SuperSaver</div>
        </div>
      </div>

      {/* Cart Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => onNavigate("products")}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold">Your Cart</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-gray-100 px-3 py-1 rounded text-sm">Saved ₹{totalSavings}</div>
          <div className="bg-blue-100 px-3 py-1 rounded text-sm text-blue-700">Save ₹400 with SD</div>
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex-1 px-4">
        <div className="border rounded-lg p-4">
          {/* Dragon Fruit */}
          <div className="flex items-center gap-3 py-3 border-b">
            <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
              <img src="/images/dragon-fruit.png" alt="Dragon Fruit" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Dragon Fruit</h3>
              <p className="text-sm text-gray-600">2000 g</p>
              <p className="font-bold">₹600</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="w-8 h-8 p-0 bg-transparent"
                onClick={() => updateQuantity(1, 1)}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center font-medium">2</span>
              <Button
                variant="outline"
                size="sm"
                className="w-8 h-8 p-0 bg-transparent"
                onClick={() => updateQuantity(1, 3)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Cabbage */}
          <div className="flex items-center gap-3 py-3 border-b">
            <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
              <img src="/images/cabbage.png" alt="Cabbage" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Cabbage</h3>
              <p className="text-sm text-gray-600">2500 g</p>
              <p className="font-bold">₹60</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="w-8 h-8 p-0 bg-transparent"
                onClick={() => updateQuantity(2, 1)}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center font-medium">2</span>
              <Button
                variant="outline"
                size="sm"
                className="w-8 h-8 p-0 bg-transparent"
                onClick={() => updateQuantity(2, 3)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Potato */}
          <div className="flex items-center gap-3 py-3">
            <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
              <img src="/images/potato.png" alt="Potato" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Potato</h3>
              <p className="text-sm text-gray-600">1600 g</p>
              <p className="font-bold">₹60</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="w-8 h-8 p-0 bg-transparent"
                onClick={() => updateQuantity(3, 1)}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center font-medium">2</span>
              <Button
                variant="outline"
                size="sm"
                className="w-8 h-8 p-0 bg-transparent"
                onClick={() => updateQuantity(3, 3)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Split Layout */}
      <div className="px-4 py-4 bg-white border-t">
        <div className="flex gap-2">
          {/* Left Side - Quick Delivery */}
          <div className="flex-1 border rounded-lg p-4">
            <p className="text-lg font-bold">Total 1100₹</p>
            <p className="text-sm text-gray-600">Get in 10 Minutes</p>
          </div>

          {/* Right Side - Scheduled Delivery */}
          <div
            className="flex-1 border-2 border-green-500 rounded-lg p-4 bg-green-50 cursor-pointer hover:bg-green-100 transition-colors"
            onClick={() => onNavigate("schedule")}
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold">Total 1000₹</p>
              <span className="text-sm">Select Slot →</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">⏰</span>
              </div>
              <p className="text-xs text-green-700">Recommended: Tomorrow 7-9 AM</p>
            </div>
            <p className="text-xs text-green-600">(Most chosen in your area)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
