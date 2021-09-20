// import { useQuery } from 'react-query';
import { client } from './client';

/**
 * This file is overkill in the current context,
 * but as the logic of the app grows it helps to
 * have these actions isolated for clarity and
 * to avoid repeated code
 */

const breedList = () => {
    // const { data } = useQuery('breedList', () => client('breeds/list/all'));
    return client('breeds/list/all');
};

const mainBreed = (breed: string) => {
    return client(`breed/${breed}/images/random`);
};

const subBreeds = (breed: string) => {
    return client(`breed/${breed}/list`);
};

const randomDog = () => {
    return client('breeds/image/random');
};

export { breedList, mainBreed, randomDog, subBreeds };
