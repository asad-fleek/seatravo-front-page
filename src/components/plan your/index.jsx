import React from 'react'
import CustomTitle from '../title'
import { largecard } from '../../utils/largecard'
import Cards from '../largeCards'
import { logo } from '../../utils/images'

function PlanYour() {

  return (
    <section>
      <div className="container mx-auto">
        <img className="w-[29.35px] h-[30px] mx-auto" src={logo} alt="agency logo" />
        <CustomTitle title={"Plan Your Complete Caribbean Escape"} />

        <div className='grid grid-cols-12'>
          {
          largecard.map((item, index) => {
            return (
              <Cards key={index} title={item.title} description={item.description} />
            )
          })
        }
      </div>
      </div>
      
    </section>
  )
}

export default PlanYour;
