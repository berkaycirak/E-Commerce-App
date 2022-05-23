import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss';

const Directory = (props) => {
  //props come to here as an object, so we can destructure it as an object.
  const { categories } = props;
  return (
    <div className='directory-container'>
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
