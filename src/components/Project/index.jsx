import React from 'react';
import { Fade } from "react-awesome-reveal";
import lualearn from './Lualearn.png';
import wallet from './Wallet.png';
import web from './website.png';

export default function Project() {
    return (
        <div className="hero min-h-screen flex justify-center items-center">
            <div className="bg-opacity-60"></div>
            <div className="text-center">
                <h1 className='text-5xl mb-20'>Project</h1>
                <div className="max-w-7xl flex flex-wrap justify-center gap-8">
                    <Fade direction="left">
                        <div className="card w-72 bg-base-100 shadow-xl mb-8">
                            <figure><img src={lualearn} alt="LuaLearn" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Course Roblox</h2>
                                <p>คอร์สเรียนเขียนโปรแกรมเกี่ยวกับ Roblox ออนไลน์ โดยมีคนเรียนกับเรามากกว่า 30 คน</p>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction="left" delay={200}>
                        <div className="card w-72 bg-base-100 shadow-xl mb-8">
                            <figure><img src={web} alt="WebPortFolio" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Web Portfolio</h2>
                                <p>เขียน website สำหรับ Portfolio โดยใช้ Framework React ของ JavaScript</p>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction="left" delay={400}>
                        <div className="card w-72 bg-base-100 shadow-xl mb-8">
                            <figure><img src={wallet} alt="Wallet" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">truewallet-voucher</h2>
                                <p>เขียนดึง api จาก wallet-angpao</p>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
}
