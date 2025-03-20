/**
 * @generated SignedSource<<354efe42447c82ad0e757f3ddf9992e1>>
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
export type CallScreenSendCallSignalMutation$variables = {
  input: CallSignalInput;
};
export type CallScreenSendCallSignalMutation$data = {
  readonly sendCallSignal: boolean;
};
export type CallScreenSendCallSignalMutation = {
  response: CallScreenSendCallSignalMutation$data;
  variables: CallScreenSendCallSignalMutation$variables;
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
      name: 'CallScreenSendCallSignalMutation',
      selections: v1 /*: any*/,
      type: 'Mutation',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'CallScreenSendCallSignalMutation',
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: '4bacd0c6b511bbb9b4ed08dab52a5cb2',
      id: null,
      metadata: {},
      name: 'CallScreenSendCallSignalMutation',
      operationKind: 'mutation',
      text: 'mutation CallScreenSendCallSignalMutation(\n  $input: CallSignalInput!\n) {\n  sendCallSignal(input: $input)\n}\n',
    },
  };
})();

(node as any).hash = '101f6e1ac42d33a5a4ea1f79d07291e3';

export default node;
