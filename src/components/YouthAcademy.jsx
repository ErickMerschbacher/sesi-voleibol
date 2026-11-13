import {categories,trophies} from '../data'
export default function YouthAcademy(){return(
<section id="base" className="bg-bone px-5 py-28 text-ink">
 <h2 className="font-display text-6xl uppercase leading-none md:text-9xl">Base &<br/>conquistas</h2>
 <ol className="mt-16 grid gap-0 border-l-4 border-sesi md:grid-cols-3 md:border-l-0 md:border-t-4">
  {categories.map(([c,t])=><li key={c} className="relative p-6 md:pt-8"><h3 className="font-display text-5xl">{c}</h3><p className="mt-2 max-w-xs">{t}</p></li>)}
 </ol>
 <p className="mt-6 max-w-xl text-lg">A base alimenta o time principal e as Seleções Brasileiras: cada categoria prepara a próxima.</p>
 <ul className="mt-14 grid gap-3 md:grid-cols-2">
  {trophies.map((t,i)=><li key={i} className="group flex gap-4 border-2 border-ink p-5 transition-all hover:-translate-y-1 hover:bg-sesi hover:text-bone hover:shadow-[6px_6px_0_#0B0B0B]">
   <span className="font-display text-4xl text-sesi group-hover:text-bone" aria-hidden="true">★</span><span className="text-lg font-bold">{t}</span></li>)}
 </ul></section>)}
