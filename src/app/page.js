import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const LandingPage = () => {
  const topics = [
    { name: 'DEPRESSION', link: '/depression' }, 
    { name: 'ANXIETY', link: '/anxiety' },
    { name: 'BIPOLAR', link: '/bipolar' },
    { name: 'LONELINESS', link: '/loneliness' },
    { name: 'SOLITUDE', link: '/solitude' },
    { name: 'SAFE SPACE', link: '/safe-space' }
  ];

  const partners = [
    { name: 'Ikizere', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'RBC', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Ministry of Health', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat pt-14" style={{ backgroundImage: `url('/vecteezy_blue-vector-grunge-background_107486.jpg')` }}>
      <header className="w-9/12 bg-white p-4 flex justify-between items-center mx-auto">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-5 h-5" />
        </div>
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-sm font-semibold">JOIN COMMUNITY</a>
          <a href="#" className="text-sm font-semibold">LOGIN</a>
          <a href="#" className="text-sm font-semibold">SELF CHECK</a>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-8 justify-items-center items-center">
          {topics.map((topic, index) => (
            <a
              key={index}
              href={topic.link} 
              className="bg-white w-72 h-96 flex items-center justify-center text-center border-[15px] border-black"
            >
              <span className="text-2xl font-bold">{topic.name}</span>
            </a>
          ))}
        </div>
      </main>

      <footer>
        <div className="bg-black text-white py-12 min-h-[400px]">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-2xl font-bold mb-12 text-purple-400">Partners</h2>
            <div className="grid grid-cols-4 gap-8">
              <div className="text-center">
                <img src="/smile.png" alt="Placeholder" className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-white">Solid Minds</h3>
                <p className="text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              {partners.map((partner, index) => (
                <div key={index} className="text-center">
                  <img src="/smile.png" alt="Smile" className="w-8 h-8 mx-auto mb-4" />
                  <h3 className="font-bold mb-2 text-white">{partner.name}</h3>
                  <p className="text-sm text-white">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#4AA9AD] py-8"> 
          <div className="container mx-auto px-4 flex justify-between items-center">
    
            <div className="text-center">
              <img src="/smile2.png" alt="Smile" className="w-7 h-7 mx-auto" />
            </div>

            <div className="flex space-x-6">
              <a href="https://facebook.com" className="w-6 h-6 rounded-full flex items-center justify-center text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" className="w-6 h-6 rounded-full flex items-center justify-center text-white">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" className="w-6 h-6 rounded-full flex items-center justify-center text-white">
                <FaInstagram size={20} /> 
              </a>
            </div>
          </div>

          <div className="text-center text-white text-xs mt-10">
            © Copyright Year
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
