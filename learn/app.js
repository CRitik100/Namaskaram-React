import React from "react";
import ReactDOM from "react-dom/client";

/*
mainContainer
    heading
        -Logo
        -Nav Items
    Body
        -Search 
        -Restaurant Container
            -Restaurant Card
                -Image
                -Name
                -price
                -rating
    Footer
        -Copyright
        -Links
        -Address
        -Contact
*/
const LogoComponent = () => {
    return (
        <div className="logoComponent">
            <img id="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB40rdc-wGDxVYz_nkK_XFEbu4WHF2wwhn-A&s" alt="logo"/>
        </div>
    )
}

const NavItemsComponent = () => {
    return (
        <div className="navComponent">
            <ul id="navItems">
                <li id="links">Home</li>
                <li id="links">About Us</li>
                <li id="links">Contact Us</li>
                <img id="cart" src="https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small_2x/shopping-cart-logo-or-icon-design-vector.jpg" alt="cart"/>
                
            </ul>
        </div>
    )
}

const HeaderComponent = () => {
    return (
        <div className="header">
            <LogoComponent/>
            <NavItemsComponent/>
        </div>        
    )
}

const SearchContainer = () => {
    return (
        <div id="searchContainer">
            <input id="searchInput" type="text" placeholder="Search for restaurant, cuisine or a dish"/>
            <button id="searchButton">Search</button>
        </div>
    )
};

const restaurantData = [
        {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "1110751",
    "name": "Bekal House",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/13/f970c5ea-f515-4606-bfbc-cf770b3fce8a_1110751.jpg",
    "locality": "TIME SQUARE",
    "areaName": "Marol Sakinaka",
    "costForTwo": "₹1000 for two",
    "cuisines": [
    "Seafood",
    "Mangalorean",
    "South Indian",
    "North Indian"
    ],
    "avgRating": 4,
    "parentId": "579824",
    "avgRatingString": "4.0",
    "totalRatingsString": "176",
    "promoted": true,
    "adTrackingId": "cid=84aec788-8ab7-4636-95bf-79543e9b6b93~p=0~adgrpid=84aec788-8ab7-4636-95bf-79543e9b6b93#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1110751~plpr=COLLECTION~eid=2e68f99d-269e-49d9-a644-e7108f67d11e~srvts=1777466990521~collid=83634",
    "sla": {
    "deliveryTime": 53,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "50-60 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2026-04-30 00:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "newg.png",
    "description": "Gourmet"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Gourmet",
    "theme": "",
    "imageId": "newg.png"
    }
    }
    ]
    },
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "84aec788-8ab7-4636-95bf-79543e9b6b93",
    "priceComparisonComms": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=1110751&source=collection&query=South%20Indian",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "464296",
    "name": "Atta Girl",
    "cloudinaryImageId": "ej7wboon8tk0h8nqhqoq",
    "locality": "Lower Depopada",
    "areaName": "Ghatkopar Vikhroli",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "South Indian",
    "Indian"
    ],
    "avgRating": 4.8,
    "veg": true,
    "parentId": "37659",
    "avgRatingString": "4.8",
    "totalRatingsString": "1.3K+",
    "sla": {
    "deliveryTime": 35,
    "lastMileTravel": 2.6,
    "serviceability": "SERVICEABLE",
    "slaString": "35-40 mins",
    "lastMileTravelString": "2.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2026-04-29 20:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg",
    "theme": ""
    }
    }
    ]
    },
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹129",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "priceComparisonComms": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=464296&source=collection&query=South%20Indian",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "1154863",
    "name": "Tea Post",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/1/591c3577-1e27-4a76-bbab-747297afad92_1154863.JPG",
    "locality": "Chembur",
    "areaName": "Chembur",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Beverages",
    "Gujarati",
    "Snacks",
    "Cafe"
    ],
    "avgRating": 4.3,
    "veg": true,
    "parentId": "4509",
    "avgRatingString": "4.3",
    "totalRatingsString": "396",
    "promoted": true,
    "adTrackingId": "cid=11d12dee-e9fc-4cda-8ad3-47361e360cb0~p=1~adgrpid=11d12dee-e9fc-4cda-8ad3-47361e360cb0#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1154863~plpr=COLLECTION~eid=d6f4925f-aede-4176-83c2-df2e71122630~srvts=1777466990521~collid=83634",
    "sla": {
    "deliveryTime": 60,
    "lastMileTravel": 4.8,
    "serviceability": "SERVICEABLE",
    "slaString": "60-70 mins",
    "lastMileTravelString": "4.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2026-04-30 06:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹69",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.0",
    "ratingCount": "34"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "11d12dee-e9fc-4cda-8ad3-47361e360cb0",
    "priceComparisonComms": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=1154863&source=collection&query=South%20Indian",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "18957",
    "name": "Radha Krishna",
    "cloudinaryImageId": "jem7pvvc8goq7hef3qdz",
    "locality": "Ghatkopar West",
    "areaName": "Ghatkopar West",
    "costForTwo": "₹600 for two",
    "cuisines": [
    "Street Food",
    "Chinese",
    "Beverages",
    "South Indian"
    ],
    "avgRating": 4.2,
    "parentId": "2875",
    "avgRatingString": "4.2",
    "totalRatingsString": "11K+",
    "sla": {
    "deliveryTime": 43,
    "lastMileTravel": 1.8,
    "serviceability": "SERVICEABLE",
    "slaString": "40-50 mins",
    "lastMileTravelString": "1.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2026-04-29 23:45:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textExtendedBadges": {},
    "textBased": {}
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.0",
    "ratingCount": "3.8K+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "priceComparisonComms": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=18957&source=collection&query=South%20Indian",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "1221563",
    "name": "ITC Aashirvaad Soul Creations",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/30/fce7e2d2-fd15-4f03-a894-1b5391c6f8f8_1221563.JPG",
    "locality": "Maroshi Road",
    "areaName": "Marol",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Indian",
    "pure veg",
    "Healthy Food",
    "Home Food",
    "South Indian",
    "North Indian",
    "Sweets"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "346141",
    "avgRatingString": "4.4",
    "totalRatingsString": "648",
    "promoted": true,
    "adTrackingId": "cid=5c09985e-ecd7-40df-9323-c16280cf1c2e~p=2~adgrpid=5c09985e-ecd7-40df-9323-c16280cf1c2e#ag3~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1221563~plpr=COLLECTION~eid=5dcfe7c3-dd85-409d-9855-e6a2420cb189~srvts=1777466990521~collid=83634",
    "sla": {
    "deliveryTime": 55,
    "lastMileTravel": 4.1,
    "serviceability": "SERVICEABLE",
    "slaString": "50-60 mins",
    "lastMileTravelString": "4.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2026-04-30 02:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg",
    "theme": ""
    }
    }
    ]
    },
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "5c09985e-ecd7-40df-9323-c16280cf1c2e",
    "priceComparisonComms": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=1221563&source=collection&query=South%20Indian",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "24872",
    "name": "Mahesh Lunch Home",
    "cloudinaryImageId": "yslxyea2sbpew8xd1ykw",
    "locality": "Sakinaka",
    "areaName": "Sakinaka",
    "costForTwo": "₹900 for two",
    "cuisines": [
    "Indian"
    ],
    "avgRating": 4.4,
    "parentId": "615",
    "avgRatingString": "4.4",
    "totalRatingsString": "4.0K+",
    "sla": {
    "deliveryTime": 58,
    "lastMileTravel": 2.9,
    "serviceability": "SERVICEABLE",
    "slaString": "55-65 mins",
    "lastMileTravelString": "2.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2026-04-29 23:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "brand_cards/Badges%202026/48_Best%20in%20Coastal2026.png",
    "description": "Best in Coastal"
    },
    {
    "imageId": "newg.png",
    "description": "Gourmet"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "theme": "",
    "imageId": "brand_cards/Badges%202026/48_Best%20in%20Coastal2026.png",
    "description": "Best in Coastal"
    }
    },
    {
    "attributes": {
    "imageId": "newg.png",
    "description": "Gourmet",
    "theme": ""
    }
    }
    ]
    },
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "30% OFF",
    "subHeader": "UPTO ₹75",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.2",
    "ratingCount": "4.2K+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "priceComparisonComms": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=24872&source=collection&query=South%20Indian",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "58810",
    "name": "Malgudi",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/29/581685a6-1a9b-4a28-a1e5-ee33cfa9bea9_58810.jpg",
    "locality": "Ghatkopar West",
    "areaName": "Ghatkopar West",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "South Indian",
    " Beverages"
    ],
    "avgRating": 4.5,
    "parentId": "2883",
    "avgRatingString": "4.5",
    "totalRatingsString": "381",
    "promoted": true,
    "adTrackingId": "cid=4a31873f-aa9c-4715-bf0a-160647c96839~p=5~adgrpid=4a31873f-aa9c-4715-bf0a-160647c96839#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=58810~plpr=COLLECTION~eid=72117fad-1504-420d-9390-051a33211287~srvts=1777466990521~collid=83634",
    "sla": {
    "deliveryTime": 49,
    "lastMileTravel": 1.9,
    "serviceability": "SERVICEABLE",
    "slaString": "45-50 mins",
    "lastMileTravelString": "1.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2026-04-29 22:45:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "30% OFF",
    "subHeader": "UPTO ₹75"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.6",
    "ratingCount": "375"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "4a31873f-aa9c-4715-bf0a-160647c96839",
    "priceComparisonComms": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=58810&source=collection&query=South%20Indian",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    }
]

const RestrauntCard = (props) => {
    const {restaurant} = props;
    const {name, cuisines, avgRatingString, cloudinaryImageId} = restaurant?.card?.card?.info;
    return (
            <div className="restrauntCard">
                <img className="restrauntImage" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt={name}/>
                <span className="restrauntName"> {name}</span>
                 <div className="restrauntValues">
                    <span className="restrauntPrice">{cuisines.join(", ")}</span>
                    <span className="restrauntRating">{"*"+avgRatingString}</span>
                </div>
            </div>
    )
}

const RestrauntContainer = () => {
    return (
        <div id="restrauntContainer">
            {restaurantData.map((data) =>(
                <RestrauntCard key={data.card.card.info.id} restaurant={data}/>
            ))}
        </div>
    )
}

const BodyComponent = () => {
    return (
        <div className="mainBody">
            <SearchContainer/>
            <RestrauntContainer/>
        </div>
    )
}

const FooterComponent = () => {
    return (
        <div className="footer">
            
        </div>
    )
}

const MainContainer = () => {
    return (
        <div className="mainContainer">
            <HeaderComponent/>
            <BodyComponent/>
            <FooterComponent/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainContainer/>);