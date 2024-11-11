import "./App.css";
import { FronteggProvider } from "@frontegg/react";
import { Home } from "./components/Home";

const contextOptions = {
  baseUrl: "https://app-7opfi0wtc3th.frontegg.com",
  clientId: "61e663d8-b06c-4f79-bff6-afa00be1a449",
  appId: "e5dfae6f-ba4a-437a-b71b-f931e1fff78c",
};

const authOptions = {
  // keepSessionAlive: true // Uncomment this in order to maintain the session alive
};

export const App = () => {
  return (
    <FronteggProvider
      contextOptions={contextOptions}
      hostedLoginBox={true}
      authOptions={authOptions}
    >
      <Home />
    </FronteggProvider>
  );
};
