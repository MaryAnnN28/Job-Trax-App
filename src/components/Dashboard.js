import React from 'react'

const Dashboard = (props) => {
  return (
    <div>
      <div>
        <h1>Welcome to Your Dashboard</h1>
        <br />
        <h1>Status: {props.loggedInStatus} </h1>
      </div>
      
    </div>
  )
}

export default Dashboard;
