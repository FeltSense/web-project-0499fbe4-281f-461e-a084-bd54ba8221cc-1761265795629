'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out" id="navbar">
  <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 transition-all duration-500" id="nav-content">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between transition-all duration-500 py-6" id="nav-inner">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50 transition-all duration-500" id="logo-container">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <div className="transition-all duration-500" id="brand-text">
            <h1 className="text-2xl font-bold text-white tracking-tight">Catalyst</h1>
            <p className="text-xs text-purple-300 -mt-1 transition-all duration-500" id="tagline">Creative Studio</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <a href="#home" className="px-4 py-2 text-white hover:text-pink-400 transition-colors duration-300 font-medium relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#services" className="px-4 py-2 text-white hover:text-pink-400 transition-colors duration-300 font-medium relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#about" className="px-4 py-2 text-white hover:text-pink-400 transition-colors duration-300 font-medium relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#pricing" className="px-4 py-2 text-white hover:text-pink-400 transition-colors duration-300 font-medium relative group">
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="ml-4 px-6 py-2.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300" id="mobile-menu-button">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className="md:hidden hidden bg-gradient-to-b from-indigo-900 to-purple-900 border-t border-purple-700/50" id="mobile-menu">
    <div className="px-4 py-6 space-y-3">
      <a href="#home" className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
        Home
      </a>
      <a href="#services" className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
        Services
      </a>
      <a href="#about" className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
        About
      </a>
      <a href="#pricing" className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">
        Pricing
      </a>
      <a href="#contact" className="block px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300">
        Contact
      </a>
    </div>
  </div>

  <script dangerouslySetInnerHTML={{__html: `
    (function() {
      const navbar = document.getElementById('navbar');
      const navInner = document.getElementById('nav-inner');
      const logoContainer = document.getElementById('logo-container');
      const tagline = document.getElementById('tagline');
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      
      let lastScroll = 0;
      
      window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
          navInner.classList.remove('py-6');
          navInner.classList.add('py-3');
          logoContainer.classList.remove('w-12', 'h-12');
          logoContainer.classList.add('w-10', 'h-10');
          tagline.classList.add('opacity-0', 'h-0');
        } else {
          navInner.classList.remove('py-3');
          navInner.classList.add('py-6');
          logoContainer.classList.remove('w-10', 'h-10');
          logoContainer.classList.add('w-12', 'h-12');
          tagline.classList.remove('opacity-0', 'h-0');
        }
        
        lastScroll = currentScroll;
      });
      
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    })();
  `}} />
</nav>
      
      {/* Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-violet-100">
  {/* Animated Gradient Orbs */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] bg-gradient-to-br from-rose-400/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-gradient-to-br from-violet-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
  </div>

  {/* Floating Grid Pattern */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

  <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20 flex flex-col items-center justify-center min-h-screen">
    
    {/* Floating Badge */}
    <div className="mb-8 animate-[float_3s_ease-in-out_infinite]">
      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-amber-200/50 shadow-lg shadow-amber-500/10">
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 animate-pulse"></div>
        <span className="text-sm font-semibold bg-gradient-to-r from-amber-600 via-rose-600 to-violet-600 bg-clip-text text-transparent">
          Award-Winning Creative Agency
        </span>
      </div>
    </div>

    {/* Main Headline with Floating Words */}
    <div className="text-center mb-8 space-y-4">
      <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight">
        <span className="inline-block animate-[float_4s_ease-in-out_infinite] bg-gradient-to-r from-amber-600 via-rose-600 to-violet-600 bg-clip-text text-transparent">
          Catalyst
        </span>
        <br />
        <span className="inline-block animate-[float_4s_ease-in-out_infinite] text-gray-900" style={{ animationDelay: '0.5s' }}>
          Creative
        </span>
        {' '}
        <span className="inline-block animate-[float_4s_ease-in-out_infinite] bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent" style={{ animationDelay: '1s' }}>
          Studio
        </span>
      </h1>
    </div>

    {/* Animated Subheadline */}
    <div className="max-w-3xl mx-auto mb-12 animate-[float_5s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }}>
      <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-800 leading-relaxed">
        We transform brands into cultural movements through
        <span className="relative inline-block mx-2">
          <span className="relative z-10 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">bold storytelling</span>
          <span className="absolute bottom-1 left-0 w-full h-3 bg-gradient-to-r from-amber-300/40 to-rose-300/40 -rotate-1"></span>
        </span>
        and disruptive design
      </p>
    </div>

    {/* Description */}
    <div className="max-w-2xl mx-auto mb-12 animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}>
      <p className="text-lg text-gray-700 text-center leading-relaxed">
        From Fortune 500s to fearless startups, we craft campaigns that don't just get noticed—they get remembered. Strategy. Creativity. Results.
      </p>
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-5 mb-16 animate-[float_4s_ease-in-out_infinite]" style={{ animationDelay: '2.5s' }}>
      <button className="group relative px-10 py-5 rounded-full font-bold text-lg text-white bg-gradient-to-r from-amber-500 via-rose-500 to-violet-600 shadow-2xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
        <span className="relative z-10">Start Your Project</span>
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-rose-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
      <button className="px-10 py-5 rounded-full font-bold text-lg text-gray-900 bg-white/80 backdrop-blur-md border-2 border-gray-900 hover:bg-gray-900 hover:text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
        View Our Work
      </button>
    </div>

    {/* Floating Stats */}
    <div className="grid grid-cols-3 gap-8 sm:gap-16 max-w-4xl mx-auto">
      <div className="text-center animate-[float_5s_ease-in-out_infinite]" style={{ animationDelay: '3s' }}>
        <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent mb-2">
          250+
        </div>
        <div className="text-sm sm:text-base font-semibold text-gray-700">Brands Elevated</div>
      </div>
      <div className="text-center animate-[float_5s_ease-in-out_infinite]" style={{ animationDelay: '3.5s' }}>
        <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-rose-600 to-violet-600 bg-clip-text text-transparent mb-2">
          47
        </div>
        <div className="text-sm sm:text-base font-semibold text-gray-700">Industry Awards</div>
      </div>
      <div className="text-center animate-[float_5s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}>
        <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">
          98%
        </div>
        <div className="text-sm sm:text-base font-semibold text-gray-700">Client Retention</div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }
  `}</style>
</div>
      
      {/* Services Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        Creative Excellence at <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Catalyst Creative Studio</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Award-winning creative work with a proven track record of measurable client success
      </p>
    </div>

    {/* Bento Grid */}
    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-fr">
      
      {/* Large Card - Brand Strategy */}
      <div className="md:col-span-6 lg:col-span-7 lg:row-span-2 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between min-h-[400px]">
        <div>
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold mb-4">Brand Strategy & Identity</h3>
          <p className="text-purple-100 text-lg mb-6">
            Full-service capabilities from strategy to execution. Catalyst Creative Studio crafts compelling brand narratives that resonate with your target audience and drive measurable results.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">Brand Positioning</span>
          <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">Visual Identity</span>
          <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">Messaging</span>
        </div>
      </div>

      {/* Tall Card - Digital Marketing */}
      <div className="md:col-span-3 lg:col-span-5 lg:row-span-2 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 flex flex-col justify-between min-h-[400px]">
        <div>
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Marketing Excellence</h3>
          <p className="text-gray-600 mb-6">
            Experienced team of creative specialists delivering data-driven campaigns across all digital channels with proven ROI.
          </p>
        </div>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-pink-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            SEO & SEM
          </li>
          <li className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-pink-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Social Media
          </li>
          <li className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-pink-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Content Marketing
          </li>
        </ul>
      </div>

      {/* Wide Card - Creative Production */}
      <div className="md:col-span-3 lg:col-span-5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] min-h-[200px]">
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-3">Creative Production</h3>
        <p className="text-amber-50">
          Award-winning creative work across video, photography, and design. Industry expertise across diverse sectors.
        </p>
      </div>

      {/* Wide Card - Client Collaboration */}
      <div className="md:col-span-3 lg:col-span-7 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 min-h-[200px]">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Collaborative Process</h3>
            <p className="text-gray-600 mb-4">
              Our collaborative process puts your vision first. Catalyst Creative Studio partners with you every step of the way to ensure your goals become reality.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Discovery</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Strategy</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Execution</span>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-12 text-center">
      <p className="text-gray-600 mb-6">Ready to elevate your brand with Catalyst Creative Studio?</p>
      <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
        Start Your Project
      </button>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-24 px-4">
  <div className="max-w-5xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        Client Success Stories
      </h2>
      <p className="text-xl text-gray-600">
        See what industry leaders say about Catalyst Creative Studio
      </p>
    </div>

    {/* Carousel Container */}
    <div className="relative">
      {/* Single Testimonial Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 relative overflow-hidden">
        {/* Decorative Quote Mark */}
        <div className="absolute top-8 left-8 text-purple-200 opacity-50">
          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Testimonial Content */}
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            {/* Customer Photo */}
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
              alt="Sarah Mitchell"
              className="w-24 h-24 rounded-full object-cover ring-4 ring-purple-200 shadow-lg"
            />
            
            {/* Customer Info */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900">Sarah Mitchell</h3>
              <p className="text-purple-600 font-semibold">VP of Marketing, TechFlow Solutions</p>
              <div className="flex gap-1 mt-2 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
            "Catalyst Creative Studio transformed our entire brand identity and digital presence. Their strategic approach to our rebranding campaign resulted in a 340% increase in qualified leads within just three months. The team's creativity, professionalism, and deep understanding of B2B marketing made them an invaluable partner. They don't just deliver creative work—they deliver measurable business results."
          </p>

          {/* Campaign Tag */}
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
            Brand Transformation Campaign
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white hover:bg-purple-600 text-gray-800 hover:text-white rounded-full p-4 shadow-xl transition-all duration-300 group"
        aria-label="Previous testimonial"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white hover:bg-purple-600 text-gray-800 hover:text-white rounded-full p-4 shadow-xl transition-all duration-300 group"
        aria-label="Next testimonial"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Indicators */}
      <div className="flex justify-center gap-3 mt-12">
        <button className="w-3 h-3 rounded-full bg-purple-600 transition-all duration-300" aria-label="Go to testimonial 1"></button>
        <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-purple-400 transition-all duration-300" aria-label="Go to testimonial 2"></button>
        <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-purple-400 transition-all duration-300" aria-label="Go to testimonial 3"></button>
      </div>
    </div>

    {/* Hidden testimonials for carousel (would be shown via state management) */}
    <div className="hidden">
      {/* Testimonial 2 */}
      <div className="testimonial-item">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" alt="Marcus Chen" />
        <h3>Marcus Chen</h3>
        <p>Chief Marketing Officer, Elevate Brands</p>
        <p>"Working with Catalyst Creative Studio was a game-changer for our product launch. Their integrated marketing campaign exceeded all our KPIs—we saw a 275% ROI in the first quarter alone. What impressed me most was their data-driven approach combined with stunning creative execution. They truly understand how to blend art and science in modern marketing."</p>
        <span>Product Launch Campaign</span>
      </div>

      {/* Testimonial 3 */}
      <div className="testimonial-item">
        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" alt="Jennifer Rodriguez" />
        <h3>Jennifer Rodriguez</h3>
        <p>Director of Digital Marketing, Nexus Financial Group</p>
        <p>"Catalyst Creative Studio helped us navigate a complex rebranding during a critical growth phase. Their strategic insights and flawless execution across all touchpoints—from our website to social media to print collateral—created a cohesive brand experience that resonated with our target audience. Our brand awareness increased by 180%, and customer engagement metrics are at an all-time high."</p>
        <span>Full-Scale Rebranding Project</span>
      </div>
    </div>
  </div>
</section>
      
      {/* Pricing Section - Stripe Integration */}
      <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        Catalyst Creative Studio <span className="text-purple-600">Pro</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Elevate your marketing campaigns with our comprehensive creative suite
      </p>
    </div>

    {/* Feature Matrix Grid */}
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Left Side - Features Matrix */}
        <div className="p-12 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
          <div className="mb-8">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold mb-4">
              EVERYTHING INCLUDED
            </div>
            <h3 className="text-3xl font-bold mb-2">Complete Marketing Arsenal</h3>
            <p className="text-purple-100">All tools, unlimited creativity</p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold text-sm mb-1">Brand Strategy</h4>
              <p className="text-xs text-purple-100">Complete positioning</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-2">✨</div>
              <h4 className="font-semibold text-sm mb-1">Content Creation</h4>
              <p className="text-xs text-purple-100">Unlimited assets</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-2">📊</div>
              <h4 className="font-semibold text-sm mb-1">Analytics Suite</h4>
              <p className="text-xs text-purple-100">Real-time insights</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-semibold text-sm mb-1">Campaign Tools</h4>
              <p className="text-xs text-purple-100">Multi-channel reach</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-2">🎨</div>
              <h4 className="font-semibold text-sm mb-1">Design Studio</h4>
              <p className="text-xs text-purple-100">Pro templates</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-2">💬</div>
              <h4 className="font-semibold text-sm mb-1">Priority Support</h4>
              <p className="text-xs text-purple-100">24/7 assistance</p>
            </div>
          </div>

          {/* Additional Features List */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm">Unlimited project revisions</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm">White-label capabilities</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm">API access & integrations</span>
            </div>
          </div>
        </div>

        {/* Right Side - Pricing & CTA */}
        <div className="p-12 flex flex-col justify-center">
          <div className="mb-8">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-6xl font-bold text-gray-900">$79</span>
              <span className="text-2xl text-gray-500">/month</span>
            </div>
            <p className="text-gray-600 text-lg mb-6">
              Everything you need to dominate your market
            </p>
            
            {/* Value Props */}
            <div className="bg-purple-50 rounded-xl p-6 mb-8 border border-purple-100">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-600">∞</div>
                  <div className="text-xs text-gray-600 mt-1">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-xs text-gray-600 mt-1">Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">100+</div>
                  <div className="text-xs text-gray-600 mt-1">Templates</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-5 px-8 rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl mb-6 text-lg"
            >
              Start Creating Now →
            </button>

            {/* Trust Indicators */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium">Secure SSL Payment</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="text-xs font-medium text-gray-600">Trusted by 10K+ marketers</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-xs font-medium text-gray-600">Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Money Back Guarantee */}
          <div className="text-center pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              🛡️ <span className="font-semibold text-gray-700">30-Day Money-Back Guarantee</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Trust Bar */}
    <div className="mt-12 text-center">
      <p className="text-sm text-gray-500 mb-4">Powered by Catalyst Creative Studio</p>
      <div className="flex items-center justify-center gap-8 text-xs text-gray-400">
        <span>🔒 256-bit SSL Encryption</span>
        <span>💳 Powered by Stripe</span>
        <span>✓ PCI Compliant</span>
      </div>
    </div>
  </div>
</div>
      
      {/* Contact Form - Supabase Integration */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 py-24">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
      
      {/* Sticky Sidebar */}
      <div className="lg:sticky lg:top-24 space-y-8">
        <div>
          <span className="inline-block px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full mb-6">
            Let's Create Together
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to Amplify Your Brand?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Catalyst Creative Studio, we transform marketing challenges into creative opportunities. Let's discuss how we can elevate your brand presence.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Fast Response Time</h3>
              <p className="text-gray-600">We'll get back to you within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Free Consultation</h3>
              <p className="text-gray-600">No obligation strategy session included</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Proven Results</h3>
              <p className="text-gray-600">Award-winning campaigns that convert</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-3">Trusted by leading brands:</p>
          <div className="flex flex-wrap gap-4 items-center opacity-60">
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-20 bg-gray-300 rounded"></div>
            <div className="h-8 w-28 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
        <form
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            
            const form = e.currentTarget as HTMLFormElement;
            const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
            const statusDiv = form.querySelector('#form-status') as HTMLDivElement;
            
            // Get form data
            const formData = new FormData(form);
            const data = {
              name: formData.get('name') as string,
              email: formData.get('email') as string,
              phone: formData.get('phone') as string,
              company: formData.get('company') as string,
              service: formData.get('service') as string,
              budget: formData.get('budget') as string,
              message: formData.get('message') as string,
              source: 'Catalyst Creative Studio Contact Form'
            };

            // Disable submit button
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            try {
              const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
              });

              if (!response.ok) {
                throw new Error('Submission failed');
              }

              // Success
              statusDiv.className = 'mt-6 p-4 bg-green-50 border border-green-200 rounded-lg';
              statusDiv.innerHTML = `
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p class="text-green-800 font-medium">Thank you! We'll be in touch within 24 hours.</p>
                </div>
              `;
              form.reset();
              
            } catch (error) {
              // Error
              statusDiv.className = 'mt-6 p-4 bg-red-50 border border-red-200 rounded-lg';
              statusDiv.innerHTML = `
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p class="text-red-800 font-medium">Something went wrong. Please try again.</p>
                </div>
              `;
            } finally {
              submitButton.disabled = false;
              submitButton.textContent = 'Send Message';
            }
          }}
          className="space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none"
                placeholder="Your Company"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none bg-white"
              >
                <option value="">Select a service</option>
                <option value="brand-strategy">Brand Strategy</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="content-creation">Content Creation</option>
                <option value="social-media">Social Media Management</option>
                <option value="seo-sem">SEO & SEM</option>
                <option value="video-production">Video Production</option>
                <option value="web-design">Web Design</option>
                <option value="full-campaign">Full Campaign</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-gray-900 mb-2">
                Project Budget
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none bg-white"
              >
                <option value="">Select budget range</option>
                <option value="under-10k">Under $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="over-100k">$100,000+</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
              Tell Us About Your Project *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none resize-none"
              placeholder="Share your vision, goals, and any specific requirements..."
            ></textarea>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              required
              className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-600"
            />
            <label htmlFor="consent" className="text-sm text-gray-600">
              I agree to receive communications from Catalyst Creative Studio and understand my information will be handled according to the privacy policy.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Send Message
          </button>

          <div id="form-status"></div>

          <p className="text-xs text-center text-gray-500">
            By submitting this form, you agree to our Terms of Service and Privacy Policy
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="flex flex-col items-center space-y-8">
      {/* Logo */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white">Catalyst Creative Studio</h2>
        <p className="mt-2 text-sm text-gray-400">Igniting Brand Brilliance</p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-center space-y-2 text-sm">
        <a href="mailto:hello@catalystcreative.com" className="hover:text-white transition-colors">
          hello@catalystcreative.com
        </a>
        <a href="tel:+15551234567" className="hover:text-white transition-colors">
          +1 (555) 123-4567
        </a>
        <p className="text-gray-400">123 Creative Boulevard, Design District, NY 10001</p>
      </div>

      {/* Social Links */}
      <div className="flex items-center space-x-6">
        <a href="https://facebook.com" className="hover:text-white transition-colors" aria-label="Facebook">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a href="https://instagram.com" className="hover:text-white transition-colors" aria-label="Instagram">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a href="https://twitter.com" className="hover:text-white transition-colors" aria-label="Twitter">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
        <a href="https://linkedin.com" className="hover:text-white transition-colors" aria-label="LinkedIn">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="https://behance.net" className="hover:text-white transition-colors" aria-label="Behance">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
          </svg>
        </a>
      </div>

      {/* Copyright */}
      <div className="pt-8 border-t border-gray-800 w-full text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Catalyst Creative Studio. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
    </main>
  )
}