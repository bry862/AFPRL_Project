import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
//JSX:
import Section from './Section'


//Images:
import section1 from "./images/blacks-in-am-rev.jpg"
import section2 from "./images/slaves_in_field.jpg"
import bg from "./images/bg1.jpg"
import section3 from "./images/society.jpg"

function App() {


  return (
    
    <div>

      <h1 className='text-5xl font-bold m-5'>Inequality in the Black Community</h1>
      
      <Section title = "Blacks in the American Revolution" image = {section1} paragraph = {
        `
        The foundation of what we know today as the United States was based on the enslavetude of Africans. 
        By 1775, more than half a million African Americans were living amongst the 13 colonies as slaves. 
        By this time, many people had begun to question slavery. Notably, Abigail Adams spoke out and wrote, 
        “it always appeared a most iniquitous scheme to me to fight ourselves for what we are daily robbing 
        and plundering from those who have as good a right to freedom as we have.” Along with many others, the expectations 
        for the enslaved Africans rose, as they understood that talks about freedom were taking place. Many of these slaves were 
        ready for a democratic battle. In 1775, 10 out of 15 black men fought with the Union against the British, and they were of 
        great help. Salem Poor and Peter Salem are examples of brave soldiers. By the end of the war, it was clear that the Union was 
        fighting for freedom, but not for slaves. After the war, Congress did not allow blacks to join the army. 
	      Some slaves also sought freedom by joining the forces of the British. One example was Harry Washington. 
        The former slaves were evacuated to places like Nova Scotia. The Blacks were not welcomed and treated harshly. Then the
         British agreed to pay expenses for the freed slaves to go back to Africa. So we can see that with the British, the “freedom” 
         was different than with the slow freedom given to slaves by Americans. Why was the only place that freed slaves could go be Africa? 
         In Becoming an Abolitionist, Purnell mentions an idea that her mother brought to her: “Black people need black lawyers”, but it goes deeper than that. 
         The underlying idea here is that only a black person can comprehend the struggles a black person goes through. And before we continue 
         marching forward to a better world, we need to understand that fact. 

        
        `
      } />

     <Section title = "After the American Revolution" image = {section2} paragraph = {`
      	What happened to slavery after the American Revolution? After the American Revolution, 
        States in the North began to create laws that began to abolish slavery. 
	    Examples: 
          Vermont. No person brought shall be held as a slave beyond the age of 18(women) or 21(men)
          Pennsylvania: People born after March 1, 1780, would be free after the age of 28. No slave importations.

        The law in Pennsylvania was interesting because it was complex. It was complex because it was giving freedom to 
      slaves painfully slowly. And, not everyone followed it. George Washington, for example, did not follow it. Despite this law, 
      slavery continued in the state until 1840. That is 57 years after the American Revolution had ended. After the war, many blacks remained slaves. 
      Many of the abolition laws that were being made did not aid those already born. And some laws made things even worse. 
	    The fugitive slave act was signed, which allowed the recapture of freed slaves. The act set up the legal process for slave 
      owners to reclaim their enslaved property. Even people who were never slaves were being captured, as well as slaves living in Northern states, 
      where they were supposed to be safe from slavery. 

      
      
      `} />

      <Section title = "Society" image = {section3} paragraph = {`
      When reading Asante in class, I found something he said to be very interesting. 
      “African Americans have been mis-educated, educated away from their own culture … 
      thus dislocated from themsleves” and it is interesting because if one does not understand oneself, 
      he is lost. And that is the word that we can use to describe the situation many blacks find themselves in America, for 
      no fault of their own. As we see in the previous sections above, after the American revolution slavery continued even for 
      black soldiers (who were promised freedom), and that is betraying the people who fought for you. So it becomes difficult for people 
      to live amongst and under those who lie on their promises. It is wrong, as Asante mentions, to assume that the black man in America is 
      equal to a white American, and doing so only leads to the physiological death of the African American society. 
      `} />

      <i className=''>By: Brayhan Morrobel</i>

     
      
      </div>
  )
}

export default App
