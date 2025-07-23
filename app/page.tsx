'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  // Consistent animation variants for all cards
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
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <h3>MindfulBalance</h3>
          </div>
          <ul className="nav-menu">
                                <li><a href="#home">Home</a></li>
                    <li><a href="#services">Classes</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background"></div>
        <div className="hero-mist-overlay"></div>
        
        <div className="hero-content">
          <div className="hero-layout">
            {/* Left Text */}
            <div className="hero-text-left">
              <div className="find">find</div>
              <div className="your">your</div>
              <div className="balance">balance</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="get-started">Get started</div>
          <div className="arrow-down">↓</div>
        </div>


      </section>

      {/* Classes Section */}
      <section id="services" className="classes">
        <div className="container">
          <motion.h2 
            className="classes-title"
            {...fadeInUp}
            whileInView="animate"
            viewport={{ once: true }}
          >
            Classes
          </motion.h2>
          <div className="classes-grid">
            {/* Main Class Card */}
            <motion.div 
              className="class-card main-card"
              {...fadeInUp}
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="class-content">
                <div className="class-info">
                  <h3 className="class-title">Ashtanga vinyasa yoga</h3>
                  <p className="class-level">Beginners level</p>
                  
                  <div className="class-schedule">
                    <div className="schedule-item">
                      <i className="fas fa-calendar-alt"></i>
                      <span>Tu – Th 07:00 am – 09:00 am</span>
                    </div>
                    <div className="schedule-item">
                      <i className="fas fa-calendar-alt"></i>
                      <span>Fr 13:00 pm – 14:00 pm</span>
                    </div>
                  </div>

                  <div className="class-trainer">
                    <i className="fas fa-user"></i>
                    <span>Alicia Bethany</span>
                  </div>

                  <p className="class-description">
                    A dynamic form of yoga that synchronizes breath with movement. Perfect for those looking to build strength, flexibility, and mental focus. This class is designed for beginners who want to learn the fundamentals of vinyasa flow.
                  </p>

                  <button className="class-cta">Get started</button>
                </div>
                <div className="class-image">
                  <Image 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                    alt="Ashtanga vinyasa yoga class" 
                    width={300} 
                    height={200}
                  />
                </div>
              </div>
            </motion.div>

            {/* Side Cards */}
            <div className="side-cards">
              <motion.div 
                className="class-card side-card"
                {...fadeInUpDelayed(0.2)}
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="class-content">
                  <div className="class-info">
                    <h3 className="class-title">Yoga for Pregnant</h3>
                    <p className="class-level">Beginners level</p>
                    
                    <div className="class-schedule">
                      <div className="schedule-item">
                        <i className="fas fa-calendar-alt"></i>
                        <span>Tu – Th 07:00 am – 09:00 am</span>
                      </div>
                      <div className="schedule-item">
                        <i className="fas fa-calendar-alt"></i>
                        <span>Fr 13:00 pm – 14:00 pm</span>
                      </div>
                    </div>

                    <div className="class-trainer">
                      <i className="fas fa-user"></i>
                      <span>Alicia Bethany</span>
                    </div>

                    <p className="class-description">
                      Gentle, safe yoga practice designed specifically for expecting mothers. Focus on breathing, gentle stretching, and poses that support pregnancy wellness while building strength for childbirth and recovery.
                    </p>

                    <button className="class-cta">Get started</button>
                  </div>
                  <div className="class-image">
                    <Image 
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                      alt="Yoga for pregnant women" 
                      width={300} 
                      height={200}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="class-card side-card"
                {...fadeInUpDelayed(0.4)}
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="class-content">
                  <div className="class-info">
                    <h3 className="class-title">Hatha yoga</h3>
                    <p className="class-level">Advanced level</p>
                    
                    <div className="class-schedule">
                      <div className="schedule-item">
                        <i className="fas fa-calendar-alt"></i>
                        <span>Mo – We 06:00 am – 07:30 am</span>
                      </div>
                      <div className="schedule-item">
                        <i className="fas fa-calendar-alt"></i>
                        <span>Sa 10:00 am – 11:30 am</span>
                      </div>
                    </div>

                    <div className="class-trainer">
                      <i className="fas fa-user"></i>
                      <span>Liran Voltberg</span>
                    </div>

                    <p className="class-description">
                      Traditional Hatha yoga focusing on precise alignment and holding poses. Advanced practice that builds deep strength, flexibility, and mindfulness through sustained postures and breathing techniques.
                    </p>

                    <button className="class-cta">Get started</button>
                  </div>
                  <div className="class-image">
                    <Image 
                      src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                      alt="Hatha yoga practice" 
                      width={300} 
                      height={200}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            className="classes-footer"
            {...fadeInUpDelayed(0.6)}
            whileInView="animate"
            viewport={{ once: true }}
          >
            <button className="see-more-btn">See more</button>
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
            viewport={{ once: true }}
          >
            What our client say about us?
          </motion.h2>

          <motion.div 
            className="single-testimonial-card"
            {...fadeInUpDelayed(0.2)}
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="testimonial-card-content">
              <div className="testimonial-left">
                <div className="testimonial-avatar">
                  <Image 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Yael Smilansky"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="testimonial-user-info">
                  <h4 className="testimonial-name">Yael Smilansky</h4>
                  <p className="testimonial-age">26 years</p>
                </div>
                <div className="social-icons">
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
              
              <div className="testimonial-right">
                <p className="testimonial-text">
                  I liked dynamic and interesting classes with Alicia Bethany. 
                  They develop will power. Workout pace helps to clean the brain from unnecessary thoughts and you focus on doing asanas and body control. 
                  I really liked training, thank you!
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="testimonial-cta-section"
            {...fadeInUpDelayed(0.4)}
            whileInView="animate"
            viewport={{ once: true }}
          >
            <button className="write-comment-btn">Write comment</button>
          </motion.div>


        </div>
      </section>



      {/* Our Team Section */}
      <section id="team" className="our-team">
        <div className="container">
          <motion.h2 
            className="team-title"
            {...fadeInUp}
            whileInView="animate"
            viewport={{ once: true }}
          >
            Our team
          </motion.h2>
          
          <motion.div 
            className="team-member-card"
            {...fadeInUpDelayed(0.2)}
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="team-card-content">
              <div className="team-info">
                <div className="team-member-header">
                  <div className="member-designation">Trainer Ashtanga vinyasa yoga</div>
                  <h3 className="member-name">
                    <i className="fas fa-user"></i>
                    Alicia Bethany
                  </h3>
                </div>

                <div className="member-details">
                  <h4 className="details-title">Key information</h4>
                  <p className="member-description">
                    In yoga about 5 years. She graduated from the course of teachers of 
                    Valentina Malinovskaya's Hatha Yoga (there is a certificate). Balance yoga 
                    instructor (certificate), perinatal yoga, participated in seminars on yoga 
                    therapy (there is a certificate), pranayama, techniques of working with 
                    attention. In my studies I use the principle of vinyasa as a link between 
                    breathing and movement.
                  </p>
                  
                  <p className="member-description">
                    Particular attention is paid to the restoration of muscle balance through 
                    dynamic vyayam to work the muscles of antagonists. I use mandatory 
                    compensation after the load. I have over a year of experience in group and 
                    personal training. I am looking for an opportunity to reboot in the evening or 
                    morning. Alicia regularly attend master classes.
                  </p>
                  
                  <div className="member-social">
                    <span className="social-label">Alicia in social networks:</span>
                    <div className="social-icons">
                      <a href="#" className="social-icon instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#" className="social-icon twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="social-icon facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </div>
                  </div>
                  
                  <button className="ask-question-btn">Ask a Question</button>
                </div>
              </div>
              
              <div className="team-image">
                <Image 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Alicia Bethany - Yoga Trainer" 
                  width={400} 
                  height={500}
                />
              </div>
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
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <div className="contact-content">
            <motion.div 
              className="contact-info"
              {...fadeInUpDelayed(0.2)}
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="contact-card">
                <h3>Contact Information</h3>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>(555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>hello@mindfulbalance.com</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>123 Wellness Street<br />Peaceful City, PC 12345</span>
                </div>
                <div className="contact-hours">
                  <h4>Office Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 7:00 PM<br />
                     Saturday: 9:00 AM - 5:00 PM<br />
                     Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="contact-map"
              {...fadeInUpDelayed(0.4)}
              whileInView="animate"
              viewport={{ once: true }}
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
            viewport={{ once: true }}
          >
            Stay Connected
          </motion.h2>

          <motion.div 
            className="newsletter-card"
            {...fadeInUpDelayed(0.2)}
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="newsletter-content">
              <div className="newsletter-info">
                <h3>Join Our Wellness Community</h3>
                <p>Get mindfulness tips, class updates, and exclusive offers delivered to your inbox. Start your journey to inner peace today.</p>
                
                <div className="newsletter-features">
                  <div className="feature-item">
                    <i className="fas fa-leaf"></i>
                    <span>Weekly wellness insights</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-calendar-alt"></i>
                    <span>Early access to new classes</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-heart"></i>
                    <span>Exclusive member offers</span>
                  </div>
                </div>
              </div>
              
              <div className="newsletter-form-section">
                <form className="newsletter-form">
                  <div className="form-group">
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      required 
                      className="newsletter-input"
                    />
                    <button type="submit" className="newsletter-btn">
                      Subscribe
                    </button>
                  </div>
                  <p className="privacy-text">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>MindfulBalance</h3>
              <p>Empowering your journey to mental wellness</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Classes</h4>
                <ul>
                  <li><a href="#services">Ashtanga Vinyasa Yoga</a></li>
                  <li><a href="#services">Yoga for Pregnant</a></li>
                  <li><a href="#services">Hatha Yoga</a></li>
                  <li><a href="#services">All Classes</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>About</h4>
                <ul>
                  <li><a href="#team">Our Team</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 MindfulBalance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 