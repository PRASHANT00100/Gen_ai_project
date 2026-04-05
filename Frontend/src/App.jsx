import { router } from './app_routes'
import  { RouterProvider} from "react-router"
import './style.scss'
import { AuthProvider } from './Features/Auth/Auth_context'
const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App ;

