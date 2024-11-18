

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-black text-white p-10">
  <aside>
  <h6 className="footer-title">About Us</h6>
    <p className="w-60">
    CareerPath is dedicated to helping individuals discover their true potential and achieve career success through personalized guidance and expert advice.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Quick Links</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Career Assessments</a>
    <a className="link link-hover">Service</a>
    <a className="link link-hover">Career Explorer</a>
    <a className="link link-hover">Contact Us</a>
  </nav>
  <nav>
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">FAQs</a>
    <a className="link link-hover">Testimonials</a>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Terms of Service</a>
  </nav>
  <nav>
    <h6 className="footer-title">Contact Us</h6>
    <a className="link link-hover">Email: info@careerpath.com</a>
    <a className="link link-hover">Phone: +1 234 567 890</a>
    <a className="link link-hover">Address: Dhaka</a>
    <a className="link link-hover">Social Media Icons (links to profiles):</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;