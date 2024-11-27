import "./App.css";
import { FronteggProvider } from "@frontegg/react";
import { Home } from "./components/Home";
import { createBrowserHistory } from "history";

const contextOptions = {
  baseUrl: 'https://app-7opfi0wtc3th.frontegg.com',
};

const history = createBrowserHistory();

export const App = () => {

  const headerImage = 'https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg';

  return (
    <FronteggProvider history={history} contextOptions={contextOptions} headerImage={headerImage}>
    <Home />
  </FronteggProvider>
  );
};