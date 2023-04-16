const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const batteries = [
    { type: 'AA', amount: 12 },
    { type: 'AAA', amount: 7 },
    { type: 'AA', amount: 6 },
    { type: 'D', amount: 3 },
    { type: 'AAA', amount: 3 }
  ];
  
  function reducer(batteryArray) {
    const total = batteryArray.reduce(function(acc, battery) {
      return acc + battery.amount;
    }, 0);
  
    return total;
  }
  
  const totalBatteries = reducer(batteries);
  console.log(totalBatteries); // Output: 31
  