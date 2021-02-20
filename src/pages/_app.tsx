import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import { useMemo } from 'react';
import { TinaProvider, TinaCMS } from 'tinacms';
import { GithubClient, TinacmsGithubProvider } from 'react-tinacms-github';

const onLogin = async () => {
  const token = localStorage.getItem('tinacms-github-token') || null;
  const headers = new Headers();

  if (token) {
    headers.append('Authorization', 'Bearer ' + token);
  }

  const resp = await fetch(`/api/preview`, { headers });
  const data = await resp.json();

  if (resp.status === 200) {
    console.log(resp, data);
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

const MyApp = ({ Component, pageProps }: AppProps) => {
  const cms = useMemo(() => {
    return new TinaCMS({
      enabled: pageProps?.preview,
      apis: {
        github,
      },
      toolbar: pageProps?.preview,
      sidebar: pageProps?.preview,
    });
  }, []);

  return (
    <TinaProvider cms={cms}>
      <TinacmsGithubProvider
        onLogin={onLogin}
        onLogout={onLogout}
        error={pageProps?.error}
      >
        <EditLink cms={cms} />
        <ChakraProvider resetCSS theme={theme}>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </ChakraProvider>
      </TinacmsGithubProvider>
    </TinaProvider>
    
  )
}

export default MyApp
