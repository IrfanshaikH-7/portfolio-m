import { connectToDB } from "@/lib/connectToDB";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        connectToDB();
        const body = await request.json()
        const testimony = await db.testimonials.create({
            data: {
                name: body.name,
                email: body.email,
                company: body.company,
                job_title: body.job_title,
                message: body.message,
                imgUrl:body.imgUrl,
                anonymous: body.anonymous
            }
        })
        if(testimony){
            console.log(testimony)
        }
        return NextResponse.json(testimony,{status:201})
    } catch (error) {
        return new NextResponse('Testimonial Error',{status:500})    
    }
}