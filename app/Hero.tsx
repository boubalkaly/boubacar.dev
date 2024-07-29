import React from 'react'
import Image from 'next/image'
import { Code } from '@radix-ui/themes';
const Hero = () => {
    return (
        <section className="pt-5 md:pt-16 flex flex-col items-center md:flex-row md:justify-center" id="hero">
            <div className='pb-3'>
                <Image width={145} height={145} alt="boubacar" src="/profile.png" className='rounded-full md:w-80' />
            </div>
            <div className='flex flex-col items-center px-6 gap-y-2'>

                <h2 className='text-lg font-bold md:text-5xl'>Hi, I&apos;m Boubacar.</h2>
                <p className='text-center'>A computer science student and dev enthusiast. I am also building Retina</p>
                <div className='md:flex md:gap-5'>
                    <button className="btn btn-wide btn-primary">Resume</button>
                    <button className="btn btn-wide">Contact in touch</button>
                </div>

            </div>



        </section>
    )
}

export default Hero