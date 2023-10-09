import React, { useState } from 'react'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Results } from './components/Results';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? 'dark' : ''}>
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>

          <Routes>
            <Route exact path = '/' element={<search />}/>
            <Route exact path = '/search' element={<Results/>}/>
            <Route exact path = '/imagesearch' element={<Results/>}/>
            {/* <Route exact path='/news' element={<Results/>}/>
            <Route exact path='/videos' element={<Results/>}/> */}
            </Routes>

          <Footer />
        </div>
    </div>
  );
}

export default App;