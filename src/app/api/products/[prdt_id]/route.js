import { pool } from '@/libs/mysql'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  try {
    const result = await pool.query('SELECT * FROM products WHERE prdt_id = ?', params.prdt_id)
    return NextResponse.json(result[0])
  } catch (error) {
    return NextResponse.json({ message: 'Not found' }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  try {
    const result = await pool.query('DELETE FROM products WHERE prdt_id = ?', params.prdt_id)

    if (result.affectedRows === 0) { throw new Error('Product not found') }

    return NextResponse.json({ message: 'Product deleted' }, { status: 204 })
  } catch (error) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 })
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json()
    const result = await pool.query('UPDATE products SET ? where prdt_id = ?', [data, params.prdt_id])

    if (result.affectedRows === 0) { throw new Error('Product not found') }

    return NextResponse.json({ message: 'Product updated' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 })
  }
}