import React from 'react'
import Image from 'next/image'
const Skills = () => {


    const SKILLS = [
        'javascript',
        'react',
        'nextjs',
        'django',
        'postgresql',
        'python',
        'nodejs',
        'html5',
        'css3',
        'mysql',
        'vscode',
        'pytorch',
        'tensorflow'

    ]
    return (
        <section className='px-10 py-10 flex flex-col items-center bg-black' id="skills">
            <h1 className='uppercase font-bold pb-10 md:pb-20 md:text-3xl'>I work with</h1>
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    {SKILLS.map((logo, idx) => (
                        <li key={idx}>
                            <Image
                                priority
                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${logo}/${logo}${logo === 'django' ? '-plain' : '-original'}.svg`}
                                height={64}
                                width={64}
                                alt="Follow us on Twitter"
                            />
                        </li>
                    ))}
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    {SKILLS.map((logo, idx) => (
                        <li key={idx}>
                            <Image
                                priority
                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${logo}/${logo}${logo === 'django' ? '-plain' : '-original'}.svg`}
                                height={64}
                                width={64}
                                alt="Follow us on Twitter"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Skills