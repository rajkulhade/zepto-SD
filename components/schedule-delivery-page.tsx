"use client"

import { ArrowLeft, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ScheduleDeliveryPageProps {
  onNavigate: (page: "opening" | "products" | "cart" | "schedule") => void
}

export function ScheduleDeliveryPage({ onNavigate }: ScheduleDeliveryPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 text-sm bg-white">
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
      <div className="flex items-center gap-3 px-4 py-4 bg-white border-b">
        <Button variant="ghost" size="sm" onClick={() => onNavigate("cart")}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold">Delivery Options</h1>
      </div>

      {/* Delivery Address */}
      <div className="bg-white px-4 py-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <CheckCircle className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <p className="font-medium">Deliver to: Home (Default)</p>
            <p className="text-sm text-gray-600">
              Flat no 392, Shri Ram Residency, plot no 83, Near Sai Mandir, Ulwe, Mumbai, Pin- 410206
            </p>
          </div>
          <Button variant="outline" size="sm">
            Change
          </Button>
        </div>
      </div>

      {/* Delivery Option */}
      <div className="bg-white px-4 py-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold">Delivery Option</h2>
          <div className="text-right">
            <p className="text-sm">1 Shipment</p>
            <p className="text-sm text-green-600 font-medium">Delivery Charges: Free</p>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium">Shipment 1: Standard Delivery</h3>
            <Button variant="outline" size="sm">
              Bill Summary
            </Button>
          </div>

          {/* Time Slot Selector */}
          <div className="mb-4">
            <Select defaultValue="tomorrow-8-2">
              <SelectTrigger className="w-full">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tomorrow-8-2">Tomorrow 8:00 AM - 2:00</SelectItem>
                <SelectItem value="tomorrow-2-8">Tomorrow 2:00 PM - 8:00 PM</SelectItem>
                <SelectItem value="day-after-8-2">Day After Tomorrow 8:00 AM - 2:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <p className="text-sm text-gray-600 mb-4">Delivery Charge: Free</p>

          <Button className="w-full bg-[#06D6A0] hover:bg-[#05C195] text-white py-3 rounded-lg mb-4">Proceed</Button>

          {/* Benefits */}
          <div className="space-y-3">
            <h4 className="font-medium">Why Scheduled Delivery?</h4>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-[#E8F8F5] rounded flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-[#06D6A0]" />
              </div>
              <span className="text-sm">₹0 platform fee</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-[#E8F8F5] rounded flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-[#06D6A0]" />
              </div>
              <span className="text-sm">Reliable time slot (7-9 AM)</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-[#E8F8F5] rounded flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-[#06D6A0]" />
              </div>
              <span className="text-sm">Save ₹30 instantly</span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="flex-1 px-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
            <span className="font-medium text-blue-800">Delivery Information</span>
          </div>
          <p className="text-sm text-blue-700">
            Your scheduled delivery will arrive within the selected time slot. You'll receive notifications about your
            order status.
          </p>
        </div>
      </div>
    </div>
  )
}
