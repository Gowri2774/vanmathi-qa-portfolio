
import { useState, useEffect } from 'react';
import { ArrowDown, Download, Eye, Mail, Phone, Linkedin, ChevronUp, User, GraduationCap, Users, Lightbulb, MessageCircle, Zap, Target, Clock, TestTube, Code, Database, GitBranch, Shield, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vanmathi M
            </h1>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-purple-400 transition-colors duration-300 ${
                    activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Vanmathi M
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Aspiring QA Engineer | Passionate About Software<br />
              Quality & Automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection('projects')}
              >
                <Eye className="mr-2 h-4 w-4" />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
          
          {/* Profile Picture Placeholder */}
          <div className="flex justify-center lg:justify-end animate-fade-in delay-300">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <User className="w-32 h-32 text-gray-400" />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute top-10 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="absolute bottom-20 -left-6 w-6 h-6 bg-pink-500 rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a recent MCA graduate from VIT University with a strong passion for software testing. 
                I've gained knowledge in both manual testing and automation using Selenium WebDriver. 
                I enjoy ensuring product quality by identifying and reporting bugs.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My goal is to begin my career as a QA Engineer and grow within the software testing field. 
                I'm dedicated to continuous learning and staying updated with the latest testing methodologies 
                and tools in the industry.
              </p>
            </div>

            <div className="space-y-6 animate-fade-in delay-300">
              <h3 className="text-2xl font-semibold mb-8 flex items-center text-purple-400">
                <GraduationCap className="mr-3 h-6 w-6" />
                Education
              </h3>
              
              <div className="space-y-6">
                <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">Master of Computer Applications</h4>
                        <p className="text-gray-300 mb-2">VIT Vellore</p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-400">2022 – 2024</span>
                          <span className="text-purple-400 font-medium">CGPA: 7.93</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">Bachelor of Computer Applications</h4>
                        <p className="text-gray-300 mb-2">VIT Vellore</p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-400">2019 – 2022</span>
                          <span className="text-purple-400 font-medium">CGPA: 7.99</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-8 text-purple-400">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Manual Testing', icon: TestTube },
                  { name: 'Functional Testing', icon: Code },
                  { name: 'Regression Testing', icon: Zap },
                  { name: 'Selenium WebDriver', icon: Code },
                  { name: 'Java', icon: Code },
                  { name: 'MySQL', icon: Database },
                  { name: 'Jira', icon: Target },
                  { name: 'HTML/CSS', icon: Code }
                ].map((skill, index) => (
                  <Card key={skill.name} className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-4 text-center">
                      <skill.icon className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                      <p className="text-sm font-medium">{skill.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="animate-fade-in delay-300">
              <h3 className="text-2xl font-semibold mb-8 text-purple-400">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Team Collaboration', icon: Users },
                  { name: 'Problem Solving', icon: Lightbulb },
                  { name: 'Communication', icon: MessageCircle },
                  { name: 'Adaptability', icon: Zap },
                  { name: 'Time Management', icon: Clock },
                  { name: 'Attention to Detail', icon: Target },
                  { name: 'Critical Thinking', icon: Target },
                  { name: 'Creativity', icon: Lightbulb }
                ].map((skill, index) => (
                  <Card key={skill.name} className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-4 text-center">
                      <skill.icon className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                      <p className="text-sm font-medium">{skill.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Academic Projects
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project 1 */}
            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Cyberbullying Detection System</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Machine learning-based system using WhatsApp chat data to detect abusive language and notify guardians via SMS.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Selenium WebDriver', 'Scikit-Learn', 'Pandas'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Online Course Management System</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  A full-featured course portal supporting student registration, quizzes, and certificate generation.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">vanudhaniya0509@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">+91 8270553532</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">LinkedIn</h4>
                    <p className="text-gray-300">Connect with me</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in delay-300">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="bg-slate-800/50 border-purple-500/30 focus:border-purple-400 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="bg-slate-800/50 border-purple-500/30 focus:border-purple-400 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Your message here..." 
                    rows={5}
                    className="bg-slate-800/50 border-purple-500/30 focus:border-purple-400 text-white placeholder-gray-400 resize-none"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg transition-all duration-300">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Vanmathi M
              </h3>
              <p className="text-gray-400">MCA Graduate, VIT University</p>
            </div>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-purple-400">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-purple-400">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              Made with ❤️ by Vanmathi M<br />
              © 2024 Vanmathi M. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg transition-all duration-300 z-50"
          size="sm"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default Index;
