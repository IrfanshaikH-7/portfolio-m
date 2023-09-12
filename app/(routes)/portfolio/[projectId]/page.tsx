
interface ProjectPageProps {
    params : {
        projectId: string
    }
}

const ProjectPage = ({params}: ProjectPageProps) => {
    return (
        <div>Hello world{params.projectId}</div>

        // to do -> store projects in data base 
        //on home projects page find the project and its id 
        //  and redirect to this page with backtick sepcial dymamic object 
        // example: `/portfolio/${projectId}`
    )
}

export default ProjectPage;