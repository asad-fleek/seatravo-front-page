import React from 'react'

function GetTravel() {


  return (
    <section className="flex justify-center items-center pt-8 mb-20">
      <div className="relative flex flex-col items-center justify-center bg-[url('images/get-your/FamilyFrame.png')] w-[1096px] h-[343px] bg-cover bg-center rounded-lg">
        <h1 className="text-center font-primary font-extrabold text-[48px] text-stone-50 leading-tight">Get Caribbean Travel Tips <br />+ Exclusive Deals</h1>

        <button className="mt-6 px-8 py-3 font-primary font-bold text-stone-50 bg-orange-500 rounded-lg hover:bg-orange-600 transition">Get Notified</button>

        <img src="images/get-your/tinylogo.png" alt="Logo" className="absolute b-0 pl-200 h-[260.06px]" />
      </div>
    </section>

  )
}
export default GetTravel;
