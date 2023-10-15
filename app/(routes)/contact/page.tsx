import ContactForm from "@/components/contact/ContactForm";
import { Form } from "@/components/ui/form";
import { Mail } from "lucide-react";
import Link from "next/link";

const Page = () => {

    return (
        <div className=" flex justify-center items-center h-screen w-full">
            <section className="flex md:flex-row flex-col h-[85%] lg:h-[90%] md:h-[80%] w-[90%] md:w-[85%] md:mt-12 mt-16  rounded-[50px]  bg-gradient-to-t from-emerald-400 from-10% via-sky-500 via-60% to-indigo-500 relative px-4 sm:px-0">

                <div className="hidden md:flex flex-col justify-center items-center flex-1 bg-slate-700">
                    <p className=" text-7xl font-semibold text-white">Get In Touch</p>
                    <div className=" w-1/2 flex gap-4 justify-center px-6 py-2 rounded-[50px] border border-white">
                        <Mail className="" />

                    </div>
                </div>
                <div className="flex-1 relative">
                    <ContactForm />
                </div>
            </section>
        </div>
    );
}

export default Page;