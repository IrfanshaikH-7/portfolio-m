"use server"

import { connectToDB } from "@/lib/connectToDB";
import { db } from "@/lib/db";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

export const CreateAchievement = async ({ title, imgUrl,date }: Params) => {
    try {
        await connectToDB()
        const Achievement = await db.achievement.create({
            data: {
                title: title,
                imgUrl: imgUrl,
                date: date,
            }
        })
        console.log("Achievement project")
        return JSON.stringify({ Achievement });

    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        await db.$disconnect();
    }
}

