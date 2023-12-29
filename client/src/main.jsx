import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

import Art from './pages/portfolio/Art';
import Code from './pages/portfolio/Code';
import Music from './pages/portfolio/Music';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Home />,
    children: [
      {
        index: true, 
        element: <Home />
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/portfolio/music",
        element: <Music />,
      },
      {
        path: "/portfolio/art",
        element: <Art />,
      },
      {
        path: "/portfolio/code",
        element: <Code />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
