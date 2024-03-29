import { motion } from 'framer-motion';
import { styles } from '../styles';

const Hero = () => {
  return (
    <section className="relative w-full h-[750px] mx-auto" >
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Mathew</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor, elit non vehicula posuere, neque arcu commodo mi, sit amet placerat ex sapien at nisi. Mauris nec accumsan ipsum. Nulla maximus risus vel felis congue, vitae faucibus magna facilisis. Sed elementum sollicitudin scelerisque. Sed tristique quis urna vel rhoncus. Mauris sed tempus augue, ut consequat lacus. Vivamus quis ante justo. Nulla vel leo ac metus egestas molestie in quis dolor. Proin sed est tortor. Nam ac malesuada tellus.
          </p>
        </div>
      </div>  

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll to About Section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
