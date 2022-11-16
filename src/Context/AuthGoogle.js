import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { app } from "../services/firebase"
import { createContext, useState } from "react"

const provider = new GoogleAuthProvider()

export const AuthGoogleContext = createContext({})

export const AuthGoogleProvider = ({ children }) => {
  const auth = getAuth(app)
  const [user, setUser] = useState(null)

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
        setUser(user)
        sessionStorage.setItem("@Authfirebase:token", token)
        sessionStorage.setItem("@Authfirebase:user", JSON.stringify(user))
        document.location.href = "/"
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
        const credential = GoogleAuthProvider.credentialFromError(error)
      })
  }

  return (
    <AuthGoogleContext.Provider value={{ signInGoogle, signed: !!user }}>
      {children}
    </AuthGoogleContext.Provider>
  )
}
