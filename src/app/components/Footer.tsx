export default function Footer() {
  return (
    <footer className="bg-text-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-4 gap-10">
        
        <div>
          <h2 className="text-2xl font-bold">
            Radhika Jamuna Foundation
          </h2>

          <p className="mt-5 text-gray-300 leading-7">
            Empowering children through free and accessible education.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

          <ul className="space-y-3 text-gray-300">
            <li>About</li>
            <li>Programs</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">Programs</h3>

          <ul className="space-y-3 text-gray-300">
            <li>Free Classes</li>
            <li>Books Distribution</li>
            <li>Scholarships</li>
            <li>Career Guidance</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">Contact</h3>

          <ul className="space-y-3 text-gray-300">
            <li>support@foundation.org</li>
            <li>+91 9876543210</li>
            <li>India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-14 pt-8 text-center text-gray-400">
        © 2026 Radhika Jamuna Foundation. All rights reserved.
      </div>
    </footer>
  );
}