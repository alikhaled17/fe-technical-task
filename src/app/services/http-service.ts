/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "../interceptors/interceptors";

class HttpService {
  public postRequest = (url: string, data: unknown): Promise<unknown> => {
    return http.post(url, data, {}).then(
      (respose: any) => {
        return respose;
      },
      (error: Error) => {
        return Promise.reject(error);
      }
    );
  };
}

export default HttpService;
