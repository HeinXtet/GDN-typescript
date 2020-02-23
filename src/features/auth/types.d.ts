declare module 'MyModels' {
  export type Todo = {
    id: string;
    title: string;
  };
}

declare module 'LoginRequest' {
  export type LoginRequest = {
    email: string;
    password: string;
    grant_type: string;
    push_notification_token: string;
    device_type: string;
  };
}

declare module 'MemberData' {
  export type MemberData = {
    expires: string;
    issued: string;
    access_token: string;
    error: number;
    error_description: string;
    token_type: string;
  };
}
