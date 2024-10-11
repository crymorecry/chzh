/* eslint-disable  @typescript-eslint/no-explicit-any */

import fs from 'fs'
import { NextResponse } from 'next/server'
import path from 'path'


export async function GET() {
    const FilePath = path.join(process.cwd(), "public", "price.json")
    const response: any = JSON.parse(fs.readFileSync(FilePath, 'utf-8'))
    return NextResponse.json({ price: response.price})
}