import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-white/10 bg-black/95 shadow-[0_8px_32px_rgba(0,0,0,0.8)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="group flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative h-12 w-12 overflow-hidden bg-gradient-to-br from-red-500 to-orange-500 shadow-lg shadow-red-500/50">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="relative flex h-full items-center justify-center text-2xl font-black text-white">
                  D
                </div>
              </div>
              <div>
                <div className="text-xl font-black text-white">Dev Portfolio</div>
                <div className="font-rajdhani text-[10px] uppercase tracking-widest text-gray-500">
                  Performance Driven
                </div>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="group relative font-rajdhani text-sm font-bold uppercase tracking-wider text-gray-300 transition-colors hover:text-white"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(239,68,68,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden border-2 border-red-500/50 bg-gradient-to-r from-red-600/20 to-orange-600/20 px-6 py-2.5 font-bold text-white backdrop-blur-sm transition-all hover:border-red-500"
              >
                <span className="relative z-10">Let's Talk</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center text-white md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-black md:hidden"
        >
          <div className="flex h-full flex-col items-center justify-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold text-white transition-colors hover:text-red-500"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
              className="mt-4 bg-gradient-to-r from-red-600 to-orange-600 px-8 py-3 font-semibold text-white"
            >
              Let's Talk
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  );
}