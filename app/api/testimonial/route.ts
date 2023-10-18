import { connectToDB } from "@/lib/connectToDB";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        connectToDB();
        const body = await request.json()
        const { name, email, company, job_title, message, imgUrl , anonymous } = body
       
            const testimony = await db.testimonials.create({
            data: {
                name: name,
                email: email,
                company: company || '',
                job_title: job_title || '',
                message: message,
                imgUrl: imgUrl,
                anonymous: anonymous
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