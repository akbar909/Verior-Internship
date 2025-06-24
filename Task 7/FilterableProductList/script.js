document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const productList = document.getElementById('productList');

    const products = [
        'Laptop',
        'Smartphone',
        'Tablet',
        'Headphones',
        'Smartwatch',
        'Camera',
        'Speaker',
        'Monitor'
    ];

    const renderProducts = (filteredProducts) => {
        productList.innerHTML = '';
        filteredProducts.forEach(product => {
            const li = document.createElement('li');
            li.textContent = product;
            productList.appendChild(li);
        });
    };

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.toLowerCase().includes(searchTerm));
        renderProducts(filteredProducts);
    });

    renderProducts(products);
});