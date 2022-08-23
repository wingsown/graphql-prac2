
exports.Query = {
    hello: () => "Hello!",
    products: (parent, args, {products}) => products,
    product: (parent, { id }, {products}) => {
         return products.find((product) => product.id === id);
    },
    categories: (parent, args, { categories }) => categories,
    category: (parent, {id}, context) => {
        return categories.find((category) => category.id === id);
    },
 };