import { configureStore } from '@reduxjs/toolkit'
import GlobalState from './context/GlobalState'
export default configureStore({
  reducer: {
      transactions: GlobalState
  },
})