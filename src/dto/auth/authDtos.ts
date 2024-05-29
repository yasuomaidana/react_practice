export interface LoginResponse{
    access_token: string;
    refresh_token: string;
    expires_in: number;
    username: string;
    roles?: string[];
}

export interface ProfileResponse {
    id: number;
    name: string;
    lastName: string;
    profilePictureUrl?: string;
}

export interface LoginRequestDTO{
    username: string;
    password: string;
    remember: boolean;
}