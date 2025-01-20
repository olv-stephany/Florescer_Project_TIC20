import {useScroll, motion} from 'framer-motion'
import './sobre.css'
import { useEffect, useRef } from 'react';

{/*framer motion = biblioteca de transiçoes e animaçoes */}

export default function Sobre(){
    const element =useRef(null);
    const {scrollYProgress} = useScroll({
        target: element,
        offset: ['start 0.7', 'start 0.25']
    })

    useEffect( () => {
        scrollYProgress.on("change", e => console.log(e))
    }, [])
  return (
    <motion.div ref={element} className='sobre-container'>
        <h2>Sobre Nós - Florescer</h2>
        <p>A Florescer é uma plataforma de apoio psicológico comunitário dedicada a oferecer um espaço inclusivo, acolhedor e acessível para o cuidado da saúde mental. Nosso propósito é conectar você a profissionais capacitados que valorizam a empatia, a diversidade e as singularidades de cada indivíduo, promovendo um atendimento humanizado e respeitoso.</p>

        <motion.p style={{opacity:scrollYProgress}}>
        <p >Acreditamos que ninguém deve enfrentar suas lutas sozinho(a). Aqui, você encontrará um ambiente seguro para compartilhar, se fortalecer e florescer, em seu próprio tempo e ritmo. Juntos, vamos construir uma comunidade onde a saúde mental seja prioridade e o apoio mútuo, um caminho para dias melhores. 💙</p>
        </motion.p>
    </motion.div>
  )
}
