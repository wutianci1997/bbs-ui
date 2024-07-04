/*
 * 文件名: request.ts
 * 作者: 破浪前行·吴
 * 创建日期: 2024/5/20
 * 描述: fetch封装
 */
// https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API
export class JsonRequest {
  public baseUrl: string = ""; // 根路径

  public httpHeaders: Headers = new Headers(); // 请求头

  constructor(baseUrl: string = "", headers: { [key: string]: string } = {}) {
    this.baseUrl = baseUrl;
    this.httpHeaders.set("Content-Type", "application/json");
    for (const key in headers) {
      this.httpHeaders.set(key, headers[key]);
    }
  }

  private request<T = any>(
    url: string = "",
    method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
    data: any = undefined
  ) {
    return new Promise<T>((resolve, reject) => {
      const httpRequest = new Request(this.baseUrl + url, {
        method,
        headers: this.httpHeaders,
        body: data === undefined || data === null ? data : JSON.stringify(data),
      });
      fetch(httpRequest)
        .then((response) => {
          return response.json();
        })
        .then((value) => {
          resolve(value);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  // METHOD "GET"
  public get<T = any>(url: string = "") {
    return this.request<T>(url);
  }

  // METHOD "POST"
  public post<T = any>(
    url: string = "",
    data: undefined | null | { [key: string]: any } = undefined
  ) {
    return this.request<T>(url, "POST", data);
  }

  // METHOD "PUT"
  public put<T = any>(
    url: string = "",
    data: undefined | null | { [key: string]: any } = undefined
  ) {
    return this.request<T>(url, "PUT", data);
  }

  // METHOD "DELETE"
  public del<T = any>(url: string = "") {
    return this.request<T>(url, "DELETE");
  }
}
