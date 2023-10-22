export const promiseAll = async (requestFn, body) => {
    body = Array.isArray(body) ? body : [body];

    try {
        const promiseSet = new Set();

        body.forEach((parameter) => {
            const promise = requestFn(parameter);

            promiseSet.add(promise);
        });

        const response = await Promise.all([...promiseSet]);

        return response;
    } catch (err) {
        throw err;
    }
};
