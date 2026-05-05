import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { useTheme } from "./context/ThemeContext.jsx";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { Footer } from "./components/Footer";

const AppContent = () => {
  const { darkMode } = useTheme();

  return (
    <BrowserRouter>
      <div className={`relative z-0 transition-colors duration-700 ${darkMode ? 'bg-primary' : 'bg-gradient-to-b from-blue-50 to-white'
        }`}>
        <div className={`${darkMode ? 'bg-hero-pattern' : ''} bg-cover bg-no-repeat bg-center`}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;