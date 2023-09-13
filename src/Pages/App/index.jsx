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
import CheckoutDetail from '../../Components/CheckoutDetail';

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-orders/last', element: <MyOrder />},
    {path: '/my-orders/:id', element: <MyOrder />},
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
          <CheckoutDetail />
        </BrowserRouter>
      </ShopProvider>
    </>
  )
}

export default App
