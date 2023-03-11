import styles from './CarouselItem.module.css';

export default function CarouselItem({
    source, caption
}) 
    {
    return (
        <div>
            <figure className={styles.figure}>
                <img src={source} alt='thumbnail' />
                <figcaption className={styles.figcaption}>
                    {caption}
                </figcaption>
            </figure>
        </div>
    );
}
