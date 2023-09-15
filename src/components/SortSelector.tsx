import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Highlight,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const sortOrders = [
  { id: 1, value: "", label: "Relevance" },
  { id: 2, value: "-added", label: "Date added" },
  { id: 3, value: "name", label: "Name" },
  { id: 4, value: "-released", label: "Release date" },
  { id: 5, value: "-metacritic", label: "Popularity" },
  { id: 6, value: "-rating", label: "Average rating" },
];

interface Props {
  onSelectSort: (value: string) => void;
  selectedSortValue: string;
}
function SortSelector({ onSelectSort, selectedSortValue }: Props) {
  const displaySortValue =
    sortOrders.find((sortOrder) => sortOrder.value === selectedSortValue)
      ?.label || "Relevance";
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {displaySortValue}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => onSelectSort(sortOrder.value)}
            key={sortOrder.id}
            value={sortOrder.value}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
