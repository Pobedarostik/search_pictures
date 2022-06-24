import PropTypes from 'prop-types';
import s from "./item.module.css";


function ImageGalleryItem({getImg, openModal, largeImage, preiew, tags}) {
  function twice(e) {
    openModal();
    getImg(e)
 }

  return (
    <li className={s.ImageGalleryItem} onClick={twice}>
      <img
        className={s.ImageGalleryItemImage}
        src={preiew}
        data-source={largeImage}
        alt={tags}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func,
  getImage: PropTypes.func,
  largeImage: PropTypes.string,
  preiew: PropTypes.string,
  desc: PropTypes.string,
};

export default ImageGalleryItem;