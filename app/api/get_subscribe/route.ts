import axios from "axios";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const response = await axios.post('https://kola344-vpnbot-31c6.twc1.net');
        const { tiktok, nuum, telegram } = response.data;

        return NextResponse.json({
            tiktok,
            nuum,
            telegram
        });
    } catch (error) {
        return NextResponse.json({
            error: "Failed to fetch data from FastAPI",
            details: error.message
        }, { status: 500 });
    }
}
