import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Home() {
  const hopeSeekerData = [
    { name: 'Jan', hopeSeekers: 20 },
    { name: 'Feb', hopeSeekers: 35 },
    { name: 'Mar', hopeSeekers: 45 },
    { name: 'Apr', hopeSeekers: 30 },
    { name: 'May', hopeSeekers: 55 },
    { name: 'Jun', hopeSeekers: 40 },
    { name: 'Jul', hopeSeekers: 60 },
  ];

  const charityCampaignData = [
    { name: 'Jan', charityCampaigns: 5 },
    { name: 'Feb', charityCampaigns: 8 },
    { name: 'Mar', charityCampaigns: 12 },
    { name: 'Apr', charityCampaigns: 10 },
    { name: 'May', charityCampaigns: 15 },
    { name: 'Jun', charityCampaigns: 18 },
    { name: 'Jul', charityCampaigns: 20 },
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Reports</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>300</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Care Providers</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>12</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Trust Endorsers</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>33</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Hope Seekers</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>42</h1>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            width={500}
            height={300}
            data={hopeSeekerData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='hopeSeekers' fill='#8884d8' />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            width={500}
            height={300}
            data={charityCampaignData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='charityCampaigns' stroke='#82ca9d' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
