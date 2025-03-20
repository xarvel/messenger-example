/**
 * @generated SignedSource<<0813892b6755586924134ee5751e9cc9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';
export type useCallEndedSubscription$variables = {
  chatID: string;
};
export type useCallEndedSubscription$data = {
  readonly callEnded: boolean;
};
export type useCallEndedSubscription = {
  response: useCallEndedSubscription$data;
  variables: useCallEndedSubscription$variables;
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
        name: 'callEnded',
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'useCallEndedSubscription',
      selections: v1 /*: any*/,
      type: 'Subscription',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'useCallEndedSubscription',
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: 'af042e8f31c614232c2b187eaa76b024',
      id: null,
      metadata: {},
      name: 'useCallEndedSubscription',
      operationKind: 'subscription',
      text: 'subscription useCallEndedSubscription(\n  $chatID: String!\n) {\n  callEnded(chatID: $chatID)\n}\n',
    },
  };
})();

(node as any).hash = 'd19bec3babfc5fb6103eec6fb7896f6f';

export default node;
