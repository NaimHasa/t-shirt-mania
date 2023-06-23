import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import Orders from './components/Orders/Orders';


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [

        {
          path: "/home",
          element: <Home></Home>,
          loader: () => fetch('tShirtData.json')

        },

        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/orders",
          element: <Orders></Orders>
        }
      ]
    }

  ]);

  return (
    <div>

      <RouterProvider router={router}></RouterProvider>
    </div >

  );
};

export default App;