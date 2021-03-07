import type { AppProps } from 'next/app'
import { useMemo } from 'react';
import { TinaProvider, TinaCMS } from 'tinacms';
import {
  GithubClient,
  TinacmsGithubProvider,
  GithubMediaStore,
} from 'react-tinacms-github'
import App from './App'

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
    <button onClick={() => cms.toggle()}>
      {cms.enabled ? 'Exit Edit Mode' : 'Edit This Site'}
    </button>
  );
};

const AppEditor = ( props: AppProps) => {
  const cms = useMemo(() => {
    return new TinaCMS({
      enabled: !!props.pageProps?.preview,
      apis: {
        github,
      },
      toolbar: props.pageProps?.preview,
      sidebar: props.pageProps?.preview,
      media: new GithubMediaStore(github)
    });
  }, []);

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