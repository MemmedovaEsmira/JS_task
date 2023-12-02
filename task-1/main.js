const persons = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
  ];
  
  
  
  
//   **MAP**
  
//   1. Get the array of all names

// const getConnectPersons = persons.map(
//     (i) =>`name-${i.name} `
// );
// console.log(getConnectPersons);



//   2. Get the array of all heights

// const getConnectPersons = persons.map(
//     (i) =>`height-${i.height} `
// );
// console.log(getConnectPersons);
  
//   3. Get the array of objects with just name and height properties

// const getConnectPersons = persons.map(
//     (i) =>`name-${i.name}   height-${i.height}`
// );
// console.log(getConnectPersons);

//   4. Get the array of all first names
fullPersonNames = persons.map( person =>  { return `${person.firstName} ${person.lastName}` } )
console.log(getConnectPersons)

  
//   **FILTER**
  
//   1. Get characters with a mass greater than 100
    //  const getConnectPersons = persons.filter ((item)=>item.mass > 100) 
    // console.log(getConnectPersons)
  
//   2. Get characters with a height of less than 200
    //  const getConnectPersons = persons.filter ((item)=>item.height < 200) 
    //  console.log(getConnectPersons)
  
//   3. Get all male characters 
    //  const getConnectPersons = persons.filter ((item)=>item.gender==`male`) 
    //  console.log(getConnectPersons)


//   4. Get all female characters
    //  const getConnectPersons = persons.filter ((item)=>item.gender==`female`) 
    //  console.log(getConnectPersons)
  
  
  
//   **SORT**
  
//   1. Sort by mass
    //  const getConnectPersons = persons.sort((a, b) =>a.mass-b.mass);
    //  console.log(getConnectPersons)

  
//   2. Sort by height
    //  const getConnectPersons = persons.sort((a, b) =>a.height-b.height);
    //  console.log(getConnectPersons)
  
//   3. Sort by name
    //   persons.sort((a,b))
//   4. Sort by gender
        
  
  
  
//   **EVERY**
  
//   1. Does every character have blue eyes?
    //  const getConnectPersons = persons.every ((item)=>item.eye_color==`blue`)
    //  console.log(getConnectPersons);
  
//   2. Does every character have a mass of more than 40?
    // const getConnectPersons = persons.every ((item)=>item.mass>40)
    // console.log(getConnectPersons);
  
//   3. Is every character shorter than 200?
    // const getConnectPersons = persons.every ((item)=>item.height>200)
    // console.log(getConnectPersons);

//   4. Is every character male?
    // const getConnectPersons = persons.every ((item)=>item.gender=="male")
    // console.log(getConnectPersons);