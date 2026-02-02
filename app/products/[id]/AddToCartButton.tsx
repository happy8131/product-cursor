"use client"

import {  useRouter } from "next/navigation"

type Props = {
  productName: string
  productId: string
}

// const apiUrl = "https://app-router-api-five.vercel.app/api/cart"

// async function addToCart(id: string) {
//   const response = await fetch(apiUrl, {
//     method: "POST",
//     body: JSON.stringify({ id }),
//   })

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`)
//   }

//   const data = await response.json()
//   return data
// }

function addToCart(id: string) {
  return fetch('/api/cart', {
    method: "POST",
    body: JSON.stringify({ id }),
  })
}

export default function AddToCartButton({ productName, productId }: Props) {
  const router = useRouter()


  const handleAddToCart =async () => {
    try {
      await addToCart(productId as string)   
      alert(`${productName} 장바구니에 담겼습니다.`)
      router.push(`/cart`)
    } catch (error) {
      console.error(error)
      alert(`장바구니에 담는데 실패했습니다.`)
    }
  }

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="w-full rounded-xl bg-zinc-900 py-4 text-base font-semibold text-white transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 sm:py-3"
    >
      장바구니 담기
    </button>
  )
}
