export type CreateUserRequest = {
    id: string;
    user_name: string;
    password: string;
    first_name: string;
    last_name: string;
    email: string;
    roles: Array<string>;
    country_id: string;
    phone_number: string;
  };
