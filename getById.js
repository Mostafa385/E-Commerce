const SearchById = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error("Product not found");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("The error is", error);
    throw error;
  }
};

export default SearchById;