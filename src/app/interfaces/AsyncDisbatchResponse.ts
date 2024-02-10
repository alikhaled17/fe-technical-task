export interface AsyncDispatchResponse {
  type: string;
  payload: Payload;
  meta: Meta;
}

export interface Meta {
  arg: FormData;
  requestId: string;
  requestStatus: string;
}

export interface Payload {
  status: Status;
}

export interface Status {
  success: boolean;
  errors: string[];
}
