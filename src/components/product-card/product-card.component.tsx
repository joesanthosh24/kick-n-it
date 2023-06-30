import {
  Card,
  CardContent,
  CardDescription,
  CardImage,
  CardTitle,
  ColorCircle,
  ColorCircleContainer,
  ColorSelection,
  AddToCartButton,
  Price,
} from "./product-card.styles";

interface ProductCardProps {
  image?: any;
  title: string;
  description: string;
  price: string;
  circleColors?: string[];
  addClicked?: (item: any) => any;
}

const ProductCard = (cardProps: ProductCardProps) => {
  const { title, description, price, addClicked } = cardProps;
  return (
    <Card>
      <div>{cardProps.image && <CardImage src={cardProps.image} />}</div>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <ColorSelection>
        <p>Colour: </p>
        <ColorCircleContainer>
          {cardProps.circleColors &&
            cardProps.circleColors.map((color) => (
              <ColorCircle backgroundcolor={color} key={color}></ColorCircle>
            ))}
        </ColorCircleContainer>
        <Price>
          <p>$ {price}</p>
        </Price>
      </ColorSelection>
      {addClicked && (
        <AddToCartButton
          onClick={() =>
            addClicked({ title, description, price, image: cardProps.image })
          }
        >
          <p>Add To Cart</p>
        </AddToCartButton>
      )}
    </Card>
  );
};

export default ProductCard;
