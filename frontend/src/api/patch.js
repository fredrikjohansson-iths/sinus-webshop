import axios from "axios";

const PATCH_PRODUCT = "http://localhost:5000/api/products/";

const patchProduct = async (url, id, prod) => {
  try {
    const urlWithId = url + id;
    const response = await axios.patch(urlWithId, prod);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { PATCH_PRODUCT, patchProduct };
