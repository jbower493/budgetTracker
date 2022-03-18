import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type User = {
    username: string;
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4500/' }),
    endpoints: (builder) => ({
        getUser: builder.query<User, string>({
            query: () => `api/auth/register`
        })
    })
});

export const { useGetUserQuery } = authApi;