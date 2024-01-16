import { Spinner } from "@nextui-org/react";
import Card from "./card/page";
import FullView from "./fullview/page";
import Navigation from "./navbar/page";
import Fetchingd from "./fetching2/page";
import Temp from "./temp/page";
import Fetching from "./fetching/page";
import SearchBar from "./search/page";

type proptypes = {
  data:
  {pokename: string;
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




export default async function Home({searchParams}: {searchParams: { [key: string]: string | string[] | undefined }
}) {
  
  const search = typeof searchParams.search === 'string' ? searchParams.search : undefined
  const firstData = await Fetchingd({offset:0})
  console.log(firstData.props.children)
  const firstDataHolder = await firstData.props.children
  // const filteredData = await Fetching({propdata:firstDataHolder, search:'sss'})


  return (
    <div className="bg-my-bg">
    {/* <div className="bg-my-bg"> */}
    <Navigation searchParams={searchParams}/>
    {/* <Fetching data = {firstData}/> */}
    {/* <SearchBar search={search}/> */}
    {/* <Fetching propdata={firstDataHolder}/> */}
    <Temp propdata={firstDataHolder} />
    {/* <Temp propdata={firstDataHolder} search={search}/> */}
    {/* <Temp data={firstData}/> */}
    </div>
  )
}


// <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
//     <div class="md:flex"></div>