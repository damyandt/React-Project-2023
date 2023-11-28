

export const getAll = async () => {
    const clothing = await fetch(`https://sell-6caea-default-rtdb.firebaseio.com/products.json`);
    const result = await clothing.json();
    let count = 0;
    for (const x of Object.values(result)) {
        x.id = Object.keys(result)[count++]
    }
    return result;
};

export const getOne = async (id) => {
    const clothing = await fetch(`https://sell-6caea-default-rtdb.firebaseio.com/products/${id}.json`);
    const result = await clothing.json();

    return result;
};


export const deletePost = async (id) => {
    console.log(id)
    await fetch(`https://sell-6caea-default-rtdb.firebaseio.com/products/${id}.json`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application.json'
        },
    });
    return document.location.reload();
};