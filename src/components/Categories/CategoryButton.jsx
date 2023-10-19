import * as S from "./styled";

const CategoryButton = ({ category }) => {
    return <S.CategoryLink to={`/list/${category}`}>{category}</S.CategoryLink>;
};

export default CategoryButton;
