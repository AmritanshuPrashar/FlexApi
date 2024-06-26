import React from 'react';

const sentimentColors = {
  positive: 'text-green-600',
  negative: 'text-red-600',
  neutral: 'text-gray-600',
  surprise: 'text-yellow-600',
  sad: 'text-blue-600',
  // Add more sentiment colors as needed
};

const DisplayText = ({ value }) => {
  const sentiment = value.toLowerCase();
  const colorClass = sentimentColors[sentiment] || 'text-gray-600'; // default color

  return <span className={`${colorClass} font-semibold`}>{value}</span>;
};

export default DisplayText;
