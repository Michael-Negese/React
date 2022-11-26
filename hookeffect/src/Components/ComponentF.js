import React,{useContext} from 'react'
import {UserContext,ChannelContext} from '../App'

function ComponentF() {
    const fistName = useContext(UserContext)
    const lastName = useContext(ChannelContext)
  return (
    <div>
        {/* <UserContext.Consumer>
            {
                user => {
                return (
                    <ChannelContext.Consumer>
                        {
                            channel =>{
                                return (
                                    <div>
                                         User Context Value {user},Channel Context Value {channel}
                                    </div>
                                )
                            }
                        }
                    </ChannelContext.Consumer>
                   
                )
                }
            }
        </UserContext.Consumer> */}
        {fistName} - {lastName}
    </div>
  )
}

export default ComponentF