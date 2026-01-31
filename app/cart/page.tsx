import Image from "next/image"
import Link from "next/link"
import CartItemDeleteButton from "./components/CartItemDeleteButton"

const apiUrl = "https://app-router-api-five.vercel.app/api/cart"

async function fetchCart() {
  const response = await fetch(apiUrl)
  const data = await response.json()
  return data
}

type CartItem = {
  id?: number
  name: string
  price: number
  image_url?: string
}

async function CartPage() {
  const cart: CartItem[] = await fetchCart()
  const totalPrice = cart.reduce((acc: number, item: CartItem) => acc + Number(item.price), 0)

  

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
        <h1 className="mb-8 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          장바구니
        </h1>

        {cart.length === 0 ? (
          <p className="rounded-xl border border-zinc-200 bg-white p-8 text-center text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            장바구니에 담긴 상품이 없습니다.
          </p>
        ) : (
          <>
            <ul className="mb-8 flex flex-col gap-4">
              {cart.map((item: CartItem, idx: number) => (
                <li
                  key={idx}
                  className="flex overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="h-24 w-24 shrink-0 overflow-hidden bg-zinc-100 dark:bg-zinc-800 sm:h-28 sm:w-28">
                    {item.image_url ? (
                      <Image
                        src={item.image_url}
                        alt={item.name}
                        width={112}
                        height={112}
                        className="h-full w-full object-cover"
                        unoptimized
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-2xl text-zinc-400 dark:text-zinc-500">
                        —
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-4 p-4">
                    <span className="font-medium text-zinc-800 dark:text-zinc-200">
                      {item.name}
                    </span>
                    <span className="shrink-0 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                      {Number(item.price).toLocaleString()}원
                    </span>
                    <CartItemDeleteButton id={item.id as number} />
                  </div>
                </li>
              ))}
            </ul>

            <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-zinc-600 dark:text-zinc-400">
                  총 <strong className="text-zinc-900 dark:text-zinc-100">{cart.length}</strong>개 상품
                </p>
                <p className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  {totalPrice.toLocaleString()}원
                </p>
              </div>
            </div>
          </>
        )}

        <div className="mt-6">
          <Link
            href="/"
            className="inline-block rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            ← 상품 목록으로
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartPage