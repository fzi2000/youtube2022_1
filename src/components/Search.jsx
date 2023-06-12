import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,

  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../Context/AuthContext";
const Search = () => {

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"

        />
      </div>
      <span>User not found!</span>
      <div className="userChat">
        <img src="" alt="" />
        <div className="userChatInfo">
          <span>Naman Rajput</span>
        </div>
      </div>
    </div>
  );
};

export default Search;