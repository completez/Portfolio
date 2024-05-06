import React from 'react';
import Typewriter from 'typewriter-effect';
import { Fade } from "react-awesome-reveal";

export default function Menu() {
    return (
        <div className="mt-10 md:mt-1 flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]">
            <div className="space-y-2 text-center md:text-left px-6 md:px-10">
                <Fade direction="left"><h1 className="text-amber-200 text-3xl md:text-4xl">Hello, Everyone</h1></Fade>
                <Fade direction="left"><p className='typewrite text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-yellow-500 md:text-2xl'>
                    <Typewriter
                        options={{
                            strings: ['My Name is Thannanthat Saisud.', 'My Nickname is Bas.'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </p></Fade>
                <Fade direction="left"><p className="text-lg md:text-xl">Welcome to My Portfolio</p></Fade>
                <Fade direction="left"><p className="text-lg md:text-xl">"สิ่งต่างๆเปลี่ยนแปลงล้วนเป็นสิ่งที่เรากำหนดไม่ได้"</p></Fade>
            </div>
            <div className="flex justify-center md:justify-start fadein-right">
                <Fade direction="left"><div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden bg-white border-4 border-amber-200">
                    <img
                        alt="avatar"
                        fetchpriority="high"
                        width="150"
                        height="150"
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-full object-cover"
                        src="https://media.discordapp.net/attachments/851758076297478159/1236370204829683813/e11418d6eb3c8b1e.jpg?ex=6637c2fb&is=6636717b&hm=3d55c20984eb7be3f2d24653cc6b82095dd40af63bd543867d7b469ba04f8cca&=&format=webp&width=676&height=676"
                    />
                </div></Fade>
            </div>
        </div>
    );
}
