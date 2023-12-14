import { pool } from '@/libs/mysql'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await pool.query('SELECT * FROM products')

    return NextResponse.json(res)
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      message: error.message,
    }, {
      status: 500
    })
  }
}

export async function POST(request) {
  try {
    const { prdt_name, prdt_description, prdt_price } = await request.json()

    console.log(prdt_name, prdt_description, prdt_price)

    const result = await pool.query('INSERT INTO products SET ?', {
      prdt_name,
      prdt_description,
      prdt_price
    })

    console.log(result)
    return NextResponse.json('Product saved')
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      message: error.message,
    }, {
      status: 500
    })
  }

}