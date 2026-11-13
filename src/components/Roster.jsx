import {roster} from '../data'
export default function Roster(){return(
<section id="elenco" className="px-5 py-28">
 <h2 className="mb-12 font-display text-6xl uppercase leading-none md:text-8xl">Elenco & <span className="outline-text">destaques</span></h2>
 <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
  {roster.map((p,i)=><article key={p.n} tabIndex={0} style={{marginTop:i%2?'2rem':0}} className="group relative h-[22rem] overflow-hidden border border-white/10 bg-graphite">
   <span className="absolute -right-3 -top-8 font-display text-[13rem] leading-none text-white/10 transition-colors group-hover:text-sesi group-focus:text-sesi">{p.n}</span>
   <div className="absolute inset-x-0 bottom-0 p-5"><p className="text-sm text-bone/70">{p.pos}</p><h3 className="font-display text-4xl uppercase">{p.name}</h3>
    <dl className="grid max-h-0 grid-cols-3 gap-2 overflow-hidden text-sm opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:max-h-20 group-hover:opacity-100 group-focus:mt-4 group-focus:max-h-20 group-focus:opacity-100">
     {[['Altura',p.alt],['Alcance',p.alc],['Pontos',p.pts]].map(([k,v])=><div key={k}><dt className="text-bone/60">{k}</dt><dd className="font-bold">{v}</dd></div>)}
    </dl></div></article>)}
 </div></section>)}
