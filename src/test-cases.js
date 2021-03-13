const testCases = [
  {
    firstName: "Damon",
    lastName: "Roberts",
    email: "damonspencerroberts@gmail.com",
    number: "07436213497",
    dob: "1997-04-27",
    expect: true
  },
  {
    firstName: "Peter",
    lastName: "Parker",
    email: "pp@gmail.com",
    number: "01442-697616",
    dob: "2002-11-20",
    expect: true
  },
  {
    firstName: "Melissa",
    lastName: "Campbell",
    email: "mcamp1005@aol.com",
    number: "+447873445871",
    dob: "1952-05-10",
    expect: true
  },
  {
    firstName: "James",
    lastName: "Barker",
    email: "barkerj12@aol.com",
    number: "01434-691616",
    dob: "2002-11-20",
    expect: true
  },
  {
    firstName: "Rob",
    lastName: "Mariano",
    email: "marianorob@survior.co.uk",
    number: "+447382289104",
    dob: "1974-09-19",
    expect: true
  },
  {
    firstName: "123James",
    lastName: "Mariano",
    email: "marianorob@survior.co.uk",
    number: "+447382289104",
    dob: "1974-09-19",
    expect: false
  },
  {
    firstName: "Rob",
    lastName: "Marian123o",
    email: "marianorob@survior.co.uk",
    number: "+447382289104",
    dob: "1974-09-19",
    expect: false
  },
  {
    firstName: "Rob",
    lastName: "Mariano",
    email: "marianorob",
    number: "+447382289104",
    dob: "1974-09-19",
    expect: false
  },
  {
    firstName: "Rob",
    lastName: "Mariano",
    email: "marianorob@survior.co.uk",
    number: "73847474774472289104",
    dob: "1974-09-19",
    expect: false
  },
  {
    firstName: "Rob",
    lastName: "Mariano",
    email: "marianorob@survior.co.uk",
    number: "+447382289104",
    dob: "1974-03-9-194949",
    expect: false
  }
];
