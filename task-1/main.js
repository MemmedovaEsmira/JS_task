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

// const gitConnectPersons = persons.map(
//     (i) =>`name-${i.name} `
// );
// console.log(gitConnectPersons);



//   2. Get the array of all heights

// const gitConnectPersons = persons.map(
//     (i) =>`height-${i.height} `
// );
// console.log(gitConnectPersons);
  
//   3. Get the array of objects with just name and height properties

// const gitConnectPersons = persons.map(
//     (i) =>`name-${i.name}   height-${i.height}`
// );
// console.log(gitConnectPersons);

//   4. Get the array of all first names

  

  
  
//   **FILTER**
  
//   1. Get characters with a mass greater than 100
    //  const gitConnectPersons = persons.filter ((item)=>item.mass > 100) 
    // console.log(gitConnectPersons)
  
//   2. Get characters with a height of less than 200
    //  const gitConnectPersons = persons.filter ((item)=>item.height < 200) 
    //  console.log(gitConnectPersons)
  
//   3. Get all male characters 
    //  const gitConnectPersons = persons.filter ((item)=>item.gender==`male`) 
    //  console.log(gitConnectPersons)


//   4. Get all female characters
    //  const gitConnectPersons = persons.filter ((item)=>item.gender==`female`) 
    //  console.log(gitConnectPersons)
  
  
  
//   **SORT**
  
//   1. Sort by mass
    //  const gitConnectPersons = persons.sort((a, b) =>a.mass-b.mass);
    //  console.log(gitConnectPersons)

  
//   2. Sort by height
    //  const gitConnectPersons = persons.sort((a, b) =>a.height-b.height);
    //  console.log(gitConnectPersons)
  
//   3. Sort by name
      
//   4. Sort by gender
        
  
  
  
//   **EVERY**
  
//   1. Does every character have blue eyes?
    //  const gitConnectPersons = persons.every ((item)=>item.eye_color==`blue`)
    //  console.log(gitConnectPersons);
  
//   2. Does every character have a mass of more than 40?
    // const gitConnectPersons = persons.every ((item)=>item.mass>40)
    // console.log(gitConnectPersons);
  
//   3. Is every character shorter than 200?
    // const gitConnectPersons = persons.every ((item)=>item.height>200)
    // console.log(gitConnectPersons);

//   4. Is every character male?
    // const gitConnectPersons = persons.every ((item)=>item.gender=="male")
    // console.log(gitConnectPersons);