import { categories, categoryFilter } from "../../constants/category";
import CategoryButton from "./CategoryButton";
import * as S from "./styled";

const Categories = () => {
    return (
        <S.Container>
            {categories.concat(categoryFilter).map((category) => (
                <CategoryButton
                    key={self.crypto.randomUUID()}
                    category={category}
                />
            ))}
        </S.Container>
    );
};

export default Categories;
