'use client';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="flex items-center justify-center space-x-1 py-3">
      {links.map((link) => {
        const isActive = router.pathname === link.href;
        
        return (
          <a
            key={link.href}
            href={link.href}
            className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 relative group
              ${isActive 
                ? 'bg-[#FFD700]/10 text-[#FFD700] border-2 border-[#FFD700]' 
                : 'text-gray-300 hover:text-[#FFD700] hover:bg-[#FFD700]/5'
              }`}
          >
            {link.label}
            {/* Animated underline on hover (only for non-active) */}
            {!isActive && (
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"></span>
            )}
          </a>
        );
      })}
    </nav>
  );
}
