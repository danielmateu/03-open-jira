import { FC } from 'react';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';

import createEmotionCache from '../src/createEmotionCache';
import { UIProvider } from '../context/ui';
import { lightTheme, darkTheme } from '../themes';

import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { EntriesProvider } from '../context/entries';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export default function MyApp<Props>(props: {
  Component: FC;
  emotionCache?: EmotionCache | undefined;
  pageProps: JSX.Element;
}) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>

      <SnackbarProvider maxSnack = {3}>
        <EntriesProvider>
          <UIProvider>
            <ThemeProvider theme={darkTheme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </UIProvider>
        </EntriesProvider>
      </SnackbarProvider>



    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired
};
