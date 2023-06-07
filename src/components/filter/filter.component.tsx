import { FilterContainer, FilterName } from "./filter.styles";

interface FilterComponentProps {
  filterType: 'checkbox' | 'slider';
  filterName?: string;
}

const Filter = (filterProps: FilterComponentProps) => {
  const { filterName } = filterProps;
  return (
    <FilterContainer>
      <FilterName>{filterName}</FilterName>
    </FilterContainer>
  )
};

export default Filter;
