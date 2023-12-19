import React from 'react'
import MovieCard from '../components/MovieCard';
import styles from '@/app/styles/common.module.css'

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));

    const url = "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'afc7d73023mshd5ba013799eea0ep15211djsn5bbd04547f96',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    const data = result.titles;

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Serise & Movies</h1>
                    <div className={styles.card_section}>
                        {
                            data.map((currMovie) => {
                                return <MovieCard key={currMovie.id} {...currMovie} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Movie