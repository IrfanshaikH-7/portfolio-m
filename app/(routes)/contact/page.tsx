import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactAnimation from "@/components/contact/contactAnimation";
import PageWrapper from "@/components/providers/PageWrapper";
import { Form } from "@/components/ui/form";
import { Mail } from "lucide-react";
import Link from "next/link";

const Page = () => {

    return (
        <>
            <PageWrapper classname="">
                <div className=" flex justify-center items-center h-full md:h-screen w-full ">
                    <section className="flex md:flex-row flex-col h-full lg:h-[90%] md:h-[80%] w-[90%] md:w-[85%] md:mt-12 mt-16  rounded-[50px]  bg-gradient-to-t from-emerald-400 from-10% via-sky-500 via-60% to-indigo-500 relative px-4 sm:px-0">

                        <div className=" flex flex-col justify-center px-8 md:px-0 items-center md:flex-1">
                            <div className=" xl:h-4/6 md:h-auto aspect-square self-start border-[12px] border-t-[20px] md:border-t-[12px] md:border-l-[20px] border-white dark:border-slate-950 rounded-[80px] rounded-t-none md:rounded-tr-[80px]  md:rounded-l-none ">
                                <ContactAnimation />
                            </div>
                        </div>
                        <div className="md:flex-1 relative">
                            <ContactForm />
                        </div>
                        {/* <div className="h-60 w-full bg-emerald-400">

                </div> */}
                    </section>
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