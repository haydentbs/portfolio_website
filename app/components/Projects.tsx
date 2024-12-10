'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Reinforcement Learning for Cancer Treatment Plans',
    description: 'Developed a RL alggorithm alongside NHS Christie Hospital to optimise treatment plans for cancer patients',
    image: '/pbt_2.png',
    skills: ['Python', 'Reinforcement Learning'],
    repo: 'https://github.com/haydentbs/PBT_RL_GAMIFICATION',
    paper: '/pbt.pdf'
  },
  {
    title: 'AI Negotiation App',
    description: 'Developed an AI negotiation app in a react framework using the OpenAI API. User can receive specialist advice for a situation and expert responses',
    image: '/ivor_2.png',
    skills: ['React', 'OpenAI API', 'TypeScript'],
    demo: 'https://negotitate-app-v2-haydentbs-haydentbs-projects.vercel.app'
  },
  {
    title: 'ML and Data Cleaning Porject on Global WHO data',
    description: 'Cleaned and analysed global WHO data, adding in additioanl data from other sources to produce a model that predicts the life expectancy of country with an R^2 of 0.96',
    image: '/who_ml2.png?height=200&width=300',
    repo: 'https://www.kaggle.com/code/haydentibbals/who-ml-v2',
    skills: ['Python', 'Data Analysis', 'Machine Learning']
  },
  {
    title: 'Premier League Match Prediction Model',
    description: 'Built a model that predicts the outcome of Premier League matches with 80% accuracy based on historial data and match results',
    image: '/prem.png?height=200&width=300',
    repo: 'https://github.com/haydentbs/Premier-League-Match-Predictor',
    skills: ['Python', 'NumPy', 'Sci-kit Learn']
  },
]

const skillColors: { [key: string]: string } = {
  Python: 'bg-blue-500',
  'Sci-kit Learn': 'bg-yellow-500',
  'Data Analysis': 'bg-green-500',
  'TypeScript': 'bg-purple-500',
  'React': 'bg-red-500',
  'OpenAI API': 'bg-orange-500',
  'Reinforcement Learning': 'bg-teal-500',
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-96 object-cover"
                priority={index < 2}
                quality={100}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className={`${skillColors[skill] || 'bg-gray-500'} text-white`}
                    >
                      {skill}
                    </Badge>
                  ))}
                  <div className="ml-auto flex gap-2">
                    {project.repo && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => window.open(project.repo, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                        Repo
                      </Button>
                    )}
                    {(project.demo || project.paper) && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => window.open(project.demo || project.paper, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                        {project.demo ? 'Demo' : 'Paper'}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

