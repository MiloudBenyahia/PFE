import  styles  from '../style';

const Home = () => {
  return (
    <section id="Home" className={`flex md:flex-row flex:col ${styles.paddingY} bg-black `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]"> 
            The Next <span className="text-gradient">Optimized</span> {" "}         
          </h1>
        </div>
        <h1 className="font-poppins font-semibold ss:text[68px] text-[52px] text-white 
        ss:leading-[100px] leading-[75px] w-full">
          Schedule Generation.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </section>
  )
}

export default Home