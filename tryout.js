function baby_names () {

    var names = [ "David", "John", "Paul", "Mark", "James", "Andrew", "Scott", "Steven", "Robert", "Stephen", "William", "Craig", "Michael", "Stuart", "Christopher", "Alan", "Colin", "Brian", "Kevin", "Gary", "Richard", "Derek", "Martin", "Thomas", "Neil", "Barry", "Ian", "Jason", "Iain", "Gordon", "Alexander", "Graeme", "Peter", "Darren", "Graham", "George", "Kenneth", "Allan", "Simon", "Douglas", "Keith", "Lee", "Anthony", "Grant", "Ross", "Jonathan", "Gavin", "Nicholas", "Joseph", "Stewart", "Daniel", "Edward", "Matthew", "Donald", "Fraser", "Garry", "Malcolm", "Charles", "Duncan", "Alistair", "Raymond", "Philip", "Ronald", "Ewan", "Ryan", "Francis", "Bruce", "Patrick", "Alastair", "Bryan", "Marc", "Jamie", "Hugh", "Euan", "Gerard", "Sean", "Wayne", "Adam", "Calum", "Alasdair", "Robin", "Greig", "Angus", "Russell", "Cameron", "Roderick", "Norman", "Murray", "Gareth", "Dean", "Eric", "Adrian", "Gregor", "Samuel", "Gerald", "Henry", "Justin", "Benjamin", "Shaun", "Callum", "Campbell", "Frank", "Roy", "Timothy", "David", "John", "Paul", "James", "Mark", "Scott", "Andrew", "Steven", "Robert", "Stephen", "Craig", "Christopher", "Alan", "Michael", "Stuart", "William", "Kevin", "Colin", "Brian", "Derek", "Neil", "Richard", "Gary", "Barry", "Martin", "Thomas", "Ian", "Gordon", "Kenneth", "Alexander", "Graeme", "Peter", "Iain", "Graham", "Jason", "George", "Allan", "Keith", "Darren", "Simon", "Douglas", "Ross", "Stewart", "Lee", "Grant", "Nicholas", "Joseph", "Gavin", "Anthony", "Jonathan", "Daniel", "Fraser", "Matthew", "Donald", "Malcolm", "Alistair", "Edward", "Raymond", "Charles", "Philip", "Bruce", "Garry", "Jamie", "Ryan", "Bryan", "Francis", "Alastair", "Duncan", "Patrick", "Ronald", "Alasdair", "Ewan", "Marc", "Wayne", "Hugh", "Robin", "Sean", "Calum", "Euan", "Adam", "Russell", "Cameron", "Gerard", "Murray", "Norman", "Angus", "Greig", "Justin", "Gregor", "Gerald", "Roderick", "Roy", "Benjamin", "Timothy", "Dean", "Samuel", "Greg", "Shaun", "Adrian", "Campbell", "David", "John", "Paul", "James", "Andrew", "Steven", "Scott", "Mark", "Robert", "Stephen", "Craig", "Christopher", "Stuart", "Alan", "William", "Michael", "Kevin", "Colin", "Brian", "Derek", "Neil", "Richard", "Martin", "Gary", "Ross", "Thomas", "Ian", "Iain", "Barry", "Gordon", "Graeme", "Graham", "Alexander", "Peter", "Kenneth", "Simon", "Allan", "Darren", "George", "Douglas", "Jason", "Lee", "Gavin", "Anthony", "Jonathan", "Stewart", "Jamie", "Keith", "Matthew", "Joseph", "Daniel", "Edward", "Nicholas", "Grant", "Ryan", "Philip", "Alistair", "Donald", "Charles", "Duncan", "Garry", "Malcolm", "Raymond", "Bryan", "Ewan", "Fraser", "Alastair", "Euan", "Patrick", "Bruce", "Ronald", "Greig", "Hugh", "Francis", "Gerard", "Russell", "Alasdair", "Adam", "Marc", "Sean", "Benjamin", "Gregor", "Calum", "Wayne", "Robin", "Roderick", "Murray", "Greg", "Angus", "Cameron", "Gerald", "Shaun", "Samuel", "Timothy", "Liam", "Campbell", "Gareth", "Niall", "Dean", "Justin", "David", "John", "Paul", "James", "Andrew", "Steven", "Scott", "Mark", "Robert", "Christopher", "Craig", "Stuart", "Kevin", "Alan", "Michael", "Stephen", "William", "Colin", "Brian", "Neil", "Richard", "Ross", "Thomas", "Gary", "Derek", "Iain", "Gordon", "Graeme", "Martin", "Barry", "Gavin", "Ian", "Kenneth", "Alexander", "Peter", "Graham", "Allan", "Darren", "Jamie", "Simon", "Lee", "George", "Keith", "Stewart", "Douglas", "Jonathan", "Matthew", "Daniel", "Grant", "Joseph", "Jason", "Anthony", "Ryan", "Edward", "Fraser", "Donald", "Charles", "Garry", "Duncan", "Nicholas", "Raymond", "Alistair", "Bryan", "Philip", "Alastair", "Malcolm", "Alasdair", "Russell", "Patrick", "Euan", "Ewan", "Gareth", "Bruce", "Adam", "Gerard", "Greig", "Marc", "Sean", "Robin", "Ronald", "Benjamin", "Francis", "Gregor", "Greg", "Hugh", "Calum", "Shaun", "Cameron", "Roderick", "Angus", "Gerald", "Rory", "Samuel", "Wayne", "Murray", "Norman", "Timothy", "Dean", "Martyn", "Roy", "Wesley", "David", "John", "Andrew", "Paul", "James", "Scott", "Christopher", "Steven", "Michael", "Mark", "Robert", "Craig", "Kevin", "Stuart", "Alan", "Stephen", "William", "Ross", "Colin", "Brian", "Richard", "Barry", "Neil", "Derek", "Gordon", "Thomas", "Graeme", "Martin", "Peter", "Gary", "Iain", "Graham", "Ian", "Kenneth", "Alexander", "Allan", "Jamie", "Gavin", "Darren", "George", "Douglas", "Simon", "Stewart", "Daniel", "Keith", "Lee", "Ryan", "Joseph", "Matthew", "Grant", "Anthony", "Jason", "Jonathan", "Duncan", "Fraser", "Donald", "Garry", "Nicholas", "Alistair", "Bryan", "Charles", "Raymond", "Philip", "Marc", "Euan", "Edward", "Gareth", "Sean", "Adam", "Alasdair", "Alastair", "Greig", "Ronald", "Malcolm", "Patrick", "Ewan", "Russell", "Greg", "Gregor", "Robin", "Benjamin", "Bruce", "Gerard", "Francis", "Hugh", "Calum", "Cameron", "Shaun", "Wayne", "Samuel", "Murray", "Roderick", "Barrie", "Callum", "Angus", "Liam", "Rory", "Niall", "Timothy", "Antony", "David", "John", "Andrew", "Paul", "James", "Christopher", "Steven", "Scott", "Mark", "Robert", "Craig", "Kevin", "Michael", "Stuart", "Stephen", "Alan", "Colin", "William", "Brian", "Barry", "Ross", "Gary", "Martin", "Thomas", "Richard", "Graeme", "Neil", "Peter", "Iain", "Gordon", "Derek", "Ian", "Alexander", "Kenneth", "Graham", "Allan", "Darren", "Gavin", "Jamie", "Douglas", "Ryan", "Simon", "George", "Matthew", "Lee", "Stewart", "Keith", "Daniel", "Anthony", "Grant", "Gareth", "Jonathan", "Joseph", "Alistair", "Charles", "Edward", "Fraser", "Duncan", "Garry", "Bryan", "Ewan", "Nicholas", "Donald", "Philip", "Alastair", "Adam", "Jason", "Euan", "Russell", "Sean", "Malcolm", "Patrick", "Raymond", "Alasdair", "Liam", "Greig", "Gregor", "Ronald", "Greg", "Shaun", "Wayne", "Bruce", "Marc", "Robin", "Cameron", "Francis", "Angus", "Gerard", "Kris", "Calum", "Benjamin", "Rory", "Dean", "Timothy", "Samuel", "Niall", "Hugh", "Lewis", "Murray", "Justin", "Roderick", "David", "John", "Andrew", "James", "Christopher", "Paul", "Steven", "Kevin", "Robert", "Scott", "Craig", "Michael", "Mark", "Stuart", "Stephen", "Alan", "William", "Gary", "Ross", "Colin", "Brian", "Barry", "Richard", "Martin", "Thomas", "Neil", "Peter", "Iain", "Graeme", "Ian", "Gordon", "Alexander", "Ryan", "Derek", "Kenneth", "Allan", "Jamie", "Graham", "Gavin", "Darren", "Stewart", "Gareth", "Jonathan", "Daniel", "Douglas", "Grant", "Lee", "George", "Joseph", "Simon", "Matthew", "Keith", "Anthony", "Fraser", "Garry", "Alistair", "Bryan", "Philip", "Adam", "Sean", "Duncan", "Edward", "Charles", "Ewan", "Russell", "Donald", "Patrick", "Alastair", "Euan", "Jason", "Nicholas", "Marc", "Raymond", "Malcolm", "Greig", "Alasdair", "Greg", "Liam", "Shaun", "Francis", "Ronald", "Benjamin", "Cameron", "Dean", "Niall", "Gerard", "Murray", "Robin", "Timothy", "Bruce", "Hugh", "Calum", "Kris", "Wayne", "Roderick", "Samuel", "Martyn", "Angus", "Gregor", "Jon", "Rory", "David", "John", "Andrew", "Christopher", "James", "Paul", "Steven", "Craig", "Michael", "Scott", "Kevin", "Robert", "Mark", "Stuart", "Stephen", "Gary", "Alan", "William", "Ross", "Colin", "Martin", "Thomas", "Barry", "Brian", "Neil", "Richard", "Graeme", "Peter", "Iain", "Gordon", "Ian", "Alexander", "Darren", "Derek", "Graham", "Ryan", "Jamie", "Kenneth", "Allan", "Gavin", "Jonathan", "Daniel", "George", "Douglas", "Stewart", "Matthew", "Anthony", "Keith", "Grant", "Sean", "Simon", "Gareth", "Garry", "Lee", "Fraser", "Alistair", "Adam", "Joseph", "Nicholas", "Bryan", "Charles", "Duncan", "Philip", "Russell", "Donald", "Edward", "Marc", "Alastair", "Greg", "Euan", "Raymond", "Shaun", "Ewan", "Jason", "Patrick", "Alasdair", "Gerard", "Malcolm", "Calum", "Liam", "Bruce", "Ronald", "Kris", "Hugh", "Lewis", "Dean", "Greig", "Benjamin", "Wayne", "Martyn", "Niall", "Callum", "Francis", "Cameron", "Gregor", "Angus", "Aaron", "Blair", "Dale", "Samuel", "Timothy", "David", "Christopher", "John", "Andrew", "James", "Paul", "Steven", "Craig", "Scott", "Mark", "Michael", "Robert", "Kevin", "Stuart", "William", "Alan", "Stephen", "Gary", "Ross", "Martin", "Colin", "Richard", "Thomas", "Brian", "Barry", "Neil", "Graeme", "Gordon", "Ian", "Iain", "Peter", "Darren", "Alexander", "Jamie", "Ryan", "Graham", "Jonathan", "Derek", "Kenneth", "Daniel", "Allan", "Matthew", "Gavin", "Lee", "Stewart", "Douglas", "George", "Sean", "Nicholas", "Simon", "Fraser", "Keith", "Anthony", "Joseph", "Adam", "Gareth", "Grant", "Bryan", "Duncan", "Philip", "Euan", "Alistair", "Garry", "Ewan", "Charles", "Edward", "Jason", "Marc", "Shaun", "Donald", "Russell", "Alastair", "Patrick", "Calum", "Liam", "Alasdair", "Greg", "Callum", "Raymond", "Benjamin", "Gerard", "Malcolm", "Cameron", "Aaron", "Ronald", "Bruce", "Greig", "Lewis", "Francis", "Dean", "Gregor", "Niall", "Jordan", "Kris", "Martyn", "Robin", "Samuel", "Blair", "Hugh", "Mohammed", "Murray", "Wayne", "David", "Christopher", "Andrew", "John", "James", "Craig", "Steven", "Paul", "Michael", "Scott", "Robert", "Mark", "William", "Kevin", "Stuart", "Stephen", "Alan", "Gary", "Ross", "Colin", "Richard", "Martin", "Thomas", "Neil", "Ryan", "Graeme", "Brian", "Peter", "Gordon", "Darren", "Ian", "Jamie", "Alexander", "Iain", "Graham", "Barry", "Allan", "Jonathan", "Daniel", "Gavin", "Derek", "Kenneth", "Sean", "Matthew", "Lee", "George", "Nicholas", "Anthony", "Stewart", "Fraser", "Douglas", "Keith", "Joseph", "Grant", "Marc", "Adam", "Simon", "Alistair", "Garry", "Alastair", "Bryan", "Liam", "Jason", "Duncan", "Euan", "Charles", "Greg", "Edward", "Philip", "Russell", "Shaun", "Gareth", "Ewan", "Calum", "Callum", "Donald", "Cameron", "Raymond", "Patrick", "Alasdair", "Dean", "Greig", "Lewis", "Benjamin", "Malcolm", "Niall", "Gerard", "Martyn", "Jordan", "Aaron", "Francis", "Hugh", "Gregor", "Mohammed", "Robin", "Samuel", "Angus", "Bruce", "Kris", "Ronald", "David", "Christopher", "Andrew", "John", "James", "Craig", "Steven", "Paul", "Michael", "Mark", "Scott", "Robert", "Stuart", "Kevin", "William", "Stephen", "Gary", "Alan", "Ross", "Richard", "Thomas", "Neil", "Colin", "Martin", "Ryan", "Graeme", "Peter", "Jamie", "Iain", "Darren", "Gordon", "Ian", "Graham", "Brian", "Daniel", "Alexander", "Sean", "Matthew", "Barry", "Allan", "Kenneth", "Lee", "Derek", "Jonathan", "Gavin", "Joseph", "Adam", "Stewart", "Fraser", "George", "Grant", "Nicholas", "Anthony", "Douglas", "Simon", "Marc", "Alistair", "Liam", "Keith", "Philip", "Shaun", "Garry", "Edward", "Greg", "Euan", "Alastair", "Alasdair", "Callum", "Patrick", "Calum", "Duncan", "Jason", "Bryan", "Raymond", "Charles", "Donald", "Ewan", "Russell", "Lewis", "Cameron", "Dean", "Benjamin", "Gareth", "Malcolm", "Samuel", "Niall", "Gerard", "Aaron", "Greig", "Ben", "Martyn", "Bruce", "Jordan", "Kieran", "Francis", "Wayne", "Kris", "Mohammed", "Murray", "Rory", "David", "Christopher", "Andrew", "John", "James", "Steven", "Craig", "Paul", "Michael", "Mark", "Scott", "Robert", "Stuart", "Stephen", "Gary", "William", "Kevin", "Ross", "Ryan", "Jamie", "Richard", "Alan", "Thomas", "Darren", "Martin", "Colin", "Graeme", "Daniel", "Brian", "Alexander", "Gordon", "Peter", "Iain", "Sean", "Ian", "Matthew", "Barry", "Jonathan", "Graham", "Lee", "Adam", "Neil", "Kenneth", "Derek", "Allan", "Gavin", "Stewart", "Grant", "Fraser", "Nicholas", "George", "Joseph", "Anthony", "Douglas", "Shaun", "Liam", "Jason", "Calum", "Marc", "Callum", "Greg", "Duncan", "Alistair", "Philip", "Bryan", "Keith", "Simon", "Euan", "Garry", "Donald", "Cameron", "Edward", "Ewan", "Charles", "Lewis", "Alasdair", "Gareth", "Raymond", "Alastair", "Dean", "Patrick", "Benjamin", "Russell", "Kieran", "Martyn", "Samuel", "Gerard", "Malcolm", "Bruce", "Greig", "Jordan", "Kyle", "Ben", "Gregor", "Rory", "Blair", "Aaron", "Murray", "Niall", "Wayne", "David", "Christopher", "Andrew", "James", "John", "Craig", "Steven", "Michael", "Scott", "Mark", "Paul", "Robert", "Stuart", "Ross", "Stephen", "Gary", "Kevin", "William", "Jamie", "Martin", "Ryan", "Alan", "Graeme", "Thomas", "Daniel", "Darren", "Richard", "Sean", "Colin", "Alexander", "Peter", "Iain", "Lee", "Ian", "Brian", "Graham", "Matthew", "Gordon", "Barry", "Adam", "Gavin", "Jonathan", "Neil", "Allan", "Marc", "Kenneth", "Kyle", "Fraser", "Shaun", "Jason", "Derek", "Grant", "Liam", "Anthony", "Joseph", "Stewart", "Greg", "Douglas", "Nicholas", "Calum", "George", "Simon", "Duncan", "Alistair", "Callum", "Dean", "Bryan", "Keith", "Euan", "Garry", "Philip", "Patrick", "Donald", "Edward", "Jordan", "Cameron", "Charles", "Gareth", "Martyn", "Lewis", "Ewan", "Aaron", "Benjamin", "Alastair", "Raymond", "Kieran", "Rory", "Alasdair", "Mohammed", "Samuel", "Malcolm", "Murray", "Blair", "Niall", "Kristopher", "Wayne", "Bruce", "Gerard", "Kris", "Russell", "David", "Christopher", "Andrew", "James", "John", "Scott", "Craig", "Michael", "Mark", "Steven", "Paul", "Ross", "Robert", "Stuart", "Ryan", "Gary", "Stephen", "William", "Jamie", "Kevin", "Martin", "Thomas", "Daniel", "Graeme", "Sean", "Alan", "Darren", "Richard", "Colin", "Matthew", "Lee", "Iain", "Graham", "Alexander", "Peter", "Brian", "Ian", "Neil", "Gordon", "Kyle", "Adam", "Jonathan", "Marc", "Shaun", "Fraser", "Jason", "Liam", "Gavin", "Grant", "Joseph", "Anthony", "Kenneth", "Stewart", "Barry", "Callum", "Allan", "Derek", "George", "Nicholas", "Greg", "Alistair", "Dean", "Calum", "Simon", "Philip", "Douglas", "Duncan", "Lewis", "Jordan", "Bryan", "Patrick", "Garry", "Cameron", "Edward", "Keith", "Euan", "Martyn", "Samuel", "Benjamin", "Donald", "Aaron", "Alasdair", "Ewan", "Charles", "Gareth", "Alastair", "Kieran", "Ben", "Rory", "Blair", "Raymond", "Jack", "Dale", "Bruce", "Murray", "Kristopher", "Mohammed", "Greig", "Kris", "Gregor", "David", "Christopher", "Scott", "Andrew", "James", "John", "Craig", "Michael", "Mark", "Steven", "Paul", "Ross", "Robert", "Stuart", "Ryan", "Stephen", "Gary", "Jamie", "Kevin", "William", "Sean", "Darren", "Martin", "Daniel", "Thomas", "Graeme", "Alan", "Jonathan", "Richard", "Lee", "Alexander", "Colin", "Jason", "Iain", "Liam", "Matthew", "Adam", "Calum", "Peter", "Graham", "Shaun", "Brian", "Gavin", "Ian", "Marc", "Neil", "Grant", "Kyle", "Fraser", "Gordon", "Callum", "Dean", "Nicholas", "Allan", "Joseph", "Lewis", "Kenneth", "Stewart", "Barry", "Anthony", "Greg", "Euan", "Derek", "George", "Simon", "Alistair", "Garry", "Douglas", "Jordan", "Duncan", "Patrick", "Samuel", "Aaron", "Charles", "Bryan", "Ewan", "Philip", "Benjamin", "Martyn", "Kieran", "Donald", "Jack", "Alasdair", "Cameron", "Rory", "Keith", "Gareth", "Blair", "Edward", "Alastair", "Luke", "Dale", "Kristopher", "Greig", "Raymond", "Gregor", "Malcolm", "Ben", "Niall", "Sam", "David", "Christopher", "Scott", "James", "Andrew", "Michael", "Craig", "John", "Ross", "Mark", "Jamie", "Paul", "Steven", "Stuart", "Robert", "Daniel", "Ryan", "Sean", "Stephen", "Gary", "William", "Darren", "Kevin", "Martin", "Graeme", "Thomas", "Jonathan", "Matthew", "Alan", "Alexander", "Iain", "Richard", "Jason", "Lee", "Callum", "Liam", "Calum", "Adam", "Colin", "Peter", "Fraser", "Shaun", "Neil", "Dean", "Brian", "Graham", "Grant", "Gavin", "Ian", "Gordon", "Marc", "Greg", "Nicholas", "Allan", "Stewart", "Anthony", "Kyle", "Lewis", "Jordan", "Joseph", "Kenneth", "Alistair", "Derek", "Barry", "Euan", "Douglas", "Philip", "Kieran", "Simon", "Aaron", "Jack", "Cameron", "George", "Ewan", "Garry", "Benjamin", "Blair", "Duncan", "Samuel", "Charles", "Bryan", "Dale", "Patrick", "Alasdair", "Alastair", "Rory", "Joshua", "Nathan", "Martyn", "Keith", "Donald", "Greig", "Ben", "Daryl", "Gregor", "Luke", "Edward", "Robbie", "Gareth", "Murray", "David", "Christopher", "Craig", "Scott", "Andrew", "Michael", "James", "John", "Ross", "Daniel", "Steven", "Jamie", "Mark", "Paul", "Ryan", "Stephen", "Sean", "Robert", "Stuart", "Gary", "Darren", "William", "Kevin", "Thomas", "Martin", "Matthew", "Liam", "Jonathan", "Callum", "Alan", "Calum", "Graeme", "Jordan", "Alexander", "Lee", "Richard", "Iain", "Adam", "Fraser", "Lewis", "Colin", "Grant", "Peter", "Dean", "Gavin", "Shaun", "Marc", "Ian", "Greg", "Gordon", "Brian", "Graham", "Nicholas", "Neil", "Stewart", "Euan", "Anthony", "Joseph", "Kieran", "Kyle", "Jack", "Jason", "Alistair", "Samuel", "Allan", "Aaron", "Kenneth", "George", "Barry", "Cameron", "Joshua", "Douglas", "Ewan", "Derek", "Benjamin", "Nathan", "Duncan", "Dale", "Blair", "Rory", "Patrick", "Simon", "Alasdair", "Garry", "Alastair", "Martyn", "Philip", "Charles", "Sam", "Daryl", "Gregor", "Edward", "Niall", "Donald", "Murray", "Keith", "Ben", "Bryan", "Connor", "Luke", "David", "Christopher", "Andrew", "Craig", "Scott", "Michael", "James", "Daniel", "Ryan", "Steven", "John", "Ross", "Jamie", "Mark", "Sean", "Paul", "Robert", "Stephen", "Stuart", "Matthew", "Gary", "Darren", "Thomas", "William", "Liam", "Jordan", "Kevin", "Callum", "Grant", "Martin", "Calum", "Alexander", "Lewis", "Adam", "Jonathan", "Shaun", "Kyle", "Fraser", "Lee", "Graeme", "Marc", "Peter", "Dean", "Alan", "Richard", "Greg", "Kieran", "Gavin", "Iain", "Cameron", "Euan", "Colin", "Neil", "Graham", "Ian", "Joseph", "Gordon", "Nicholas", "Jack", "Jason", "Aaron", "Connor", "Samuel", "Stewart", "Ewan", "Anthony", "Joshua", "Brian", "Conor", "Nathan", "Kenneth", "Allan", "Alistair", "Douglas", "Blair", "Benjamin", "Duncan", "Rory", "Barry", "Patrick", "Alasdair", "Dale", "Sam", "Declan", "Ben", "Derek", "George", "Charles", "Simon", "Gregor", "Edward", "Garry", "Greig", "Owen", "Donald", "Keith", "Alastair", "Philip", "Daryl", "Luke", "Robbie", "David", "Scott", "Andrew", "James", "Christopher", "Michael", "Craig", "Ryan", "Daniel", "Ross", "Jamie", "Sean", "John", "Jordan", "Robert", "Steven", "Liam", "Mark", "Paul", "Stuart", "Matthew", "Stephen", "Thomas", "Callum", "Darren", "Gary", "Lewis", "William", "Connor", "Calum", "Martin", "Grant", "Adam", "Alexander", "Kyle", "Lee", "Kevin", "Jonathan", "Shaun", "Fraser", "Kieran", "Jack", "Dean", "Cameron", "Peter", "Alan", "Iain", "Marc", "Greg", "Graeme", "Conor", "Ian", "Euan", "Gavin", "Richard", "Blair", "Colin", "Joseph", "Aaron", "Dale", "Neil", "Sam", "Jason", "Joshua", "Gordon", "Samuel", "Stewart", "Nathan", "Nicholas", "Anthony", "Douglas", "Rory", "Alistair", "Brian", "Allan", "Ewan", "George", "Duncan", "Graham", "Ben", "Benjamin", "Gregor", "Declan", "Patrick", "Dylan", "Kenneth", "Derek", "Alasdair", "Owen", "Greig", "Barry", "Aidan", "Gareth", "Josh", "Charles", "Daryl", "Garry", "Simon", "Robbie", "Alastair", "Andrew", "Ryan", "David", "Scott", "James", "Michael", "Christopher", "Ross", "Craig", "Jordan", "Daniel", "Jamie", "John", "Steven", "Sean", "Mark", "Liam", "Lewis", "Stuart", "Matthew", "Paul", "Thomas", "Robert", "Stephen", "Connor", "Callum", "Cameron", "Darren", "Calum", "Jack", "Gary", "Adam", "Alexander", "William", "Kieran", "Kyle", "Jonathan", "Fraser", "Grant", "Dean", "Kevin", "Shaun", "Martin", "Lee", "Alan", "Iain", "Gavin", "Peter", "Dylan", "Euan", "Dale", "Aaron", "Conor", "Greg", "Jason", "Marc", "Alistair", "Nathan", "Joseph", "Joshua", "Richard", "Anthony", "Nicholas", "Blair", "Samuel", "Declan", "Neil", "Benjamin", "Stewart", "Aidan", "Graeme", "Colin", "Ewan", "Allan", "Ben", "Ian", "Brian", "Graham", "Gordon", "Duncan", "George", "Sam", "Robbie", "Douglas", "Gregor", "Luke", "Jake", "Patrick", "Rory", "Alasdair", "Kenneth", "Charles", "Rhys", "Josh", "Philip", "Barry", "Alastair", "Garry", "Angus", "Daryl", "Simon", "Ryan", "Andrew", "Scott", "David", "Michael", "James", "Jordan", "Christopher", "Ross", "Craig", "Daniel", "Jack", "John", "Mark", "Connor", "Jamie", "Liam", "Sean", "Lewis", "Matthew", "Callum", "Cameron", "Steven", "Kieran", "Thomas", "Robert", "Stuart", "Calum", "Darren", "Stephen", "Paul", "Adam", "Kyle", "Fraser", "Alexander", "William", "Dean", "Lee", "Jonathan", "Gary", "Martin", "Shaun", "Dylan", "Dale", "Grant", "Kevin", "Conor", "Aaron", "Declan", "Peter", "Joseph", "Euan", "Marc", "Robbie", "Alan", "Jason", "Blair", "Sam", "Gavin", "Luke", "Joshua", "Nathan", "Iain", "Samuel", "Greg", "Anthony", "Neil", "Douglas", "Nicholas", "Stewart", "Alistair", "Colin", "Duncan", "Graeme", "Aidan", "Benjamin", "Rory", "Josh", "Alasdair", "Reece", "Jake", "Richard", "Gordon", "Ian", "Rhys", "Ben", "Ewan", "Gregor", "Patrick", "Graham", "Brian", "George", "Charles", "Allan", "Kenneth", "Angus", "Alastair", "Keiran", "Murray", "Niall", "Ryan", "Andrew", "Daniel", "Scott", "James", "David", "Connor", "Ross", "Jack", "Jordan", "Liam", "Craig", "Michael", "Christopher", "Kieran", "Lewis", "Cameron", "Sean", "Mark", "John", "Callum", "Jamie", "Matthew", "Calum", "Kyle", "Thomas", "Dylan", "Steven", "Stuart", "Robert", "Alexander", "Adam", "Darren", "Paul", "Fraser", "William", "Stephen", "Lee", "Grant", "Declan", "Dean", "Jonathan", "Shaun", "Conor", "Joshua", "Nathan", "Gary", "Aaron", "Euan", "Gavin", "Marc", "Jason", "Martin", "Kevin", "Dale", "Joseph", "Luke", "Greg", "Ben", "Sam", "Samuel", "Aidan", "Blair", "Robbie", "Rory", "Peter", "Josh", "Alan", "Ian", "Patrick", "Reece", "Benjamin", "Duncan", "Iain", "Alistair", "Ewan", "Anthony", "Stewart", "Jake", "Richard", "Gregor", "Brian", "Colin", "Nicholas", "Neil", "Angus", "Rhys", "Harry", "Gordon", "Alasdair", "Charles", "Graham", "Bradley", "Graeme", "Allan", "George", "Ciaran", "Keiran", "Douglas", "Murray", "Ryan", "Andrew", "Liam", "Jack", "Connor", "Scott", "James", "Daniel", "Ross", "Jordan", "Michael", "David", "Cameron", "Craig", "Kieran", "Lewis", "Christopher", "John", "Callum", "Jamie", "Sean", "Matthew", "Kyle", "Calum", "Mark", "Dylan", "Robert", "Thomas", "Adam", "Alexander", "Steven", "Darren", "Paul", "William", "Stuart", "Lee", "Fraser", "Stephen", "Declan", "Aaron", "Dean", "Shaun", "Aidan", "Conor", "Grant", "Euan", "Joshua", "Gary", "Jonathan", "Ben", "Joseph", "Nathan", "Martin", "Sam", "Gavin", "Peter", "Blair", "Robbie", "Marc", "Samuel", "Greg", "Reece", "Rory", "Jason", "Josh", "Alan", "Alistair", "Jake", "Luke", "Kevin", "Ewan", "Benjamin", "Harry", "Patrick", "Anthony", "Dale", "Gregor", "Colin", "Iain", "Ian", "George", "Nicholas", "Stewart", "Duncan", "Brandon", "Ciaran", "Hamish", "Brian", "Rhys", "Murray", "Neil", "Richard", "Angus", "Douglas", "Graeme", "Alasdair", "Bradley", "Owen", "Taylor", "Mohammed", "Ryan", "Andrew", "Jack", "Ross", "James", "Connor", "Scott", "Lewis", "David", "Michael", "Jordan", "Liam", "Daniel", "Cameron", "Matthew", "Kieran", "Jamie", "Christopher", "Kyle", "Callum", "Craig", "John", "Dylan", "Sean", "Thomas", "Adam", "Calum", "Mark", "Robert", "Fraser", "Alexander", "Declan", "Paul", "Aaron", "Stuart", "Euan", "Steven", "Darren", "William", "Lee", "Aidan", "Stephen", "Nathan", "Shaun", "Ben", "Joshua", "Conor", "Ewan", "Reece", "Samuel", "Jonathan", "Joseph", "Brandon", "Dean", "Marc", "Robbie", "Luke", "Rory", "Grant", "Peter", "Greg", "Sam", "Blair", "Gary", "Jason", "Martin", "Iain", "Josh", "Gavin", "Benjamin", "Kevin", "Gregor", "Jake", "Rhys", "Harry", "Alan", "George", "Nicholas", "Alistair", "Owen", "Angus", "Ciaran", "Bradley", "Duncan", "Anthony", "Patrick", "Stewart", "Neil", "Alasdair", "Taylor", "Jay", "Colin", "Ian", "Calvin", "Charles", "Murray", "Joe", "Conner", "Dominic", "Gordon", "Ryan", "Jack", "Ross", "Lewis", "Cameron", "James", "Connor", "Andrew", "Scott", "Callum", "Jordan", "Daniel", "David", "Matthew", "Liam", "Michael", "Kieran", "Craig", "Kyle", "Sean", "Jamie", "Dylan", "John", "Christopher", "Calum", "Adam", "Thomas", "Alexander", "Mark", "Nathan", "Robert", "Aaron", "Euan", "Fraser", "Paul", "Ewan", "Declan", "William", "Ben", "Stuart", "Aidan", "Stephen", "Steven", "Reece", "Robbie", "Joshua", "Lee", "Conor", "Shaun", "Darren", "Samuel", "Brandon", "Marc", "Joseph", "Dean", "Jonathan", "Luke", "Jake", "Josh", "Rory", "Greg", "Owen", "Grant", "Jason", "Sam", "Blair", "Martin", "Benjamin", "Gary", "Peter", "Gavin", "Rhys", "Iain", "Kevin", "Ciaran", "Jay", "Murray", "Alistair", "Harry", "Bradley", "Finlay", "Alan", "Gregor", "Taylor", "Nicholas", "Ethan", "Angus", "Duncan", "Charles", "Stewart", "Ronan", "Aiden", "Ian", "Anthony", "Neil", "George", "Charlie", "Jacob", "Max", "Hamish", "Jack", "Lewis", "Ryan", "Cameron", "Ross", "Andrew", "James", "Liam", "Scott", "Jordan", "Connor", "Callum", "Matthew", "Kieran", "Kyle", "Jamie", "David", "Daniel", "Michael", "Adam", "Craig", "Dylan", "John", "Sean", "Thomas", "Euan", "Christopher", "Robert", "Nathan", "Calum", "Ben", "Alexander", "Fraser", "Ewan", "Declan", "Mark", "William", "Robbie", "Aaron", "Aidan", "Reece", "Joshua", "Steven", "Lee", "Paul", "Brandon", "Samuel", "Joseph", "Owen", "Stuart", "Shaun", "Luke", "Jonathan", "Stephen", "Josh", "Rory", "Conor", "Sam", "Blair", "Gregor", "Finlay", "Darren", "Harry", "Rhys", "Dean", "Jake", "Benjamin", "Ronan", "Greg", "Jay", "Angus", "Jason", "Ciaran", "Morgan", "Ethan", "Grant", "Peter", "Marc", "Murray", "Martin", "Patrick", "Logan", "Bradley", "Gary", "Jacob", "Taylor", "Duncan", "Max", "Charles", "Iain", "Kevin", "Alan", "Alistair", "Anthony", "Aiden", "Stewart", "George", "Nicholas", "Ian", "Louis", "Marcus", "Mitchell", "Jack", "Lewis", "Ryan", "Cameron", "James", "Andrew", "Liam", "Matthew", "Jamie", "Callum", "Ross", "Jordan", "Daniel", "Kieran", "Connor", "Scott", "Kyle", "David", "Adam", "Dylan", "Michael", "Ben", "Thomas", "Craig", "Nathan", "Sean", "John", "Aaron", "Calum", "Christopher", "Alexander", "Robert", "Euan", "Joshua", "Declan", "Aidan", "Mark", "Robbie", "Luke", "Fraser", "Reece", "William", "Ewan", "Joseph", "Paul", "Brandon", "Lee", "Owen", "Josh", "Samuel", "Finlay", "Stuart", "Rhys", "Stephen", "Rory", "Jake", "Steven", "Sam", "Jay", "Benjamin", "Ethan", "Harry", "Shaun", "Aiden", "Darren", "Blair", "Marc", "Dean", "Taylor", "Angus", "Gregor", "Conor", "Jonathan", "Patrick", "Ciaran", "Greg", "Jason", "George", "Logan", "Peter", "Bradley", "Max", "Arran", "Mohammed", "Morgan", "Oliver", "Gary", "Murray", "Louis", "Martin", "Alan", "Alistair", "Grant", "Joe", "Keir", "Duncan", "Leon", "Mitchell", "Nicholas", "Tyler", "Jack", "Lewis", "Cameron", "Ryan", "James", "Callum", "Andrew", "Dylan", "Ross", "Jamie", "Liam", "Adam", "Matthew", "Daniel", "Scott", "Kieran", "David", "Connor", "Jordan", "Kyle", "Michael", "Ben", "Thomas", "John", "Aidan", "Craig", "Sean", "Nathan", "Alexander", "Joshua", "Calum", "Luke", "Euan", "Robbie", "William", "Declan", "Aaron", "Reece", "Christopher", "Ewan", "Fraser", "Josh", "Robert", "Mark", "Brandon", "Paul", "Ethan", "Jay", "Finlay", "Joseph", "Samuel", "Jake", "Sam", "Harry", "Logan", "Owen", "Lee", "Steven", "Benjamin", "Stephen", "Blair", "Gregor", "Rhys", "Rory", "Stuart", "Marc", "Taylor", "Dean", "Shaun", "Darren", "Ciaran", "Angus", "Jason", "Max", "Aiden", "Peter", "Conor", "Greg", "Martin", "Oliver", "Joe", "Jonathan", "Louis", "Kai", "Gary", "Tyler", "Murray", "George", "Leon", "Mohammed", "Alistair", "Arran", "Nicholas", "Anthony", "Lucas", "Patrick", "Evan", "Jacob", "Marcus", "Keir", "Mitchell", "Jack", "Lewis", "Cameron", "Ryan", "James", "Jamie", "Liam", "Matthew", "Ross", "Callum", "Kyle", "Dylan", "Ben", "Connor", "Adam", "Andrew", "Daniel", "Kieran", "Scott", "Nathan", "Michael", "Aidan", "Joshua", "Thomas", "David", "Alexander", "Aaron", "Josh", "Euan", "John", "Sean", "Luke", "Calum", "Jordan", "Robert", "Ewan", "Christopher", "Mark", "Jay", "Finlay", "Fraser", "Craig", "William", "Declan", "Robbie", "Logan", "Ethan", "Reece", "Brandon", "Samuel", "Joseph", "Benjamin", "Lee", "Sam", "Owen", "Rory", "Harry", "Paul", "Steven", "Jake", "Shaun", "Blair", "Max", "Rhys", "Oliver", "Aiden", "Taylor", "Kai", "Ciaran", "Gregor", "Stuart", "Dean", "Jonathan", "Stephen", "Peter", "Angus", "Darren", "Jason", "Marc", "Charlie", "Jacob", "Conor", "Louis", "Murray", "Tyler", "Kian", "Duncan", "Mohammed", "Gary", "George", "Arran", "Charles", "Patrick", "Joe", "Alex", "Bradley", "Finn", "Mitchell", "Leon", "Grant", "Lewis", "Jack", "Cameron", "James", "Kyle", "Ryan", "Ben", "Callum", "Matthew", "Adam", "Jamie", "Daniel", "Connor", "Liam", "Ross", "Dylan", "Andrew", "Aidan", "Nathan", "Kieran", "David", "Michael", "Joshua", "John", "Alexander", "Scott", "Aaron", "Thomas", "Josh", "Luke", "Logan", "Finlay", "Sean", "Calum", "Euan", "Ethan", "Christopher", "William", "Fraser", "Robert", "Craig", "Jay", "Samuel", "Robbie", "Owen", "Joseph", "Ewan", "Jordan", "Benjamin", "Reece", "Lee", "Mark", "Brandon", "Declan", "Harry", "Rory", "Aiden", "Sam", "Kai", "Oliver", "Blair", "Steven", "Max", "Shaun", "Rhys", "Paul", "Ciaran", "Jake", "Stuart", "Stephen", "Gregor", "Kian", "Charlie", "Taylor", "Tyler", "Jacob", "Angus", "Dean", "Darren", "Jonathan", "Marc", "Patrick", "Evan", "Louis", "Duncan", "Peter", "Alex", "Murray", "Arran", "George", "Jason", "Leon", "Conor", "Hamish", "Lucas", "Grant", "Mitchell", "Mohammed", "Finn", "Anthony", "Greg", "Marcus", "Lewis", "Jack", "Cameron", "James", "Ryan", "Jamie", "Liam", "Ben", "Kyle", "Callum", "Daniel", "Matthew", "Connor", "Adam", "Andrew", "Dylan", "Aidan", "Ross", "Scott", "Nathan", "Thomas", "Joshua", "Kieran", "Aaron", "Alexander", "David", "Finlay", "Logan", "Aiden", "Josh", "Michael", "Luke", "Sam", "Euan", "Sean", "William", "Ethan", "John", "Samuel", "Christopher", "Joseph", "Fraser", "Jay", "Robert", "Robbie", "Calum", "Benjamin", "Owen", "Craig", "Ewan", "Mark", "Declan", "Reece", "Rory", "Oliver", "Jake", "Max", "Ciaran", "Charlie", "Brandon", "Kai", "Lee", "Jordan", "Taylor", "Rhys", "Steven", "Harry", "Paul", "Louis", "Tyler", "Blair", "Shaun", "Jacob", "Murray", "Evan", "Stephen", "Arran", "Marc", "Angus", "Stuart", "Leo", "Archie", "Kian", "Gregor", "Leon", "Patrick", "Lucas", "Finn", "Jonathan", "Charles", "Hamish", "Harris", "Joe", "Jason", "Mackenzie", "Peter", "Conor", "Dean", "Alex", "Cole", "Darren", "Lewis", "Jack", "Callum", "James", "Cameron", "Ryan", "Jamie", "Kyle", "Daniel", "Matthew", "Liam", "Ben", "Dylan", "Adam", "Andrew", "Connor", "Alexander", "Thomas", "Aidan", "Aiden", "Joshua", "Logan", "Aaron", "Scott", "Ross", "Nathan", "David", "Finlay", "Euan", "John", "Luke", "Michael", "Samuel", "Calum", "William", "Kieran", "Josh", "Ethan", "Ewan", "Sean", "Fraser", "Sam", "Robert", "Jake", "Christopher", "Jay", "Owen", "Joseph", "Charlie", "Benjamin", "Robbie", "Max", "Rory", "Oliver", "Craig", "Declan", "Reece", "Harry", "Rhys", "Mark", "Tyler", "Brandon", "Leo", "Taylor", "Kai", "Angus", "Paul", "Lee", "Ciaran", "Louis", "Finn", "Steven", "Evan", "Gregor", "Cole", "Arran", "Blair", "Jacob", "Murray", "Kian", "Stephen", "Lucas", "Archie", "Leon", "Harris", "Mohammed", "Noah", "Lennon", "Stuart", "Harvey", "Mackenzie", "Shaun", "Conor", "Corey", "Brodie", "George", "Jordan", "Darren", "Charles", "Joe", "Jack", "Lewis", "Callum", "Ryan", "James", "Cameron", "Jamie", "Daniel", "Matthew", "Kyle", "Adam", "Ben", "Aaron", "Logan", "Andrew", "Connor", "Dylan", "Liam", "Thomas", "Alexander", "Finlay", "Joshua", "Nathan", "Aidan", "Aiden", "David", "Scott", "Ross", "Luke", "Calum", "Charlie", "Michael", "Sean", "Samuel", "John", "William", "Josh", "Robbie", "Ethan", "Kieran", "Harry", "Robert", "Sam", "Euan", "Fraser", "Owen", "Rhys", "Joseph", "Oliver", "Reece", "Ewan", "Jay", "Tyler", "Jake", "Max", "Rory", "Christopher", "Kai", "Arran", "Benjamin", "Craig", "Leo", "Mark", "Brandon", "Declan", "Lucas", "Cole", "Harris", "Angus", "Archie", "Shaun", "Lee", "Taylor", "Blair", "Ciaran", "Evan", "Leon", "Gregor", "Noah", "Lennon", "Murray", "Kenzie", "Finn", "Steven", "Jacob", "Luca", "Alfie", "Brodie", "Peter", "Kian", "Corey", "Harvey", "Stuart", "Hamish", "Patrick", "Bailey", "George", "Charles", "Paul", "Stephen", "Lewis", "Jack", "Ryan", "James", "Callum", "Cameron", "Daniel", "Liam", "Matthew", "Jamie", "Logan", "Finlay", "Kyle", "Adam", "Alexander", "Andrew", "Aiden", "Ben", "Connor", "Dylan", "Aaron", "Thomas", "Joshua", "David", "Luke", "Nathan", "Ross", "Charlie", "Aidan", "Ethan", "John", "Michael", "Samuel", "Calum", "Kieran", "Scott", "Fraser", "Josh", "William", "Oliver", "Rhys", "Harry", "Sean", "Owen", "Sam", "Christopher", "Robert", "Euan", "Jake", "Jay", "Kai", "Jayden", "Lucas", "Rory", "Tyler", "Joseph", "Reece", "Max", "Robbie", "Benjamin", "Ewan", "Alfie", "Archie", "Evan", "Taylor", "Leo", "Blair", "Leon", "Arran", "Angus", "Brandon", "Craig", "Murray", "Cole", "Jacob", "Zak", "Declan", "Lee", "Lennon", "Harris", "Mark", "Finn", "George", "Hayden", "Kenzie", "Alex", "Shaun", "Louis", "Gregor", "Caleb", "Luca", "Mason", "Kian", "Mohammed", "Paul", "Noah", "Harrison", "Riley", "Stuart", "Mackenzie", "Jack", "Lewis", "Daniel", "Liam", "James", "Ryan", "Callum", "Logan", "Matthew", "Cameron", "Alexander", "Dylan", "Aiden", "Aaron", "Kyle", "Ben", "Jamie", "Finlay", "Adam", "Andrew", "Thomas", "Joshua", "Connor", "Oliver", "Jayden", "David", "Nathan", "Charlie", "Luke", "Rhys", "Ethan", "Max", "Jay", "Michael", "Lucas", "Harry", "Scott", "Aidan", "Josh", "Calum", "John", "Samuel", "William", "Sean", "Alfie", "Robert", "Kieran", "Fraser", "Ross", "Ewan", "Joseph", "Euan", "Christopher", "Tyler", "Kai", "Archie", "Rory", "Owen", "Sam", "Reece", "Jake", "Leon", "Robbie", "Riley", "Benjamin", "Declan", "Arran", "Brandon", "Cole", "Taylor", "Evan", "Alex", "Craig", "Blair", "Harris", "Zak", "Finn", "Jacob", "Corey", "Leo", "Angus", "Kayden", "Mark", "Muhammad", "Kian", "Murray", "Caleb", "Lee", "Noah", "Oscar", "Mason", "Brodie", "Harrison", "Kenzie", "Mohammed", "Peter", "Luca", "Paul", "Hayden", "George", "Louis", "Jack", "Lewis", "James", "Logan", "Liam", "Daniel", "Aaron", "Ryan", "Cameron", "Callum", "Alexander", "Jamie", "Finlay", "Aiden", "Kyle", "Lucas", "Dylan", "Matthew", "Adam", "Nathan", "Thomas", "Ethan", "Charlie", "Oliver", "Connor", "Max", "Ben", "Joshua", "Jayden", "Harry", "William", "Michael", "Owen", "Andrew", "Alfie", "Jay", "David", "Joseph", "Samuel", "Rhys", "Ross", "Tyler", "John", "Rory", "Kai", "Luke", "Scott", "Sam", "Archie", "Euan", "Aidan", "Calum", "Josh", "Fraser", "Ewan", "Evan", "Robert", "Leon", "Benjamin", "Riley", "Leo", "Cole", "Jacob", "Christopher", "Kieran", "Sean", "Harris", "Arran", "Noah", "Caleb", "Reece", "Jake", "Oscar", "Kenzie", "Mason", "Robbie", "Kayden", "Angus", "Craig", "Murray", "Blair", "Mark", "Brodie", "Harvey", "Kian", "Finn", "Alex", "Zak", "Brandon", "Taylor", "Mohammed", "Muhammad", "Calvin", "Gregor", "Harrison", "Corey", "Hamish", "Declan", "Paul", "George", "Isaac", "Jack", "Lewis", "James", "Logan", "Daniel", "Ryan", "Aaron", "Oliver", "Liam", "Jamie", "Ethan", "Alexander", "Cameron", "Finlay", "Kyle", "Adam", "Harry", "Matthew", "Callum", "Lucas", "Nathan", "Aiden", "Dylan", "Charlie", "Connor", "Thomas", "Alfie", "Joshua", "William", "Jayden", "Andrew", "Kai", "Max", "Ben", "Samuel", "Luke", "Tyler", "Rory", "David", "Michael", "Riley", "Noah", "Cole", "Joseph", "John", "Archie", "Jacob", "Fraser", "Rhys", "Ross", "Calum", "Jay", "Josh", "Euan", "Mason", "Owen", "Sam", "Leo", "Robert", "Scott", "Leon", "Robbie", "Benjamin", "Caleb", "Oscar", "Harris", "Murray", "Sean", "Christopher", "Kieran", "Aidan", "Jake", "Evan", "Kayden", "Arran", "Angus", "Brodie", "Ewan", "Muhammad", "Alex", "Declan", "Finn", "Blair", "Ollie", "Reece", "Corey", "Kian", "Harrison", "Taylor", "Kaiden", "Kenzie", "Cody", "Craig", "Mohammed", "Calvin", "Mark", "Jude", "Luca", "Ciaran", "George", "Jack", "Lewis", "James", "Daniel", "Ethan", "Logan", "Alexander", "Harry", "Ryan", "Oliver", "Aaron", "Cameron", "Lucas", "Riley", "Matthew", "Callum", "Charlie", "Adam", "Finlay", "Aiden", "Dylan", "Jamie", "Alfie", "Kyle", "Liam", "Max", "Thomas", "Nathan", "Connor", "Jayden", "Mason", "Joshua", "Tyler", "Rory", "Andrew", "Jacob", "William", "Noah", "Kai", "Leo", "Archie", "Michael", "John", "Samuel", "Ben", "Luke", "Jay", "Cole", "Harris", "David", "Caleb", "Benjamin", "Fraser", "Joseph", "Jake", "Leon", "Rhys", "Aidan", "Josh", "Owen", "Robert", "Euan", "Kayden", "Sam", "Robbie", "Calum", "Arran", "Oscar", "Christopher", "Scott", "Brodie", "Angus", "Harrison", "Murray", "Reece", "Kaiden", "Muhammad", "Ewan", "Finn", "Ross", "Sean", "Ollie", "Kieran", "Blair", "Evan", "Jude", "Ruaridh", "Kian", "Isaac", "Mark", "Taylor", "Mohammed", "Cody", "Corey", "Declan", "Lennon", "Cooper", "Luca", "Hamish", "Jackson", "Zak", "Jack", "Lewis", "James", "Riley", "Logan", "Daniel", "Ethan", "Harry", "Alexander", "Oliver", "Max", "Charlie", "Finlay", "Tyler", "Aaron", "Adam", "Mason", "Alfie", "Ryan", "Liam", "Lucas", "Jamie", "Thomas", "Callum", "Cameron", "Dylan", "Kyle", "Harris", "Matthew", "Noah", "Rory", "Connor", "Joshua", "Nathan", "Jacob", "Aiden", "William", "Archie", "Leo", "Andrew", "Jayden", "Luke", "Rhys", "Kai", "David", "Cole", "Joseph", "Michael", "Samuel", "Leon", "John", "Benjamin", "Brodie", "Harrison", "Ben", "Robbie", "Josh", "Robert", "Owen", "Fraser", "Oscar", "Caleb", "Euan", "Jake", "Jay", "Finn", "Ross", "Calum", "Muhammad", "Blair", "Ollie", "Arran", "Angus", "Christopher", "Murray", "Scott", "Evan", "Cooper", "Sam", "Zac", "Kayden", "Alex", "Ewan", "Aidan", "George", "Olly", "Ruaridh", "Blake", "Declan", "Kaiden", "Isaac", "Reece", "Cody", "Calvin", "Luca", "Mark", "Shay", "Jude", "Sean", "Jackson", "Kian", "Kieran", "Jack", "James", "Lewis", "Oliver", "Daniel", "Logan", "Alexander", "Lucas", "Charlie", "Harry", "Mason", "Ethan", "Noah", "Harris", "Riley", "Finlay", "Alfie", "Jacob", "Max", "Adam", "Thomas", "Leo", "Cameron", "Ryan", "Aaron", "Matthew", "Nathan", "Kai", "Liam", "Archie", "Jamie", "Dylan", "Callum", "Joshua", "Tyler", "David", "Connor", "Luke", "William", "Oscar", "Kyle", "Rory", "Michael", "Andrew", "Aiden", "Samuel", "Brodie", "Jayden", "Joseph", "Harrison", "John", "Muhammad", "Benjamin", "Cole", "Robbie", "Leon", "Josh", "Caleb", "Cooper", "Jay", "Murray", "Sam", "Ben", "Fraser", "Finn", "Angus", "Calum", "Ruaridh", "Rhys", "Arran", "Kayden", "Euan", "Ollie", "Blake", "Christopher", "Robert", "Jake", "Blair", "Owen", "Isaac", "Jude", "Luca", "Aidan", "George", "Cody", "Ross", "Harvey", "Zac", "Alex", "Jackson", "Sean", "Calvin", "Hamish", "Kian", "Corey", "Callan", "Evan", "Reuben", "Declan", "Theo", "Jack", "James", "Lewis", "Oliver", "Logan", "Daniel", "Noah", "Charlie", "Lucas", "Alexander", "Mason", "Harris", "Max", "Harry", "Finlay", "Adam", "Aaron", "Ethan", "Cameron", "Jacob", "Callum", "Archie", "Alfie", "Leo", "Thomas", "Nathan", "Riley", "Rory", "Matthew", "Joshua", "Oscar", "Jamie", "Ryan", "Luke", "William", "Liam", "Dylan", "Samuel", "Andrew", "David", "John", "Connor", "Brodie", "Kyle", "Joseph", "Kian", "Benjamin", "Aiden", "Harrison", "Robert", "Ben", "Muhammad", "Michael", "Tyler", "Kai", "Euan", "Arran", "Jayden", "Jake", "Cole", "Ollie", "Sam", "Finn", "Leon", "Angus", "Caleb", "Ruaridh", "Josh", "Murray", "Fraser", "Isaac", "Owen", "Blake", "Jude", "Calum", "Cooper", "George", "Robbie", "Rhys", "Callan", "Christopher", "Evan", "Jay", "Theo", "Scott", "Luca", "Kayden", "Blair", "Freddie", "Zac", "Hamish", "Jackson", "Jaxon", "Calvin", "Carson", "Aidan", "Brody", "Zachary", "Alex", "Cody", "Mohammed", "Jack", "Oliver", "James", "Lewis", "Alexander", "Charlie", "Lucas", "Logan", "Harris", "Daniel", "Finlay", "Jacob", "Leo", "Mason", "Noah", "Harry", "Alfie", "Max", "Callum", "Aaron", "Adam", "Thomas", "Ethan", "Rory", "Cameron", "Archie", "Oscar", "Matthew", "Nathan", "Joshua", "Brodie", "William", "Liam", "Ryan", "Jamie", "Harrison", "Joseph", "Dylan", "Samuel", "Riley", "David", "Ollie", "Andrew", "Connor", "Luke", "Muhammad", "Jaxon", "Kyle", "Benjamin", "Michael", "Caleb", "Jackson", "George", "Finn", "Leon", "Fraser", "Murray", "Jake", "John", "Arran", "Angus", "Cole", "Robert", "Cooper", "Isaac", "Jayden", "Aiden", "Kai", "Theo", "Jude", "Ben", "Tyler", "Ruaridh", "Owen", "Blake", "Freddie", "Euan", "Josh", "Blair", "Robbie", "Hamish", "Kian", "Sam", "Aidan", "Jay", "Christopher", "Reuben", "Cody", "Luca", "Lachlan", "Elliot", "Evan", "Sonny", "Calum", "Henry", "Rhys", "Carson", "Harvey", "Calvin", "Callan", "Ross", "Zac", "Jack", "James", "Oliver", "Lewis", "Noah", "Logan", "Harry", "Alexander", "Leo", "Charlie", "Jacob", "Lucas", "Harris", "Finlay", "Alfie", "Ethan", "Mason", "Daniel", "Aaron", "Max", "Archie", "Matthew", "Thomas", "Adam", "Rory", "Nathan", "Joshua", "Callum", "Oscar", "Brodie", "Cameron", "Harrison", "William", "Finn", "Dylan", "Riley", "Liam", "Ollie", "Samuel", "Jaxon", "Connor", "Jamie", "Luke", "Caleb", "Theo", "Andrew", "Joseph", "Muhammad", "Jude", "Ryan", "Benjamin", "Arran", "Angus", "David", "Isaac", "John", "Cole", "Hamish", "Jackson", "Michael", "Robert", "Ben", "George", "Kai", "Luca", "Murray", "Kyle", "Leon", "Carter", "Aiden", "Blake", "Freddie", "Jake", "Owen", "Jayden", "Cooper", "Ruaridh", "Fraser", "Aidan", "Sam", "Blair", "Calvin", "Christopher", "Reuben", "Calum", "Euan", "Arthur", "Elliot", "Alex", "Zac", "Arlo", "Cody", "Henry", "Lachlan", "Robbie", "Josh", 
"Kayden", "Conor", "Hunter", "Callan", "Tyler" ];

    return names;

}

var PRNG = function(seed){
    this._seed = seed % 2147483647;
    if (this._seed <= 0){ this._seed += 2147483646;}
};

PRNG.prototype.next = function(a,b){
    this._seed = this._seed * 16807 % 2147483647;
    if(arguments.length === 0){
        return this._seed/2147483647;
    }else if(arguments.length === 1){
        return (this._seed/2147483647)*a;
    }else{
        return (this._seed/2147483647)*(b-a)+a;
    }
};

// var rng = new PRNG(1238473661);
// var a = rng.next();

// document.write("We made a random number: "+ a);

//---------- starting here generates the new array
       
function generate_array ( how_many_we_want, seed ) { // Generates random characters
    
    // Seed the random number just one time. 
    var rng = new PRNG( seed ); // Random number seed starts out the same every time.
    
    function getRandomArbitrary (min, max) {
        
        var a = rng.next(); // Random number between 0 and 1, that we can reproduce.
        return Math.floor(rng.next() * (max - min)) + min;
    }
    
    var my_array = [];
    var still_randomly_adding_characters = true;
    var how_many_characters_do_we_have = 0;
    var random_number; // between 1 and 26 inclusive
    var random_capital_letter; // A-Z
    
    
    while ( still_randomly_adding_characters ) { 
        // Get a random number between 1 and 26
        random_number = getRandomArbitrary(0, 25);
        // Convert the number to a letter
        // 65 = A, 66 = B, etc.
        random_capital_letter = String.fromCharCode(65 + random_number);
        
        // add random characters to my_array here...
        my_array.push(random_capital_letter);
        
        // Number goes up +1 every time we loop.
        how_many_characters_do_we_have++;
        
        if (how_many_characters_do_we_have == how_many_we_want) {
            still_randomly_adding_characters = false;
        }
    }
    
    return my_array; // Deliver the array back atcha' 
    
} // end generate_array()

function nameattack (needle, haystack) {
    
    // "needle" should be an array of names    
    // "haystack" should be an array of letters (in this case random letters.)
    
    /*
    needle = baby_names

    haystack = generate_array 
    */
    
        return "Hello";
}

//---- nameattack code ends here

function render_array ( letterbox_array, width, height ) {
        
    // This function will draw out the array
    // on the screen in HTML, with newlines.
    
    // document.write('width: '+ width +'<br />');
    // document.write('height: '+ height +'<br />');
    
    // example 10 width * 10 height = 100 (stop_here)
    var stop_here = (width * height);
    
    var screen = ""; // Whatever goes into this variable will eventually go into #wordsearch
    var line_of_letters = ""; // We search each line for a name.
    
    for (
        
        let array_index=0; 
        array_index < stop_here; 
        array_index++
        
        ) { 
        
        var result_of_modulus = array_index % width;
        
        // document.write(array_index +'%3='+ result_of_modulus);
        // Skip a line after 3rd element, 6th, and 9th        
        
        if (result_of_modulus == 0) { // skip a line
            // screen = screen + "<br />";
            screen += "<br />";
            
            // We got to the end of the line, so this is when we want to search for the name.
            if (line_of_letters.indexOf("YAN") !== -1) { // Found YAN!
                clearInterval(refreshIntervalId);
                // Search the line of letters.
                // Reset the line back to blank. 
                line_of_letters = "";
            }
        } 
        
        // Build the line of letters, one letter at a time. 
        line_of_letters += letterbox_array[array_index];
        
        // While array_index < 9, do this stuff...                        
        screen += ' '+ letterbox_array[array_index];
        
            
    } // end of our for loop
    
    return screen;
    
}  // end render_array()  

// generate_array() passes array to render_array()


function create_dimensional_array(width, height, ttt) {
    
    // We're making a grid of letters by defining rows and columns.
    // Declare variable that we're going to need for this function to work. 
    
    // This declaration did not work. 
    var letter_matrix = []; // Two dimensions and it's empty. 
    // We need to initialize all the values to zero before we get started.
    for (x = 0; x < width; x++) {
        letter_matrix[x] = [];
        for (y = 0; y < height; y++) {
            letter_matrix[x][y] = "0";
        }
    }
    
    
    var counter = 0; // This is a running total of how far we got into ttt
    
    for (y = 0; y < height; y++) {
        
        // First statement in a for loop executes before the loop starts.
        // Second statement in a for loop is the condition that must be met.
        // Third statement executes each time we reach the end of the loop.

        for (x = 0; x < width ; x++) {
            
            // variable on the right has the data, variable on the left gets the data on the right. 
            // In this case, ttt is one dimensional...
            // letter_matrix[x][y] = ttt[counter];        
            
            // This line should be the same...
            //console.log('letter_matrix['+ x +'][' + y + '] = '+ ttt[counter]);
            letter_matrix[x][y] = ttt[counter];
            // This line should be the same...
            //console.log('Did the assignment work? ['+ x +'][' + y + '] = '+ letter_matrix[x][y]);
            
            // We're done with this time around, now increment the counter for next time around. 
            counter++;
            
        } // end of x 
        
        //console.log("We're moving down to the next row.");
        
    } // end of y loop 
    
    // We want to fill the letter_matrix array with values
    
    /*
    First number changes faster. Second number changes slower. 
    We need two loops, an outer loop and an inner loop. 
    The outer loop changes more slowly, the inner loop changes faster.
    
    For example, a 4 x 4 matrix...
    letter_matrix[0,0] = ttt[0]; // Assign the first value. 
    letter_matrix[1,0] = ttt[1]; // Assign the second value. 
    letter_matrix[2,0] = ttt[2]; // Assign the third value...
    letter_matrix[3,0] = ttt[3]; // Assign the fourth value...
    Time to increase Y + 1 
    letter_matrix[0,1] = ttt[4]; // Assign the first value. 
    letter_matrix[1,1] = ttt[5]; // Assign the second value. 
    letter_matrix[2,1] = ttt[6]; // Assign the third value...
    letter_matrix[3,1] = ttt[7]; // Assign the fourth value...
    Time to increase Y + 1 
    letter_matrix[0,2] = ttt[8]; // Assign the first value. 
    letter_matrix[1,2] = ttt[9]; // Assign the second value. 
    letter_matrix[2,2] = ttt[10]; // Assign the third value...
    letter_matrix[3,2] = ttt[11]; // Assign the fourth value...
    ...and so on. */
    
    // Steps we need to complete...
    
    // [ 0, 0 ] [ 1, 0 ] [ 2, 0 ] ...
    // [ 0, 1 ] [ 1, 1 ] [ 3, 1 ] ...
    
    return letter_matrix; // This is the two dimensional array that we're going to create.
} // end create_dimensional_array()


function create_found_array(width, height) {
    
    // We're making a grid of true and false values.
    var found_matrix = []; // Two dimensions and it's empty. 
    // We need to initialize all the values to zero before we get started.
    for (var x = 0; x < width; x++) {
        found_matrix[x] = [];
        for (var y = 0; y < height; y++) {
            found_matrix[x][y] = "F";
        }
    }
    
    if (found_matrix === undefined ) {
        window.alert("found matrix is notdefined");
    }
    
    return found_matrix; // This is the two dimensional array that we're going to create.

            

} // end create_found_array()


function rotate_matrix90 (original_matrix) { // This is the algorithm we're making from the stuff on the whiteboard
    // "original" as in, before the letters we just turned 90 degrees.
    
    // Before we can rotate the array, we need to prepare some things...
    // We need the width, height, and a blank array to fill in with new values.
    var width = original_matrix.length;
    var height = original_matrix[0].length;
    // The new empty matrix is the "rotated_matrix" that we return from this function...
    var rotated_matrix = []; // Two dimensions and it's empty. 
    // We need to initialize all the values to zero before we get started.
    for (var x = 0; x < width; x++) {
        rotated_matrix[x] = [];
        for (var y = 0; y < height; y++) {
            rotated_matrix[x][y] = "_"; // Underscore represents "no letter"
        }
    }
    
    // We need to start assigning from original to rotated here...
    // "inner counter" is for columns (changes faster, inner loop)
    // "outer counter" is for rows (changes slower, once per row, outer loop)
    /*  FOR REFERENCE... 
        rotated_matrix [ic][oc] = original_matrix[oc, height - ic];
        rotated_matrix [1 , 0] = original_matrix [0 , 4];
        rotated_matrix [2 , 0] = original_matrix [0 , 3];
        rotated_matrix [3 , 0] = original_matrix [0 , 5];
        rotated_matrix [4 , 0] = original_matrix [0 , 5]; */
    var oc = 0; // Starting from the first row.
    var ic; // Starting from the first column. Remember to reset to zero, each time around!
    
    while (oc < height) { // Iterate from top to bottom.
        ic = 0;
        while (ic < width) { // Iterate from left to right
            rotated_matrix[ic][oc] = original_matrix[oc][height - ic - 1];
            ic++;
        } // end inner loop
        oc++;
    } // end outer loop
  
    // TODO: Code a nested loop that rotates the letters in the matrix. 
    return rotated_matrix;
}


function search_matrix (letter_matrix, word, found_matrix) { // Search for this word in letter_matrix, from left to right. 

    // Returns true if the word is found
    // Returns false if the word is NOT found

    var found = false; // We havent found anything in this matrix yet
    var x, y, found_x, found_y;
    var width = letter_matrix.length;
    var height = letter_matrix[0].length;
    
    y=0; // Start at the top
    while (y < height)  {
        x = 0; // Start x from 0 for each new row.
        // Starting to search for the "word" in this new row. 
        var search_string = "";
        while (x < width) {
            search_string += letter_matrix[x][y]; //we're adding one letter at a time to build the row of letters
            // my_screen += "x is "+ x +" and y is "+ y + "<br />";
            x++;
        }
        y++; // now we have a full row of letters to search
        var search_result = search_string.indexOf( word );
        
        if (search_result > -1) { // found it
            x = search_result + 1; // Starting from 0 
        }
        
        if (search_result > -1) { // We found the word
            found = true;
            found_x = x-1;
            found_y = y-1;
            // We only EVER search from left to right.
            // TODO "found_matrix" is undefined... why doesn't line 284 work? 
            // LOOP THE WHOLE LENGTH OF THE word...
            var i = 0;
            while (i < word.length) { // Iterate "T" through the whole word...
                found_matrix[found_x + i][found_y] = "T";
                i++;
            }
        } 
    }
    
    return { found, found_x, found_y, found_matrix };
        
} // end search_matrix()


function render_background_found_colors(found_matrix) {
    var my_screen = ""; 
    var x = 0; // this counts the width of the matrix...
    var y = 0; //this counts the lenght of the matrix
    var width = found_matrix.length;
    var height = found_matrix[0].length;
    var t_or_f = "&nbsp;";
    
    while (y < height)  {
        x = 0; // Start x from 0 for each new row. 
        while (x < width) {
            if (found_matrix[x][y] == "F") {
                t_or_f = "&nbsp;";
            } else t_or_f = '<span style="color:#FF7799;font-weight:bold;">^</span>';
                        
            my_screen += t_or_f + '&nbsp;';
            // my_screen += "x is "+ x +" and y is "+ y + "<br />";
            x++;
        }
        y++;
        my_screen+= "<br />";
    }
    
    return my_screen;
}


function render_matrix (letter_matrix) { 
    // This function receives a matrix of letters, and outputs some HTML code that draws the letters in a box
    
    // Declare our variables here...
    var my_screen = ""; 
    var x = 0; // this counts the width of the matrix...
    var y = 0; //this counts the lenght of the matrix
    var width = letter_matrix.length;
    var height = letter_matrix[0].length;
    
    
    while (y < height)  {
        x = 0; // Start x from 0 for each new row. 
        while (x < width) {
            my_screen += letter_matrix[x][y] + " ";
            // my_screen += "x is "+ x +" and y is "+ y + "<br />";
            x++;
        }
        y++;
        my_screen+= "<br />";
    }
    
    // This gives us our Y dimension, which is the outer loop.
    // my_screen += "The length is..."+ letter_matrix.length + "<br />";
    // This gives us our X dimension, which is the inner loop.
    // my_screen += "The length of the first row..."+ letter_matrix[0].length + "<br /><br />";
        
    /* Let's do a 3x3 test box... screen += is the same as screen = screen + ...whatever
    my_screen += letter_matrix[0][0] + letter_matrix[1][0] + letter_matrix[2][0] + "<br />"; // First row
    my_screen += letter_matrix[0][1] + letter_matrix[1][1] + letter_matrix[2][1] + "<br />"; // Second row
    my_screen += letter_matrix[0][2] + letter_matrix[1][2] + letter_matrix[2][2] + "<br />"; // Third row
    */
    
    return my_screen;
} // end render_matrix()


function mix_up_letters (width, height, name) { 

    var ttt = [];    
    var my_screen = ""; // Nothing on the screen yet...
    var letter_matrix = []; // same array, but two dimensions
    var total_chars = width * height;
    
    // THIS IS PREPRATATION STAGE...
    
    // We generate a string of random letters
    ttt = generate_array(total_chars, times); // reusing the counter as a seed.
    
    // Convert the random letters into a multi-dimensional array.
    letter_matrix = create_dimensional_array(width, height, ttt);
    var original_matrix = letter_matrix;
    // Initializes a separate "found matrix" that's full of true/false values...
    // True = found a letter. False = didn't find anything.
    var found_matrix = create_found_array(width, height);
    
    
    // We don't need to draw every single matrix, let's draw every 10th one...
   result_of_modulus = times % 10;
    if (result_of_modulus == 0) {
        my_screen = render_matrix(letter_matrix);
        my_screen += "<br /><br />Searching for name " + name + "<br />Iteration #"+ times;
        $(function() {
            $("#wordsearch").html(my_screen);
        });
    }
    
    // This needs to loop four times... 
    var rotateCounter = 0;
    var matrix;
    while (rotateCounter < 4) {
        // var { found, found_x, found_y } = search_matrix(letter_matrix, name);
        // Another way of doing the same thing...
        matrix = search_matrix(letter_matrix, name, found_matrix);
        // matrix.found_matrix has the true/false information that highlights where the name was found.
        
        if ( matrix.found == true ) { // Searching for someone's name in the matrix. 
            // We found the name, and so refresh the screen with the matrix that had the person's name. 
            // Fresh screen, because we didn't concat        
            my_screen = render_matrix(original_matrix);
            // After the letters are drawn, we want to draw a colorful background UNDER the letters. 
            
            // Rotate the found_matrix to match what we found, in any direction (up down left or right)
            if (rotateCounter == 1) { // Counter clockwise 3 turns.
                found_matrix = rotate_matrix90(found_matrix);
                found_matrix = rotate_matrix90(found_matrix);
                found_matrix = rotate_matrix90(found_matrix);
            }
            
            if (rotateCounter == 2) { // Counter clockwise 2 turns.
                found_matrix = rotate_matrix90(found_matrix);
                found_matrix = rotate_matrix90(found_matrix);
            }
            
            if (rotateCounter == 3) { // Counter clockwise 1 turn. 
                found_matrix = rotate_matrix90(found_matrix);
            }
            
            // Let's try to bring the "found colors" back to the top of the screen. 
            my_screen += '<div>';
                my_screen += render_background_found_colors(found_matrix);
            my_screen += '</div>';
            
            my_screen += "<br /><br />Found the name " + name + "<br />Iteration #"+ times;
            my_screen += "<br />Coordinates: "+ matrix.found_x +", "+ matrix.found_y;
            
            // Draw whatever happened...
            $(function() {
                $("#wordsearch").html(my_screen);
            });
            clearInterval(refreshIntervalId);
        } // Only runs if it was found...
        
        // letter_matrix gets rotated 90 degrees...
        
        if (rotateCounter < 4) { // No point rotating the matrix the last time around. 
            letter_matrix = rotate_matrix90(letter_matrix);
            found_matrix = rotate_matrix90(found_matrix);
        } // So it's only rotated 3 times... 
        
        rotateCounter++;
    } // Rotate 90 degrees, then start over again...
    
    times++;
    
} // end mix_up_letters()



//---- THE APP STARTS HERE ----

var times = 0; // Global variable that keeps track of how many times we generated random letters. 
var width = 30;
var height = 30;
var name = prompt("Enter name to search", "JOHN").toUpperCase();

// Bring this back...
refreshIntervalId = setInterval(function() {
    
    mix_up_letters(width, height, name);
    
    if (times > 1000000000) { clearInterval(refreshIntervalId); }
    
}, 1);


