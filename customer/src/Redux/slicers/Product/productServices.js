import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (thunkAPI) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/products/`);
        return response.data.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );

  export const fetchProductFound = createAsyncThunk(
    'productFound/fetchProductFound',
    async (productName, thunkAPI) => {
      try {
          const response = await axios.get(`${process.env.REACT_APP_URL}/products?product_name=${productName}`);
          return response.data.data;
        
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
export const fetchProductDetails = createAsyncThunk(
    'productDetails/fetchProductDetails',
    async (productId, thunkAPI) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/products/${productId}`);
        return response.data.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );

  export const sortProduct = createAsyncThunk(
    'sortProduct/sortProduct',
    async (thunkAPI) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/product`);
        return response.data.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );