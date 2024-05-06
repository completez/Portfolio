import React from 'react';
import "./About.css";
import { Fade } from "react-awesome-reveal";
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineIcon,
    Typography,
    TimelineHeader,
} from "@material-tailwind/react";
import {
    BellIcon,
    ArchiveBoxIcon,
    CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

export default function About() {
    return (
        <div className="hero min-h-screen">
            <div className="bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-5xl mx-auto px-4 md:px-0">
                    <h1 className='text-5xl mb-8'>About Me</h1>
                    <section className="personal-info bg-[#1e1e1f] border-amber-200 px-6 md:px-10 py-10 md:py-12 text-left border rounded-3xl text-amber-50 mb-8">
                        <div className="mockup-window border border-base-300">
                            <Fade direction="left"><h1 className='text-4xl mb-6'>ประวัติส่วนตัว</h1></Fade>
                            <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-6">
                                <Fade direction="left">
                                    <img className='bg-white border-4 border-amber-200 w-52 md:w-72 h-auto md:h-96 rounded-lg mb-4 md:mb-0' src='https://i.pinimg.com/564x/74/a2/1b/74a21bb6fc7df0a77e76405393f47e09.jpg' alt="Profile" />
                                </Fade>
                                <div className="text-left flex-grow">
                                    <Fade direction="left">
                                        <p className="text-lg mb-2">ชื่อ : นาย ธนัญญ์ธัช สายสุด</p>
                                    </Fade>
                                    <Fade direction="left">
                                        <p className="text-lg mb-2">ชื่อเล่น : บาส</p>
                                    </Fade>
                                    <Fade direction="left">
                                        <p className="text-lg mb-2">อายุ : 18 ปี</p>
                                    </Fade>
                                    <Fade direction="left">
                                        <p className="text-lg mb-2">เกิดวันที่ : 10/12/2007</p>
                                    </Fade>
                                    <Fade direction="left">
                                        <p className="text-lg mb-2">สัญชาติ : ไทย (เชื้อชาติไทย)</p>
                                    </Fade>
                                    <Fade direction="left">
                                        <p className="text-lg mb-2">งานอดิเรก : เขียนโปรแกรม / เตะบอล / ดูหนังฟังเพลง / เล่นเกม</p>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="personal-info bg-[#1e1e1f] border-amber-200 px-6 md:px-10 py-10 md:py-12 text-left border rounded-3xl text-amber-50 mb-8">
                        <div className="mockup-window border border-base-300">
                            <Fade direction="left"><h1 className='text-4xl mb-6 mt-8'>ประวัติการศึกษา</h1></Fade>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1 md:col-span-2 space-y-6 md:space-y-8 relative md:before:absolute md:before:top-2 md:before:bottom-0 md:before:w-0.5 md:before:-left-3 before:dark:bg-gray-300">
                                    <Fade direction="left">
                                        <div className="flex flex-col md:relative md:before:absolute md:before:top-2 md:before:w-4 md:before:h-4 md:before:rounded-full md:before:left-[-35px] md:before:z-[1] before:dark:bg-yellow-600">
                                            <h3 className="text-xl tracking-wide">ประถมศึกษาปีที่ 1 - 6</h3>
                                            <p className="mt-3">ศึกษาที่ : โรงเรียนเผยอิง</p>
                                        </div>
                                    </Fade>
                                    <Fade direction="left">
                                        <div className="flex flex-col md:relative md:before:absolute md:before:top-2 md:before:w-4 md:before:h-4 md:before:rounded-full md:before:left-[-35px] md:before:z-[1] before:dark:bg-yellow-600">
                                            <h3 className="text-xl tracking-wide">มัธยมศึกษาปีที่ 1 - 3</h3>
                                            <p className="mt-3">ศึกษาที่ : โรงเรียนวัดราชบพิธ [ Gifted ]</p>
                                        </div>
                                    </Fade>
                                    <Fade direction="left">
                                        <div className="flex flex-col md:relative md:before:absolute md:before:top-2 md:before:w-4 md:before:h-4 md:before:rounded-full md:before:left-[-35px] md:before:z-[1] before:dark:bg-yellow-600">
                                            <h3 className="text-xl tracking-wide">มัธยมศึกษาปีที่ 4 - 6</h3>
                                            <p className="mt-3">ศึกษาที่ : โรงเรียนเทพศิรินทร์ [ วิทย์ - คณิต ( เน้นวิศวกรรม ) ]</p>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
