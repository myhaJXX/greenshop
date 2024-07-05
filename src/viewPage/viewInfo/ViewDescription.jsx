import React from 'react'

import cl from './viewInfo.module.css'
import Desc from './Desc'

function ViewDescription() {
  return (
    <div className={cl['desc-cont']}>

        <Desc title="" desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />

        <Desc title="" desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />

        <Desc title="Living Room:" desc='The ceramic cylinder planters come with a wooden stand to help elevate your 
            plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your 
            plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />

        <Desc title="Dining Room:" desc='The benefits of houseplants are endless. 
            In addition to cleaning the air of harmful toxins, they can help to improve your mood, 
            reduce stress and provide you with better sleep. Fill every room of your home with 
            houseplants and their restorative qualities will improve your life.'
        />

        <Desc title="Office:" desc='The ceramic cylinder planters come with a wooden stand to help elevate
            your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate
            your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />

    </div>
  )
}

export default ViewDescription