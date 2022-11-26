import React,{useContext} from 'react'
import {UserContext,ChannelContext} from '  react'
function ComponentF() {
    const user = useContext(UserContext);
    const muser = useContext(ChannelContext);
  return (
    <div>
      {user} - {muser}
    </div>
  )
}

export default ComponentF