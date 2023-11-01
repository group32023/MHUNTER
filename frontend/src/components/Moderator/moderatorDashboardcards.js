import React from 'react';

function DashboardCards({ totalUsers, pendingRequests }) {
  const cardStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '5px',
    margin: '10px',
    width: '200px',
  };

  const titleStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  };

  const dataStyle = {
    fontSize: '1.5rem',
  };

  return (
    <div className="dashboard-cards">
      <div style={cardStyle}>
        <h2 style={titleStyle}>Total Users</h2>
        <p style={dataStyle}>{totalUsers}</p>
      </div>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Pending Requests</h2>
        <p style={dataStyle}>{pendingRequests}</p>
      </div>
    </div>
  );
}

export default DashboardCards;
