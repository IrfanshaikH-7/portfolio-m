// import { connectToDB } from "@/lib/connectToDB";
// import { db } from "@/lib/db";
// import { NextResponse } from "next/server";

// interface CreateProjectProps {
//     req: Request
//     title: string,
//     note: string,
//     tag: []
// }
// export const POST = async ({req,title,note,tag}: CreateProjectProps) => {
//     try {
//         await connectToDB();
//         const project = await  db.project.create({
//             data: {
//                 title: title,
//                 note: note,
//                 tags: tag
//             }
//         })
//         console.log("Created project")

//         console.log("Created project")

//         console.log("Created project")

//         console.log("Created project")

//         console.log("Created project")

//         console.log("Created project")

//         console.log("Created project")

//         console.log("Created project")
        
//         return NextResponse.json({project}, { status: 200});

//     } catch (error: any) {
//         console.log(error)
//         return NextResponse.json({error: error.message}, { status: 500});
        
//     }finally {
//         await db.$disconnect();
//     }
// }