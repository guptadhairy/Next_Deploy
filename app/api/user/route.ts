import { NextRequest, NextResponse } from "next/server"

export async function POST (request: NextRequest) {
    const body = await request.json();
    console.log(body);
    return NextResponse.json({
        message: "Done"
    })
}

export function GET() {
    return Response.json({
        email: "dhirugupta@gmail.com",
        name: "Dhiru Gupta  "
    })
}