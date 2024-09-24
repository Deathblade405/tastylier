import React from 'react';
 // Ensure you have a CSS file for styling

const Supporters = () => {
  const topCheerers = [
    { name: 'Venky_v', amount: '23,432', medal: 'Gold' },
    { name: 'soumya_969', amount: '17,064', medal: 'Silver' },
    { name: 'NotArnasss', amount: '3,251', medal: 'Bronze' },
    { name: 'LimpRizzle', amount: '1,500' },
    { name: 'Th3Malik1', amount: '1,370' },
    { name: 'wtfvidhi', amount: '1,310' },
    { name: 'floopboopscoo', amount: '1,259' },
    { name: 'Shirokuro2021', amount: '1,200' },
    { name: 'adude435', amount: '1,065' },
    { name: 'DukeSenior', amount: '920' },
  ];

  const topGifters = [
    { name: 'Venky_v', gifts: 576 },
    { name: 'soumya_969', gifts: 52 },
    { name: 'wtfvidhi', gifts: 15 },
    { name: 'shrimpforindianstreamers', gifts: 12 },
    { name: 'pentagodx', gifts: 10 },
    { name: 'NotArnasss', gifts: 7 },
    { name: 'the_spidervenom_guy', gifts: 6 },
    { name: 'zebralandd', gifts: 6 },
    { name: 'MachineDaena', gifts: 5 },
    { name: 'ItzPunjabi', gifts: 5 },
  ];

  return (
    <section className="supporters">
      <div className="supporters-box">
        <h2>All-Time Top Cheerers</h2>
        <ul>
          {topCheerers.map((cheer, index) => (
            <li key={index}>
              <span>{cheer.name}</span>
              <span>{cheer.amount} {cheer.medal ? `(${cheer.medal} Medal)` : ''}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="supporters-box">
        <h2>All-Time Top Gifters</h2>
        <ul>
          {topGifters.map((gifter, index) => (
            <li key={index}>
              <span>{gifter.name}</span>
              <span>{gifter.gifts} Gifts</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Supporters;
