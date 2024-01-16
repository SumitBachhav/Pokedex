'use client'
import {Navbar, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import {SearchIcon} from "../components/SearchIcon/page";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { useSearchParams } from "next/navigation";




export default function SearchBar({search}:{search?:string}){

    const ser = useSearchParams()
    const types = typeof ser.get('types') === 'string' ? ser.get('types') : undefined
    
    const[text,setText]=useState(search)
    const router = useRouter()
    const [querry] = useDebounce(text, 500)

    useEffect(()=>{
        if(!querry){
            router.push(`/`)
        }else{
            router.push(`/?search=${querry}&types=${types}`)}
        
        console.log(text)
    },[querry,router])

    return(
        <>
          {/* <div className="grid grid-rows-1 grid-flow-col gap-4"> */}
                <div className="col-span-3 gap-2">
                <Input
                    classNames=
                    {{
                        base: "max-w-full  h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                        placeholder="Type to search..."
                        size="sm"
                        endContent={<SearchIcon size={18}/>}
                        type="search"
                        value={text}
                        onValueChange={setText}
                />
                </div>  
        </>
    )
}