import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import './index.css'
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Certificates } from './components/sections/Certificates';
import { Contact } from './components/sections/Contact';
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return(
  <>
    {!isLoaded && <LoadingScreen onComplete ={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-200 
        ${isLoaded ? "opacity-100" : "opacity-0"}bg-black text-gray-200`}>
        {/* `` le utilizam pentru a insera javascript cod, folosim js ca sa vedem daca LoadingScreen e incarcat
         daca da, afisam cu opacity 100, daca nu lasam invizibil cu opacity zero  */}
         <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
         <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
         <Home />
         <About />
         <Certificates />
         <Contact />

      </div>
  </>
  );
};

export default App;
