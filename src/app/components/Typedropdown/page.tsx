import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function Typedropdown() {
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
        <DropdownItem key="normal">Normal</DropdownItem>
        <DropdownItem key="fighting">Fighting</DropdownItem>
        <DropdownItem key="flying">Flying</DropdownItem>
        <DropdownItem key="poison">Poison</DropdownItem>
        <DropdownItem key="ground">Ground</DropdownItem>
        <DropdownItem key="rock">Rock</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
