'use client'
import React from "react";
import {Navbar, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import {SearchIcon} from "../components/SearchIcon/page";
import Typedropdown from "../components/Typedropdown/page";
import Genderdropdown from "../components/Genderdropdown/page";
import Statsdropdown from "../components/Statsdropdown/page";
import SearchBar from "../search/page";
import { useSearchParams } from "next/navigation";

export default function Navigation({searchParams}: {searchParams: { [key: string]: string | string[] | undefined }
}) {

  const search = typeof searchParams.search === 'string' ? searchParams.search : undefined
  // const ser = useSearchParams()
  // const search = typeof ser.get('search') === 'string' ? ser.get('search') : undefined




  return (<div className="px-9">

            <div className="flex flex-row gap-4 py-4 pt-6 justify-start align-middle">
              <div className="text-3xl font-semibold">Pokédex</div>
              <div className="text-5xl font-thin">|</div>
              <div className="pt-2 align-middle">Search for any Pokemon that exists on planet</div>
            </div>

            <div className="flex flex-row gap-4">
              <div className="basis-1/2 mr-3">Search by</div>
              <div className="flex basis-1/2">
              <div className="basis-1/3 mx-4">Type</div>
                <div className="basis-1/3 mx-4">Gender</div>
                <div className="basis-1/3 mx-4">Stats</div>
              </div>
            </div>



            <div className="flex flex-row gap-4">
              <div className="basis-1/2 mr-3"><SearchBar search={search}/></div>
              <div className="flex basis-1/2">
              <div className="basis-1/3 mx-4"><Typedropdown/></div>
                <div className="basis-1/3 mx-4"><Genderdropdown/></div>
                <div className="basis-1/3 mx-4"><Statsdropdown/></div>
              </div>
            </div>

    </div>
  );
}
