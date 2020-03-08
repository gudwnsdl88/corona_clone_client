/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: recentStatus
// ====================================================

export interface recentStatus_RecentStatus_result {
  __typename: "Status";
  confirmation: number;
  release: number;
  dead: number;
  inspection: number;
  date: string;
}

export interface recentStatus_RecentStatus {
  __typename: "RecentStatusResponse";
  ok: boolean;
  error: string | null;
  result: (recentStatus_RecentStatus_result | null)[] | null;
}

export interface recentStatus {
  RecentStatus: recentStatus_RecentStatus;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
