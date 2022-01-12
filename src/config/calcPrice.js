export const calcSubPrice = (product) => {
    return product.count * product.service.price
}
export const calcTotalPrice = (cart) => {
    let sum = 0
    cart.services.forEach(element => {
        sum += element.subPrice
    });
    return sum
}