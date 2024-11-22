import { UrlConfig } from '~/shared/api/types'

export const makeApiUrl = (endpoint: string) => {
  return  (config: UrlConfig) => `${config.apiUrl}/waInstance${config.idInstance}/${endpoint}/${config.apiTokenInstance}`
}