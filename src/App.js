import { useState, useEffect } from 'react';
import ParticlesBackground from './components/BgParticles';
import './App.css';

import ClickSpark from './components/ClickSpark';
// Pages And Components
import Navbar from './components/navbar/navbar'
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Team from './pages/Team/Team';
import Sponsors from './pages/Sponsors/Sponsors';
import Contacts from './pages/Contacts/Contacts';
import Footer from './components/footer/Footer';

function App() {
  const [curPage, setCurPage] = useState(() => {
    return window.location.hash.replace('#', '') || 'home';
  });

  useEffect(() => {
    const pageFromHash = window.location.hash.replace('#', '');
    if (pageFromHash) setCurPage(pageFromHash);
  }, []);

  useEffect(() => {
    window.location.hash = curPage;
    document.title = `Entropy 2025 | ${curPage.charAt(0).toUpperCase() + curPage.slice(1)}`;
  }, [curPage]);

  const loadPage = () => {
    switch (curPage) {
      case 'home':
        return <Home />;
      case 'events':
        return <Events />
      case 'team':
        return <Team />
      case 'sponsors':
        return <Sponsors />
      case 'contacts':
        return <Contacts />
      default:
        return <Home />
    }
  }


  return (
    <>

      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >

        <div className='mainWrapper'>
          <Navbar activePage={curPage} switchPage={(page) => setCurPage(page)} />
          {loadPage()}
          <Footer />

        </div>
      </ClickSpark>
    </>
  );
}

export default App;