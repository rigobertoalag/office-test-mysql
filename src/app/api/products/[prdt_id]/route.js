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