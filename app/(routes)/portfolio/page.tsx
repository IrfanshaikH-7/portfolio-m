import { Animata, Discord, LMS, NewLife, Port, Saas, Thread } from "@/components/portpolio/feature-card";
import { FeatureTitle } from "@/components/portpolio/feature-title";
import MoreProjects from "@/components/portpolio/more-project";


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
            <main className="h-screen w-full flex justify-center items-center">
                <section className="flex items-start gap-20 h-[90%] w-[90%] rounded-lg overflow-scroll">
                    <div className="w-full py-[50vh]  px-20">
                        <ul>
                            {
                                features.map((feature) => (
                                    <li key={feature.id}>
                                        <FeatureTitle id={feature.id} >
                                            {feature.title}
                                        </FeatureTitle>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className=" w-full  px-24 sticky top-0 h-full flex items-center">
                        <div className=" relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-gray-400  shadow-md ">
                            {
                                features.map((feature) => (
                                    <feature.card id={feature.id} key={feature.id} />
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
            <main className="h-screen w-full flex justify-center items-center">
                <section className="h-[90%] w-[90%]">
                        <MoreProjects />
                </section>
            </main>
        </>
    );
}

export default Portfolio;