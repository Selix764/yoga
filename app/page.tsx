'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMonthly, setIsMonthly] = useState(false)
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
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
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

        {/* Vertical Navigation */}
        <div className="vertical-nav">
          <div className="nav-arrow">↑</div>
          <div className="page-indicator">01 / 03</div>
          <div className="nav-arrow">↓</div>
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
              </motion.div>

              <motion.div 
                className="class-card side-card"
                {...fadeInUpDelayed(0.4)}
                whileInView="animate"
                viewport={{ once: true }}
              >
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

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <motion.h2 
            className="section-title"
            {...fadeInUp}
            whileInView="animate"
            viewport={{ once: true }}
          >
            Choose Your Plan
          </motion.h2>
          <div className="pricing-toggle">
            <button 
              className={!isMonthly ? 'active' : ''}
              onClick={() => setIsMonthly(false)}
            >
              Weekly
            </button>
            <button 
              className={isMonthly ? 'active' : ''}
              onClick={() => setIsMonthly(true)}
            >
              Monthly
            </button>
          </div>
          <div className="pricing-grid">
            {[
              {
                name: "Starter",
                icon: "fas fa-leaf",
                weeklyPrice: 89,
                monthlyPrice: 299,
                features: ["2 Individual Sessions", "Basic Wellness Resources", "Email Support"]
              },
              {
                name: "Premium",
                icon: "fas fa-heart",
                weeklyPrice: 149,
                monthlyPrice: 499,
                features: ["4 Individual Sessions", "2 Group Sessions", "Mindfulness Training", "24/7 Support"],
                featured: true
              },
              {
                name: "Complete",
                icon: "fas fa-star",
                weeklyPrice: 199,
                monthlyPrice: 699,
                features: ["Unlimited Sessions", "Wellness Coaching", "Personalized Programs", "Priority Support"]
              }
            ].map((plan, index) => (
              <motion.div 
                key={index}
                className={`pricing-card ${plan.featured ? 'featured' : ''}`}
                {...fadeInUpDelayed(index * 0.2)}
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="pricing-icon">
                  <i className={plan.icon}></i>
                </div>
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="amount">
                    ${isMonthly ? plan.monthlyPrice : plan.weeklyPrice}
                  </span>
                  <span className="period">
                    /{isMonthly ? 'month' : 'week'}
                  </span>
                </div>
                <ul className="features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button className="pricing-cta">Choose Plan</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="container">
          <motion.div 
            className="team-content"
            {...fadeInUp}
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="team-image">
              <Image 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Our Team" 
                width={600} 
                height={400}
              />
            </div>
            <div className="team-text">
              <h2>Meet Our Expert Team</h2>
              <p>Our team of licensed therapists and wellness coaches are dedicated to helping you achieve mental clarity and emotional balance. With over 50 years of combined experience, we provide evidence-based treatments tailored to your unique needs.</p>
              <blockquote>
                "We believe that everyone deserves to live a fulfilling life free from the burden of mental health challenges."
                <cite>- Dr. Sarah Johnson, Lead Therapist</cite>
              </blockquote>
              <button className="team-cta">Meet the Team</button>
            </div>
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

          {/* Side Navigation */}
          <div className="testimonial-side-nav">
            <span className="nav-indicator">05 | 08</span>
          </div>
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
        <div className="newsletter-background"></div>
        <div className="container">
          <motion.div 
            className="newsletter-content"
            {...fadeInUp}
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2>Stay Connected</h2>
            <p>Get wellness tips, mindfulness exercises, and exclusive offers delivered to your inbox.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">Subscribe</button>
            </form>
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
                <h4>Services</h4>
                <ul>
                  <li><a href="#services">Individual Therapy</a></li>
                  <li><a href="#services">Group Sessions</a></li>
                  <li><a href="#services">Mindfulness Training</a></li>
                  <li><a href="#services">Wellness Coaching</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
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