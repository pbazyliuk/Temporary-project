import { User } from 'app/core/models/user';

export interface UiState {
    user: User;
    authenticated: boolean;
    currentChat: string;
};

export const INITIAL_UI_STATE: UiState = {
    user: undefined,
    authenticated: undefined,
    currentChat: undefined
};
