// @ts-ignore
import { Deezer } from 'deezer-js'

console.log("init!")
const dz = new Deezer()
let homeCache: any, chartsCache: any

export async function getHome(){
  if (!homeCache){
    homeCache = await dz.api.get_chart(0, {limit: 30})
  }
  return homeCache
}

export async function getCharts(){
  if (!chartsCache){
    const chartsData = await dz.api.get_countries_charts()
    let countries: any[] = []
    chartsData.forEach((country: any) => {
      countries.push({
        title: country.title.replace("Top ", ""),
        id: country.id,
        picture_small: country.picture_small,
        picture_medium: country.picture_medium,
        picture_big: country.picture_big,
      })
    })
    chartsCache = {data: countries}
  }
  return chartsCache
}
