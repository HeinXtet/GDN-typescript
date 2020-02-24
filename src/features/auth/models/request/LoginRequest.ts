export interface LoginRequest {
  email: string;
  password: string;
  grant_type: string;
  push_notification_token: string;
  device_type: string;
}
