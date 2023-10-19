import Footer from "@/components/Footer";

const Page = () => {
    return ( 
        <>
        <div className=" flex justify-center items-center h-screen w-full">
            <p className="text-9xl font-extrabold">Blog page</p>
            
        </div>
        <div className='h-auto w-full bg-white dark:bg-slate-950 py-6'>
        <div className='h-px w-[80%] bg-black mx-auto'></div>
               <Footer />       
      </div>
      </>
     );
}
 
export default Page;