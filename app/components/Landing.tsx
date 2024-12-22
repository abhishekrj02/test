'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Download, ChevronDown } from 'lucide-react'

const Landing = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white relative">
      <div className="text-center">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/your-image.jpg"
            alt="Your Name"
            width={200}
            height={200}
            className="rounded-full mx-auto border-4 border-white shadow-lg"
          />
        </motion.div>
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm [Your Name]
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          UI/UX Designer & Full-Stack Developer
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="#projects"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors flex items-center justify-center"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            View My Work
            <ArrowRight className="ml-2" size={20} />
          </Link>
          <a href="/your-resume.pdf" download className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
            Download Resume
            <Download className="ml-2" size={20} />
          </a>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
        <Link
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#about')?.scrollIntoView({
              behavior: 'smooth'
            })
          }}
        >
          <ChevronDown size={32} />
        </Link>
      </motion.div>
    </section>
  )
}

export default Landing

