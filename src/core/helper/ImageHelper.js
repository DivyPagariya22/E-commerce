import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  const imageurl = product
    ? `${API}/product/photo/${product._id}`
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;

  return (
    <div className='p-2  border border-bottom-0 border-black'>
      <img
        src={imageurl}
        alt='photo'
        style={{ maxHeight: "200px", maxWidth: "200px" }}
        className='mb-3 mt-3  img-responsive p-3'
      />
    </div>
  );
};

export default ImageHelper;
