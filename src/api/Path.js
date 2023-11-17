// let DOMAIN = 'https://localhost:44315/';
// const DOMAIN = "http://cpvdev.cp.com.vn/WebSerivceDevCar/api/"
const DOMAIN = "https://webservice.cp.com.vn/QSC_image/api/"
const refreshTokenUrl = `${DOMAIN}get-token-domain`
const DataBaseName =
  "0x020000001ED58A0A2EA0013CB92D133187F3BA28A7504B5DF360B19AC837C84D92D868FD2B4D294F62BFA50C12D272D3790E6D28"
const SchemaName = "SQL01UAT"
const API = DOMAIN
const IMAGE = DOMAIN + "upload/"
const supURL = "/webkpiFS"
const urlIservice = "https://cpvdev.cp.com.vn/"
export const Path = {
  API,
  IMAGE,
  Banner: IMAGE + "banner/",
  Product: IMAGE + "product/",
  refreshTokenUrl,
  DataBaseName,
  SchemaName,
  supURL,
  urlIservice
}
