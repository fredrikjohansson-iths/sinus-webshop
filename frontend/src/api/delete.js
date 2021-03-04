import axios from "axios";

const DELETE_PRODUCT = "http://localhost:5000/api/products/";

const deleteProduct = async (url, id) => {
  try {
    const urlWithId = url + id;
    const response = await axios.delete(urlWithId);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export { DELETE_PRODUCT, deleteProduct };
