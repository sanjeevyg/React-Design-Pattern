// export const RegularList = ({
//     items,
//     resourceName, 
//     itemComponent: ItemComponent
// }) => {
//     return (
        
//     <> 
//     {items && items.map((item, i) => (
//         // <ItemComponent key={i} {...{[resourceName]:item}}/>
//         <h1>{item}</h1>
//         // console.log(item)
//     ))}
//     </>
// )}


import React from 'react'

export default function RegularList({items, resourceName, itemComponent: ItemComponent}) {

    console.log(items)
   const handleItems = () =>  items.map((item, i) => (
        <ItemComponent key={i} {...{[resourceName]:item}}/>
        
    ))
  return (
    <> 
    {handleItems()}
    </>
  )
}
