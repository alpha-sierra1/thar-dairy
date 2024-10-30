const navigation = {
  companyInformation: [
    { name: "Our Story", href: "/know-us" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Return Policy", href: "/return-policy" },
  ],
  quickLinks: [
    { name: "Ghee Products", href: "/products" },
    { name: "Certifications", href: "/certifications" },
    { name: "Contact", href: "/contact-us" },
  ],
  contactInfo: [
    { name: "Phone", value: "+91 9928945814" },
    { name: "Email", value: "thardairy@gmail.com" },
    {
      name: "Address",
      value: "Goyalon Ki Dhani, Kali Beri Soorsagar, Jodhpur (RJ) 342024",
    },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.49v-9.294H9.69V11.41h3.127V8.906c0-3.1 1.893-4.79 4.658-4.79 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.295h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/_thar__ghee?igsh=MWFzZWdmanR6Z2picA==",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 0C8.741 0 8.332.01 7.052.072 5.772.134 4.767.403 3.95.775a6.5 6.5 0 00-2.356 1.543A6.5 6.5 0 00.775 4.95C.403 5.767.134 6.772.072 8.052.01 8.332 0 8.741 0 12s.01 3.668.072 4.948c.062 1.28.331 2.285.703 3.102a6.5 6.5 0 001.543 2.356 6.5 6.5 0 002.356 1.543c.817.372 1.822.641 3.102.703 1.28.062 1.689.072 4.948.072s3.668-.01 4.948-.072c1.28-.062 2.285-.331 3.102-.703a6.5 6.5 0 002.356-1.543 6.5 6.5 0 001.543-2.356c.372-.817.641-1.822.703-3.102.062-1.28.072-1.689.072-4.948s-.01-3.668-.072-4.948c-.062-1.28-.331-2.285-.703-3.102a6.5 6.5 0 00-1.543-2.356A6.5 6.5 0 0019.05.775c-.817-.372-1.822-.641-3.102-.703C15.668.01 15.259 0 12 0zm0 5.838a6.162 6.162 0 110 12.324 6.162 6.162 0 010-12.324zm7.29-2.636a1.44 1.44 0 11-.001 2.879 1.44 1.44 0 010-2.879zM12 7.676a4.324 4.324 0 100 8.648 4.324 4.324 0 000-8.648z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M23.498 6.186a3.001 3.001 0 00-2.121-2.121C19.74 3.5 12 3.5 12 3.5s-7.741 0-9.377.565a3.001 3.001 0 00-2.121 2.121C.5 7.822.5 12 .5 12s0 4.178.565 5.814a3.001 3.001 0 002.121 2.121C4.259 20.5 12 20.5 12 20.5s7.741 0 9.377-.565a3.001 3.001 0 002.121-2.121C23.5 16.178 23.5 12 23.5 12s0-4.178-.565-5.814zM9.754 15.567V8.433L15.237 12 9.754 15.567z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information Section */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold text-gray-900 tracking-wider uppercase">
              Company Information
            </h3>
            <ul className="mt-4 space-y-4">
              {navigation.companyInformation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Quick Links Section */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold text-gray-900 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              {navigation.quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info Section */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold text-gray-900 tracking-wider uppercase">
              Contact Info
            </h3>
            <ul className="mt-4 space-y-4">
              {navigation.contactInfo.map((item) => (
                <li key={item.name} className="text-base text-gray-500">
                  <span className="font-medium text-gray-900">
                    {item.name}:{" "}
                  </span>
                  {item.value}
                </li>
              ))}
            </ul>
          </div>
          {/* Social Media Section */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold text-gray-900 tracking-wider uppercase">
              Follow Us
            </h3>
            <ul className="mt-4 flex space-x-6 justify-center">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-gray-900"
                    aria-label={item.name}
                  >
                    <item.icon className="h-6 w-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Thar Dairy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
