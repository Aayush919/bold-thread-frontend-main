import { baseApi } from "./";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Auth"], // Invalidate the 'Auth' tag after register
    }),
    verifyAuth: builder.query({
      query: () => ({
        url: "/auth/verify",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Auth"],
      keepUnusedDataFor: 0, // Provide the 'Auth' tag for caching
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Auth"], // Invalidate the 'Auth' tag after login
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
        credentials: "include",
      }),
      invalidatesTags: ["Auth"], // Invalidate the 'Auth' tag after logout
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(authApi.util.resetApiState()); // Reset the entire API cache on logout
        } catch (err) {
          console.error("Logout failed", err); // Handle errors if needed
        }
      },
    }),
  }),
  overrideExisting: false, // Prevent overriding existing endpoints
});

export const {
  useRegisterMutation,
  useVerifyAuthQuery,
  useLoginMutation,
  useLogoutMutation, // Exporting the logout mutation hook
} = authApi;
