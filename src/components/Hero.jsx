import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Mathew</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor, elit non vehicula posuere, neque arcu commodo mi, sit amet placerat ex sapien at nisi. Mauris nec accumsan ipsum. Nulla maximus risus vel felis congue, vitae faucibus magna facilisis. Sed elementum sollicitudin scelerisque. Sed tristique quis urna vel rhoncus. Mauris sed tempus augue, ut consequat lacus. Vivamus quis ante justo. Nulla vel leo ac metus egestas molestie in quis dolor. Proin sed est tortor. Nam ac malesuada tellus.
          </p>
        </div>
      </div>

        <ComputersCanvas />
    </section>
  )
}

export default Hero