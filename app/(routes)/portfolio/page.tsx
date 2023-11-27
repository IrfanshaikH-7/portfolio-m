import Footer from "@/components/Footer";
import Quote from "@/components/portpolio/Quote";
import Skills from "@/components/portpolio/Skills";
import { FeatureTitle } from "@/components/portpolio/Feature-title";
import MoreProjects from "@/components/portpolio/More-project";
import PageWrapper from "@/components/providers/PageWrapper";
import SvgOne from "@/components/svg1";
import { FeatureprojectData } from "@/public/data/projects-detail";
import Achievements from "@/components/portpolio/Achievements";

const Portfolio = () => {

    return (
        <>
            <PageWrapper classname="">
                <section className="relative " >
                    <SvgOne />
                    <main className=" snap-mandatory lg:h-screen h-screen w-full flex justify-center items-center relative ">

                        <section className="flex items-start gap-8 h-[90%] w-full px-1 md:px-20  overflow-y-scroll overflow-x-hidden bg-emerald-300 dark:bg-slate-900 relative rounded-[80px] no-scrollbar">
                            <div className="w-1/6 md:w-2/6 lg:w-2/6 py-[50vh] px-2  ">
                                <ul>
                                    {
                                        FeatureprojectData.map((feature) => (
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
                                            FeatureprojectData.map((feature) => (
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
                                    <div className=" relative w-64 sm:w-full aspect-square lg:aspect-[12/9]  rounded-2xl xl:hidden  hover:-translate-y-24 group transition-all duration-500">
                                        {
                                            FeatureprojectData.map((feature) => (
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
                    <main className="snap-center h-screen md:h-screen w-full mx-auto flex justify-center items-center -m-8 ">
                        <section className=" h-[80%] mx-auto w-full md:w-[90%] xl:w-[72%] bg-transparent ">
                            <MoreProjects />
                        </section>
                    </main>
                    {/* <section id="skill" className="snap-center h-full lg:h-screen  w-full flex items-center justify-center mx-auto bg-slate-900 rounded-[80px]">
                    <Skills />
                </section> */}
                    <section className="snap-center h-full  md:py-16 xl:py-28 py-8  w-full flex items-center justify-center mx-auto bg-emerald-300 dark:bg-slate-900 rounded-[80px] overflow-hidden">
                        <div className=" h-[80%] mx-auto w-full md:w-[90%] xl:w-[72%] ">
                            <Skills />
                            
                        </div>
                    </section>
                    {/* <Achievements /> */}
                    <Quote />
                </section>
                <div className='h-auto w-full bg-white dark:bg-slate-950 py-6 group'>
                    <div className='h-px w-[80%] bg-black dark:bg-white mx-auto group-hover:animate-pulse'></div>
                    <Footer />
                </div>
            </PageWrapper>
        </>
    );
}

export default Portfolio;