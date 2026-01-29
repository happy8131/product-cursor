"use client"

type Props = {
  productName: string
}

export default function AddToCartButton({ productName }: Props) {
  const showAlert = () => {
    alert(`${productName} 장바구니에 담겼습니다.`)
  }

  return (
    <button
      type="button"
      onClick={showAlert}
      className="w-full rounded-xl bg-zinc-900 py-4 text-base font-semibold text-white transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 sm:py-3"
    >
      장바구니 담기
    </button>
  )
}
