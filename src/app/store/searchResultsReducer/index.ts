/* eslint-disable @typescript-eslint/no-explicit-any */
import Person from "@/app/interfaces/Person";
import HttpService from "@/app/services/http-service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  results: Person[];
  isLoading: boolean;
  userAction: boolean;
  hasError: boolean;
}

const initialState: CounterState = {
  results: [],
  isLoading: false,
  userAction: false,
  hasError: false,
};

export const SearchRequest: any = createAsyncThunk(
  "screen/individual",
  async (body, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { postRequest } = new HttpService();
      const res: any = await postRequest(`screen/individual`, body);
      const { data } = res;
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const searchResultsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    userTakesAction: (state) => {
      state.userAction = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SearchRequest.pending, (state) => {
        state.results = [];
        state.hasError = false;
        state.isLoading = true;
      })
      .addCase(SearchRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.results = action.payload.screen_result;
      })
      .addCase(SearchRequest.rejected, (state) => {
        state.results = [];
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const { userTakesAction } = searchResultsSlice.actions;
export { searchResultsSlice };
export default searchResultsSlice.reducer;
