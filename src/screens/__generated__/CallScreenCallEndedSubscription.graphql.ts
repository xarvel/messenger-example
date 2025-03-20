/**
 * @generated SignedSource<<5ed0c3bde39f7a68fbb4b263d0b85584>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';
export type CallScreenCallEndedSubscription$variables = {
  chatID: string;
};
export type CallScreenCallEndedSubscription$data = {
  readonly callEnded: boolean;
};
export type CallScreenCallEndedSubscription = {
  response: CallScreenCallEndedSubscription$data;
  variables: CallScreenCallEndedSubscription$variables;
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
      name: 'CallScreenCallEndedSubscription',
      selections: v1 /*: any*/,
      type: 'Subscription',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'CallScreenCallEndedSubscription',
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: 'f672fb931f5d34509c63b6672b4a9d66',
      id: null,
      metadata: {},
      name: 'CallScreenCallEndedSubscription',
      operationKind: 'subscription',
      text: 'subscription CallScreenCallEndedSubscription(\n  $chatID: String!\n) {\n  callEnded(chatID: $chatID)\n}\n',
    },
  };
})();

(node as any).hash = '88800939550a1e3ab4c034d85e4c62b1';

export default node;
