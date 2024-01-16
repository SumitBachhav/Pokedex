import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function Statsdropdown() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([""]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="capitalize w-full"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Multiple selection example"
        variant="flat"
        closeOnSelect={false}
        disallowEmptySelection={false}
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="text">Hp</DropdownItem>
        <DropdownItem key="number">Attack</DropdownItem>
        <DropdownItem key="date">Defence</DropdownItem>
        <DropdownItem key="iteration">Speed</DropdownItem>
        <DropdownItem key="single_date">Sp. Attack</DropdownItem>
        <DropdownItem key="single_date">Sp. Def</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
