import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'

import SoloProduct from './pages/SoloProduct'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

import AdminPage from './pages/AdminPage'
import AddProductPage from './pages/AddProductPage'
import {PrivateRoute, AdminPrivateRoute} from './components/PrivateRoute'
import EditProductPage from './pages/EditProductPage'
import CategoryPage from './pages/CategoryPage'
import SearchByCategory from './components/SearchByCategory'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />  
          <Route path='admin' element={<AdminPage />} />
          <Route path='add' element={<AddProductPage />} />
          <Route path='product/:slug' element={<SoloProduct />} />
          <Route path='category/' element={<CategoryPage />} />
          <Route path='category/:category' element={<SearchByCategory />} />

          <Route path='/accounts'>
            <Route path='login' element={<LoginPage />}/>
            <Route path='register' element={<RegisterPage />} />  
            <Route element={<PrivateRoute />}>
            </Route>
          </Route>

          <Route path='admin' element={<AdminPrivateRoute />} >
            <Route index element={<AdminPage />} />
            <Route path='add' element={<AddProductPage />} />
            <Route path='edit/:id' element={<EditProductPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
