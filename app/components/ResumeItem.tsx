import React from 'react'
import { IconType } from 'react-icons'

interface ResumeItemProps {
    title: string,
    company: string,
    duration: string,
    Icon: IconType,
}

const ResumeItem = ({ title, company, duration, Icon }: ResumeItemProps) => {
    return (
        <div className='flex gap-4 py-6'>
            <div className=''>
                <Icon className='w-20 h-20' />
            </div>
            <div className='pt-2'>
                <p>{title}</p>
                <small>{company}</small> <br />
                <small>{duration}</small>
            </div>
        </div>
    )
}

export default ResumeItem