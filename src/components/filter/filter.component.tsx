import { useState } from "react";
import ReactSlider from "react-slider";

import { FilterContainer, FilterName, SliderValue } from "./filter.styles";
import "./filter.styles.css";

interface FilterComponentProps {
  filterType?: "checkbox" | "slider";
  filterName: string;
  options?: {
    min?: number;
    max?: number;
    values?: any[];
  };
}

const Filter = (filterProps: FilterComponentProps) => {
  const [sliderVal, setSliderVal] = useState(
    filterProps.options && filterProps.options.min ? filterProps.options.min : 0
  );

  const { filterName, filterType } = filterProps;
  return (
    <FilterContainer>
      <FilterName>{filterName}</FilterName>
      {filterType && filterType === "slider" ? (
        <>
          <ReactSlider
            className="customSlider"
            trackClassName="customSlider-track"
            thumbClassName="customSlider-thumb"
            min={
              filterProps.options && filterProps.options.min
                ? filterProps.options.min
                : 0
            }
            max={
              filterProps.options && filterProps.options.max
                ? filterProps.options.max
                : 0
            }
            value={sliderVal}
            onChange={(val) => setSliderVal(val)}
          />
          <SliderValue>Max: ${sliderVal}</SliderValue>
        </>
      ) : (
        ""
      )}
    </FilterContainer>
  );
};

export default Filter;
