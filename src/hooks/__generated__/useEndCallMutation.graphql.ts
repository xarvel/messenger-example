/**
 * @generated SignedSource<<4b519719ad517a84d5055ec370501b43>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';
export type useEndCallMutation$variables = {
  chatID: string;
};
export type useEndCallMutation$data = {
  readonly endCall: boolean;
};
export type useEndCallMutation = {
  response: useEndCallMutation$data;
  variables: useEndCallMutation$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'chatID',
      },
    ],
    v1 = [
      {
        alias: null,
        args: [
          {
            kind: 'Variable',
            name: 'chatID',
            variableName: 'chatID',
          },
        ],
        kind: 'ScalarField',
        name: 'endCall',
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'useEndCallMutation',
      selections: v1 /*: any*/,
      type: 'Mutation',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'useEndCallMutation',
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: '4fbee182e98a53d69fd88185baf37542',
      id: null,
      metadata: {},
      name: 'useEndCallMutation',
      operationKind: 'mutation',
      text: 'mutation useEndCallMutation(\n  $chatID: String!\n) {\n  endCall(chatID: $chatID)\n}\n',
    },
  };
})();

(node as any).hash = '7c58d82cc3b96decad2e11710892e102';

export default node;
