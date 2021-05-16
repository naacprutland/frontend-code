import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

interface Credentials {
  csrfToken: string;
  username: string;
  password: string;
}

interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
}

const getUser = async (credentials: Credentials): User | null => {

  const approvedUser = {
    id: 1,
    username: process.env.EDITOR_USERNAME,
    password: process.env.EDITOR_PASSWORD
  }

  if (credentials.username !== approvedUser.username) return null

  if (credentials.password !== approvedUser.password) return null

  const usersJson  = await import(`../../../data/editors/editors.json`)
  const loggedInUser = usersJson.users.find(val => val.userName === credentials.username)
  return loggedInUser
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Email" },
        password: {  label: "Password", type: "password" }
      },
     async authorize(credentials: Credentials) {
        const user = await getUser(credentials)
        // find a better type solution
        return user as any
      }
    })
  ]
})