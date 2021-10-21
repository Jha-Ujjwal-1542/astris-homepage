import Image from "next/image"
import styles from "../home.module.css";

<section className={styles.productsSection}>
    <div className={styles.container}>
        <div className={styles.sectionBox}>
            <div className={styles.sectionTitle}>
                <div className={styles.subTitle}>BROWSE THROUGH OUR COLLECTIONS</div>
                <div className={styles.mainTitle}>
                    <h3>Extensive Range of Assisted Care Products</h3>
                </div>
            </div>
            <div className={styles.productsItembox} id="products--itembox">
                {/* <?php
                $array = array(
                    ['img' => 'wheelchairs', 'title' => 'Wheelchairs'],
                    ['img' => 'wheelchair-seating-system', 'title' => 'Wheelchair Seating Systems'],
                    ['img' => 'special-needs-pushchairs', 'title' => 'Special Needs Pushchairs'],
                    ['img' => 'walkers-tricycles', 'title' => 'Walkers/Tricycles'],
                    ['img' => 'alternate-indoor-seating', 'title' => 'Alternate Indoor Seating'],
                    ['img' => 'standers', 'title' => 'Standers'],
                    ['img' => 'hygiene', 'title' => 'Hygiene'],
                    ['img' => 'car-seats-harness', 'title' => 'Car Seats & Harness'],
                    ['img' => 'positioning-sleep-system', 'title' => 'Positioning/Sleep Systems'],
                    ['img' => 'hoist-support-stations', 'title' => 'Hoists/Support Stations'],
                    ['img' => 'daily-living', 'title' => 'Daily Living'],
                    ['img' => 'excersie-equipments', 'title' => 'Exercise Equipments']
                );
                foreach ($array as $productItem) {
                    include 'includes/components/' . 'products' . '.php';
                } ?> */}
            </div>
        </div>
    </div>
</section>