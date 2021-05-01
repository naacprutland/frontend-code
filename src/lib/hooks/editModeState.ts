import { useSession } from 'next-auth/client'

function useEditModeState() {
  const [ session ] = useSession()

  return !!session;
}

export default useEditModeState