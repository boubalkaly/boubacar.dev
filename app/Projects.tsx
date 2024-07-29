import React from 'react'
import ProjectCard from './components/ProjectCard'


const PROJECTS = [
  {
    title: "Retina",
    description: "An app to help dyslexics with college readings",
    image: "profile.png",
    link: ""
  },
  {
    title: "Halal Stock Predictor",
    description: "An app to help dyslexics with college readings",
    image: "profile.png",
    link: ""
  },
  {
    title: "Retina",
    description: "An app to help dyslexics with college readings",
    image: "profile.png",
    link: ""
  },
  {
    title: "Retina",
    description: "An app to help dyslexics with college readings",
    image: "profile.png",
    link: ""
  },
]

const Projects = () => {
  return (
    <section className='px-10 py-10 flex flex-col items-center bg-black' id="projects">
      <div className='pb-5 md:pb-16'>
        <h1 className='font-bold uppercase lg:text-3xl'>What I've worked on</h1>
      </div>
      <div>
        <ul className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 '>
          {PROJECTS.map((props, key) =>
            <li key={key} className=''>
              <ProjectCard {...props} />
            </li>)}
        </ul>
      </div>
    </section>
  )
}

export default Projects