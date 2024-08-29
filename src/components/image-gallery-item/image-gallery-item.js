import PropTypes from "prop-types";
import Modal from "../modal";
import css from "./image-gallery-item.module.css";
import { useState } from "react";

const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const handleToggleModal = () => {
    setIsVisibleModal((state) => !state);
  };

  return (
    <li className={css.imageGalleryItem}>
      <img
        className={css.imageGalleryItemImage}
        src={webformatURL}
        onClick={handleToggleModal}
        alt=""
      />
      {isVisibleModal && (
        <Modal src={largeImageURL} onClose={handleToggleModal} />
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
