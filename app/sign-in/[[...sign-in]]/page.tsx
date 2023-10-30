import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen w-full relative flex justify-center items-center">
      <SignIn />
    </div>
  )

}