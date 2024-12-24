import { baseApi } from "./"; // Assuming you are using a base API setup

export const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: ({ userId, productId }) => ({
        url: "/cart/add",
        method: "POST",
        body: { userId, productId },
        credentials: "include",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useAddToCartMutation } = cartApi;
