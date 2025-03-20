/**
 * @generated SignedSource<<19994583820d7d9d483aa87531dd209e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';
import {FragmentRefs} from 'relay-runtime';
export type MessengerPageQuery$variables = {
  chatID: string;
};
export type MessengerPageQuery$data = {
  readonly chat: {
    readonly participants: ReadonlyArray<{
      readonly id: string;
      readonly name: string;
    }>;
  };
  readonly viewer: {
    readonly currentUserID: string;
  };
  readonly ' $fragmentSpreads': FragmentRefs<
    'MessagesList_messages' | 'MessagesList_meta'
  >;
};
export type MessengerPageQuery = {
  response: MessengerPageQuery$data;
  variables: MessengerPageQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'chatID',
      },
    ],
    v1 = {
      alias: null,
      args: null,
      concreteType: 'Viewer',
      kind: 'LinkedField',
      name: 'viewer',
      plural: false,
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'currentUserID',
          storageKey: null,
        },
      ],
      storageKey: null,
    },
    v2 = [
      {
        kind: 'Variable',
        name: 'id',
        variableName: 'chatID',
      },
    ],
    v3 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    },
    v4 = {
      alias: null,
      args: null,
      concreteType: 'User',
      kind: 'LinkedField',
      name: 'participants',
      plural: true,
      selections: [
        v3 /*: any*/,
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'name',
          storageKey: null,
        },
      ],
      storageKey: null,
    },
    v5 = {
      kind: 'Variable',
      name: 'chatID',
      variableName: 'chatID',
    },
    v6 = [v5 /*: any*/],
    v7 = [
      v5 /*: any*/,
      {
        kind: 'Literal',
        name: 'last',
        value: 20,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'MessengerPageQuery',
      selections: [
        v1 /*: any*/,
        {
          alias: null,
          args: v2 /*: any*/,
          concreteType: 'Chat',
          kind: 'LinkedField',
          name: 'chat',
          plural: false,
          selections: [v4 /*: any*/],
          storageKey: null,
        },
        {
          args: v6 /*: any*/,
          kind: 'FragmentSpread',
          name: 'MessagesList_meta',
        },
        {
          args: v6 /*: any*/,
          kind: 'FragmentSpread',
          name: 'MessagesList_messages',
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'MessengerPageQuery',
      selections: [
        v1 /*: any*/,
        {
          alias: null,
          args: v2 /*: any*/,
          concreteType: 'Chat',
          kind: 'LinkedField',
          name: 'chat',
          plural: false,
          selections: [v4 /*: any*/, v3 /*: any*/],
          storageKey: null,
        },
        {
          alias: null,
          args: v7 /*: any*/,
          concreteType: 'MessageConnection',
          kind: 'LinkedField',
          name: 'messages',
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'MessageEdge',
              kind: 'LinkedField',
              name: 'edges',
              plural: true,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'cursor',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'Message',
                  kind: 'LinkedField',
                  name: 'node',
                  plural: false,
                  selections: [
                    v3 /*: any*/,
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'text',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'senderID',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'creationDate',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: '__typename',
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: 'PageInfo',
              kind: 'LinkedField',
              name: 'pageInfo',
              plural: false,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'endCursor',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'hasNextPage',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'hasPreviousPage',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'startCursor',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: v7 /*: any*/,
          filters: ['chatID'],
          handle: 'connection',
          key: 'MessagesListQuery_messages',
          kind: 'LinkedHandle',
          name: 'messages',
        },
      ],
    },
    params: {
      cacheID: '4bbbf427593e3696b05372e58e43bacc',
      id: null,
      metadata: {},
      name: 'MessengerPageQuery',
      operationKind: 'query',
      text: 'query MessengerPageQuery(\n  $chatID: ID!\n) {\n  viewer {\n    currentUserID\n  }\n  chat(id: $chatID) {\n    participants {\n      id\n      name\n    }\n    id\n  }\n  ...MessagesList_meta_1lk4yB\n  ...MessagesList_messages_1lk4yB\n}\n\nfragment MessageItem_data on Message {\n  id\n  text\n  senderID\n  creationDate\n}\n\nfragment MessagesList_messages_1lk4yB on Query {\n  messages(last: 20, chatID: $chatID) {\n    edges {\n      cursor\n      node {\n        ...MessageItem_data\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment MessagesList_meta_1lk4yB on Query {\n  viewer {\n    currentUserID\n  }\n  chat(id: $chatID) {\n    participants {\n      id\n      name\n    }\n    id\n  }\n}\n',
    },
  };
})();

(node as any).hash = 'f7d2c7328fc4fc331c28366de4bc9455';

export default node;
