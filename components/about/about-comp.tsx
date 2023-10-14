"use client"
import Link from "next/link";
import { useRef, useState } from "react";

const AboutComp = () => {
    const [state, setState] = useState('')

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };
    return (
        <section className="flex md:flex-row flex-col h-[85%] lg:h-[90%] md:h-[80%] w-[90%] md:w-[85%] md:mt-12 mt-16  rounded-[50px]  bg-gradient-to-t from-emerald-400 from-10% via-sky-500 via-60% to-indigo-500 relative">
            <div className="hidden md:flex w-2/6 items-center justify-center bg-gradient-to-t from-emerald-400 from-10% via-sky-500 via-60% to-indigo-500 relative rounded-[50px] ">
                <div className="h-20 w-40 bg-white absolute top-6 -left-6 border-8 border-slate-950 rounded-[50px]">

                </div>
             <div className="flex flex-col xl:ml-16 px-2  gap-4 items-start justify-center w-full h-fit ">
                <div className="flex justify-center items-center group ">
                    <div className="md:w-6 lg:w-12 h-[1px] bg-zinc-900  md:group-hover:w-10 lg:group-hover:w-20 transition-all duration-300" />
                    <Link href='#abt' className="px-2 text-xs text-black dark:text-white uppercase" onClick={handleScroll}>About</Link>

                </div>
                <div className="flex justify-center items-center group ">
                    <div className="md:w-6 lg:w-12 h-[1px] bg-zinc-900  md:group-hover:w-10 lg:group-hover:w-20 transition-all duration-300" />
                    <Link href='#edu' className="px-2 text-xs text-black dark:text-white uppercase" onClick={handleScroll}>Education</Link>

                </div>
                <div className="flex justify-center items-center group ">
                    <div className="md:w-6 lg:w-12 h-[1px] bg-zinc-900  md:group-hover:w-10 lg:group-hover:w-20 transition-all duration-300" />
                    <Link href='#exp' className="px-2 text-xs text-black dark:text-white uppercase" onClick={handleScroll}>Experience</Link>
                </div>
            </div>   
            </div>
            <div className="md:hidden flex absolute top-3 left-10 right-10 font-semibold min-w-fit  bg-gradient-to-t from-emerald-400 from-10% via-sky-500 via-60% to-indigo-500 py-2 rounded-[50px]">
            <div className="flex  xl:ml-16 px-2  gap-4 items-start justify-center w-full h-fit ">
                <div className="flex justify-center items-center group ">
                    <Link href='#abt' className="px-2 text-xs text-black dark:text-white uppercase hover:-translate-y-[2px] transition-all duration-300" onClick={handleScroll}>About</Link>

                </div>
                <div className="flex justify-center items-center group ">
                    <Link href='#edu' className="px-2 text-xs text-black dark:text-white uppercase hover:-translate-y-[2px] transition-all duration-300" onClick={handleScroll}>Education</Link>

                </div>
                <div className="flex justify-center items-center group ">
                    <Link href='#exp' className="px-2 text-xs text-black dark:text-white uppercase hover:-translate-y-[2px] transition-all duration-300" onClick={handleScroll}>Experience</Link>
                </div>
            </div>  
            </div>
            
            <div className="h-full w-full px-2 pt-2 pb-1 md:py-2 md:px-4 rounded-md">
                <div className="h-full w-full  overflow-y-auto px-4 lg:px-10 xl:px-32 bg-slate-900 rounded-[50px] ">
                    <div id="abt" className="flex flex-col justify-center items-start h-full w-full">
                        <h3 className="text-3xl lg:text-4xl font-semibold font-syne justify-self-start">Irfan shaikH</h3>
                        <div className=" mt-4">
                            <p className=" indent-8  text-xs lg:text-sm font-syne tracking-wider mt-6">
                                The world of art, softwares &rsquo;n&rsquo; technology always facinated me and I&rsquo;ve never been afraid to just jump in and give it a go. whethers it&rsquo;s development, openSource contributions or AI/ML.
                            </p>
                            <p className="text-xs lg:text-sm font-syne tracking-wider mt-6">
                                Fast forward to 2023 and I&rsquo;ve tried it all, from Web Design to actually implementing them with code, Animation, HTML/CSS, Web Development by Creating various <Link href='/portfolio' className="text-base text-white">projects</Link> on them. Everything I have done, small or big, has been a vital stepping stone for where I am today.
                            </p>
                            <p className="text-xs lg:text-sm font-syne tracking-wider mt-6">
                                What excites me most about being a Web Developer is being able to design and create softwares that have a purpose and solve real problems. It goes beyond developing landing pages and websites and involves having a passion for designing experiences and solutions that help people, whether it&rsquo;s helping them make better audience, market themselves online, or buy something online. Leaning into customer insight and understanding their needs, finding the right problems to solve, delivering solutions as quickly as possible, learning from those and then iterating and improving that value over time is the key to great developer.
                            </p>
                        </div>
                    </div>

                    <div id="edu" className="flex flex-col justify-center items-start h-full w-full">
                        <div className="py-2">
                         <span className="text-sm lg:text-md font-syne font-bold tracking-wider mt-6">- Degree - 8.32 (current)</span>
                            <p className="ml-4 text-xs lg:text-sm font-syne lea tracking-wider mt-2 text-slate-200 ">
                                Pursuing a Bachelor of Science in Computer Science with a focus on web development. Learned skills such as HTML/CSS, JavaScript, React, Node.js, MySql, MongoDB etc. Created projects such as Popular clones, Personal blog, E-commerce platform, and Portfolio website.
                            </p>
                            <p className="ml-4 text-xs lg:text-sm font-syne lea tracking-wider mt-1 text-slate-200"><span className="font-semibold text-white">Relevent Course work :</span> C,C++,JAVA, Data structures using C++, Data Structures using Java</p>

                        </div>
                        <div className="py-2">
                         <span className="text-sm lg:text-md font-syne font-bold tracking-wider mt-6">- Intermediate</span>
                         <p className="ml-4 text-xs lg:text-sm font-syne lea tracking-wider mt-2 text-slate-300"><span className="text-white font-semibold">Stream:</span> Mathematics,Physics and Chemistry ( MPC )</p>
                               
                            
                            <p className="ml-4 text-xs lg:text-sm font-syne lea tracking-wider mt-2 text-slate-300">
                               Completed my intermediate with a focus on building problem sloving skills using Mathematics. .
                            </p>
                        </div>
                        <div className="py-2">
                         <span className="text-sm lg:text-md font-syne font-semibold tracking-wider mt-6">- School</span>
                            <p className="ml-4 text-xs lg:text-sm font-syne lea tracking-wider mt-2 text-slate-300">
                               Completed my SSC
                            </p>
                        </div>
                    </div>
                    <div id="exp" className="flex flex-col justify-center items-start h-full w-full">
                        <div>
                            <h1 className="font-arizona font-bold text-4xl">Experience. &nbsp; &nbsp;!</h1>
                            <div className="mt-2">
                              <p className=" ml-4 py-2 font-syne text-slate-300 text-xs lg:text-sm">Being a self-taught Developer Im looking for job apportunities.</p>
                            <p className="ml-4 py-2 font-syne text-slate-300 text-xs lg:text-sm">
                               Check out my <Link href='/portfolio' className="text-base text-white">projects</Link>  - These projects demonstrates my skills and experience in web development, which are essential for the any role in software development.
                            </p>
                            <p className="ml-4 py-2 font-syne text-slate-300 text-xs lg:text-sm">
                                I have experience in various web technologies and frameworks, and I have a strong communication and collaboration skills , as well as problem solving and creativity skills,I am confident that i can use these skills to create high-quality web solutions for companies and customers.
                            </p>  
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default AboutComp;