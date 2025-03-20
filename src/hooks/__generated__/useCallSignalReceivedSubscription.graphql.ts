/**
 * @generated SignedSource<<76ab3f3ed7a55b77dc0376aafe36e73e>>
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
export type useCallSignalReceivedSubscription$variables = {
  chatID: string;
};
export type useCallSignalReceivedSubscription$data = {
  readonly callSignalReceived: {
    readonly chatID: string;
    readonly payload: string;
    readonly type: CallSignalType;
  };
};
export type useCallSignalReceivedSubscription = {
  response: useCallSignalReceivedSubscription$data;
  variables: useCallSignalReceivedSubscription$variables;
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
      name: 'useCallSignalReceivedSubscription',
      selections: v1 /*: any*/,
      type: 'Subscription',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'useCallSignalReceivedSubscription',
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: '028c449ea05d57b29db54920f35470d5',
      id: null,
      metadata: {},
      name: 'useCallSignalReceivedSubscription',
      operationKind: 'subscription',
      text: 'subscription useCallSignalReceivedSubscription(\n  $chatID: String!\n) {\n  callSignalReceived(chatID: $chatID) {\n    type\n    payload\n    chatID\n  }\n}\n',
    },
  };
})();

(node as any).hash = '2a82335a54e70a1e64f2167598094528';

export default node;
