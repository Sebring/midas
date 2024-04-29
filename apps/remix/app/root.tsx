import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { I18nProvider } from 'react-aria-components';

export const meta: MetaFunction = () => [
  {
    charset: 'utf-8',
    title: 'Midas Remix App',
    viewport: 'width=device-width,initial-scale=1',
  },
];

export default function App() {
  return (
    <I18nProvider locale={"en"}>
      <html lang="en">
        <head>
          <Meta />
          <Links />
        </head>

        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>

      </html>
    </I18nProvider>
  );
}
