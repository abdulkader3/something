import { configureStore } from '@reduxjs/toolkit'
import shanto from './Slices/Rudex'

export default configureStore({
  reducer: {
    Prity: shanto,
  },
})
