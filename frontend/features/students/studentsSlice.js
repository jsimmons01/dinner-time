import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchStudents = createAsyncThunk(
    'students/fetchStudents',
    async () => {
        const response = await fetch(baseUrl + 'students');
        return response.json();
    }
);

const studentsSlice = createSlice({
    name: 'students',
    initialState: { isLoading: true, errMess: null, studentsArray: [] },
    reducers: {},
    extraReducers: {
        [fetchStudents.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchStudents.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.studentsArray = action.payload;
        },
        [fetchStudents.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const studentsReducer = studentsSlice.reducer;