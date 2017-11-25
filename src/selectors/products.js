export default (products, searchTerm) => {
    const keywords = searchTerm.split(' ');
    return products.filter(p => p.keywords.some(k => keywords.indexOf(k) >= 0));
};