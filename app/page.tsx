'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  // Scroll-based animations
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

  // Enhanced animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const fadeInUpDelayed = (delay: number) => ({
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay }
  })

  const slideInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const slideInRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const rotateIn = {
    initial: { opacity: 0, rotate: -10, scale: 0.8 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const testimonials = [
    {
      text: "The individual therapy sessions have been life-changing. I've learned to manage my anxiety and found inner peace I never thought possible.",
      author: "Emma Wilson",
      role: "Marketing Professional",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      text: "The mindfulness training has transformed how I handle stress. The techniques are practical and easy to incorporate into daily life.",
      author: "James Chen",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      text: "Group sessions helped me realize I wasn't alone in my struggles. The supportive environment made all the difference.",
      author: "Lisa Rodriguez",
      role: "Teacher",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <main>
      {/* Navigation */}
      <motion.nav 
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="nav-container">
          <motion.div 
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h3>MindfulBalance</h3>
          </motion.div>
          <ul className="nav-menu">
            <motion.li whileHover={{ y: -2 }}><a href="#home">Home</a></motion.li>
            <motion.li whileHover={{ y: -2 }}><a href="#services">Classes</a></motion.li>
            <motion.li whileHover={{ y: -2 }}><a href="#team">Team</a></motion.li>
            <motion.li whileHover={{ y: -2 }}><a href="#contact">Contact</a></motion.li>
          </ul>
          <motion.div 
            className="nav-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        id="home" 
        className="hero"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="hero-background"></div>
        <div className="hero-mist-overlay"></div>
        
        <div className="hero-content">
          <div className="hero-layout">
            {/* Left Text */}
            <motion.div 
              className="hero-text-left"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            >
              <motion.div 
                className="find"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                find
              </motion.div>
              <motion.div 
                className="your"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                your
              </motion.div>
              <motion.div 
                className="balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                balance
              </motion.div>
            </motion.div>
          </div>
        </div>
      
      </motion.section>

      {/* Classes Section */}
      <section id="services" className="classes">
        <div className="container">
          <motion.h2 
            className="classes-title"
            {...fadeInUp}
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            Classes
          </motion.h2>
          <div className="classes-grid">
            {/* Main Class Card */}
            <motion.div 
              className="class-card main-card"
              {...scaleIn}
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="class-content">
                <div className="class-info">
                  <motion.h3 
                    className="class-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Ashtanga vinyasa yoga
                  </motion.h3>
                  <motion.p 
                    className="class-level"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Beginners level
                  </motion.p>
                  
                  <motion.div 
                    className="class-schedule"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="schedule-item">
                      <i className="fas fa-calendar-alt"></i>
                      <span>Tu – Th 07:00 am – 09:00 am</span>
                    </div>
                    <div className="schedule-item">
                      <i className="fas fa-calendar-alt"></i>
                      <span>Fr 13:00 pm – 14:00 pm</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="class-trainer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <i className="fas fa-user"></i>
                    <span>Alicia Bethany</span>
                  </motion.div>

                  <motion.p 
                    className="class-description"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    A dynamic form of yoga that synchronizes breath with movement. Perfect for those looking to build strength, flexibility, and mental focus. This class is designed for beginners who want to learn the fundamentals of vinyasa flow.
                  </motion.p>

                  <motion.button 
                    className="class-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get started
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Side Cards */}
            <div className="side-cards">
              <motion.div 
                className="class-card side-card"
                {...slideInRight}
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="class-content">
                  <motion.h3 
                    className="class-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Yoga for Pregnant
                  </motion.h3>
                  <motion.p 
                    className="class-level"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Beginners level
                  </motion.p>
                  
                  <motion.div 
                    className="class-schedule"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="schedule-item">
                      <i className="fas fa-calendar-alt"></i>
                      <span>Tu – Th 07:00 am – 09:00 am</span>
                    </div>
                    <div className="schedule-item">
                      <i className="fas fa-calendar-alt"></i>
                      <span>Fr 13:00 pm – 14:00 pm</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="class-trainer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <i className="fas fa-user"></i>
                    <span>Alicia Bethany</span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                className="class-card side-card"
                {...slideInRight}
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="class-content">
                  <motion.h3 
                    className="class-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Hatha yoga
                  </motion.h3>
                  <motion.p 
                    className="class-level"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Advanced level
                  </motion.p>
                  
                  <motion.div 
                    className="class-schedule"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="schedule-item">
                      <i className="fas fa-calendar-alt"></i>
                      <span>Mo – We 06:00 am – 07:30 am</span>
                    </div>
                    <div className="schedule-item">
                      <i className="fas fa-calendar-alt"></i>
                      <span>Sa 10:00 am – 11:30 am</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="class-trainer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <i className="fas fa-user"></i>
                    <span>Liran Voltberg</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            className="classes-footer"
            {...fadeInUpDelayed(0.6)}
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.button 
              className="see-more-btn"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              See more
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="client-testimonial">
        <div className="container">
          <motion.h2 
            className="testimonial-main-title"
            {...fadeInUp}
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            What our client say about us?
          </motion.h2>

          <motion.div 
            className="single-testimonial-card"
            {...scaleIn}
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="testimonial-card-content">
              <motion.div 
                className="testimonial-left"
                {...slideInLeft}
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="testimonial-avatar"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Yael Smilansky"
                    width={80}
                    height={80}
                  />
                </motion.div>
                <motion.div 
                  className="testimonial-user-info"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="testimonial-name">Yael Smilansky</h4>
                  <p className="testimonial-age">26 years</p>
                </motion.div>
                <motion.div 
                  className="social-icons"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.a 
                    href="#" 
                    className="social-icon"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="social-icon"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-twitter"></i>
                  </motion.a>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="testimonial-right"
                {...slideInRight}
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.p 
                  className="testimonial-text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  I liked dynamic and interesting classes with Alicia Bethany. 
                  They develop will power. Workout pace helps to clean the brain from unnecessary thoughts and you focus on doing asanas and body control. 
                  I really liked training, thank you!
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="testimonial-cta-section"
            {...fadeInUpDelayed(0.4)}
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.button 
              className="write-comment-btn"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Write comment
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="our-team">
        <div className="container flex justify-center">
          <motion.h2 
            className="team-title"
            {...fadeInUp}
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            Our team
          </motion.h2>
          
          <motion.div 
            className="team-member-card"
            {...scaleIn}
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="team-card-content">
              <motion.div 
                className="team-info"
                {...slideInLeft}
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="team-member-header"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="member-designation">Trainer Ashtanga vinyasa yoga</div>
                  <h3 className="member-name">
                    <i className="fas fa-user"></i>
                    Alicia Bethany
                  </h3>
                </motion.div>

                <div className="member-details">
                  <motion.h4 
                    className="details-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Key information
                  </motion.h4>
                  <motion.p 
                    className="member-description"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    In yoga about 5 years. She graduated from the course of teachers of 
                    Valentina Malinovskaya's Hatha Yoga (there is a certificate). Balance yoga 
                    instructor (certificate), perinatal yoga, participated in seminars on yoga 
                    therapy (there is a certificate), pranayama, techniques of working with 
                    attention. In my studies I use the principle of vinyasa as a link between 
                    breathing and movement.
                  </motion.p>
                  
                  <motion.p 
                    className="member-description"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Particular attention is paid to the restoration of muscle balance through 
                    dynamic vyayam to work the muscles of antagonists. I use mandatory 
                    compensation after the load. I have over a year of experience in group and 
                    personal training. I am looking for an opportunity to reboot in the evening or 
                    morning. Alicia regularly attend master classes.
                  </motion.p>
                  
                  <motion.div 
                    className="member-social"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <span className="social-label">Alicia in social networks:</span>
                    <div className="social-icons">
                      <motion.a 
                        href="#" 
                        className="social-icon instagram"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="fab fa-instagram"></i>
                      </motion.a>
                      <motion.a 
                        href="#" 
                        className="social-icon twitter"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="fab fa-twitter"></i>
                      </motion.a>
                      <motion.a 
                        href="#" 
                        className="social-icon facebook"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="fab fa-facebook-f"></i>
                      </motion.a>
                    </div>
                  </motion.div>
                  
                  <motion.button 
                    className="ask-question-btn"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ask a Question
                  </motion.button>
                </div>
              </motion.div>
              
              <motion.div 
                className="team-image"
                {...slideInRight}
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <Image 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Alicia Bethany - Yoga Trainer" 
                  width={400} 
                  height={500}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.h2 
            className="section-title"
            {...fadeInUp}
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            Get In Touch
          </motion.h2>
          <div className="contact-content">
            <motion.div 
              className="contact-info"
              {...slideInLeft}
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div 
                className="contact-card"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Contact Information
                </motion.h3>
                <motion.div 
                  className="contact-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <i className="fas fa-phone"></i>
                  <span>(555) 123-4567</span>
                </motion.div>
                <motion.div 
                  className="contact-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <i className="fas fa-envelope"></i>
                  <span>hello@mindfulbalance.com</span>
                </motion.div>
                <motion.div 
                  className="contact-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <i className="fas fa-map-marker-alt"></i>
                  <span>123 Wellness Street<br />Peaceful City, PC 12345</span>
                </motion.div>
                <motion.div 
                  className="contact-hours"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4>Office Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 7:00 PM<br />
                     Saturday: 9:00 AM - 5:00 PM<br />
                     Sunday: Closed</p>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="contact-map"
              {...slideInRight}
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1234567890" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <motion.h2 
            className="newsletter-title"
            {...fadeInUp}
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            Stay Connected
          </motion.h2>

          <motion.div 
            className="newsletter-card"
            {...scaleIn}
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="newsletter-content">
              <motion.div 
                className="newsletter-info"
                {...slideInLeft}
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Join Our Wellness Community
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Get mindfulness tips, class updates, and exclusive offers delivered to your inbox. Start your journey to inner peace today.
                </motion.p>
                
                <motion.div 
                  className="newsletter-features"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="feature-item"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <i className="fas fa-leaf"></i>
                    <span>Weekly wellness insights</span>
                  </motion.div>
                  <motion.div 
                    className="feature-item"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <i className="fas fa-calendar-alt"></i>
                    <span>Early access to new classes</span>
                  </motion.div>
                  <motion.div 
                    className="feature-item"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <i className="fas fa-heart"></i>
                    <span>Exclusive member offers</span>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="newsletter-form-section"
                {...slideInRight}
                whileInView="animate"
                viewport={{ once: true }}
              >
                <form className="newsletter-form">
                  <motion.div 
                    className="form-group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.input 
                      type="email" 
                      placeholder="Enter your email address" 
                      required 
                      className="newsletter-input"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.button 
                      type="submit" 
                      className="newsletter-btn"
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Subscribe
                    </motion.button>
                  </motion.div>
                  <motion.p 
                    className="privacy-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    We respect your privacy. Unsubscribe at any time.
                  </motion.p>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="footer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="footer-content">
            <motion.div 
              className="footer-logo"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>MindfulBalance</h3>
              <p>Empowering your journey to mental wellness</p>
            </motion.div>
            <motion.div 
              className="footer-links"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="footer-column">
                <h4>Classes</h4>
                <ul>
                  <motion.li whileHover={{ x: 5 }}><a href="#services">Ashtanga Vinyasa Yoga</a></motion.li>
                  <motion.li whileHover={{ x: 5 }}><a href="#services">Yoga for Pregnant</a></motion.li>
                  <motion.li whileHover={{ x: 5 }}><a href="#services">Hatha Yoga</a></motion.li>
                  <motion.li whileHover={{ x: 5 }}><a href="#services">All Classes</a></motion.li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>About</h4>
                <ul>
                  <motion.li whileHover={{ x: 5 }}><a href="#team">Our Team</a></motion.li>
                  <motion.li whileHover={{ x: 5 }}><a href="#contact">Contact</a></motion.li>
                  <motion.li whileHover={{ x: 5 }}><a href="#">Privacy Policy</a></motion.li>
                  <motion.li whileHover={{ x: 5 }}><a href="#">Terms of Service</a></motion.li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <motion.a 
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-facebook"></i>
                  </motion.a>
                  <motion.a 
                    href="#"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-twitter"></i>
                  </motion.a>
                  <motion.a 
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-instagram"></i>
                  </motion.a>
                  <motion.a 
                    href="#"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="footer-bottom"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2024 MindfulBalance. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>
    </main>
  )
} 