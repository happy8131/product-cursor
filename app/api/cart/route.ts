import { NextResponse } from "next/server"

const apiUrl = "https://app-router-api-five.vercel.app/api/cart"



async function POST(request: Request){
    const body = await request.json()
    const { id } = body

        const response = await fetch(apiUrl, {
          method: "POST",
          body: JSON.stringify({ id }),
        })
      
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
      
        const data = await response.json()
        return NextResponse.json(data)
      

}

export { POST }