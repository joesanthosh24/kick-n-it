import { ColorFilterContainer, Color } from "./color-filter.styles";

interface ColorFilterProps {
  values: string[];
  setColor: (val: any) => void;
}

const ColorFilter = (filterProps: ColorFilterProps) => {
  const { values, setColor } = filterProps;

  return (
    <ColorFilterContainer>
      {values.map((value) => (
        <Color
          backgroundcolor={value}
          key={value}
          onClick={() => setColor(value)}
        ></Color>
      ))}
    </ColorFilterContainer>
  );
};

export default ColorFilter;
