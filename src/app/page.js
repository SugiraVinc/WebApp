import React from 'react';

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
    'SafeHaven', 'Solace', 'MHI', 'Nature of Health'
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
              href={topic.link} // Link to the specified route
              className="bg-white w-72 h-96 flex items-center justify-center text-center border-[15px] border-black"
            >
              <span className="text-2xl font-bold">{topic.name}</span>
            </a>
          ))}
        </div>
      </main>

      <footer>
        <div className="bg-black text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-4 gap-4">
              {partners.map((partner, index) => (
                <div key={index} className="text-center">
                  <div className="w-8 h-8 bg-gray-300 mx-auto mb-2"></div>
                  <h3 className="font-semibold mb-2">{partner}</h3>
                  <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-teal-500 py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="w-8 h-8 bg-gray-300"></div>
            <div className="flex space-x-4">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
