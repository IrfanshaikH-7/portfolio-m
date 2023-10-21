import Footer from "@/components/Footer";
import PageWrapper from "@/components/providers/PageWrapper";
import { AlertOctagonIcon, AlertTriangleIcon } from "lucide-react";

const Page = () => {
    return (
        <>
            <PageWrapper classname="">
                <div className=" flex flex-col justify-center items-center h-screen w-full ">
                    <div className="text-9xl font-extrabold py-4">Blog page</div>
                    <div className="text-4xl text-rose-500 font-extrabold flex justify-center items-center"><AlertTriangleIcon size={32} className="text-rose-600 fill-rose-500" /> Under-development</div>
                    <p className="animate-pulse text-xs text-white">no preview available</p>
                </div>
                <div className='h-auto w-full bg-white dark:bg-slate-950 py-6 group'>
                    <div className='h-px w-[80%] bg-black dark:bg-white mx-auto group-hover:animate-pulse'></div>

                    <Footer />
                </div>
            </PageWrapper>
        </>
    );
}

export default Page;