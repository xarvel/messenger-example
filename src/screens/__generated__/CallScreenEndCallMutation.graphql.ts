/**
 * @generated SignedSource<<4c21e890303ed0ad5edfdc9be5545116>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';
export type CallScreenEndCallMutation$variables = {
  chatID: string;
};
export type CallScreenEndCallMutation$data = {
  readonly endCall: boolean;
};
export type CallScreenEndCallMutation = {
  response: CallScreenEndCallMutation$data;
  variables: CallScreenEndCallMutation$variables;
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
      name: 'CallScreenEndCallMutation',
      selections: v1 /*: any*/,
      type: 'Mutation',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'CallScreenEndCallMutation',
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: '9a9f0a51b1c23a626524b0154b6a6d3e',
      id: null,
      metadata: {},
      name: 'CallScreenEndCallMutation',
      operationKind: 'mutation',
      text: 'mutation CallScreenEndCallMutation(\n  $chatID: String!\n) {\n  endCall(chatID: $chatID)\n}\n',
    },
  };
})();

(node as any).hash = 'faaf4ef69d603157e2ef46aaaf321392';

export default node;
