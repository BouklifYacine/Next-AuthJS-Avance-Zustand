
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Zustand {
    compteur : number, 
    augmenter : () => void,
    reset : () => void 
}

const useCompteurStore  = create<Zustand>()(
    persist(
    set => ({
    compteur : 0, 
    augmenter : () => set(store => ({ compteur : store.compteur + 1})),
    reset : () => set(() => ({ compteur : 0}))
}), 
{ name : "Competeur "}
)
)

export default useCompteurStore