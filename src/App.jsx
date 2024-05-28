
import './App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Layout } from './Component/Layout/layout';
import {Home} from './Component/Home/home';
import { About } from './Component/About/about';
import { Contact } from './Component/Contact/contact';


function App() {
 
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
