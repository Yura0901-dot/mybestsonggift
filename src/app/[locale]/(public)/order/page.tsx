'use client'

import { useTranslations } from "next-intl"
import OrderForm from "./orderForm/OrderForm"
import { Metadata } from "next"

export const metadata: Metadata = {
    "title": "Create Your Custom Song | SongToGift",
    "description": "Order a personalized song for weddings, birthdays, or anniversaries. Professional studio quality, custom lyrics, and fast delivery. Start creating your masterpiece today."
}

const Order = () => {
  const t = useTranslations('OrderForm')

  return (
    <main className="pt-16 pb-24 bg-[#FDFBF7] min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2A26] mb-4">
            {t('main_title')}
          </h1>
          <p className="text-gray-500 text-lg">
            {t('main_desc')}
          </p>
        </div>

        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl">
            <OrderForm />
        </div>

      </div>
    </main>
  )
}

export default Order