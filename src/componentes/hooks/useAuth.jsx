import  { useContext } from 'react'
import AuthContext from '../context/Auth_Provider'

const useAuth = () => {

  return useContext(AuthContext)
}
export default useAuth;