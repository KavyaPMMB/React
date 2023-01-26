import React, { createContext, useContext, useState } from 'react'
const UserContext=createContext()
const UserProvider = ({children}) => {
    let a="hlooooooo";
    const [first, setfirst] = useState({
      name:"james",salary:50000,image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2FFree-Amazing-Background-Images-Nature.jpg&f=1&nofb=1&ipt=4db07a26090d589009e73166357b59a0f0e7e47ce2107b17aa96e74eca0935e5&ipo=images"
})
  return (
    <div>
        <UserContext.Provider value={{a,first}}>
          {children}
        </UserContext.Provider>
    </div>
  )
}
export const Userstate=()=>{return useContext(UserContext)}
export default UserProvider