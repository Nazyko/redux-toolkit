import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";
import { ProductData } from "../types/type";

export const fetchProducts = createAsyncThunk<ProductData[], undefined, { rejectValue: string }>(
    'cards/fetchProducts',
    async function (_, { rejectWithValue }) {
        const response = await fetch(`https://dummyjson.com/products`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        });

        if (!response.ok) {
            return rejectWithValue('Server Error!');
        }

        const data = await response.json();
        return data.products; 
    }
);

export const searchProduct = createAsyncThunk<string, string, { rejectValue: string }>(
    'cards/searchProduct',
    async function (title, { rejectWithValue }) {
        const response = await fetch(`https://dummyjson.com/products/search?q=${title}`, {
            method: 'GET',
        });

        if (!response.ok) {
            return rejectWithValue('Server Error!');
        }

        return title; 
    }
);

type ProductState = {
    list: ProductData[];
    filteredList: ProductData[];
    loading: boolean;
    error: string | null;
};

const initialState: ProductState = {
    list: [],
    filteredList: [],
    loading: false,
    error: null,
};

const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(searchProduct.fulfilled, (state, action) => {
                const searchTerm = action.payload.toLowerCase();
                state.filteredList = state.list.filter((product) =>
                    product.title.toLowerCase().includes(searchTerm)
                );
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export default cardSlice.reducer;

function isError(action: AnyAction) {
    return action.type.endsWith('rejected');
}
