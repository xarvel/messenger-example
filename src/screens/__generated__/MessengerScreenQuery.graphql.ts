/**
 * @generated SignedSource<<5da7dff1ee993162922db59ae3281ab4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */

// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';
import {FragmentRefs} from 'relay-runtime';
export type MessengerScreenQuery$variables = {
  chatID: string;
};
export type MessengerScreenQuery$data = {
  readonly ' $fragmentSpreads': FragmentRefs<
    'MessagesList_messages' | 'MessagesList_meta'
  >;
};
export type MessengerScreenQuery = {
  response: MessengerScreenQuery$data;
  variables: MessengerScreenQuery$variables;
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
      kind: 'Variable',
      name: 'chatID',
      variableName: 'chatID',
    },
    v2 = [v1 /*: any*/],
    v3 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    },
    v4 = [
      v1 /*: any*/,
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
      name: 'MessengerScreenQuery',
      selections: [
        {
          args: v2 /*: any*/,
          kind: 'FragmentSpread',
          name: 'MessagesList_meta',
        },
        {
          args: v2 /*: any*/,
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
      name: 'MessengerScreenQuery',
      selections: [
        {
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
        {
          alias: null,
          args: [
            {
              kind: 'Variable',
              name: 'id',
              variableName: 'chatID',
            },
          ],
          concreteType: 'Chat',
          kind: 'LinkedField',
          name: 'chat',
          plural: false,
          selections: [
            {
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
            v3 /*: any*/,
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: v4 /*: any*/,
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
          args: v4 /*: any*/,
          filters: ['chatID'],
          handle: 'connection',
          key: 'MessagesListQuery_messages',
          kind: 'LinkedHandle',
          name: 'messages',
        },
      ],
    },
    params: {
      cacheID: '309f568cd55ae911aff7320afa0359d9',
      id: null,
      metadata: {},
      name: 'MessengerScreenQuery',
      operationKind: 'query',
      text: 'query MessengerScreenQuery(\n  $chatID: ID!\n) {\n  ...MessagesList_meta_1lk4yB\n  ...MessagesList_messages_1lk4yB\n}\n\nfragment MessageItem_data on Message {\n  id\n  text\n  senderID\n  creationDate\n}\n\nfragment MessagesList_messages_1lk4yB on Query {\n  messages(last: 20, chatID: $chatID) {\n    edges {\n      cursor\n      node {\n        ...MessageItem_data\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment MessagesList_meta_1lk4yB on Query {\n  viewer {\n    currentUserID\n  }\n  chat(id: $chatID) {\n    participants {\n      id\n      name\n    }\n    id\n  }\n}\n',
    },
  };
})();

(node as any).hash = '70c78feaf6d1a55e1d973973be58b118';

export default node;
