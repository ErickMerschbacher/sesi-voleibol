import {games} from '../data'
export default function Schedule(){return(
<section id="jogos" className="px-5 py-28">
 <h2 className="mb-10 font-display text-6xl uppercase leading-none md:text-8xl">Jogos</h2>
 <ul className="border-t border-white/20">
  {games.map((g,i)=><li key={i} className="grid items-center gap-3 border-b border-white/20 py-5 transition-colors hover:bg-graphite md:grid-cols-[9rem_6rem_1fr_9rem_auto] md:px-3">
   <span className="font-display text-4xl text-sesi">{g.d}</span><span className="font-bold">{g.t}</span>
   <span className="font-display text-3xl uppercase">SESI Bauru x {g.a}</span><span className="text-sm text-bone/70">{g.c} · {g.v}</span>
   <a href="#" className="bg-bone px-4 py-2 text-center text-xs font-bold text-ink hover:bg-sesi hover:text-bone">INGRESSOS</a></li>)}
 </ul></section>)}
