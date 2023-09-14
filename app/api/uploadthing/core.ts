import { auth } from "@clerk/nextjs";
import { createUploadthing, type FileRouter } from "uploadthing/next";

 
const f = createUploadthing();
// const user = await currentUser();
const handleAuth = () => {
  const {userId} = auth();

  if(!userId){
    throw new Error("Unauthorized")
  }
  return { userId: userId};
} 
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
        image: { maxFileSize: "4MB", maxFileCount: 6 },
        video: { maxFileSize: "256MB", maxFileCount: 1 }
  })
    // Set permissions and file types for this FileRoute
    .middleware(() => handleAuth())

    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);
 
      console.log("file url", file.url);
    }),

    mediaType: f(['image','video'])
    .middleware(() => handleAuth())
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);
    }),

} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;