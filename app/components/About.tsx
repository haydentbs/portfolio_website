'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto text-2xl text-center"
        >
          <p className="mb-6">
            As a recent physics graduate, I am passionate about applying scientific principles to solve real-world problems. My projects focus primarily on machine learning and data science.
          </p>
          <p>
            I am always eager to learn and collaborate on exciting new projects!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

