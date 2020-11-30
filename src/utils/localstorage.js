
export function store_data(data, key) {
        localStorage.setItem(key, JSON.stringify(data));
}

export function get_data(key) {
        var item = localStorage.getItem(key);
        console.log(item)
        if (!item) {
            return;
        }
    
       return JSON.parse(item);
}

export function remove_data(key) {
   
    localStorage.removeItem(key);
}