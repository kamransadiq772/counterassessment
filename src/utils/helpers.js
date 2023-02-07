export const increment = () => {
    const item = parseFloat(JSON.parse(localStorage.getItem('counter')))
    localStorage.setItem('counter',item ? JSON.stringify(item+1) : 1)
    window.dispatchEvent(new Event('change'))
}
export const decrement = () => {
    const item = parseFloat(JSON.parse(localStorage.getItem('counter')))
    localStorage.setItem('counter',item ? JSON.stringify(item-1) : -1)
    window.dispatchEvent(new Event('change'))
}
export const multiply = (val) => {
    const item = parseFloat(JSON.parse(localStorage.getItem('counter')))
    return item*val
}
export const devide = (val) => {
    const item = parseFloat(JSON.parse(localStorage.getItem('counter')))
    return item*val
}
export const subtract = (val) => {
    const item = parseFloat(JSON.parse(localStorage.getItem('counter')))
    return item*val
}

