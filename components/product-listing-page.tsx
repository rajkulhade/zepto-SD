"use client"

import { Search, User, ShoppingCart, ChevronRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ProductListingPageProps {
  onNavigate: (page: "opening" | "products" | "cart" | "schedule") => void
  cartItemCount: number
  cartTotal: number
}

export function ProductListingPage({ onNavigate, cartItemCount, cartTotal }: ProductListingPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 text-sm">
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 bg-black rounded-full"></div>
          <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span>11:06</span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span>89%</span>
          <div className="w-6 h-3 border border-black rounded-sm">
            <div className="w-5 h-2 bg-black rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white">
        <div className="flex items-center gap-2">
          <div className="bg-[#8B5CF6] text-white px-4 py-2 rounded-full text-sm font-medium">zepto</div>
          <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">zepto Super Saver</div>
        </div>
        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
          <User className="w-4 h-4" />
        </div>
      </div>

      {/* Delivery Info */}
      <div className="px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">⚡ 6 minutes</span>
          <div className="bg-[#8B5CF6] text-white px-2 py-1 rounded text-xs font-medium">WIN 🎁</div>
        </div>
        <p className="text-sm text-gray-600">Other - Vashi Station Subway (East...)</p>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Search for atta & more" className="pl-10 pr-4 py-2 rounded-lg border border-gray-200" />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-4 px-4 py-2 overflow-x-auto">
        {["All", "Rakhi Store", "Fashion", "Cafe", "Electronics"].map((category, index) => (
          <div
            key={category}
            className={`flex flex-col items-center gap-1 min-w-fit ${index === 0 ? "border-b-2 border-black" : ""}`}
          >
            <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
              <ShoppingCart className="w-4 h-4" />
            </div>
            <span className="text-xs">{category}</span>
          </div>
        ))}
      </div>

      {/* Daily Banner */}
      <div className="mx-4 mb-4 bg-yellow-100 rounded-lg p-3">
        <div className="flex items-center justify-center gap-2">
          <div className="bg-green-800 text-white px-3 py-1 rounded-full text-sm font-bold">daily</div>
          <span className="text-sm font-medium">Free delivery, lowest prices & more</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>

      {/* Product Categories */}
      <div className="px-4 flex-1">
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { name: "Vegetables", icon: "🍅" },
            { name: "Fruits", icon: "🍊" },
            { name: "Leafy", icon: "🥬" },
            { name: "Exotics", icon: "🥝" },
          ].map((category) => (
            <div key={category.name} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center text-2xl">
                {category.icon}
              </div>
              <span className="text-sm text-center">{category.name}</span>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-yellow-100 rounded-lg p-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-sm">Lowest prices on veggies & more unlocked with</span>
            <div className="bg-green-800 text-white px-2 py-1 rounded text-xs font-bold">daily</div>
          </div>
        </div>
      </div>

      {/* View Cart Button */}
      {cartItemCount > 0 && (
        <div className="px-4 py-3 bg-white border-t">
          <Button
            className="w-full bg-[#FF4757] hover:bg-red-600 text-white py-3 rounded-lg flex items-center justify-between"
            onClick={() => onNavigate("cart")}
          >
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              <span>View Cart</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{cartItemCount} items</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Button>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center">
          <Button
            variant="ghost"
            onClick={() => onNavigate("opening")}
            className="flex flex-col items-center gap-1 p-2"
          >
            <ArrowLeft className="w-5 h-5 text-gray-400" />
            <span className="text-xs text-gray-400">Back</span>
          </Button>
          <div className="flex flex-col items-center gap-1">
            <div className="w-5 h-5 bg-[#8B5CF6] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">Z</span>
            </div>
            <span className="text-xs text-[#8B5CF6]">Zepto</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
            <span className="text-xs text-gray-400">Categories</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-orange-600 text-xs font-bold">UPTO 80% OFF</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-5 h-5 bg-red-500 rounded"></div>
            <span className="text-xs text-gray-400">Cafe</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <ShoppingCart className="w-5 h-5 text-gray-400" />
            <span className="text-xs text-gray-400">Buy Again</span>
          </div>
        </div>
      </div>
    </div>
  )
}
