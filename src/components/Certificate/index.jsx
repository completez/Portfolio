import React from 'react';
import one from './1.png';
import two from './2.jpg';
import three from './3.png';
import four from './4.png';
import five from './5.jpg';
import six from './6.png';
import seven from './7.jpg';
import { Fade } from "react-awesome-reveal";

export default function Certificate() {
    return (
        <div className="hero min-h-screen">
            <div className="bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-5xl">
                    <h1 className='text-5xl mb-8'>Certificate</h1>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <Fade direction="left">
                            <img src={one} className="w-full" alt="Certificate 1" />
                            </Fade>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide7" className="btn btn-circle">❮</a> 
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>                         
                        <div id="slide2" className="carousel-item relative w-full">
                            <Fade direction="left">
                            <img src={two} className="w-full" alt="Certificate 2" />
                            </Fade>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a> 
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        
                        <div id="slide3" className="carousel-item relative w-full">
                            <Fade direction="left">
                            <img src={three} className="w-full" alt="Certificate 3" />
                            </Fade>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a> 
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        
                        <div id="slide4" className="carousel-item relative w-full">
                            <Fade direction="left">
                            <img src={four} className="w-full" alt="Certificate 4" />
                            </Fade>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a> 
                                <a href="#slide5" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        
                        <div id="slide5" className="carousel-item relative w-full">
                            <Fade direction="left">
                            <img src={five} className="w-full" alt="Certificate 5" />
                            </Fade>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a> 
                                <a href="#slide6" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        
                        <div id="slide6" className="carousel-item relative w-full">
                            <Fade direction="left">
                            <img src={six} className="w-full" alt="Certificate 6" />
                            </Fade>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide5" className="btn btn-circle">❮</a> 
                                <a href="#slide7" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        
                        <div id="slide7" className="carousel-item relative w-full">
                            <Fade direction="left">
                            <img src={seven} className="w-full" alt="Certificate 7" />
                            </Fade>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide6" className="btn btn-circle">❮</a> 
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
