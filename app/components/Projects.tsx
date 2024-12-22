'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    summary: "A full-stack e-commerce solution with real-time inventory management.",
    image: "/ecommerce-project.jpg",
    video: "/ecommerce-demo.mp4",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    description: "This e-commerce platform provides a seamless shopping experience with real-time inventory updates. It features user authentication, product search and filtering, shopping cart functionality, and secure payment integration. The admin panel allows for easy product and order management.",
    challenges: "Implementing real-time inventory updates across multiple concurrent users was a significant challenge. We solved this using Socket.io for live updates and implemented a queuing system for handling simultaneous purchase attempts on low-stock items.",
    outcome: "The platform has successfully served over 10,000 customers, with a 30% increase in sales for our client compared to their previous solution."
  },
  {
    id: 2,
    title: "Health & Fitness Tracker",
    summary: "A mobile app for tracking workouts, nutrition, and health metrics.",
    image: "/fitness-tracker.jpg",
    video: "/fitness-app-demo.mp4",
    technologies: ["React Native", "Firebase", "HealthKit", "Google Fit"],
    description: "This cross-platform mobile app allows users to track their workouts, log meals, and monitor various health metrics. It integrates with HealthKit on iOS and Google Fit on Android for comprehensive health data collection. The app provides personalized insights and recommendations based on user data.",
    challenges: "Ensuring accurate data synchronization across devices and platforms while maintaining user privacy was a major focus. We implemented end-to-end encryption for sensitive health data and used Firebase for reliable real-time data syncing.",
    outcome: "The app has over 500,000 downloads across iOS and Android, with an average rating of 4.7 stars. Users report an average 20% improvement in achieving their fitness goals."
  },
  {
    id: 3,
    title: "Smart Home Automation System",
    summary: "An IoT solution for home automation with AI-powered energy optimization.",
    image: "/smart-home.jpg",
    video: "/smart-home-demo.mp4",
    technologies: ["Python", "TensorFlow", "MQTT", "React", "Node.js"],
    description: "This smart home system connects various IoT devices and uses AI to optimize energy consumption. It features voice control, automated routines, and a user-friendly mobile and web interface for remote control. The system learns from user behavior to suggest energy-saving adjustments.",
    challenges: "Integrating diverse IoT devices and protocols while ensuring system security was complex. We developed a modular architecture with standardized interfaces and implemented robust encryption and authentication mechanisms.",
    outcome: "Deployed in over 1,000 homes, the system has helped reduce energy consumption by an average of 25% and has won an innovation award for sustainable technology."
  }
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.summary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="mb-6">
                  {selectedProject.video ? (
                    <video
                      src={selectedProject.video}
                      controls
                      className="w-full rounded-lg"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      width={800}
                      height={450}
                      layout="responsive"
                      className="rounded-lg"
                    />
                  )}
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Description</h4>
                    <p className="text-gray-600 dark:text-gray-300">{selectedProject.description}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Challenges</h4>
                    <p className="text-gray-600 dark:text-gray-300">{selectedProject.challenges}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Outcome</h4>
                    <p className="text-gray-600 dark:text-gray-300">{selectedProject.outcome}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects

