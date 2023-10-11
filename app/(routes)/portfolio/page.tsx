import Skills from "@/components/portpolio/Skills";
import { Animata, Discord, LMS, NewLife, Port, Saas, Thread } from "@/components/portpolio/feature-card";
import { FeatureTitle } from "@/components/portpolio/feature-title";
import MoreProjects from "@/components/portpolio/more-project";
import Pnav from "@/components/portpolio/portfolioNav";
import SvgOne from "@/components/svg1";
import { prj } from "@/public/data/projects-detail";


const features = [
    {
        title: "Discord-clone: a messaging application",
        id: "discord",
        card: Discord
    },
    {
        title: "AI-Saas: an ai as a server application",
        id: "saas",
        card: Saas
    },
    {
        title: "New Life: a bussiness application for client",
        id: "newlife",
        card: NewLife
    },
    {
        title: "Port: application using Google Map Api",
        id: "port",
        card: Port
    },
    {
        title: "Animata: an anime and manga platform",
        id: "animata",
        card: Animata
    },
    {
        title: "LMS: Udemy like lms application",
        id: "lms",
        card: LMS
    },
    {
        title: "Thread-clone: a Social media application",
        id: "thread",
        card: Thread
    },
]

const Portfolio = () => {

    return (
        <>
            <section className="relative " >
            <SvgOne />
                <main id="feat" className=" snap-mandatory lg:h-screen h-screen w-full flex justify-center items-center relative ">

                    <section className="flex items-start gap-8 h-[90%] w-full px-20  overflow-y-scroll overflow-x-hidden bg-slate-900 relative rounded-[80px]">
                        <div className="md:w-2/6 lg:w-2/6 py-[50vh] px-2  ">
                            <ul>
                                {
                                    prj.map((feature) => (
                                        <li key={feature.id}>
                                            <FeatureTitle id={feature.id} >
                                                {feature.title}
                                            </FeatureTitle>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className=" w-full px-8 sticky top-0 h-full flex items-center justify-center ">
                            <div className="h-full flex items-center w-3/5 min-w-[360px] lg:min-w-[400px]  relative">

                                <svg
                                    className="absolute blur-3xl"
                                    xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800"><defs><filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" >
                                        <feGaussianBlur stdDeviation="36" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter)"><ellipse rx="150" ry="150" cx="347.830920897826" cy="503.74190522716424" fill="hsla(284, 50%, 63%, 1.00)"></ellipse><ellipse rx="150" ry="150" cx="490.2992254089757" cy="378.2391510305004" fill="hsla(179, 60%, 58%, 1.00)"></ellipse></g>
                                </svg>

                                <div className=" hidden xl:block relative w-full aspect-square lg:aspect-[12/9]  rounded-2xl hover:translate-x-44 group transition-all duration-500 ">
                                    {
                                        prj.map((feature) => (
                                            <feature.card id={feature.id} key={feature.id}
                                                title={feature.title}
                                                imgUrl={feature.imgUrl}
                                                note={feature.note}
                                                tags={feature.tags}
                                                githublink={feature.githublink}
                                                livelink={feature.livelink}
                                                discription={feature.discription}

                                            />
                                        ))
                                    }
                                </div>
                                <div className=" relative w-full aspect-square lg:aspect-[12/9]  rounded-2xl xl:hidden  hover:-translate-y-24 group transition-all duration-500">


                                    {
                                        prj.map((feature) => (
                                            <feature.card id={feature.id} key={feature.id}
                                                title={feature.title}
                                                imgUrl={feature.imgUrl}
                                                note={feature.note}
                                                tags={feature.tags}
                                                githublink={feature.githublink}
                                                livelink={feature.livelink}
                                                discription={feature.discription}

                                            />
                                        ))
                                    }
                                </div>
                            </div>

                        </div>
                    </section>
                </main>
                <main id="all" className="snap-center h-screen md:h-screen w-full mx-auto flex justify-center items-center -m-8 ">
                   

                    <section className=" h-[80%] mx-auto w-[90%] lg:w-[72%] bg-transparent ">
                        <MoreProjects />
                    </section>
                </main>
                <section id="skill" className="snap-center h-screen md:h-screen w-full flex items-center justify-center mx-auto bg-slate-900 rounded-[80px]">
                    <Skills />
                </section>
                <div className="h-[85%] w-[85%] mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum culpa nesciunt beatae reiciendis possimus nulla, amet eos sapiente voluptatem nihil, deleniti fugit, incidunt laborum.
                </div>
                <footer className="h-64 w-full bg-emerald-500">

                </footer>
            </section>
        </>
    );
}

export default Portfolio;