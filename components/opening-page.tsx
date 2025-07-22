"use client"

import { ChevronDown, User, Home, Grid3X3, ShoppingCart, UserCircle, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

interface OpeningPageProps {
  onNavigate: (page: "opening" | "products" | "cart" | "schedule") => void
}

export function OpeningPage({ onNavigate }: OpeningPageProps) {
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

      {/* Weather Banner */}
      <div className="bg-gray-100 px-4 py-2 text-center">
        <p className="text-sm font-medium">Enjoy the rains while we deliver</p>
        <p className="text-xs text-gray-600">Ensuring safe delivery</p>
      </div>

      {/* Header */}
      <div className="bg-[#742170] px-4 py-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Delivery in 6 minutes</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-white">Other - Vashi Station Subway (East), Navi Mumb...</span>
              <ChevronDown className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Scheduled Delivery Banner */}
        <div className="bg-white rounded-lg p-4 mb-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <img src="/images/delivery-schedule.png" alt="Scheduled Delivery" className="w-8 h-8 object-contain" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">New on Zepto: Scheduled Delivery is here!</h3>
              <p className="text-sm text-gray-600 mb-2">₹50 Cashback on your First SD Order</p>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span>✓ No Platform Fee</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <span>✓ Reliable Morning Delivery</span>
              </div>
              <Button
                variant="outline"
                className="text-sm px-4 py-2 border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                onClick={() => onNavigate("products")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Grid */}
      <div className="px-4 py-4 flex-1">
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Everyday Essentials */}
          <div className="bg-[#8B5CF6] rounded-lg p-4 text-white relative overflow-hidden">
            <p className="text-xs mb-1">No Min. Order Value</p>
            <h3 className="font-bold text-lg mb-2">Everyday Essentials Store</h3>
            <div className="flex justify-between items-end">
              <Button
                className="bg-purple-500 hover:bg-purple-400 text-white rounded-full px-3 py-1 text-sm"
                onClick={() => onNavigate("products")}
              >
                zepto →
              </Button>
              <div className="w-16 h-12 bg-purple-500 rounded opacity-50"></div>
            </div>
          </div>

          {/* Zepto Café */}
          <div className="bg-[#FF6B35] rounded-lg p-4 text-white">
            <h3 className="font-bold text-lg mb-2">FOOD AT ₹99</h3>
            <div className="flex justify-between items-end">
              <Button
                className="bg-orange-400 hover:bg-orange-300 text-white rounded-full px-3 py-1 text-sm"
                onClick={() => onNavigate("products")}
              >
                zepto café →
              </Button>
              <div className="w-12 h-12 bg-orange-400 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Lowest Prices */}
          <div className="bg-[#00B4D8] rounded-lg p-4 text-white">
            <h3 className="font-bold text-lg mb-1">Lowest Prices!</h3>
            <p className="text-sm mb-2">Only with daily</p>
            <div className="flex justify-between items-end">
              <Button
                className="bg-blue-400 hover:bg-blue-300 text-white rounded-full px-3 py-1 text-sm"
                onClick={() => onNavigate("products")}
              >
                Fruits & Veggies →
              </Button>
              <div className="flex gap-1">
                <span className="text-2xl font-bold">₹14</span>
                <span className="text-lg">₹28</span>
              </div>
            </div>
          </div>

          {/* Super Saver */}
          <div className="bg-[#06D6A0] rounded-lg p-4 text-white">
            <h3 className="font-bold text-lg mb-2">Lowest Prices Ever!</h3>
            <Button
              className="bg-green-500 hover:bg-green-400 text-white rounded-full px-3 py-1 text-sm"
              onClick={() => onNavigate("products")}
            >
              SUPER SAVER →
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center gap-1">
            <Home className="w-5 h-5 text-[#8B5CF6]" />
            <span className="text-xs text-[#8B5CF6]">Home</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Grid3X3 className="w-5 h-5 text-gray-400" />
            <span className="text-xs text-gray-400">Categories</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <ShoppingCart className="w-5 h-5 text-gray-400" />
            <span className="text-xs text-gray-400">Cart</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <UserCircle className="w-5 h-5 text-gray-400" />
            <span className="text-xs text-gray-400">Profile</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
            <span className="text-xs text-gray-400">More</span>
          </div>
        </div>
      </div>
    </div>
  )
}
