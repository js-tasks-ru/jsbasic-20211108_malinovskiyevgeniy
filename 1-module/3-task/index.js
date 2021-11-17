function ucFirst(name) {
    //if (!name) return (name);
    //else return (name[0].toUpperCase() + name.slice(1));
    let result = !name ? name : name[0].toUpperCase() + name.slice(1);  
    return result;
}