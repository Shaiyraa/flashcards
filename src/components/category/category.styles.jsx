import { styled } from "styled-components";

export const CategoryContainer = styled.div`
  height: 400px;
  width: 300px;
  margin: 20px;
  border-radius: 5px;
  overflow: hidden;
  background-image: url(../images/category-images/${(props) =>
    props.image}.jpg);
  background-size: cover;
  background-position: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Blur = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  transition: all 1s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
    opacity: 1;

    transition: all 1s ease;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin: 25px 0 0 0;
  text-align: center;
  text-transform: capitalize;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 150px;
`;

export const Button = styled.a`
  border: 2px solid #fff;
  color: white;
  border-radius: 4px;
  background: transparent;
  padding: 10px 15px;
  cursor: pointer;
  display: block;
  width: 200px;
  margin: 5px 0;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 0.8rem;
  transition: all 1s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.51);
    border: 2px solid #064d57ff;
    color: #064d57ff;

    transition: all 0.5s ease;
  }
`;

export const Description = styled.div`
  color: white;
  padding: 12px;
  font-size: 0.8rem;
  line-height: 1.4;
  text-align: center;
`;

// export const CategoryContainer = styled.div`
//   border-radius: 5px;
//   margin: 10px;
//   background-color: #2e7d90ff;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

//   height: 165px;
//   width: 200px;
//   overflow: hidden;
// `;

// export const Details = styled.div`
//   padding: 0 12px;
// `;

// export const CategoryName = styled.h2`
//   font-size: 1rem;
//   margin: 0;
//   color: #fff;
// `;

// export const CategoryDescription = styled.p`
//   font-size: 0.7rem;
//   margin: 4px 0;
//   color: #fff;
//   opacity: 0.8;
// `;

// export const CategoryImage = styled.img`
//   width: 100%;
//   height: 100px;
// `;

// export const ProgressBar = styled.div`
//   background-color: #eee;
//   overflow: hidden;
//   height: 8px;
//   margin-top: 8px;
// `;

// export const ProgressFill = styled.div`
//   background-color: #075b70ff;
//   height: 100%;
//   width: 70%;
// `;
