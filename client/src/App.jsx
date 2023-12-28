import { Outlet } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Menu from './components/Menu';

const client = new ApolloClient({
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Menu />
        <Outlet />
    </ApolloProvider>
  );
}

export default App;
