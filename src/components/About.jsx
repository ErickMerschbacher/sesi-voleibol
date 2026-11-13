import {useEffect,useRef,useState} from 'react'
function Count({to,pre='',suf=''}){const [v,setV]=useState(0),r=useRef()
 useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;o.disconnect();const t0=performance.now()
  const f=t=>{const p=Math.min((t-t0)/1200,1);setV(Math.round(to*p));if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)});o.observe(r.current);return()=>o.disconnect()},[to])
 return<span ref={r}>{pre}{v}{suf}</span>}
export default function About(){return(
<section id="clube" className="grid gap-10 px-5 py-28 md:grid-cols-12">
 <h2 className="font-display text-6xl uppercase leading-none md:col-span-7 md:text-8xl">Alto rendimento,<br/>educação e<br/><span className="text-sesi">cidadania</span></h2>
 <p className="max-w-md text-lg text-bone/80 md:col-span-4 md:col-start-9 md:mt-20">O projeto do SESI-SP é referência nacional no voleibol masculino e feminino. Em Bauru, o clube forma atletas dentro e fora da quadra, da escola à Superliga.</p>
 <div className="relative md:col-span-12 mt-10 grid gap-px bg-white/10 md:grid-cols-3">
  {[[<Count to={15} pre="+"/>,'Títulos nacionais'],[<Count to={100} suf="%"/>,'Formação de base'],['Skaf','Arena Paulo Skaf']].map(([n,l],i)=>
  <div key={i} className="bg-ink p-8"><div className="font-display text-[22vw] leading-none text-graphite md:text-[10rem]">{n}</div><p className="-mt-4 font-bold">{l}</p></div>)}
 </div></section>)}
