import Image from "next/image"
import Link from "next/link"
import AddToCartButton from "./AddToCartButton"

const apiUrl = "https://app-router-api-five.vercel.app/api/products"

async function fetchProduct(id: string) {
  const response = await fetch(`${apiUrl}/${id}`)
  const data = await response.json()
  return data
}

async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await fetchProduct(id)

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        <Link
          href="/"
          className="mb-6 inline-block text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          ← 상품 목록으로
        </Link>

        <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="grid gap-8 p-6 sm:grid-cols-2 sm:p-8">
            {/* 이미지 */}
            <div className="aspect-square overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
              <Image
                src={product.image_url}
                alt={product.name}
                width={500}
                height={500}
                className="h-full w-full object-cover"
                unoptimized
                priority
              />
            </div>

            {/* 상품 정보 */}
            <div className="flex flex-col">
              <h1 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
                {product.name}
              </h1>
              <p className="mb-6 text-3xl font-semibold text-zinc-800 dark:text-zinc-200">
                {Number(product.price).toLocaleString()}원
              </p>
              <p className="mb-8 flex-1 whitespace-pre-wrap text-zinc-600 dark:text-zinc-400">
                {product.description}
              </p>

              <AddToCartButton productName={product.name} />
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default ProductDetail