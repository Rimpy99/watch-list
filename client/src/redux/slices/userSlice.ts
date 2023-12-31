import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type setUserPayloadType = {
    userId: string,
    userName: string,
    token: string ,
}

type initialStateType = {
    userId: string | null,
    userName: string | null,
    token: string | null,
}

const initialState: initialStateType = {
    userId: null,
    userName: null,
    token: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<setUserPayloadType>) => {
            state.userId = action.payload.userId;
            state.userName = action.payload.userName;
            state.token = action.payload.token;
        },
        setDefaultUser: (state) => {
            state.userId = null;
            state.userName = null;
            state.token = null;
        }
    }
});

export const { setUser, setDefaultUser } = userSlice.actions;
export default userSlice.reducer;