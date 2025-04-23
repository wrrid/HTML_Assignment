const urls = [
  'https://pokeapi.co/api/v2/pokemon/ditto',
  'https://pokeapi.co/api/v2/pokemon/pikachu',
  'https://pokeapi.co/api/v2/pokemon/cloyster',
  'https://pokeapi.co/api/v2/pokemon/udf'
];

async function runAll() {
  const result = await Promise.all(urls.map(async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return {name:data.name, types: data.types} ;
  }));

  console.log('All pokemon:',result);
  return result;
}
//runAll();

async function setAll() {
  const result = await Promise.allSettled(urls.map(async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return {name:data.name, types: data.types};
  }));

  const final = result.map( r => 
  r.status === 'fulfilled' ? r.value : {error:true, reason:r.reson}
  );

  console.log('Allset pokemon:',final);
  return final;
}

//setAll();

async function raceAll() {
  const result = await Promise.race(urls.map(async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log('Race finish with:',data.name );
    return {name:data.name, types: data.types} ;
  }));

  console.log('Race result:',result);
  return result;
}

raceAll()


const urlWrong = [
  'https://pokeapi.co/api/v2/pokemon/udf',
  'https://pokeapi.co/api/v2/pokemon/pikachu',
  'https://pokeapi.co/api/v2/pokemon/cloyster',
  'https://pokeapi.co/api/v2/pokemon/udf'
];

async function anyPoke(){
  const result = await Promise.any(urlWrong.map(async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log('Any :' , data.name);
    return {name:data.name, types: data.types} ;
  }));
  
  console.log('promise.any result', result);
  return result;
  
}

anyPoke();