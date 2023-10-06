import { Animata, Discord, LMS, NewLife, Port, Saas, Thread } from "@/components/portpolio/feature-card";

// 'Users can create an account, log in and log out.Has role system ADMIN,MODRATOR,GUEST.Users can create and join servers, as well as invite other users to join their servers.Users can send direct messages to other users, or create group chats with multiple participants.Users can make voice and video calls with other users.Users can customize their settings, such as changing their username,profile picture, theme.',
export const prj = [
    {
        title: 'Discord-Clone',
        id: 'discord',
        card: Discord,
        imgUrl: "/assets/projectImgs/discord.png",
        note: 'A Real-time group/direct messaging application',
        tags: ['NextJs', 'Typescript', 'Planet-Scale', 'socket.io', 'tailwind css'],
        githublink: 'https://github.com/IrfanshaikH-7/discord-clone',
        livelink: 'https://discord-clone-production-c39a.up.railway.app',
        discription: 'Discord is a popular platform that allows users to communicate and socialize over text, voice, and video chat. It also enables users to create and join communities based on their interests, hobbies, and passions. However, discord has some limitations and challenges that can be improved by developing new applications.<br /> My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are: <br /> A real-time chat system that uses Socket.io to enable fast and reliable communication between users. Users can send and receive messages, emojis, images, videos, and other media files in various channels and groups.<br /> - A user authentication and authorization system that uses Next.js API routes using Clerk and SQL database to store and manage user data. Users can register, login, logout, update their profile, and manage their settings securely.<br /> - A server management system that allows users to create, edit, delete, and join servers. Users can also set server-specific settings, such as name, description, icon etc <br /> My discord clone application is a project that I am passionate about and proud of. It is a result of my creativity, innovation, and hard work. I hope that my application will be useful and enjoyable for other discord users who want to have a similar experience as the original discord platform.'
    },
    {
        title: 'AI-Saas',
        id: 'saas',
        card: Saas,
        imgUrl: '/assets/projectImgs/saas.png',
        note: 'An AI as a Service application using OpenAI GTP-3 Turbo',
        tags: ['NextJs', 'Typescript', 'OpenAI', 'tailwind css'],
        githublink: 'https://github.com/IrfanshaikH-7/saas',
        livelink: 'https://saas-one-indol.vercel.app',
        discription: 'Users can create an account, log in and log out.Users can ask questions to AI and get answers.Users can generate Images.Users can generate short Vidoes.Users can generate code snippets ',
    },
    {
        title: 'NLC Cranes',
        id: '/assets/projectImgs/newlife.png',
        card: NewLife,
        imgUrl: '/assets/projectImgs/newlife.png',
        note: 'A bussiness web application for local client',
        tags: ['NextJs', 'Typescript', 'tailwind css', 'shadcnUI'],
        githublink: 'https://github.com/IrfanshaikH-7/new-life',
        livelink: 'https://github.com/IrfanshaikH-7/new-life',
        discription: 'Users can create an account, log in and log out.Has Admin funtionality to add work images.Users can get questions answers or ask for quatations with contact form.Has google maps implimented. Testimonials',
    }

    // __________________________________________________________

    , {
        title: 'Port',
        id: 'port',
        card: Port,
        imgUrl: '/assets/projectImgs/port.png',
        note: 'Application using Google map api',
        tags: ['NextJs', 'Typescript', 'GoogleAPI', 'tailwind css'],
        githublink: 'https://github.com/IrfanshaikH-7/saas',
        livelink: 'https://saas-one-indol.vercel.app',
        discription: 'Users can create an account, log in and log out.Users can ask questions to AI and get answers.Users can generate Images.Users can generate short Vidoes.Users can generate code snippets ',
    }

    , {
        title: 'Animata',
        id: 'animata',
        card: Animata,
        imgUrl: '',
        note: 'Application for Anima and manga',
        tags: ['NextJs', 'Typescript', 'MongoDB', 'tailwind css'],
        githublink: 'https://github.com/IrfanshaikH-7/saas',
        livelink: 'https://saas-one-indol.vercel.app',
        discription: 'Users can create an account, log in and log out.Users can ask questions to AI and get answers.Users can generate Images.Users can generate short Vidoes.Users can generate code snippets ',
    }
    , {
        title: 'LMS',
        id: 'lms',
        card: LMS,
        imgUrl: '',
        note: 'Udemy like LMS Application',
        tags: ['NextJs', 'Typescript', 'MongoDB', 'tailwind css'],
        githublink: 'https://github.com/IrfanshaikH-7/saas',
        livelink: 'https://saas-one-indol.vercel.app',
        discription: 'Users can create an account, log in and log out.Users can ask questions to AI and get answers.Users can generate Images.Users can generate short Vidoes.Users can generate code snippets ',
    }

    // _________________________________________________________ 
    , {
        title: 'Thread-Clone',
        id: 'thread',
        card: Thread,
        imgUrl: '/assets/projectImgs/thread.png',
        note: 'A Social media clone application',
        tags: ['NextJs', 'Typescript', 'MongoDB', 'tailwind css'],
        githublink: 'https://github.com/IrfanshaikH-7/saas',
        livelink: 'https://saas-one-indol.vercel.app',
        discription: 'Users can create an account, log in and log out.Users can ask questions to AI and get answers.Users can generate Images.Users can generate short Vidoes.Users can generate code snippets ',
    }]