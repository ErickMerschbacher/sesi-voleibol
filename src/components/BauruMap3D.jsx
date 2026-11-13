import {useEffect,useRef,useState} from 'react'
import * as THREE from 'three'
import {units} from '../data'
const dist=(x,z,x0,z0,ry)=>Math.abs((x-x0)*Math.sin(ry)+(z-z0)*Math.cos(ry))
export default function BauruMap3D(){
 const box=useRef(),api=useRef({}),[sel,setSel]=useState(null)
 useEffect(()=>{
  const el=box.current,W=()=>el.clientWidth,H=()=>el.clientHeight
  const r=new THREE.WebGLRenderer({antialias:true});r.setPixelRatio(Math.min(devicePixelRatio,2));r.setSize(W(),H());el.appendChild(r.domElement)
  const s=new THREE.Scene();s.background=new THREE.Color(0x0b0b0b);s.fog=new THREE.Fog(0x0b0b0b,14,34)
  const cam=new THREE.PerspectiveCamera(45,W()/H(),.1,100)
  s.add(new THREE.AmbientLight(0x998888,.7));const dl=new THREE.DirectionalLight(0xffffff,.8);dl.position.set(5,10,3);s.add(dl)
  s.add(new THREE.GridHelper(40,40,0xe30613,0x1a1a1a))
  const red=new THREE.MeshBasicMaterial({color:0xe30613})
  const roads=[[.2,34,0,0,.5],[.35,40,0,-7.5,-.12],[.12,30,3,0,-1.0]] // Av. Nações Unidas, Rod. Marechal Rondon, rua transversal
  roads.forEach(([w,l,x,z,ry])=>{const m=new THREE.Mesh(new THREE.BoxGeometry(l,.04,w),red);m.position.set(x,.02,z);m.rotation.y=ry;s.add(m)})
  let seed=7;const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647
  const bm=new THREE.MeshStandardMaterial({color:0x1a1a1a}),em=new THREE.LineBasicMaterial({color:0x5a0a10})
  for(let x=-10;x<=10;x+=1.1)for(let z=-10;z<=10;z+=1.1){
   if(roads.some(([w,,x0,z0,ry])=>dist(x,z,x0,z0,ry)<w/2+.55)||units.some(u=>Math.hypot(x-u.pos[0],z-u.pos[2])<1.5))continue
   const h=.2+rnd()*rnd()*2.4,b=new THREE.Mesh(new THREE.BoxGeometry(.8,h,.8),bm);b.position.set(x,h/2,z);s.add(b)
   const e=new THREE.LineSegments(new THREE.EdgesGeometry(b.geometry),em);e.position.copy(b.position);s.add(e)}
  const pins=[],rings=[]
  units.forEach(u=>{const g=new THREE.Group();g.position.set(...u.pos)
   const st=new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,1.2),red);st.position.y=.6
   const hd=new THREE.Mesh(new THREE.SphereGeometry(.3,24,24),red);hd.position.y=1.3;hd.userData.id=u.id;pins.push(hd)
   const rg=new THREE.Mesh(new THREE.RingGeometry(.4,.48,48),new THREE.MeshBasicMaterial({color:0xe30613,transparent:true,side:2}));rg.rotation.x=-Math.PI/2;rg.position.y=.05;rings.push(rg)
   const pl=new THREE.PointLight(0xe30613,2,5);pl.position.y=1.5
   g.add(st,hd,rg,pl);s.add(g)})
  const v={az:.6,d:17,gd:17,t:new THREE.Vector3(),gt:new THREE.Vector3(),auto:true}
  api.current.go=id=>{const u=units.find(x=>x.id===id);v.auto=!u;if(u){v.gt.set(u.pos[0],.8,u.pos[2]);v.gd=7}else{v.gt.set(0,0,0);v.gd=17};setSel(id||null)}
  const ray=new THREE.Raycaster(),c=r.domElement;let down=null,moved=0
  c.onpointerdown=e=>{down=e.clientX;moved=0;c.setPointerCapture(e.pointerId)}
  c.onpointermove=e=>{if(down===null)return;const dx=e.clientX-down;down=e.clientX;moved+=Math.abs(dx);v.az-=dx*.006;v.auto=false}
  c.onpointerup=e=>{down=null;if(moved>5)return;const b=c.getBoundingClientRect()
   ray.setFromCamera(new THREE.Vector2(((e.clientX-b.left)/b.width)*2-1,-((e.clientY-b.top)/b.height)*2+1),cam)
   const h=ray.intersectObjects(pins)[0];if(h)api.current.go(h.object.userData.id)}
  c.addEventListener('wheel',e=>{e.preventDefault();v.gd=Math.min(24,Math.max(5,v.gd+e.deltaY*.01))},{passive:false})
  const rs=()=>{r.setSize(W(),H());cam.aspect=W()/H();cam.updateProjectionMatrix()};addEventListener('resize',rs)
  const still=matchMedia('(prefers-reduced-motion:reduce)').matches;let raf
  const loop=t=>{raf=requestAnimationFrame(loop)
   if(v.auto&&!still)v.az+=.0025
   v.t.lerp(v.gt,.06);v.d+=(v.gd-v.d)*.06
   cam.position.set(v.t.x+Math.sin(v.az)*v.d,v.t.y+v.d*.55,v.t.z+Math.cos(v.az)*v.d);cam.lookAt(v.t)
   rings.forEach((rg,i)=>{const p=((t/1000)+i*.3)%1;rg.scale.setScalar(1+p*2.5);rg.material.opacity=1-p})
   r.render(s,cam)}
  loop(0)
  return()=>{cancelAnimationFrame(raf);removeEventListener('resize',rs);r.dispose();el.removeChild(c)}
 },[])
 const u=units.find(x=>x.id===sel)
 const btn=a=>`px-4 py-2 text-left text-sm font-bold border ${a?'bg-sesi border-sesi':'border-white/30 hover:border-sesi'}`
 return(
 <section id="mapa" className="px-5 pt-28 pb-10">
  <h2 className="mb-8 font-display text-6xl uppercase leading-none md:text-8xl">Unidades <span className="text-sesi">Bauru</span></h2>
  <div className="relative h-[75vh] min-h-[480px] overflow-hidden border border-white/10">
   <div ref={box} className="absolute inset-0 cursor-grab" role="img" aria-label="Mapa 3D estilizado de Bauru com as unidades SESI"/>
   <div className="absolute left-3 top-3 flex flex-col gap-2">
    <button className={btn(!sel)} onClick={()=>api.current.go(null)}>Visão geral</button>
    {units.map(x=><button key={x.id} className={btn(sel===x.id)} onClick={()=>api.current.go(x.id)}>{x.name}</button>)}</div>
   {u&&<aside className="absolute bottom-3 right-3 left-3 max-w-sm border-l-4 border-sesi bg-ink/90 p-5 backdrop-blur sm:left-auto">
    <h3 className="font-display text-3xl uppercase">{u.name}</h3><p className="mt-2 text-sm">{u.role}</p><p className="mt-2 text-sm text-bone/60">{u.addr}</p>
    <a target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(u.q)}`} className="mt-4 inline-block bg-sesi px-4 py-2 text-xs font-bold hover:bg-bone hover:text-ink">ABRIR NO GOOGLE MAPS</a></aside>}
  </div>
  <p className="mt-3 text-xs text-bone/50">Mapa estilizado: a posição dos pins é ilustrativa, não geográfica. Arraste para girar, role para dar zoom.</p>
 </section>)}
