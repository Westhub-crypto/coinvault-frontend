import React from 'react';

function Dashboard({ user }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome, {user.username}</h2>
      <p>This is your dashboard</p>
    </div>
  );
}

export default Dashboard;
