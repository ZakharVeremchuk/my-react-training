import PropTypes from 'prop-types';

const headerStyle = {
  color: 'blue',
}

const Product = (
  {
   name, 
   imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder", 
   price
  }
) => {
  return (
    <div>
      <h2 style={headerStyle}>{name}</h2>
      <img src={imgUrl} alt={name} width="480" />
	    <p>Price: {price} credits</p>
    </div>
  );
};

Product.propsTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};


export default Product;

