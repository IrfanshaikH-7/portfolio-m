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
                    <p className=" text-xs text-white">no preview available</p>
                {/* <div className='px-4 md:px-12 pt-24 flex flex-col md:flex-row  justify-center items-center h-full w-full gap-2'>
                        <div className='w-full md:w-3/5 self-start md:self-auto  aspect-video bg-slate-500  rounded-lg'></div>
                            <div className=" w-full md:w-2/5 space-y-3 mt-6 md md:py-8 self-center justify-self-center ">
                                <div className="bg-slate-400 w-1/3 h-8 rounded-lg "></div>
                                <div className="bg-slate-400 w-2/3 h-6 rounded-lg "></div>
                                <div className="bg-slate-400 w-2/3 h-6 rounded-lg "></div>
                                <div className="bg-slate-400 w-1/3 h-8 rounded-lg  pt-4"></div>
                                <div className="bg-slate-400 w-full h-4 rounded-lg "></div>
                                <div className="bg-slate-400 w-full h-4 rounded-lg "></div>
                                <div className="bg-slate-400 w-full h-4 rounded-lg "></div>
                                <div className="bg-slate-400 w-full h-4 rounded-lg "></div>
                                <div className="bg-slate-400 w-full h-4 rounded-lg "></div>
                                <div className="bg-slate-400 w-full h-4 rounded-lg "></div>
                                <div className="bg-slate-400 w-full h-4 rounded-lg "></div>
                                <div className="md:hidden bg-slate-400 w-full h-4 rounded-lg "></div>
                                <div className="md:hidden bg-slate-400 w-full h-4 rounded-lg "></div>
                            </div>
                            

                        
                    </div> */}
                {/* <section className="h-full md:h-screen w-full px-4 md:px-12">
                    <div className="px-4 pt-24 md:py-0 h-full min-w-full flex flex-col md:flex-row items-center gap-2 ">
                        <div className=" relative md:min-w-min md:w-3/5 w-full  aspect-video bg-slate-400 rounded-2xl animate-pulse"></div>
                        <div className="md:px-12 py-8 md:py-0 group md:w-2/5 w-auto md:self-auto self-start space-y-2">
                            <div className="h-8 w-1/3 bg-slate-500 animate-pulse rounded-lg"></div>
                            <div className="h-5 w-2/3 bg-slate-400 animate-pulse rounded-lg"></div>
                            <div className="h-5 w-1/3 bg-slate-400 animate-pulse rounded-lg"></div>
                            <div className="h-2 w-full bg-transparent"></div>

                            <div className="h-8 w-1/3 bg-slate-500 animate-pulse rounded-lg"></div>
                            <div className="h-5 w-2/3 bg-slate-400 animate-pulse rounded-lg"></div>
                            <div className="flex gap-2">
                                
                            <div className="h-9 w-24 bg-slate-400 animate-pulse rounded-lg"></div>
                            <div className="h-9 w-24 bg-slate-400 animate-pulse rounded-lg"></div>
                            <div className="h-9 w-24 bg-slate-400 animate-pulse rounded-lg"></div>
                            <div className="h-9 w-24 bg-slate-400 animate-pulse rounded-lg"></div>
                            </div>
                            <div className="h-2 w-full bg-transparent"></div>

                            <div className="h-8 w-1/3 bg-slate-500 animate-pulse rounded-lg"></div>
                            <div className="h-6 w-2/3 bg-slate-400 animate-pulse rounded-lg"></div>
                            <div className="h-2 w-full bg-transparent"></div>
                            
                            <div className="h-4 w-full bg-slate-400 animate-pulse rounded-lg"></div>
                            <div className="h-4 w-full bg-slate-400 animate-pulse rounded-lg"></div>
                            <div className="h-4 w-full bg-slate-400 animate-pulse rounded-lg"></div>
                            <div className="h-4 w-full bg-slate-400 animate-pulse rounded-lg"></div>
                            <div className="h-4 w-full bg-slate-400 animate-pulse rounded-lg"></div>
                            <div className="h-4 w-full bg-slate-400 animate-pulse rounded-lg"></div>




                        </div>
                    </div>
                </section> */}
                </div>
                <div className='h-auto w-full bg-white dark:bg-slate-950 py-6 group'>
                    <div className='h-px w-[80%] bg-black dark:bg-white mx-auto group-hover:'></div>

                    <Footer />
                </div>
            </PageWrapper>
        </>
    );
}

export default Page;