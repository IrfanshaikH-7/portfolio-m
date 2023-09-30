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
        <section className="flex h-[80%] w-[85%] mt-12 bg-zinc-800/80 rounded-md">
            <div className="flex flex-col px-24 gap-4 items-start justify-center w-2/6 h-full bg-emerald-950 ">
                <div className="flex justify-center items-center group ">
                    <div className="w-12 h-[1px] bg-emerald-500 group-hover:w-20 transition-all duration-300"/>
                    <Link href='#abt' className="px-2 text-xs text-black dark:text-white uppercase" onClick={handleScroll}>About</Link>

                </div>
                <div className="flex justify-center items-center group ">
                    <div className="w-12 h-[1px] bg-emerald-500 group-hover:w-20 transition-all duration-300"/>
                    <Link href='#edu' className="px-2 text-xs text-black dark:text-white uppercase"  onClick={handleScroll}>Education</Link>

                </div>
                <div className="flex justify-center items-center group ">
                    <div className="w-12 h-[1px] bg-emerald-500 group-hover:w-20 transition-all duration-300"/>
                    <Link href='#exp' className="px-2 text-xs text-black dark:text-white uppercase"  onClick={handleScroll}>Experience</Link>
                </div>
            </div>
            <div className="h-full w-full px-4 py-2">
                <div className="h-full w-full bg-emerald-800 overflow-y-auto">
                    <div id="abt" className="bg-slate-600 h-[600px] w-full">
                            sbt
                    </div>
                    <div id="edu" className="bg-slate-900 h-[600px] w-full">
                            sbt
                    </div>
                    <div id="exp" className="bg-slate-300 h-[600px] w-full">
                            sbt
                    </div>
                </div>
            </div>
        </section>
        
     );
}
 
export default AboutComp;