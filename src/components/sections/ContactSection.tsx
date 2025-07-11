import type { FC } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Icon } from '../Icon';
import { portfolioData } from '../../data/portfolioData';
import { handleResumeAction } from '../../utils/resumeDownload';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const ContactSection: FC = () => {
  const { personalInfo, socialLinks, contact } = portfolioData;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      // Create form data for Netlify Forms
      const formData = new FormData();
      formData.append('form-name', 'contact');
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('subject', data.subject);
      formData.append('message', data.message);

      // Submit to Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      description: 'Send me an email anytime'
    },
    {
      icon: 'Phone',
      title: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
      description: 'Available during business hours'
    },
    {
      icon: 'MapPin',
      title: 'Location',
      value: personalInfo.location,
      link: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`,
      description: 'Based in'
    },
    {
      icon: 'Clock',
      title: 'Availability',
      value: contact.availability,
      description: 'Current status'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-width section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to start a project or have a question? I'd love to hear from you. Let's create something amazing together!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Send a Message</h3>
                
                <form 
                  onSubmit={handleSubmit(onSubmit)} 
                  className="space-y-6"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  {/* Hidden fields for Netlify Forms */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div style={{ display: 'none' }}>
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </div>
                  
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full px-3 sm:px-4 py-3 sm:py-3.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-base bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
                        errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full px-3 sm:px-4 py-3 sm:py-3.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-base bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
                        errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      {...register('subject')}
                      type="text"
                      id="subject"
                      name="subject"
                      className={`w-full px-3 sm:px-4 py-3 sm:py-3.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-base bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
                        errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      name="message"
                      rows={5}
                      className={`w-full px-3 sm:px-4 py-3 sm:py-3.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none text-base bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
                        errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="Tell me about your project or question..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all ${
                      isSubmitting
                        ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                        : 'bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Icon name="Send" size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg">
                      <Icon name="CheckCircle" size={20} className="text-green-600 dark:text-green-400 mr-3" />
                      <p className="text-green-800 dark:text-green-300">Message sent successfully! I'll get back to you soon.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
                      <Icon name="XCircle" size={20} className="text-red-600 dark:text-red-400 mr-3" />
                      <p className="text-red-800 dark:text-red-300">Failed to send message. Please try again or use email directly.</p>
                    </div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                          <Icon name={method.icon as any} size={20} className="text-primary-600 dark:text-primary-400" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{method.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{method.description}</p>
                        {method.link ? (
                          <a
                            href={method.link}
                            target={method.icon === 'MapPin' ? '_blank' : undefined}
                            rel={method.icon === 'MapPin' ? 'noopener noreferrer' : undefined}
                            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors font-medium"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <span className="text-gray-700 dark:text-gray-300 font-medium">{method.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-primary-600 dark:hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                      aria-label={`Visit ${link.name}`}
                    >
                      <Icon
                        name={link.icon as any}
                        size={20}
                        className="text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors"
                      />
                    </a>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  Follow me for updates on projects, tech insights, and more!
                </p>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-primary-100 dark:border-primary-800">
                <div className="flex items-start">
                  <Icon name="Clock" size={20} className="text-primary-600 dark:text-primary-400 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Response</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      I typically respond to emails within 24 hours. For urgent matters, 
                      feel free to call or connect via LinkedIn for faster response.
                    </p>
                  </div>
                </div>
              </div>

              {/* Preferred Contact */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <div className="flex items-start">
                  <Icon name="Star" size={20} className="text-yellow-600 dark:text-yellow-400 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Preferred Contact</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {contact.preferredContactMethod === 'Email' 
                        ? 'I prefer email for initial contact as it allows me to provide detailed responses and reference our conversation later.'
                        : `My preferred contact method is ${contact.preferredContactMethod}.`
                      }
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Let's Build Something Great Together</h3>
              <p className="text-gray-300 dark:text-gray-100 mb-6 max-w-2xl mx-auto">
                Whether you have a project in mind, need consulting, or just want to chat about technology, 
                I'm always open to new opportunities and interesting conversations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href={`mailto:${personalInfo.email}?subject=Project Inquiry`}
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors text-sm sm:text-base"
                >
                  <Icon name="Mail" size={18} className="mr-2" />
                  Send Email Directly
                </a>
                <button
                  onClick={() => handleResumeAction(personalInfo.resume || '', 'print')}
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-gray-700 dark:bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors border border-gray-600 dark:border-gray-500 text-sm sm:text-base"
                >
                  <Icon name="Download" size={18} className="mr-2" />
                  Download Resume
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 