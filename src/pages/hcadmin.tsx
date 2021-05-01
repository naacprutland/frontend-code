import { getConfigData } from '../lib/pageProps'
import { signIn, signOut, useSession } from 'next-auth/client'

const Admin = () => {
  const [ session, loading ] = useSession()

  return <>
    {!session && <>
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>}
  </>
}

export const getStaticProps = async () => {
  const config =  await getConfigData();
  return {
    props: {
      config
    }
  }
}

export default Admin