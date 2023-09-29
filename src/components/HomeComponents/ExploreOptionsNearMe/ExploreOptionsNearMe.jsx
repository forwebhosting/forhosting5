import CollapsableCard from '../../../utils/Cards/CollapsableCard/CollapsableCard'

import css from './ExploreOptionsNearMe.module.css';

let ExploreOptionsNearMe = () => {
    let chains = [
        'Hyderabad', 'Chennai', 'Vizag', 'Delhi', 'Mumbai', 
        'Bangalore', 'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur',
        'Lucknow', 'Coimbatore', 'Indore', 'Bhopal', 'Nagpur',
        'Surat', 'Agra', 'Amritsar', 'Jaipur', 'Udaipur'
    ];

    let cities = [
        'New York', 'Los Angeles', 'Chicago', 'San Francisco', 'Miami', 
        'Dallas', 'Seattle', 'Boston', 'Houston', 'Las Vegas',
        'London', 'Paris', 'Berlin', 'Rome', 'Barcelona',
        'Sydney', 'Tokyo', 'Seoul', 'Beijing', 'Dubai'
    ];

    return (
        <div className={css.outerDiv}>
            <div className={css.innerDiv}>
                <div className={css.title}>Explore options near me</div>
                <div className={css.cards}>
                    <CollapsableCard title="Top Restaurant Chains" content={chains} />
                    <CollapsableCard title="Cities We Deliver To" content={cities} />
                </div>
            </div>
        </div>
    );
}

export default ExploreOptionsNearMe;
