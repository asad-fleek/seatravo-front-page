import React from 'react'

function WelcomePage() {


  return (

    <section>
      <div className=" justify-center flex flex-col h-screen items-center bg-custom bg-contain md:bg-cover bg-center">
        <h1 className="font-primary font-extrabold text-md leading-[110%]">Why Thousand Trust</h1>

        <div className=" md:w-126.75 w-[55%] h-13.25 rotate-0 opacity-100 top-[346.06px] left-[466.5px]">
          <div className="w-full flex justify-center items-center">
            <img src="images\welcome\image.png" alt="logo" className="md:w-[348.08px] h-auto" />
          </div>
        </div>

      </div>
    </section>
  )
}
export default WelcomePage;