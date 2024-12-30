"use client"
import { Button } from "@/components/ui/button";
import useCompteurStore from "./store";


export default function Home() {

 const {augmenter, compteur, reset} =  useCompteurStore()
 
  return (
    <>
    <div className="flex justify-center gap-5 mt-20">
    <Button onClick={augmenter}> + </Button>
    <Button onClick={reset}> reset </Button>
    </div>

    <div className="flex justify-center gap-5 mt-20">

<p>Compteur : {compteur}</p>

    </div>
     
    </>
  );
}
