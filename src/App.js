import SignIn from './components/signIn'
import SignUp from './components/signUp'
import AdminSignIn from './components/AdminSignin'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Error404 from './Error/error'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/admin" element={<AdminSignIn />} />
        
        <Route path="/*" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
