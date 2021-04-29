import type { AppProps } from 'next/app'
import { useMemo, useEffect } from 'react';
import { TinaProvider, TinaCMS } from 'tinacms';
import {
  GithubClient,
  TinacmsGithubProvider,
  GithubMediaStore,
} from 'react-tinacms-github'
import App from './App'
import { HtmlFieldPlugin } from 'react-tinacms-editor'
import { useRouter } from 'next/router'

const onLogin = async () => {
  const token = localStorage.getItem('tinacms-github-token') || null;
  const headers = new Headers();

  if (token) {
    headers.append('Authorization', 'Bearer ' + token);
  }

  const resp = await fetch(`/api/preview`, { headers });
  const data = await resp.json();

  if (resp.status === 200) {
    window.location.reload();
  } else {
    throw new Error(data.message);
  }
};

const onLogout = () => {
  return fetch(`/api/reset-preview`).then(() => {
    window.location.reload();
  });
};

const github = new GithubClient({
  proxy: '/api/proxy-github',
  authCallbackRoute: '/api/create-github-access-token',
  clientId: process.env.GITHUB_CLIENT_ID,
  baseRepoFullName: process.env.REPO_FULL_NAME,
});

/**
 *
 * @param {{cms: TinaCMS}} param0
 */
export const EditLink = ({ cms }) => {

  return (
    <>
      <button onClick={() => {
        console.log('click')
        cms.toggle()
      }}>
        {cms.enabled ? 'Exit Edit Mode' : 'Edit Site'}
      </button>
      <style jsx>{`
          background: green;
          border-radius: 20px 0 0 20px;
          bottom: 20%;
          color: white;
          font-size: 20px;
          padding: 8px;
          position: fixed;
          right: 0;
          width: 100px;
          z-index: 99999;
        `}</style>
    </>
  );
};


const AppEditor = ( props: AppProps) => {
  const router = useRouter()
  const tinaConfig = {
    enabled: !!props.pageProps?.preview,
    apis: {
      github,
    },
    toolbar: props.pageProps?.preview,
    sidebar: props.pageProps?.preview,
    media: new GithubMediaStore(github),
  }
  const cms = useMemo(() => new TinaCMS(tinaConfig), []);
  cms.plugins.add(HtmlFieldPlugin)

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (props.pageProps?.preview) {
        // needed to bypass the next route change so the form options load
        window.location.href = url
      }
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <TinaProvider cms={cms}>
      <TinacmsGithubProvider
        onLogin={onLogin}
        onLogout={onLogout}
        error={props.pageProps?.error}
      >
        <EditLink cms={cms} />
        <App {...props} />
      </TinacmsGithubProvider>
    </TinaProvider>
    
  )
}

export default AppEditor