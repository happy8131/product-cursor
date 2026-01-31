'use client'

import { useRouter } from "next/navigation"

const apiUrl = "https://app-router-api-five.vercel.app/api/cart"

async function deleteCart(id: number) {
  const response = await fetch(apiUrl, {
    method: 'DELETE',
    body: JSON.stringify({ productId:id }),
  })
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  const data = await response.json()
  return data
}

export default function CartItemDeleteButton({ id }: { id: number }) {
    const router = useRouter()

    const handleDeleteCart = async () => {
        try {
        await deleteCart(id)
        alert('상품이 삭제되었습니다.')
        router.refresh()
    } catch (error) {
        console.error(error)
        alert('상품 삭제에 실패했습니다.')
    }
  }
  return (
    <button className="text-red-500 cursor-pointer" onClick={handleDeleteCart}>삭제</button>
  )
}