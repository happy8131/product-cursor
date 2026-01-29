import Image from "next/image";
import Link from "next/link";


const apiUrl = 'https://app-router-api-five.vercel.app/api/products';

interface Product {
  id: number;
  name: string;
  image_url: string;
  description: string;
  price: number;
}

async function fetchProducts(){
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data
}

//상품 목록 페이지
async function ProductList(){
    const products = await fetchProducts()
   
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">상품 목록</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0">
          {products.map((pro: Product) => (
              <li
              key={pro.id}
              className="group bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm overflow-hidden flex flex-col cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl"
            >
            <Link href={`/products/${pro.id}`} key={pro.id} className="flex flex-col h-full">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={pro.image_url}
                    alt={pro.name}
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    width={250}
                    height={250}
                    unoptimized
                  />
                </div>
                <p className="p-4 font-semibold text-center">{pro.name}</p>
            </Link>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default ProductList;
