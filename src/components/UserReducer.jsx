import { createSlice } from "@reduxjs/toolkit";
import UserList from "./Data";

const userSlice = createSlice({
    name:'user',
    initialState: UserList,
    reducers:{
       
    }
})

export default userSlice.reducer