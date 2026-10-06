export const getUser =  async () =>{
    const response = await fetch("https://dummyjson.com/users" ,{
        method:"GET",
    })
    return await response.json();

}