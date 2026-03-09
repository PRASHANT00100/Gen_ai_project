import { router } from './app_routes'
import  { RouterProvider} from "react-router"
import './style.scss'
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App ;

