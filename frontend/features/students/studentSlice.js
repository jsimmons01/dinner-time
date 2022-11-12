import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const  initialState = { 
    students: [],
    isError: false, 
    isSuccess: false, 
    isLoading: false,
     message: ' '
    }


const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    // extraReducers: {
    //     [fetchStudents.pending]: (state) => {
    //         state.isLoading = true;
    //     },
    //     [fetchStudents.fulfilled]: (state, action) => {
    //         state.isLoading = false;
    //         state.errMess = null;
    //         state.studentsArray = action.payload;
    //     },
    //     [fetchStudents.rejected]: (state, action) => {
    //         state.isLoading = false;
    //         state.errMess = action.error ? action.error.message : 'Fetch failed';
    //     }
    // }
});

export const {reset} = studentSlice.actions
export default studentSlice.reducer;