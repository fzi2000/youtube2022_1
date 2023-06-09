import React, { useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from "../Context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState([])
  const [err, setErr] = useState(false)
  const { currentUser } = useContext(AuthContext)

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", username));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      }
      );

    } catch (err) {
      setErr(true)
    }
  };


  const handleSelect = () => {
    const combinedId = [currentUser.uid, user.uid].sort().join(':');
    try {
      const res = await getDocs(db, "chats ", combinedId)
    } catch (err) {
      

    } 

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch();
  }
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Enter the User' onKeyDown={handleKey} onChange={e => setUsername(e.target.value)} />
      </div>
      {err && <span className='err'>User not found</span>}

      {
        user &&
        <div className='userChat' onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className='userChatInfo '>
            <span>
              {user.displayName}
            </span>
          </div>
        </div>
      }
    </div>
  )
}

export default Search