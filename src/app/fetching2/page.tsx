import Card from "../card/page";
import InfiniteScroll from 'react-infinite-scroll-component';
import Fetching from "../fetching/page";


let offset=0;

type proptypes = {
    
  offset:number
};

type ftype = {
  name: string;
  url: string;
};


const data: {
  pokename: string;
        pokeid: number;
        imgurl: string;
        pokeh: number;
        pokew: number;
        pokeab: string[];
        poketyp: string[];
        pokestat: { statName: string; statvalue: number }[];
        pokeggrp: string[];
        pokevochain: string;
        pokewa: string[];
        pokegen: string;
        pokedesc: string;
}[] = [];


const filteredData: {
  pokename: string;
        pokeid: number;
        imgurl: string;
        pokeh: number;
        pokew: number;
        pokeab: string[];
        poketyp: string[];
        pokestat: { statName: string; statvalue: number }[];
        pokeggrp: string[];
        pokevochain: string;
        pokewa: string[];
        pokegen: string;
        pokedesc: string;
}[] = [];

const filteredData2: {
  pokename: string;
        pokeid: number;
        imgurl: string;
        pokeh: number;
        pokew: number;
        pokeab: string[];
        poketyp: string[];
        pokestat: { statName: string; statvalue: number }[];
        pokeggrp: string[];
        pokevochain: string;
        pokewa: string[];
        pokegen: string;
        pokedesc: string;
}[] = [];











//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export default async function Fetchingd({offset}:proptypes) {


  async function getFirstData() {
    const level1 = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=50`
    );
    if (!level1) {
      throw new Error("no data found");
    }
    return level1.json();
  }
  
  async function getSecondData(urlpara: string) {
    const level2 = await fetch(`${urlpara}`);
    if (!level2) {
      throw new Error("no data found");
    }
    return level2.json();
  }
  
  async function getThirdData(urlpara: string) {
    const level3 = await fetch(`${urlpara}`);
    if (!level3) {
      throw new Error("no data found");
    }
    return level3.json();
  }
  
  async function getWeakAgainstData(urlpara: string) {
    const level4 = await fetch(`${urlpara}`);
    if (!level4) {
      throw new Error("no data found");
    }
    return level4.json();
  }
  
  async function getGenderData(name: string) {
    const level5 = await fetch("https://pokeapi.co/api/v2/gender/1/");
    const level6 = await fetch("https://pokeapi.co/api/v2/gender/2/");
    let femaleList = await level5.json();
    let maleList = await level6.json();
    let retgen = "Genderless";
    femaleList.pokemon_species_details.forEach((element: any) => {
      if (element.pokemon_species.name == name) {
        if (element.rate == 8) {
          retgen = "Female";
        } else {
          maleList.pokemon_species_details.forEach((element: any) => {
            if (element.pokemon_species.name == name) {
              retgen = "Male, Female";
            }
          });
        }
      }
    });
    maleList.pokemon_species_details.forEach((element: any) => {
      if (element.pokemon_species.name == name) {
        if (element.rate == 0) {
          retgen = "Male";
        } else {
          femaleList.pokemon_species_details.forEach((element: any) => {
            if (element.pokemon_species.name == name) {
              retgen = "Male, Female";
            }
          });
        }
      }
    });
    return retgen;
  }
  
























  

  let desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam et totam veniam velit maiores optio autem libero esse ad sit praesentium tempore a aspernatur perspiciatis, quaerat illum placeat in quam tempora. Ratione laudantium assumenda ipsum a odio possimus explicabo sed.";

  async function getAllData(){
    const names = await getFirstData();
    names.results.forEach(async (element: ftype) => {
    let abc = await getSecondData(element.url);
    let def = await getThirdData(abc.species.url);
    let wa = await getWeakAgainstData(abc.types[0].type.url);
    if(data[0]?.pokeid!=1)
    {data.push({
      pokename: abc.name,
      pokeid: abc.id,
      imgurl: abc.sprites.other.dream_world.front_default,
      pokeh: abc.height,
      pokew: abc.weight,
      pokeab: abc.abilities.map((element: any) => element.ability.name),
      poketyp: abc.types.map((element: any) => element.type.name),
      pokestat: abc.stats.map((element: any) => ({
        statName: element.stat.name,
        statValue: element.base_stat,
      })),
      pokeggrp: def.egg_groups.map((element: any) => element.name),
      pokewa: wa.damage_relations.double_damage_from.map(
        (element: any) => element.name
      ),
      pokevochain: def.evolution_chain.url,
      pokegen: await getGenderData(abc.name),
      pokedesc: desc,
    });}
    data.sort((a, b) => a.pokeid - b.pokeid);

    // else{if(filteredData.length<1){data.forEach((el)=>filteredData.push(el))}}
    // filteredData.sort((a, b) => a.pokeid - b.pokeid);
    });
    
      // console.log("after filter",filteredData)
    
  }

  // filteredData.push(...data)

  getAllData()
// if(typeof search != undefined){if(search==''){
//   filteredData.push(...data)
// }else{

// if(typeof search === 'number'){
//   data.forEach((el)=>{
//     if(el.pokeid==search){
//       filteredData.push(el)
//     }
//   })
// }else if(typeof search === 'string'){
//   data.forEach((el)=>{
//     if(el.pokename==search){
//       filteredData.push(el)
//     }
//   })
// }else{
//   filteredData.push(...data)
// }
// }}








  return (
    <>
      


          
    {/* <div className="container mx-auto p-8 px-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
      {data.map((elements: dtype) => (
        <div key={elements.id}>
          <Card
            pokename={elements.name}
            imgurl={elements.cardimage}
            pokeid={elements.id}
            pokeh={elements.height}
            pokew={elements.weight}
            pokeab={elements.abilities}
            poketyp={elements.type}
            pokestat={elements.stats}
            pokeggrp={elements.eggGroups}
            pokevochain={elements.evolutionChainUrl}
            pokewa={elements.weakAgainst}
            pokegen={elements.gender}
            pokedesc={elements.description}
          />
        </div>
      ))}
    </div>
  </div> */}


        {/* }
      </InfiniteScroll> */}

      {/* <Fetching propdata={data}/> */}
      {/* {search?filteredData2:data} */}
      {data}
      {/* {filteredData} */}





    </>
  );
}

// names.results.map((elements:ftype)=>(
//     <div key={elements.name} >
//             <Card pokename = {elements.name} pokeurl = {elements.url}/>
//     </div>)
// )

//https://pokeapi.co/api/v2/ability/1/
//https://pokeapi.co/api/v2/pokemon/1



{/* <div className="container mx-auto p-8 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        {data.map((elements: dtype) => (
          <div key={elements.id}>
            <Card
              pokename={elements.name}
              imgurl={elements.cardimage}
              pokeid={elements.id}
              pokeh={elements.height}
              pokew={elements.weight}
              pokeab={elements.abilities}
              poketyp={elements.type}
              pokestat={elements.stats}
              pokeggrp={elements.eggGroups}
              pokevochain={elements.evolutionChainUrl}
              pokewa={elements.weakAgainst}
              pokegen={elements.gender}
              pokedesc={elements.description}
            />
          </div>
        ))}
      </div>
    </div> */}