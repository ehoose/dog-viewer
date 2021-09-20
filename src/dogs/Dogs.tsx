import React, { useEffect, useState } from 'react';
import { randomDog } from '../api/dogs';

export interface IDog {
    dog?: string;
}

export const Dogs = (dog: IDog) => {
    const [dogImage, setDogImage] = useState(dog);

    useEffect(() => {
        const getRandomDog = async () => {
            const listDogs = await randomDog();
            setDogImage({ dog: listDogs.message });
        };
        if (dog.dog) {
            setDogImage(dog);
            return;
        }
        getRandomDog();
    }, [dog]);

    if (!dogImage.dog) {
        return <p>Loading cute doggo...</p>;
    }

    return (
        <div className="Dogs">
            <img src={dogImage.dog} alt="a picture of a cute doggo" />
        </div>
    );
};
