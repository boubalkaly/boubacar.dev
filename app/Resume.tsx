import React from 'react'
import ResumeItem from './components/ResumeItem';
import { FaFileCode } from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";

const RESUME_ITEMS = [
    {
        title: "SWE Fellow",
        company: "Headstarter AI",
        duration: "Jul 2024 - Sep 2024",
        Icon: FaFileCode,
    },
    {
        title: "Dev and Automation",
        company: "VentureSouq",
        duration: "Jun 2024 - Aug 2024",
        Icon: FaRegChartBar,
    },
    {
        title: "SWE Fellow",
        company: "Headstarter AI",
        duration: "Jul 2024 - Sep 2024",
        Icon: FaFileCode,
    },
    {
        title: "SWE Fellow",
        company: "Headstarter AI",
        duration: "Jul 2024 - Sep 2024",
        Icon: FaFileCode,
    },
    {
        title: "SWE Fellow",
        company: "Headstarter AI",
        duration: "Jul 2024 - Sep 2024",
        Icon: FaFileCode,
    },
    {
        title: "SWE Fellow",
        company: "Headstarter AI",
        duration: "Jul 2024 - Sep 2024",
        Icon: FaFileCode,
    }
]

const Resume = () => {
    return (
        <section className='px-10 py-10 flex flex-col items-center bg-black'>
            <div className='flex flex-col items-center py-10'>
                <h1 className='uppercase font-bold py-5 lg:text-3xl'>My Resume</h1>
                <button className="btn btn-wide">See details</button>
            </div>
            <div className='flex justify-center'>
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
                    {RESUME_ITEMS.map((props, key) =>
                        <li className="px-5 mx-5" key={key}>
                            <ResumeItem {...props} />
                        </li>
                    )}
                </ul>

            </div>
        </section>
    )
}

export default Resume