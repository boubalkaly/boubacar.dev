import React from 'react'
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';
interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link?: Url;
}
const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => {
    return (
        <div className="card bg-base-100 image-full w-30 h-30 shadow-xl">
            <figure>
                <img
                    src={`${image}`}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link href={link || "/"}><button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard