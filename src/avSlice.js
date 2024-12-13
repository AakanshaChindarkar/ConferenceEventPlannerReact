import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
        {
        img: "https://media.istockphoto.com/id/652812364/photo/portable-working-beamer-projector.jpg?s=1024x1024&w=is&k=20&c=ljlgBfu_H6GQiJrwRrkgdGSfK3Vr1lj3HvgsA5UcK4g=",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/photos/techland-audio-audiovector-stereo-1822627/",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "https://www.istockphoto.com/photo/retro-vintage-microphone-on-yellow-background-studio-gm924425774-253700135?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_photo_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fphotos%2Fsearch%2Fmicrophones%2F&utm_term=microphones",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    }

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;