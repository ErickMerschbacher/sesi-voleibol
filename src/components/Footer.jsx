export default function Footer(){return(
<footer className="overflow-hidden bg-sesi px-5 pt-16 text-ink">
 <div className="grid gap-10 md:grid-cols-3">
  <form onSubmit={e=>e.preventDefault()} className="flex"><input type="email" required placeholder="Seu e-mail" aria-label="E-mail" className="w-full bg-ink px-3 py-3 text-bone placeholder:text-bone/50"/><button className="bg-bone px-4 font-bold">ASSINAR</button></form>
  <nav className="flex gap-5 font-bold"><a href="#">Instagram</a><a href="#">YouTube</a><a href="#">TikTok</a></nav>
  <p className="font-bold">Patrocinadores: SESI-SP · Espaço para marcas</p></div>
 <p className="mt-14 whitespace-nowrap font-display uppercase leading-[.8] text-[11.5vw]">SESI Voleibol • Bauru</p>
</footer>)}
