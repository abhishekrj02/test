'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const skillCategories = [
  {
    name: "Frontend",
    icon: "🎨",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Tailwind CSS"]
  },
  {
    name: "Backend",
    icon: "🖥️",
    skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"]
  },
  {
    name: "Blockchain",
    icon: "🔗",
    skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "DApp Development"]
  },
  {
    name: "Tools & Others",
    icon: "🛠️",
    skills: ["Git", "Docker", "AWS", "Figma", "Adobe XD", "Agile Methodologies"]
  }
]

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0])

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {skillCategories.map((category) => (
            <motion.button
              key={category.name}
              className={`px-4 py-2 rounded-full text-lg font-medium transition-colors ${
                activeCategory.name === category.name
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon} {category.name}
            </motion.button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">{activeCategory.name} Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {activeCategory.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="text-lg font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Skills

