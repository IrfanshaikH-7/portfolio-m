import Footer from "@/components/Footer";
import AboutComp from "@/components/about/about-comp";

const Page = () => {
    return ( 
        <>
        <section className="h-full w-full relative">

        
        <div className=" flex flex-col justify-center items-center h-screen w-full ">
            <AboutComp />
        </div>
        <div className='h-60 w-full bg-white dark:bg-slate-950 py-6'>
                <div className='h-px w-[80%] bg-black mx-auto'></div>
                       <Footer />       
              </div>
        </section>
        </>
     );
}
 
export default Page;