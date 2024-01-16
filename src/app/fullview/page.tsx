'use client'

import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Progress} from "@nextui-org/react";

let data = {
  name: 'arbok',
  id: 24,
  cardimage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg',
  height: 35,
  weight: 650,
  abilities: [ 'intimidate', 'shed-skin', 'unnerve' ],
  type: [ 'poison' ],
  stats: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
  eggGroups: [ 'ground ', 'dragon' ],
  weakAgainst: [ 'ground', 'psychic' ],
  evolutionChainUrl: 'https://pokeapi.co/api/v2/evolution-chain/9/',
  gender: 'Male, Female',
  description: 'In this case, both .float-child elements would take up 50% of the total width. But the first green element would also have a margin of 20px.This would mean that both blocks would take up 50% + 20px + 50% width. This would be 20px more than 100% width, meaning there’s not enough room for both to be side by side.The second blue block would then wrap to the next row underneath the first block, and float to the left there:v'
}

export default function FullView() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop={"blur"} size={"4xl"}>
        <ModalContent>
          {/* {(onClose) => ( */}
            <>
              <ModalBody>
              <div className="flex flex-row border-3">
                <div className="basis-1/3 border-2 justify-center align-middle mt-10">
                  <img
                      src={data.cardimage}
                      alt="profile-picture" 
                    />
                    </div>
                <div className="basis-2/3 ml-4 border-3 mt-10">
                  <div className="flex flex-row justify-around h-16 border-2">
                    <ul className="border-2 text-3xl font-semibold pt-1">{data.name}</ul>
                    <ul className="border-2 text-5xl font-thin">|</ul>
                    <ul className="border-2 text-3xl font-semibold pt-1">001</ul>
                    <ul className="border-2 text-5xl font-thin">|</ul>
                    <ul className="border-2 text-3xl font-semibold pt-1">options</ul>
                  </div>
                  <div className="px-6 justify-center align-middle">
                    {data.description}
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
                    <ul className="border-2 text-sm font-normal basis-1/4">{data.height}</ul>
                    <ul className="border-2 text-sm font-normal basis-1/4">{data.weight}</ul>
                    <ul className="border-2 text-sm font-normal basis-1/4">{data.gender}</ul>
                    <ul className="border-2 text-sm font-normal basis-1/4">{data.eggGroups}</ul>
                </div>
              </div>
              <div className="border-2 mt-8">
                <div className="flex flex-row border-2">
                    <ul className="border-2 text-base font-semibold basis-1/4">Abilities</ul>
                    <ul className="border-2 text-base font-semibold basis-1/4">Types</ul>
                    <ul className="border-2 text-base font-semibold basis-2/4">Weak Against</ul>
                </div>
                <div className="flex flex-row justify-around border-2">
                    <ul className="border-2 text-sm font-normal basis-1/4">{data.abilities}</ul>
                    <ul className="border-2 text-sm font-normal basis-1/4">{data.type}</ul>
                    <ul className="border-2 text-sm font-normal basis-2/4">{data.weakAgainst}</ul>
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
                //     <div className="row-span-10 col-span-2 border-2">01</div>
                //     <div className="col-start-3 col-span-2 border-2">02</div>
                //     <div className="col-start-5 border-2">03</div>
                //     <div className="col-start-6 border-2">04</div>
                //     <div className="col-start-3 row-start-2 col-span-4 row-span-9 border-2">04</div>
                // </div>