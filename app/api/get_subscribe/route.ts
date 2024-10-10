import axios from "axios";
import { NextResponse } from "next/server"
import * as cheerio from 'cheerio';

export async function GET() {
    const follower_tiktok = await followerTikTok()
    const follower_nuum = await followerNuum()
    const follower_tg = await followerTG()

    const response =  NextResponse.json({
        tiktok: follower_tiktok,
        nuum: follower_nuum,
        telegram: follower_tg
    })
    response.headers.set('Cache-Control', 's-maxage=60, stale-while-revalidate=30');

    return response;
}

async function followerNuum() {
    try {
        const response = await fetch('https://nuum.ru/api/v2/broadcasts/public?with_extra=true&channel_name=4zh&with_deleted=true')
        const data = await response.json()
        return data.result.channel.followers_count
    } catch {
        return 4000
    }
}

async function followerTG() {
    try {
        const response = await axios.get('https://t.me/+KzLfDZh9lMY0MWFi')
        const $ = cheerio.load(response.data);
        const text = $('div.tgme_page_extra').text();
        const numbers = text.match(/\d+/g);
        return numbers
    } catch {
        return 4000
    }
}

async function followerTikTok() {
    try {
        const headers = {
            'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15"
        }
        const username = "che_obzor"
        const url = `https://app.jagajam.com/v4/search?q=${username}&socialTypes[0]=TT&page=1&perPage=10&token=&trackTotal=true&extended=true`
        const response = await axios.get(url, { headers });
        const membersCount = response.data.data[0].usersCount;
        return membersCount
    } catch {
        return 4000
    }
}

