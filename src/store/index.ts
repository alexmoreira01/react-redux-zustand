import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { player } from "./slices/player";

// Estado Global
export const store = configureStore({
  // Objeto com quais são as fatias -- Separar Store
  reducer: {
    player: player
    
  },
  
})

export type RootState = ReturnType<typeof store.getState> // getState retorna todo o estado, com o ReturnType ele devolve o retorno da função e typeof retorna o formato
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector // Buscar informações do estado - useSelector
export const useAppDispatch: () => AppDispatch = useDispatch