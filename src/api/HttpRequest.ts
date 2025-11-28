import { FetchApiProps } from '@/api/TypeApi';
import { timeoutCallApi } from '@/utils/MyVariables';
import axios, { type AxiosInstance, CreateAxiosDefaults } from 'axios';

export function apiClient(isFormData?: boolean, timeout?: number): AxiosInstance {
  return axios.create({
    baseURL: window.location.origin,
    headers: { 'Content-Type': isFormData ? 'multipart/form-data' : 'application/json' },
    timeout: timeout || timeoutCallApi,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  });
}

export function apiPresigned(url: string): AxiosInstance {
  return axios.create({
    baseURL: url,
    headers: { 'content-type': 'application/octet-stream' },
    timeout: 0, // tang thoi gian timeout de dung cho upload workspace
    withCredentials: false,
  } as CreateAxiosDefaults);
}

/**
 * Hàm gọi API chung
 * @param method Phương thức HTTP (GET, POST, PUT, DELETE, v.v.)
 * @param url URL của API
 * @param body Dữ liệu body cho các phương thức POST, PUT, PATCH
 * @param config Cấu hình tùy chỉnh cho Axios (ví dụ: headers, params)
 * @returns Promise chứa kết quả của request
 */
export const fetchApi = ({
  method,
  url,
  body,
  config = {}, // Mặc định là object rỗng để tránh lỗi undefined
  isFormData = false,
  timeout,
}: FetchApiProps) => {
  // Khởi tạo client với đúng cấu hình (FormData hay Json)
  const client = apiClient(isFormData, timeout);

  switch (method.toLowerCase()) {
    case 'get':
      // GET dùng config.params chứ không phải body data
      return client.get(url, { ...config, params: body });

    case 'post':
      return client.post(url, body, config);

    case 'put':
      return client.put(url, body, config);

    case 'patch': // Nên bổ sung thêm patch
      return client.patch(url, body, config);

    case 'delete':
      // QUAN TRỌNG: Axios delete nhận data nằm bên trong config
      return client.delete(url, { ...config, data: body });

    default:
      throw new Error(`Unsupported HTTP method: ${method}`);
  }
};

// Hàm tạo API method
const createApiMethod =
  (method: string) =>
  ({ url, body, config = {}, isFormData = false, timeout = timeoutCallApi }: FetchApiProps) => {
    return fetchApi({ method, url, body, config, isFormData, timeout });
  };

// Tạo các API method
export const apiPost = createApiMethod('post');
export const apiGet = createApiMethod('get');
export const apiPut = createApiMethod('put');
export const apiPatch = createApiMethod('patch');
export const apiDelete = createApiMethod('delete');
