import ReactSlider from "react-slider";

import './slider-filter.styles.css';

interface SliderFilterProps {
  min: number;
  max: number;
  sliderVal: number;
  setSliderVal: (val: any) => void;
}

const SliderFilter = (sliderProps: SliderFilterProps) => {
  const { min, max, sliderVal, setSliderVal } = sliderProps;

  return (
    <>
      <ReactSlider
        className="customSlider"
        trackClassName="customSlider-track"
        thumbClassName="customSlider-thumb"
        min={min}
        max={max}
        value={sliderVal}
        onChange={(val) => setSliderVal(val)}
      />
    </>
  );
};

export default SliderFilter;
