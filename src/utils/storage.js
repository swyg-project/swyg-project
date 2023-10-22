const store = window.localStorage;

export const getItem = (key, defaultValue) => {
    try {
        const storedValue = store.getItem(key);

        if (storedValue) {
            return JSON.parse(storedValue);
        }
        return defaultValue;
    } catch (err) {
        console.error(err);
        return defaultValue;
    }
};

export const setItem = (key, value) => {
    try {
        store.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.error(err);
    }
};

export const removeItem = (key) => {
    try {
        store.removeItem(key);
    } catch (err) {
        console.error(err);
    }
};
