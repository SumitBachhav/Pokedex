'use client'


import React, { useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Fetchingd from '../fetching2/page';
import { useState } from 'react';
import { useInView } from 'framer-motion';
import { Spinner } from '@nextui-org/react';
import Fetching from '../fetching/page';
import loadData from '../load-data/page';



let ofset = 0
const uniqueIds1 = new Set();
const uniqueIds2 = new Set();
const uniqueIds3 = new Set();

type proptypes = {
  propdata:
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

type pd =
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



// nitialState: never[] | (() => never[])): [never[], React.Dispatch<React.SetStateAction<never[]>>]

// R


export default function Temp( {propdata}:proptypes)

{

  const ser = useSearchParams();
  // let data:proptypes = await Fetchingd(0)

  const[statedata, setstatedata]=useState(propdata)
  let[stateoffset, setstateoffset]=useState<number>(0)
  const ref = useRef(null)
  const isInView = useInView(ref)


  const search = typeof ser.get('search') === 'string' ? ser.get('search') : undefined
  const types = typeof ser.get('types') === 'string' ? ser.get('types') : undefined

  function parent(){
    const next = stateoffset + 30;
    
    console.log("inside temp",search,"type",typeof search)
    async function loadMoreData(){

      // const next = ofset + 30;
      // console.log("next",next)
      
      const loadTemppData = await Fetchingd({offset:next})
  
      console.log("new offset",next)
  
      let x = await loadTemppData.props.children;
      console.log("from x",x)
      setstateoffset(next)
      if (x?.length)
      // if (x[0]?.pokeid==statedata[-1]?.pokeid + 1) 
      {

        let newArr = [...propdata,...x]
        
        setstatedata(newArr)
        // setstatedata(x)
      }
   
    }
    loadMoreData();
  }

  function filterd(){

    if(search){
      console.log(search)
      const tempArray: {
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
      statedata.forEach((el)=>{if(el.pokename.includes(search)){tempArray.push(el)}})
      
      
      tempArray.forEach((el:any)=>{if(!uniqueIds1.has(el.pokeid)){uniqueIds1.add(el.pokeid);filteredData.push(el);}})
  }else{
    
    statedata.forEach((el:any)=>{if(!uniqueIds2.has(el.pokeid)){uniqueIds2.add(el.pokeid);filteredData.push(el);}})
  }

  if(types){
    const tempArray: {
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
    if(search!=undefined){
      filteredData.forEach((el)=>{if(el.poketyp.includes(types)){tempArray.push(el)}})
      tempArray.forEach((el:any)=>{if(!uniqueIds1.has(el.pokeid)){uniqueIds3.add(el.pokeid);filteredData.push(el);}})
    }
  }

}
  

useEffect(()=>{
  if(search){
    parent()
  }
},[search])


  useEffect(() => {
    if (isInView) {
      // ofset=ofset + 30;
      parent()
      filterd()
      // loadMoreData()
    }
  }, [isInView]);



  return (
  <>
 

        <Fetching propdata = {filteredData} />

        <div ref={ref} className='justify-center justify-items-center ml-[50%]'>
            <Spinner/>
        </div>
    
  </>
    )
}

//{searchParams}:{searchParams:{[key:string]:string | string[] | undefined};}

// loadMoreData()
  // const offset = searchParams.offset || 0;

// console.log(offset)

  // const router = useRouter();
  // useEffect(()=>{
  //   router.push(`?offset=${ofset}`)
  // })

  // <Link></Link>