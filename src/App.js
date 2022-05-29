import SignIn from './components/signIn'
import Adduser from './components/adduser'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Error404 from './Error/error'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/*" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
