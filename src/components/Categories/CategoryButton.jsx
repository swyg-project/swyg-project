import * as S from "./styled";
import { categoryImages } from "../../constants/category";

const CategoryButton = ({ category }) => {
    return (
        <S.CategoryLink to={`/list/${category}`} replace>
            <div className="img_container">
                <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/images/gift/${
                        categoryImages.find((cat) => cat.category === category)
                            .image
                    }.jpg`}
                />
            </div>
            <span>{category}</span>
        </S.CategoryLink>
    );
};

export default CategoryButton;
