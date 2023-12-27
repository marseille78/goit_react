import React from "react";
import PropTypes from 'prop-types'

function Painting({
  url,
  title,
  authorUrl,
  authorTag,
  price,
  quantity
}) {
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorUrl}>{authorTag}</a>
      </p>
      <p>Ціна: {price} кредитів</p>
      <p>Доступність: закінчюється або є в наявності</p>
      <button type="button">Додати до кошика</button>
    </div>
  );
}

Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  authorUrl: PropTypes.string,
  authorTag: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default Painting;
