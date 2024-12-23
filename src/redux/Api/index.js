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


// 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

// ssh -i "boldthreadrsakey.pem" ubuntu@ec2-3-109-230-231.ap-south-1.compute.amazonaws.com
