import * as React from 'react';
import { Books } from './Books';

import { ApolloProvider } from '@apollo/client';

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:3000/',
    cache: new InMemoryCache()
});

interface Props {
    name:
    string
}


class App extends React.Component<Props> {
    render() {
        return (
            <ApolloProvider client={client}>
                <Books />
            </ApolloProvider >
        );
    }
}

export default App;