
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import LayoutOne from './Layout/LayoutOne'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { useEffect, useRef } from 'react'

function App() {
  const shanto = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Route>
    )
  )


   // Define the CustomCursor component
   const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorLineRef = useRef(null);

    useEffect(() => {
      const handleMouseMove = (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        if (cursorRef.current && cursorLineRef.current) {
          cursorRef.current.style.left = `${posX}px`;
          cursorRef.current.style.top = `${posY}px`;

          cursorLineRef.current.style.left = `${posX}px`;
          cursorLineRef.current.style.top = `${posY}px`;
        }
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    return (
      <>
        {/* JSX for cursor effect */}
        <div
          ref={cursorRef}
          className="cursur w-[10px] h-[10px] bg-white fixed z-50"
        ></div>
        <div ref={cursorLineRef} className="cursurLine fixed z-40"></div>
      </>
    );
  };
  

  return (
    <>

<CustomCursor />
    
    <RouterProvider router={shanto}/>
      
    </>
  )
}

export default App
