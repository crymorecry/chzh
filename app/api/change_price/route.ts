/* eslint-disable  @typescript-eslint/no-explicit-any */

import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs'

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const price = searchParams.get('price');
    const password = searchParams.get('password');
    if(password === "cHzh1pass67" && price != null && price != undefined){
        const FilePath = path.join(process.cwd(), "public", "price.json")
        const jsonData = {
            price: price
        }
        fs.writeFileSync(FilePath, JSON.stringify(jsonData, null, 2), 'utf-8')
        return NextResponse.json({ message: "success", price: price });
    }else{
        return NextResponse.json({ message: "not admin" });
    }
}
