export default function Hero(){return(
<section className="relative flex min-h-screen flex-col justify-end overflow-hidden px-5 pb-14 pt-32">
 <svg className="absolute -right-[8%] top-[6%] w-[75vw] max-w-[860px]" viewBox="0 0 400 400" fill="none" aria-hidden="true">
  <g stroke="#1A1A1A" strokeWidth="2">{[...Array(9)].map((_,i)=><line key={i} x1={i*50} y1="230" x2={i*50} y2="400"/>)}{[...Array(4)].map((_,i)=><line key={'h'+i} x1="0" y1={230+i*56} x2="400" y2={230+i*56}/>)}</g>
  <g className="ball"><circle cx="200" cy="120" r="70" fill="#E30613"/>
  <path d="M130 120c40-30 100-30 140 0M200 50c-30 40-30 100 0 140M150 70c30 50 30 90 0 100M250 70c-30 50-30 90 0 100" stroke="#0B0B0B" strokeWidth="5"/></g>
 </svg>
 <h1 className="relative font-display uppercase leading-[.84] text-[19vw] md:text-[15vw]">
  <span className="block overflow-hidden"><span className="rise">Força.</span></span>
  <span className="block overflow-hidden"><span className="rise outline-text" style={{animationDelay:'.12s'}}>Tradição.</span></span>
  <span className="block overflow-hidden"><span className="rise text-sesi" style={{animationDelay:'.24s'}}>Voleibol.</span></span>
 </h1>
 <a href="#jogos" className="fixed bottom-4 right-4 z-40 max-w-[220px] bg-sesi p-3 text-xs font-bold shadow-2xl hover:bg-bone hover:text-ink transition-colors">
  PRÓXIMO CONFRONTO<span className="mt-1 block font-display text-xl leading-tight">SESI BAURU vs. SADA CRUZEIRO</span>SUPERLIGA</a>
</section>)}
