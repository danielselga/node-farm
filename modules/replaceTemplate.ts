//// Server
module.exports = (temp : any, product : any) => {
  let output = temp.replaceAll('{%PRODUCTNAME%}', product.productName)
  output = output.replaceAll('{%IMAGE%}', product.image)
  output = output.replaceAll('{%PRICE%}', product.price)
  output = output.replaceAll('{%FROM%}', product.from)
  output = output.replaceAll('{%PRODUCNUTRIENTSTNAME%}', product.nutrients)
  output = output.replaceAll('{%QUANTITY%}', product.quantity)
  output = output.replaceAll('{%DESCRIPTION%}', product.description)
  output = output.replaceAll('{%ID%}', product.id)
  
  if(!product.organic) {
    output = output.replace(/{%NOTORGANIC%}/g, 'not-organic')
}
  
  return output
}
