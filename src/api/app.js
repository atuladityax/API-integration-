export const getUser =  async () =>{
    const response = await fetch("https://dummyjson.com/products" ,{
        method:"GET",
    })
    return await response.json();

}

export const getProduct = async (query) =>{
    const response =  await fetch(`https://dummyjson.com/products/search?q=${query}`,
        {
        method:"GET",
    });
    return await response.json();

}