"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import {Progress} from "@nextui-org/react";

type proptypes = {
  pokename: string;
  imgurl: string;
  pokeid: number;
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
};

export default function Card(props: proptypes) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  console.log(props.poketyp)
  // bg-gradient-to-b from-c-rock to-c-grass
  let bgst
  //"relative flex flex-col rounded-xl bg-gradient-to-b from-c-rock to-c-grass bg-clip-border text-gray-700 shadow-md"
  if(props.poketyp.length==1){
    bgst = `bg-c-${props.poketyp[0]}`
    // console.log("inside if",props.poketyp[0])



    // if(props.poketyp[0]=='normal'){bgst = 'bg-c-normal'}
    // else if(props.poketyp[0]=='rock'){bgst = 'bg-c-rock'}
    // else if(props.poketyp[0]=='water'){bgst = 'bg-c-water'}
    // else if(props.poketyp[0]=='dragon'){bgst = 'bg-c-dragon'}
    // else if(props.poketyp[0]=='fighting'){bgst = 'bg-c-fighting'}
    // else if(props.poketyp[0]=='bug'){bgst = 'bg-c-bug'}
    // else if(props.poketyp[0]=='grass'){bgst = 'bg-c-grass'}
    // else if(props.poketyp[0]=='dark'){bgst = 'bg-c-dark'}
    // else if(props.poketyp[0]=='flying'){bgst = 'bg-c-flying'}
    // else if(props.poketyp[0]=='ghost'){bgst = 'bg-c-ghost'}
    // else if(props.poketyp[0]=='electric'){bgst = 'bg-c-electric'}
    // else if(props.poketyp[0]=='fairy'){bgst = 'bg-c-fairy'}
    // else if(props.poketyp[0]=='poison'){bgst = 'bg-c-poison'}
    // else if(props.poketyp[0]=='steel'){bgst = 'bg-c-steel'}
    // else if(props.poketyp[0]=='psychic'){bgst = 'bg-c-psychic'}
    // else if(props.poketyp[0]=='unknown'){bgst = 'bg-c-unknown'}
    // else if(props.poketyp[0]=='ground'){bgst = 'bg-c-ground'}
    // else if(props.poketyp[0]=='fire'){bgst = 'bg-c-fire'}
    // else if(props.poketyp[0]=='ice'){bgst = 'bg-c-ice'}
    // else if(props.poketyp[0]=='shadow'){bgst = 'bg-c-shadow'}

  }else if(props.poketyp.length==2){
    // bgst = `bg-gradient-to-b from-c-dragon to-c-flying`
    bgst = `bg-gradient-to-b from-c-${props.poketyp[0]} to-c-${props.poketyp[1]}`
    console.log(`bg-gradient-to-b from-c-${props.poketyp[0]} to-c-${props.poketyp[1]}`)
  }else{bgst = 'bg-white'}

  return (
    <>
      <div className={`relative flex flex-col rounded-xl ${bgst} bg-clip-border text-gray-700 shadow-md`}>
        <div className="relative mt-4 h-40 overflow-hidden rounded-xl bg-transparent bg-clip-border text-gray-700 flex justify-center align-middle">
          <img src={props.imgurl} alt="profile-picture" width={120} className='' />
        </div>

        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            <Button
              onPress={onOpen}
              className="bg-transparent font-semibold text-1.5xl"
            >
              {props.pokename}
            </Button>
          </h4>
          <p className="block bg-gradient-to-tr bg-clip-text font-sans font-semibold text-lg leading-relaxed antialiased">
            00{props.pokeid}
          </p>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop={"blur"}
        size={"5xl"}
      >
        <ModalContent>
          {/* {(onClose) => ( */}
          <>
            <ModalBody className="bg-my-bg">
            <div className="flex flex-row border-3">
                <div className="basis-1/3 border-2 justify-center align-middle mt-10">
                  <img
                      src={props.imgurl}
                      alt="profile-picture" 
                    />
                    </div>
                <div className="basis-2/3 ml-4 border-3 mt-10">
                  <div className="flex flex-row justify-around h-16 border-2">
                    <ul className="border-2 text-3xl font-semibold pt-1">{props.pokename}</ul>
                    <ul className="border-2 text-5xl font-thin">|</ul>
                    <ul className="border-2 text-3xl font-semibold pt-1">{props.pokeid}</ul>
                    <ul className="border-2 text-5xl font-thin">|</ul>
                    <ul className="border-2 text-3xl font-semibold pt-1">options</ul>
                  </div>
                  <div className="px-6 justify-center align-middle">
                    {props.pokedesc}
                  </div>
                </div>
              </div>
              <div className="border-2 mt-10">
                <div className="flex flex-row border-2">
                    <ul className="border-2 text-base font-semibold basis-1/4">Height</ul>
                    <ul className="border-2 text-base font-semibold basis-1/4">Weight</ul>
                    <ul className="border-2 text-base font-semibold basis-1/4">Gender(s)</ul>
                    <ul className="border-2 text-base font-semibold basis-1/4">Egg Groups</ul>
                </div>
                <div className="flex flex-row justify-around border-2">
                    <ul className="border-2 text-sm font-normal basis-1/4">{props.pokeh}</ul>
                    <ul className="border-2 text-sm font-normal basis-1/4">{props.pokew}</ul>
                    <ul className="border-2 text-sm font-normal basis-1/4">{props.pokegen}</ul>
                    <ul className="border-2 text-sm font-normal basis-1/4">{props.pokeggrp}</ul>
                </div>
              </div>
              <div className="border-2 mt-8">
                <div className="flex flex-row border-2">
                    <ul className="border-2 text-base font-semibold basis-1/4">Abilities</ul>
                    <ul className="border-2 text-base font-semibold basis-1/4">Types</ul>
                    <ul className="border-2 text-base font-semibold basis-2/4">Weak Against</ul>
                </div>
                <div className="flex flex-row justify-around border-2">
                    <ul className="border-2 text-sm font-normal basis-1/4">{props.pokeab}</ul>
                    <ul className="border-2 text-sm font-normal basis-1/4">{props.poketyp}</ul>
                    <ul className="border-2 text-sm font-normal basis-2/4">{props.pokewa}</ul>
                </div>
              </div>
              <div className="border-2 mt-8">
                <div className="text-xl font-semibold">Stats</div>
                <div>
                    <div className="flex flex-row border-2 mt-5">
                      <ul className="border-2 text-base font-normal basis-24">HP</ul>
                      <ul className="border-2 text-base font-normal basis-2/6">
                        <Progress value={10} size="lg" radius="none" color="default" className="" >
                          <div className=" text-white">
                            value
                          </div>
                        </Progress>
                      </ul>
                      <ul className="border-2 text-base font-normal basis-24 ml-8">Attack</ul>
                      <ul className="border-2 text-base font-normal basis-2/6">number</ul>
                    </div>
                    <div className="flex flex-row border-2 mt-3">
                      <ul className="border-2 text-base font-normal basis-24">Defence</ul>
                      <ul className="border-2 text-base font-normal basis-2/6">number</ul>
                      <ul className="border-2 text-base font-normal basis-24 ml-8">Speed</ul>
                      <ul className="border-2 text-base font-normal basis-2/6">number</ul>
                    </div>
                    <div className="flex flex-row border-2 mt-3">
                      <ul className="border-2 text-base font-normal basis-24">Sp. Attack</ul>
                      <ul className="border-2 text-base font-normal basis-2/6">number</ul>
                      <ul className="border-2 text-base font-normal basis-24 ml-8">Sp. Def.</ul>
                      <ul className="border-2 text-base font-normal basis-2/6">number</ul>
                    </div>
                </div>
              </div>
            </ModalBody>
            {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
          </>
          {/* )} */}
        </ModalContent>
      </Modal>
    </>
  );
}




// <div className="grid grid-col-6 grid-flow-row gap-2 gap-y-4 border-2">
//                 <div className="row-span-10 col-span-2 border-2 flex justify-center align-middle">
//                   <div className="mx-0 px-0">
//                     <img
//                       src={props.imgurl}
//                       alt="profile-picture"
//                       width={250} 
//                     />
//                   </div>
//                 </div>
//                 <div className="col-start-3 col-span-2 border-2">02</div>
//                 <div className="col-start-5 border-2">03</div>
//                 <div className="col-start-6 border-2">04</div>
//                 <div className="col-start-3 row-start-2 col-span-4 row-span-9 border-2">
//                   04
//                 </div>
//               </div>