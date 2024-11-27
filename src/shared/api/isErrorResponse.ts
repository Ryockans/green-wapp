import { ServerResponseError, ServerResponseStatus } from '~/shared/api/types'

export const isErrorResponse = <T extends ServerResponseError>(response: unknown): response is T => {
  return (
    typeof response === 'object' &&
    response !== null &&
    response !== undefined &&
    'status' in response &&
    response.status !== ServerResponseStatus.Ok
  );
};
