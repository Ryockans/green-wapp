import { AnyRecord, Nullable } from '~/shared/types';
import { ApiConfig, ServerResponseError, ServerResponseOk, ServerResponseStatus } from '~/shared/api/types';

// export const useAppFetch = async <BodyType extends Nullable<AnyRecord> = null, ResponseType extends AnyRecord = AnyRecord>(config: ApiConfig<BodyType>) => {
//   const preparedBody = config.data ? JSON.stringify(config.data) : null;
//   const response = await fetch(config.url, { method: config.method, body: preparedBody }).then((response) => response.json() as Promise<ResponseType>).catch((error) => error as Error);
// }

const defaultConfig: ApiConfig<Nullable<AnyRecord>> = {
  method: 'GET',
  data: null
}

export const useAppFetch = async <
  ResponseType extends AnyRecord = AnyRecord,
  BodyType extends Nullable<AnyRecord> = Nullable<AnyRecord>
>(url: string, config: ApiConfig<BodyType> = defaultConfig as ApiConfig<BodyType>) => {
  const preparedBody = config.data ? JSON.stringify(config.data) : null;

  return await fetch(url, { method: config.method, body: preparedBody })
  .then(async response => {
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        JSON.stringify({
          message: `Status: ${response.status}`,
          errorData,
        })
      );
    }
    const data = await response.json();
    return ({
      status: ServerResponseStatus.Ok,
      data
    }) as ServerResponseOk<ResponseType>;
  })
  .catch(error => {
    return {
      status: ServerResponseStatus.Error,
      data: error
    } as ServerResponseError;
  });
}


