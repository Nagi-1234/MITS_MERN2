import React from 'react'

const About = ({dept,name,age})=> {
  return (
    <div>
      <p>Nme:{name}</p>
      <p>Age:{age}</p>
      <p>dept:{dept}</p>  
    </div>
  )
}

export default About