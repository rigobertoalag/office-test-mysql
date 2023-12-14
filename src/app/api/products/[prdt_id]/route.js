import { pool } from '@/libs/mysql'
import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json('mostrando un producto')
}