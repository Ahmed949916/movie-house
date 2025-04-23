 
import { useRouter } from 'next/router';

export default function HelpPage() {
  const router = useRouter();
  const { slug } = router.query;

  const content = {
    '': <HelpHome />,
    'faqs': <FAQs />,
    'contact': <Contact />,
    'privacy': <Privacy />,
  };

  return (
   
      <div>
        {content[slug?.[0] || ''] || <HelpHome />}
      </div>
  
  );
}

function HelpHome() {
  return (
    <div>
      <h1>Help Center</h1>
      <p>Welcome to the Movie House help center. Select a topic:</p>
      <ul>
        <li><a href="/help/faqs">FAQs</a></li>
        <li><a href="/help/contact">Contact Us</a></li>
        <li><a href="/help/privacy">Privacy Policy</a></li>
      </ul>
    </div>
  );
}

function FAQs() {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <h3>How do I search for movies?</h3>
      <p>Use the search bar on the Movies page to find movies by title.</p>
      <h3>How are ratings determined?</h3>
      <p>Ratings are based on user reviews and critical reception.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Email: support@moviehouse.com</p>
      <p>Phone: 1-800-MOVIE</p>
    </div>
  );
}

function Privacy() {
  return (
    <div>
      <h1>Privacy Policy</h1>
      <p>We respect your privacy and do not share your data with third parties.</p>
    </div>
  );
}