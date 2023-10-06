import Skills from "@/components/portpolio/Skills";
import { Animata, Discord, LMS, NewLife, Port, Saas, Thread } from "@/components/portpolio/feature-card";
import { FeatureTitle } from "@/components/portpolio/feature-title";
import MoreProjects from "@/components/portpolio/more-project";
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
            {/* <div className="h-96 w-full bg-orange-300"> room to scroll</div> */}
            <main className=" snap-mandatory lg:h-screen h-screen w-full flex justify-center items-center relative">
                <section className="flex items-start gap-8 h-[90%] w-[90%] rounded-lg overflow-scroll">
                    <div className="md:w-2/6 lg:w-2/6 py-[50vh] px-2">
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
                    <div className=" w-full px-8 sticky top-0 h-full flex items-center justify-center  ">
                        <div className="h-full flex items-center w-3/5">
                        <div  className=" relative w-full aspect-square lg:aspect-[12/9]  rounded-2xl hover:translate-x-48 group transition-all duration-500">
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
            <main className="snap-center h-screen w-full flex justify-center items-center">
                <section className="h-[80%] w-[80%]">
                        <MoreProjects />
                </section>
            </main>
            <section className="snap-center h-screen w-full flex items-center justify-center">
                <Skills />
            </section>
            <div className="h-[85%] w-[85%] mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum culpa nesciunt beatae reiciendis possimus nulla, amet eos sapiente voluptatem nihil, deleniti fugit, incidunt laborum.
            </div>
            <footer className="h-64 w-full bg-emerald-500">

            </footer>
        </>
    );
}

export default Portfolio;