import styles from './Carousel.module.css';
import { FocusData } from "../Utils/Data/FocusData";
import { PlaylistsData } from "../Utils/Data/PlaylistsData";
import { SleepData } from "../Utils/Data/SleepData";
import CarouselItem from "./CarouselItem";

export default function Carousel() {
    return (
        <div>
            <div className={styles.container}>
                <h2 className={styles.heading}>
                    Focus
                </h2>
                <div className={styles.carouselItem}>
                    {
                        FocusData.map(item => (
                            <CarouselItem 
                                key={item.id}
                                source={item.imageSrc}
                                caption={item.caption}
                            />
                        ))
                    }
                </div>
            </div>
            <div className={styles.container}>
                <h2 className={styles.heading}>
                    Bee Music Playlists
                </h2>
                <div className={styles.carouselItem}>
                    {
                        PlaylistsData.map(item => (
                            <CarouselItem 
                                key={item.id}
                                source={item.imageSrc}
                                caption={item.caption}
                            />
                        ))
                    }
                </div>
            </div>
            <div className={styles.container}>
                <h2 className={styles.heading}>
                    Sleep
                </h2>
                <div className={styles.carouselItem}>
                    {
                        SleepData.map(item => (
                            <CarouselItem 
                                key={item.id}
                                source={item.imageSrc}
                                caption={item.caption}
                            />
                        ))
                    }
                </div>
            </div>
        </div>  
    );
}