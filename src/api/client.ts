const apiURL = 'https://dog.ceo/api';

/**
 *
 * @param endpoint
 * @returns promise
 * Overly simplified helper function
 * Normally you'd have logic to set headers
 * and determine the type of request ('get' vs 'post')
 */
export const client = async (endpoint: string) => {
    return window.fetch(`${apiURL}/${endpoint}`).then(async (response) => {
        if (response.ok) {
            return await response.json();
        } else {
            const errorMessage = await response.text();
            return Promise.reject(new Error(errorMessage));
        }
    });
};
