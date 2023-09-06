import React from 'react';
import Navbar from '../../Navbar/Navbar';
import UserList from '../../UserList/UserList';

const Home = () => {
  return (
    <div>
        <Navbar />
        <UserList />
        <h2 style={{textAlign : "center", marginTop : "10px"}}>This is Home Page</h2>
    </div>
  )
}

export default Home