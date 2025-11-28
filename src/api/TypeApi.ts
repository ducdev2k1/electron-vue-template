import { AxiosRequestConfig } from 'axios';

export interface FetchApiProps {
  method: string;
  url: string;
  body?: any;
  config?: AxiosRequestConfig;
  isFormData?: boolean; // Thêm tham số này để báo cho apiClient biết
  timeout?: number; // Thêm timeout nếu muốn override
}
