import {marquee} from '../data'
export default function Marquee(){const row=[...marquee,...marquee].map((t,i)=><span key={i} className="mx-6">{t} •</span>)
return<div className="overflow-hidden bg-sesi py-3 font-display text-4xl uppercase whitespace-nowrap" aria-label={marquee.join(', ')}>
 <div className="marq flex" aria-hidden="true"><div>{row}</div><div>{row}</div></div></div>}
