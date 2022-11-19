import React from 'react'

function Colums() {
    const item = [
     {   id:1,
        name: 'John',
        title:'Knights'
    },
     {   id:2,
        name: 'Snow',
        title:'Commander'
    },
     {   id:3,
        name: 'Targeriyan',
        title:'KING'
    }
    ];
  return (
    <>
    {/* In using empty tag you can not add extra nodes and can not pass the key attriubute */}
        {/* {
            item.map(item => (
                <React.Fragment key={item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
        } */}
        <td>Name</td>
        <td>Yabby</td>
    </>
  )
}

export default Colums