import { router } from './app_routes'
import  { RouterProvider} from "react-router"
import './style.scss'
import { AuthProvider } from './Features/Auth/Auth_context'
import { InterviewProvider } from './Features/interview/interview_context'
const App = () => {
  return (
    <AuthProvider>
      <InterviewProvider>
        <RouterProvider router={router} />
      </InterviewProvider>
    </AuthProvider>
  )
}

export default App ;

