"use server"

import { connectToDB } from "@/lib/connectToDB";
import { db } from "@/lib/db";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";


export const CreateProject = async ({ title, note, tag,imgUrl, githublink, livelink, pointers }: Params) => {
    try {
        await connectToDB()
        const project = await db.project.create({
            data: {
                title: title,
                note: note,
                tags: tag,
                imgUrl: imgUrl,
                githublink: githublink,
                livelink : livelink,
                pointers : pointers
            }
        })
        console.log("Created project")

        console.log("Created project")

        console.log("Created project")

        console.log("Created project")

        console.log("Created project")

        console.log("Created project")

        console.log("Created project")

        console.log("Created project")

        return NextResponse.json({ project }, { status: 200 });

    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        await db.$disconnect();
    }
}