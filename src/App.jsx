
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Home from './Pages/Home';
import Login from './Pages/Login';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';


function App() {
  
  const router = createBrowserRouter([
    {
    path: '/',
    element: <ProtectedRoute/>,
      children:[
        {
          path: '/',
          element:<Home/>
        }
      ]

  },
    {
    path: '/login',
    element: <Login/>,

  }
])

  return (
  
     <RouterProvider router={router}/>
    
  )
}

export default App
