import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { urls } from "../../config/urls";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${urls}`,
  }),
  tagTypes: ["Auth"],
  endpoints: () => ({}),
});

export const { resetApiState } = baseApi;
