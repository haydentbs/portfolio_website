'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFileAlt, FaKaggle, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 bg-opacity-50 p-8 md:p-12 rounded-lg backdrop-blur-sm max-w-3xl w-full mx-4"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Hayden Tibbals
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl mb-8 text-gray-300"
        >
          Physics Graduate & Coding Enthusiast
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all hover:shadow-lg hover:from-blue-600 hover:to-blue-800"
          >
            Explore My Work
          </motion.a>

          <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-3 mx-auto">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/haydentbs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white px-4 py-2 rounded-full transition-all duration-300 w-32"
            >
              <FaGithub className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/hayden-tibbals/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white px-4 py-2 rounded-full transition-all duration-300 w-32"
            >
              <FaLinkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.kaggle.com/haydentibbals"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-4 py-2 rounded-full transition-all duration-300 w-32"
            >
              <FaKaggle className="w-5 h-5" />
              <span className="text-sm">Kaggle</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:your.hayden@htibbals.com"
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-2 rounded-full transition-all duration-300 w-32"
            >
              <FaEnvelope className="w-5 h-5" />
              <span className="text-sm">Email</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-purple-500 hover:to-violet-500 text-white px-4 py-2 rounded-full transition-all duration-300 w-32"
            >
              <FaFileAlt className="w-5 h-5" />
              <span className="text-sm">Resume</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

