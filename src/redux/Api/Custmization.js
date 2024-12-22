import { baseApi } from "./";

export const customizedApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getImage: builder.query({
      query: ({ type }) => `/customized/getImage?types=${type}`,
    }),
    getGraphic: builder.query({
      query: () => "/customized/getGraphic",
    }),
  }),
  overrideExisting: false,
});

export const { useGetImageQuery, useGetGraphicQuery } = customizedApi;
