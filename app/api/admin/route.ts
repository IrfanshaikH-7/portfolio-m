import { connectToDB } from "@/lib/connectToDB";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    try {
        await connectToDB();
        const admin = await db.admin.findMany();
        return NextResponse.json({admin}, { status: 200});

    } catch (error: any) {
        console.log(error)
        return NextResponse.json({error: error.message}, { status: 500});
        
    }finally {
        await db.$disconnect();
    }
}