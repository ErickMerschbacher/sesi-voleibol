import {links} from '../data'
export default function Navbar(){return(
<header className="fixed inset-x-3 top-3 z-50 flex items-center justify-between bg-ink/80 px-4 py-3 backdrop-blur border border-white/10">
 <a href="#" className="font-display text-2xl leading-none"><span className="bg-sesi px-1.5 mr-1">SESI</span>VÔLEI</a>
 <nav className="hidden lg:flex gap-6 text-sm">{links.map(([l,h])=><a key={h} href={h} className="hover:text-sesi">{l}</a>)}</nav>
 <a href="#jogos" className="bg-sesi px-4 py-2 text-xs font-bold hover:bg-bone hover:text-ink transition-colors">GARANTA SEU INGRESSO</a>
</header>)}
