import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

import Art from './pages/portfolio/Art';
import Code from './pages/portfolio/Code';
import Music from './pages/portfolio/Music';

import BlogPost from './pages/blog/BlogPost'

var granimInstance = new Granim({
    element: '#dynamic-background',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                [
                  { color: '#000', pos: .2 },
                  { color: '#666', pos: .8 },
                  { color: '#BBB', pos: 1 }
                ], [
                  { color: '#AAA', pos: 0 },
                  { color: '#777', pos: .2 },
                  { color: '#333', pos: .75 }
                ],
                [
                  { color: '#222', pos: .1 },
                  { color: '#777', pos: .5 },
                  { color: '#555', pos: .9 }
                ],
                [
                  { color: '#111', pos: .3 },
                  { color: '#444', pos: .6 },
                  { color: '#888', pos: .95 }
                ],
                [
                  { color: '#000', pos: .4 },
                  { color: '#444', pos: .7 },
                  { color: '#999', pos: .8 }
                ]
            ]
        }
    }
});

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
        path: "/blog/:id",
        element: <BlogPost />,
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
      {
        path: "/admin",
        element: <Admin />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
