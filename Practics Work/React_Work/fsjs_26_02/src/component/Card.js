import React from 'react'

// using props
// const Card = (props) => {
//   return (
//     <>
//     <p>Hello world , {props.name}</p>
//     </>
//   )
// }

// without props
const Card = ({name}) => {
  return (
    <>
    <p>Hello world , {name}</p>
    </>
  )
}


export default Card