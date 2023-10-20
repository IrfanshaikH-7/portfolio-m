import Footer from "@/components/Footer";
import PageWrapper from "@/components/providers/PageWrapper";

const Page = () => {
    return (
        <>
            <PageWrapper classname="">
                <div className=" flex justify-center items-center h-screen w-full ">
                    <p className="text-9xl font-extrabold">Blog page</p>
                    
                </div>
                <div className='h-auto w-full bg-white dark:bg-slate-950 py-6'>
        <div className='h-px w-[80%] bg-black mx-auto'></div>
               <Footer />       
      </div>
            </PageWrapper>
        </>
    );
}

export default Page;