/**
 * @generated SignedSource<<2dfb7f089c73660bb4b5a204f13e2cd6>>
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
export type CallSignalInput = {
  chatID: string;
  payload: string;
  type: CallSignalType;
};
export type useSendCallSignalMutation$variables = {
  input: CallSignalInput;
};
export type useSendCallSignalMutation$data = {
  readonly sendCallSignal: boolean;
};
export type useSendCallSignalMutation = {
  response: useSendCallSignalMutation$data;
  variables: useSendCallSignalMutation$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'input',
      },
    ],
    v1 = [
      {
        alias: null,
        args: [
          {
            kind: 'Variable',
            name: 'input',
            variableName: 'input',
          },
        ],
        kind: 'ScalarField',
        name: 'sendCallSignal',
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'useSendCallSignalMutation',
      selections: v1 /*: any*/,
      type: 'Mutation',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'useSendCallSignalMutation',
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: '7dd4cc79130d54076ecd3fdf3c8910ad',
      id: null,
      metadata: {},
      name: 'useSendCallSignalMutation',
      operationKind: 'mutation',
      text: 'mutation useSendCallSignalMutation(\n  $input: CallSignalInput!\n) {\n  sendCallSignal(input: $input)\n}\n',
    },
  };
})();

(node as any).hash = 'efb1c6fbd454d4475827b2409d268ae5';

export default node;
