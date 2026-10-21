var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK'
    }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy'
    }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  }
];

var result = {};

motoGP.forEach(function (item) {
  var country = item.winner.country;
  var fullName = item.winner.firstName + ' ' + item.winner.lastName;
  var winLoc = item.circuit + ', ' + item.location;

  if (!result[country]) {
    result[country] = {
      winningCircuits: [],
      totalWin: 0
    };
  }

  result[country].winningCircuits.push({
    name: fullName,
    winLocation: winLoc
  });

  result[country].totalWin += 1;
});

console.log(JSON.stringify(result, null, 2));