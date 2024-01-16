
// import Fetching2 from "../fetching2/page";
import Card from "../card/page";
import Fetching2 from "../fetching2/page";

type proptypes = {
    
        propdata:{pokename: string;
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
        pokedesc: string;}[]

    
  };




// export default async function Fetching({
//     children,
//   }: {
//     children: React.ReactNode
//   }) {
//     console.log(children)
//     let xyz;
    // if(propdata!=undefined){xyz = propdata}
export default function Fetching({propdata}:proptypes) {
    // console.log(propdata)
    // let xyz;
    // if(propdata!=undefined){xyz = propdata}
    console.log(propdata)

    
    return(
        <>
        
        <div className="container mx-auto p-8 px-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
     {propdata?.map((elements: any) => (
        <div key={elements.pokeid}>
          <Card
            pokename={elements.pokename}
            imgurl={elements.imgurl}
            pokeid={elements.pokeid}
            pokeh={elements.pokeh}
            pokew={elements.pokew}
            pokeab={elements.pokeab}
            poketyp={elements.poketyp}
            pokestat={elements.pokestat}
            pokeggrp={elements.pokeggrp}
            pokevochain={elements.pokevochain}
            pokewa={elements.pokewa}
            pokegen={elements.pokegen}
            pokedesc={elements.pokedesc}
          />
        </div>
      ))}
    </div>
  </div>
        
        
        </>
        
    )
    
}