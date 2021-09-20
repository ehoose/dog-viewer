import React, { useEffect, useState } from 'react';
// import {
//     useQuery,
//     useMutation,
//     useQueryClient,
//     QueryClient,
//     QueryClientProvider
// } from 'react-query';
import { Dogs } from './dogs/Dogs';
import { breedList, mainBreed } from './api/dogs';
import './App.css';

// const queryClient = new QueryClient();

const App = () => {
    const [dogBreeds, setDogBreeds] = useState<string[]>();
    const [dog, setDog] = useState<string>();

    useEffect(() => {
        const getDogBreeds = async () => {
            const allDogBreeds = await breedList();
            setDogBreeds(Object.keys(allDogBreeds.message));
        };
        getDogBreeds();
    }, []);

    const filterBreed = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selection = event.target.value;
        if (selection === 'all') {
            setDog(undefined);
            return;
        }
        const doggo = await mainBreed(event.target.value);
        setDog(doggo.message);
    };

    return (
        <div className="App">
            <nav className="nav">
                <span>Dog Viewer</span>
                <div className="nav--filters">
                    <span>Filter: </span>
                    <select onChange={filterBreed}>
                        <option value="all">All</option>
                        {dogBreeds &&
                            dogBreeds.length &&
                            dogBreeds.map((breed, i) => (
                                <option key={i}>{breed}</option>
                            ))}
                    </select>
                </div>
            </nav>
            <div className="main">
                <Dogs dog={dog} />
            </div>
        </div>
    );
};

export default App;
