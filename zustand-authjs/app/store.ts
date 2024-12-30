"use client"
import { create } from "zustand";

interface Zustand {
    compteur : number, 
    augmenter : () => void,
    reset : () => void 
}

const useCompteurStore  = create<Zustand>(set => ({
    compteur : 0, 
    augmenter : () => set(store => ({ compteur : store.compteur + 1})),
    reset : () => set(() => ({ compteur : 0}))
}))

export default useCompteurStore