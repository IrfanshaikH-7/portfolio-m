import Footer from "@/components/Footer";
import AboutSection from "@/components/about/AboutSection";
import PageWrapper from "@/components/providers/PageWrapper";

const Page = () => {
    return ( 
        <>
        <PageWrapper classname="">
        <section className="h-full w-full relative">
        <div className=" flex flex-col justify-center items-center h-screen w-full ">
            <AboutSection />
        </div>
        <div className='h-60 w-full bg-white dark:bg-slate-950 py-6 group'>
        <div className='h-px w-[80%] bg-black dark:bg-white mx-auto group-hover:animate-pulse'></div>
                <Footer />       
            </div>
        </section>
        </PageWrapper>
        </>
     );
}
 
export default Page;