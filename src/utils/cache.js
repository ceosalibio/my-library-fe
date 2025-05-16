export const setItem = (key , value) =>{
    let data = JSON.stringify(value)
    localStorage.setItem(key, data);
}

export const getItem = (key) =>{
    const data = localStorage.getItem(key);
    return JSON.parse(data)
}

export const removeItem = (key) =>{
    localStorage.removeItem(key)
}