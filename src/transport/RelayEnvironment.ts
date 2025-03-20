import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
  Observable,
} from 'relay-runtime';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient, Sink} from 'graphql-ws';
import {SubscribeFunction} from 'relay-runtime/lib/network/RelayNetworkTypes';

const ENDPOINT = '192.168.1.114:3000/graphql';
const HTTP_ENDPOINT = 'http://' + ENDPOINT;
const WEBSOCKET_ENDPOINT = 'ws://' + ENDPOINT;

const fetchFn: FetchFunction = async (request, variables) => {
  const authorization = await AsyncStorage.getItem('authorization');
  const headers: RequestInit['headers'] = {
    Accept:
      'application/graphql-response+json; charset=utf-8, application/json; charset=utf-8',
    'Content-Type': 'application/json',
  };

  if (authorization) {
    headers.Authorization = authorization;
  }

  const resp = await fetch(HTTP_ENDPOINT, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });

  return await resp.json();
};

const wsClient = createClient({
  url: () => WEBSOCKET_ENDPOINT,
  connectionParams: async () => {
    const authorization = await AsyncStorage.getItem('authorization');

    return {
      authorization,
    };
  },
});

const subscribe: SubscribeFunction = (operation, variables) => {
  return Observable.create(sink => {
    return wsClient.subscribe(
      {
        operationName: operation.name,
        query: operation.text as string,
        variables,
      },
      sink as Sink,
    );
  });
};

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn, subscribe),
    store: new Store(new RecordSource()),
  });
}

export const RelayEnvironment = createRelayEnvironment();
