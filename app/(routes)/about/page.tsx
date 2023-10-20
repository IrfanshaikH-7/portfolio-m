import Footer from "@/components/Footer";
import AboutComp from "@/components/about/about-comp";
import PageWrapper from "@/components/providers/PageWrapper";

const Page = () => {
    return ( 
        <>
        <PageWrapper classname="">
        <section className="h-full w-full relative">
        <div className=" flex flex-col justify-center items-center h-screen w-full ">
            <AboutComp />
        </div>
        <div className='h-60 w-full bg-white dark:bg-slate-950 py-6'>
            <div className='h-px w-[80%] bg-black mx-auto'></div>
                <Footer />       
            </div>
        </section>
        </PageWrapper>
        </>
     );
}
 
export default Page;