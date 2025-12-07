export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#0a0a0a] to-[#1a1a1a] border-t border-[#FFD700]/20">
      {/* Mobile Footer */}
      <div className="md:hidden px-4 py-8">
        {/* Logo Centered */}
        <div className="flex justify-center mb-6">
          <a href="/">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          </a>
        </div>

        {/* Legal Links - Horizontal */}
        <div className="flex justify-center items-center space-x-4 mb-6">
          <a href="/privacy" className="text-gray-400 hover:text-[#FFD700] transition text-xs">
            Privacy
          </a>
          <span className="text-gray-600">•</span>
          <a href="/terms" className="text-gray-400 hover:text-[#FFD700] transition text-xs">
            Terms
          </a>
          <span className="text-gray-600">•</span>
          <a href="/cookies" className="text-gray-400 hover:text-[#FFD700] transition text-xs">
            Cookies
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs text-center">
          © {new Date().getFullYear()} Your Site. Built with Next.js & Vercel.
        </p>
      </div>

      {/* Desktop Footer */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <a href="/" className="flex items-center space-x-2 mb-3">
                <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
              </a>
              <p className="text-gray-400 text-sm leading-relaxed">
                Automatic website with live search, auto sitemap, and universal design.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#FFD700] font-bold mb-3 text-sm uppercase">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-[#FFD700] transition text-sm">Home</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-[#FFD700] transition text-sm">Blog</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-[#FFD700] transition text-sm">About</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-[#FFD700] transition text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-[#FFD700] font-bold mb-3 text-sm uppercase">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-400 hover:text-[#FFD700] transition text-sm">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-[#FFD700] transition text-sm">Terms of Service</a></li>
                <li><a href="/cookies" className="text-gray-400 hover:text-[#FFD700] transition text-sm">Cookie Policy</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-[#FFD700] font-bold mb-3 text-sm uppercase">Connect</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#FFD700] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-lg">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#FFD700] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-lg">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#FFD700] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-lg">📘</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Your Site. Built with Next.js & Vercel.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-[#FFD700] text-sm transition">Help</a>
              <a href="#" className="text-gray-500 hover:text-[#FFD700] text-sm transition">Support</a>
              <a href="#" className="text-gray-500 hover:text-[#FFD700] text-sm transition">Feedback</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
