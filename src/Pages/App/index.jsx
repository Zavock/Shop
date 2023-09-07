import { useRoutes, BrowserRouter } from 'react-router-dom';
import './App.css'
import {ShopProvider} from '../../Context';
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar';

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/signin', element: <SignIn />},
    {path: '/*', element: <NotFound />},
  ])

  return routes
}

function App() {

  return (
    <>
      <ShopProvider>
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
        </BrowserRouter>
      </ShopProvider>
    </>
  )
}

export default App