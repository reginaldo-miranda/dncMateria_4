export const getApiData = async (endpoit, params) => {
    try{
        const url = new URL(`https://dnc-react-api.vercel.app/files/${endpoit}`)
      //  const url = new URL(`https://dnc-react-api.vercel.app/files/projects`)
        const response = await fetch(url, {
            method:'GET',
        })
        if(!response.ok){
            console.error(`Error: ${response.status}`)
        }
         const data = await response.json()

         return data
    } catch  (e){
        console.error('Catch error: ', e)

    }

}