export default (products, searchTerm) => {
    const keywords = searchTerm.split(' ');
    return products.filter(p => p.keywords.some(k => keywords.indexOf(k) >= 0));
};

export const getProductById = (products, id) => {
    return products.find(p => p.id == id);
};