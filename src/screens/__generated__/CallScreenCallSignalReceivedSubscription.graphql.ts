/**
 * @generated SignedSource<<4af092ec57bf30c93043dcbcc17fdad9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';
export type CallSignalType =
  | 'ANSWER'
  | 'ICE_CANDIDATE'
  | 'OFFER'
  | '%future added value';
export type CallScreenCallSignalReceivedSubscription$variables = {
  chatID: string;
};
export type CallScreenCallSignalReceivedSubscription$data = {
  readonly callSignalReceived: {
    readonly chatID: string;
    readonly id: string;
    readonly payload: string;
    readonly type: CallSignalType;
  };
};
export type CallScreenCallSignalReceivedSubscription = {
  response: CallScreenCallSignalReceivedSubscription$data;
  variables: CallScreenCallSignalReceivedSubscription$variables;
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
        concreteType: 'CallSignal',
        kind: 'LinkedField',
        name: 'callSignalReceived',
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'id',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'type',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'payload',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'chatID',
            storageKey: null,
          },
        ],
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'CallScreenCallSignalReceivedSubscription',
      selections: v1 /*: any*/,
      type: 'Subscription',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'CallScreenCallSignalReceivedSubscription',
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: '877223249dfe712f85677f51be8653b1',
      id: null,
      metadata: {},
      name: 'CallScreenCallSignalReceivedSubscription',
      operationKind: 'subscription',
      text: 'subscription CallScreenCallSignalReceivedSubscription(\n  $chatID: String!\n) {\n  callSignalReceived(chatID: $chatID) {\n    id\n    type\n    payload\n    chatID\n  }\n}\n',
    },
  };
})();

(node as any).hash = '0a2c096621fab9035aefe01732c40017';

export default node;
