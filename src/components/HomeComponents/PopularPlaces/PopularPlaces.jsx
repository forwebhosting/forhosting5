import { useState } from 'react';

import PlacesCard from '../../../utils/Cards/card3/PlacesCard'
import ShowMore from '../../../utils/Cards/card3/ShowMore'

import css from './PopularPlaces.module.css';

let PopularPlaces = () => {
    let [showMore, setShowMore] = useState();
    return <div className={css.outerDiv}>
        <div className={css.title} style={{ textAlign: 'center' }}>
            <span className={css.titleTxt}>Popular localities in and around</span> <span className={css.bld}>India</span>
        </div>
        <div style={{ textAlign: 'center' }}>
            <p>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
        </div>

        <div className={css.placesCards}>
            <PlacesCard place="Mumbai" count="1205" link='/mumbai' />
            <PlacesCard place="Delhi" count="1102" link='/delhi' />
            <PlacesCard place="Bangalore" count="980" link='/bangalore' />
            <PlacesCard place="Hyderabad" count="875" link='/hyderabad' />
            <PlacesCard place="Chennai" count="752" link='/chennai' />
            <PlacesCard place="Kolkata" count="690" link='/kolkata' />
            <PlacesCard place="Pune" count="632" link='/pune' />
            <PlacesCard place="Ahmedabad" count="518" link='/ahmedabad' />
            <PlacesCard place="Jaipur" count="463" link='/jaipur' />
            <PlacesCard place="Lucknow" count="398" link='/lucknow' />
            <PlacesCard place="Kochi" count="372" link='/kochi' />
            <PlacesCard place="Goa" count="345" link='/goa' />
            <PlacesCard place="Agra" count="289" link='/agra' />
            <PlacesCard place="Varanasi" count="242" link='/varanasi' />
            <PlacesCard place="Amritsar" count="210" link='/amritsar' />
            <PlacesCard place="Shimla" count="185" link='/shimla' />
            <PlacesCard place="Jaipur" count="155" link='/jaipur' />
            <PlacesCard place="Udaipur" count="127" link='/udaipur' />
            <PlacesCard place="Jaisalmer" count="98" link='/jaisalmer' />

            <ShowMore setShowMore={setShowMore} />
        </div>
    </div>
}

export default PopularPlaces;