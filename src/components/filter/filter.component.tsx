import { useState } from "react";

import { FilterContainer, FilterName, SliderValue } from "./filter.styles";

import SliderFilter from "./slider-filter/slider-filter.component";
import ColorFilter from "./color-filter/color-filter.component";

interface FilterComponentProps {
  filterType?: "colors" | "slider";
  filterName: string;
  options?: {
    min?: number;
    max?: number;
    values?: any[];
  };
}

const Filter = (filterProps: FilterComponentProps) => {
  const [val, setVal] = useState(
    filterProps?.options?.min
      ? filterProps.options.min
      : filterProps?.options?.values?.length
      ? filterProps.options.values[0]
      : 0
  );

  const { filterName, filterType } = filterProps;
  return (
    <FilterContainer>
      <FilterName>{filterName}</FilterName>
      {filterType && filterType === "slider" ? (
        <>
          <SliderFilter
            min={filterProps?.options?.min ? filterProps.options.min : 0}
            max={filterProps?.options?.max ? filterProps.options.max : 0}
            sliderVal={val}
            setSliderVal={setVal}
          />
          <SliderValue>Max: ${val}</SliderValue>
        </>
      ) : filterType && filterType === "colors" ? (
        <>
          {filterProps?.options?.values && (
            <ColorFilter
              values={filterProps.options.values}
              setColor={setVal}
            />
          )}
          <p>Color: {val}</p>
        </>
      ) : (
        ""
      )}
    </FilterContainer>
  );
};

export default Filter;
