const getRandomElemArray = (arr) => {
    if (typeof getRandomElemArray.prevIndex === 'undefined') {
        getRandomElemArray.prevIndex = -1;
    }
    
    let newIndex;
    // Un límite para evitar bucle infinito
    const maxAttempts = arr.length * 2; 
    
    for (let i = 0; i < maxAttempts; i++) {
        newIndex = Math.floor(Math.random() * arr.length);
        if (newIndex !== getRandomElemArray.prevIndex) {
            getRandomElemArray.prevIndex = newIndex;
            return arr[newIndex];
        }
    }
    // Actualizar prevIndex incluso si no encontramos un índice único
    getRandomElemArray.prevIndex = newIndex; 
    return arr[newIndex];
}

export default getRandomElemArray

