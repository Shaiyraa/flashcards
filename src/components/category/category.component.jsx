import {
  CategoryContainer,
  Blur,
  Title,
  Buttons,
  Button,
  Description,
} from "./category.styles";

const Category = ({ category, hasChildren }) => {
  const { _id, name, description, image } = category;

  return (
    <CategoryContainer image={image || "placeholder"}>
      <Blur>
        <Title>{name}</Title>
        <Buttons>
          {hasChildren && <Button href={`/category/${_id}`}>Kategorie</Button>}
          <Button href="#">Nauka</Button>
        </Buttons>
        <Description>{description} asdas</Description>
      </Blur>
    </CategoryContainer>
  );
};

export default Category;

// import {
//   CategoryContainer,
//   CategoryName,
//   CategoryDescription,
//   CategoryImage,
//   Details,
//   ProgressBar,
//   ProgressFill,
// } from "./category.styles";

// const Category = ({ name, description, image }) => {
//   return (
//     <CategoryContainer>
//       <CategoryImage
//         src={`./images/category-images/${image}.jpg`}
//         alt={image}
//       />
//       <Details>
//         <CategoryName>{name}</CategoryName>
//         <CategoryDescription>{description}</CategoryDescription>
//       </Details>
//       <ProgressBar>
//         <ProgressFill />
//       </ProgressBar>
//     </CategoryContainer>
//   );
// };

// export default Category;
