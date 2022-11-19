import React from 'react'
// import Person from './Person'
function NameList() {
     let names = ['Burce','Clark','Diana','Diana']
    let nameList = names.map((name,index)=><h1 key={index}> {index}  Hello {name}</h1>)
//        const profile =  [

//             {  id:1,
//                 name: 'Burce',
//             image: 'https://img.freepik.com/premium-photo/border-collie-autumn-leaves-night_356194-2109.jpg?w=1380',
//             age: 24

//         },
//         { id:2,
//             name: 'Diana',
//     image: 'https://img.freepik.com/premium-photo/portrait-beautiful-red-haired-woman-fall-leaves-dress-autumn-park_157917-1671.jpg?w=1380',
//     age: 21
// },
//             { id:3,
//                 name: 'Clark',
//         image: 'https://img.freepik.com/premium-photo/headshot-portrait-young-woman-drinking-steamed-hot-tea-coffee-autumn-park_266732-30216.jpg?w=1380',
//     age: 24},
//         ]
    
// const personList= profile.map(person => <Person key={person.id} prop = {person}/>)
  return (
    <div>
    {/* {personList} */}
    {nameList}
        </div>
  )
}

export default NameList