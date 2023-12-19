import Image from 'next/image';
import Link from 'next/link'
import styles from "@/app/styles/common.module.css"

const Page = async ({ params }) => {
    const id = params.id;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'afc7d73023mshd5ba013799eea0ep15211djsn5bbd04547f96',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    const data = result[0].details;
    console.log(data.backgroundImage.url);

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.movie_title}>   Netflix \ <span> {data.type} </span> </h2>
                <div className={styles.card_section}>
                    <div>
                        <Image src={data.backgroundImage.url ? data.backgroundImage.url : '/alt_logo.svg'} alt={data.title} width={600} height={300} />
                    </div>
                    <div>
                        <h1>{data.title}</h1>
                        <p>{data.synopsis}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page