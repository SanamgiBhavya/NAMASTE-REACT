import React from 'react';
import ReactDOM from 'react-dom/client';
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *    - Restaurant Card
 *      - Img
 *      - Na,e of res, Star Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 *
 */

const Header = () => {
  return <div className='header'>
    <div><img className='logo' src="https://images.assetsdelivery.com/compings_v2/pshonka/pshonka2006/pshonka200600119.jpg" alt="logo" /></div>
    <div className='nav-items'>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>

  </div>
}

const RestaurantCard = ({ resData }) => {
  const baseImageUrl = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, deliveryTime } = resData?.data;


  return (
    <div className='res-card' style={{backgroundColor: '#f0f0f0'}}>
      <img className='res-logo' src={baseImageUrl + cloudinaryImageId} alt="biryani"/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo / 2}</h4>
      <h4>${costForTwo / 2} for 2</h4>
      <h4>{deliveryTime}</h4>
    </div>
  )
}

const resData = [
  {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "2795",
  "name": "Minerva Coffee Shop",
  "uuid": "5a916ff4-f7f4-4abc-a054-0c4358b93191",
  "city": "3",
  "area": "Himayatnagar",
  "totalRatingsString": "10000+ ratings",
  "cloudinaryImageId": "m1dwgm96tnr6wuhcicn6",
  "cuisines": [
  "South Indian",
  "North Indian",
  "Chinese"
  ],
  "tags": [],
  "costForTwo": 50000,
  "costForTwoString": "₹500 FOR TWO",
  "deliveryTime": 18,
  "minDeliveryTime": 18,
  "maxDeliveryTime": 18,
  "slaString": "18 MINS",
  "lastMileTravel": 2.5999999046325684,
  "slugs": {
  "restaurant": "minerva-coffee-shop-himayath-nagar-himayath-nagar",
  "city": "hyderabad"
  },
  "cityState": "3",
  "address": "3-6-199/1, Opp Brand Factory, Himayath Nagar",
  "locality": "Himayath Nagar Road",
  "parentId": 136393,
  "unserviceable": false,
  "veg": false,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "aggregatedDiscountInfo": {
  "header": "20% off",
  "shortDescriptionList": [
  {
  "meta": "20% off | Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "20% off up to ₹50 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "aggregatedDiscountInfoV2": {
  "header": "20% OFF",
  "shortDescriptionList": [
  {
  "meta": "Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "20% off up to ₹50 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "ribbon": [
  {
  "type": "PROMOTED"
  }
  ],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "distance",
  "fee": 2300,
  "message": ""
  },
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 2300,
  "message": "",
  "title": "Delivery Charge",
  "amount": "2300",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "cid=6070379~p=1~eid=00000187-35ec-6bfd-0928-9dbf0011016b",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "2.5 kms",
  "hasSurge": false,
  "sla": {
  "restaurantId": "2795",
  "deliveryTime": 18,
  "minDeliveryTime": 18,
  "maxDeliveryTime": 18,
  "lastMileTravel": 2.5999999046325684,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": true,
  "avgRating": "4.3",
  "totalRatings": 10000,
  "new": false
  },
  "subtype": "basic"
  },
  {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "41005",
  "name": "Sri Raghavendra Tiffins",
  "uuid": "88a71b89-dc82-4f2f-88ff-eb4082177945",
  "city": "3",
  "area": "Kachiguda",
  "totalRatingsString": "10000+ ratings",
  "cloudinaryImageId": "chpzykzkkvdadynupvvi",
  "cuisines": [
  "South Indian",
  "Andhra"
  ],
  "tags": [],
  "costForTwo": 15000,
  "costForTwoString": "₹150 FOR TWO",
  "deliveryTime": 17,
  "minDeliveryTime": 17,
  "maxDeliveryTime": 17,
  "slaString": "17 MINS",
  "lastMileTravel": 2.200000047683716,
  "slugs": {
  "restaurant": "sri-raghavendra-tiffins-barkathpura-himayath-nagar",
  "city": "hyderabad"
  },
  "cityState": "3",
  "address": "H.No 3-4-1005/2/1, Indhrani Complex, Barkathpura, Hyderabad",
  "locality": "Barkathpura",
  "parentId": 8196,
  "unserviceable": false,
  "veg": true,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "aggregatedDiscountInfo": {
  "header": "20% off",
  "shortDescriptionList": [
  {
  "meta": "20% off | Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "20% off up to ₹50 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "aggregatedDiscountInfoV2": {
  "header": "20% OFF",
  "shortDescriptionList": [
  {
  "meta": "Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "20% off up to ₹50 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "distance",
  "fee": 2300,
  "message": ""
  },
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 2300,
  "message": "",
  "title": "Delivery Charge",
  "amount": "2300",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "2.2 kms",
  "hasSurge": false,
  "sla": {
  "restaurantId": "41005",
  "deliveryTime": 17,
  "minDeliveryTime": 17,
  "maxDeliveryTime": 17,
  "lastMileTravel": 2.200000047683716,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "4.3",
  "totalRatings": 10000,
  "new": false
  },
  "subtype": "basic"
  },
  {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "122882",
  "name": "Sri Sai Raghavendra Udupi Veg",
  "uuid": "ad601fc9-03e1-4578-87dd-407d209516e7",
  "city": "3",
  "area": "Dilsukhnagar",
  "totalRatingsString": "10000+ ratings",
  "cloudinaryImageId": "nitlydb3aql1df311rw6",
  "cuisines": [
  "South Indian",
  "Juices",
  "Ice Cream"
  ],
  "tags": [],
  "costForTwo": 10000,
  "costForTwoString": "₹100 FOR TWO",
  "deliveryTime": 28,
  "minDeliveryTime": 28,
  "maxDeliveryTime": 28,
  "slaString": "28 MINS",
  "lastMileTravel": 6.099999904632568,
  "slugs": {
  "restaurant": "sri-sai-raghavendra-udupi-veg-kothapet-dilsukhnagar-kothapet-dilsukhnagar",
  "city": "hyderabad"
  },
  "cityState": "3",
  "address": "23-30, Krishnaveni Nagar, Opp. Fruit Market, Near Miraj Theatre, Kothapet, Hyderabad- 500060.",
  "locality": "Krishnaveni Nagar",
  "parentId": 19667,
  "unserviceable": false,
  "veg": true,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "aggregatedDiscountInfo": {
  "header": "30% off",
  "shortDescriptionList": [
  {
  "meta": "30% off | Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "30% off up to ₹75 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "aggregatedDiscountInfoV2": {
  "header": "30% OFF",
  "shortDescriptionList": [
  {
  "meta": "Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "30% off up to ₹75 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "distance",
  "fee": 5100,
  "message": ""
  },
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 5100,
  "message": "",
  "title": "Delivery Charge",
  "amount": "5100",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "6 kms",
  "hasSurge": false,
  "sla": {
  "restaurantId": "122882",
  "deliveryTime": 28,
  "minDeliveryTime": 28,
  "maxDeliveryTime": 28,
  "lastMileTravel": 6.099999904632568,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "4.2",
  "totalRatings": 10000,
  "new": false
  },
  "subtype": "basic"
  },
  {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "20068",
  "name": "Hotel Sandarshini",
  "uuid": "a7b9e527-4f50-434f-b00c-58f833556677",
  "city": "3",
  "area": "Musheerabad",
  "totalRatingsString": "10000+ ratings",
  "cloudinaryImageId": "hmuqogsa2jbms9iyqfzb",
  "cuisines": [
  "North Indian",
  "Chinese",
  "South Indian"
  ],
  "tags": [],
  "costForTwo": 20000,
  "costForTwoString": "₹200 FOR TWO",
  "deliveryTime": 20,
  "minDeliveryTime": 20,
  "maxDeliveryTime": 20,
  "slaString": "20 MINS",
  "lastMileTravel": 3.799999952316284,
  "slugs": {
  "restaurant": "hotel-sandarshini-rtc-x-roads-nallakunta-vidyanagar",
  "city": "hyderabad"
  },
  "cityState": "3",
  "address": "Near Sai Raja Theatre, Musheerabad, Hyderabad",
  "locality": "Musheerabad Main Road",
  "parentId": 476,
  "unserviceable": false,
  "veg": true,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "aggregatedDiscountInfo": {
  "header": "FLAT100 off",
  "shortDescriptionList": [
  {
  "meta": "FLAT100 off | Use FLATDEAL",
  "discountType": "Flat",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "FLAT100 off | Use FLATDEAL",
  "discountType": "Flat",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "aggregatedDiscountInfoV2": {
  "header": "₹100 OFF",
  "shortDescriptionList": [
  {
  "meta": "Use FLATDEAL",
  "discountType": "Flat",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "FLAT100 off | Use FLATDEAL",
  "discountType": "Flat",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "ribbon": [
  {
  "type": "PROMOTED"
  }
  ],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "distance",
  "fee": 2900,
  "message": ""
  },
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 2900,
  "message": "",
  "title": "Delivery Charge",
  "amount": "2900",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "cid=6040764~p=31~eid=00000187-35ec-6bfd-0928-9dc900111f76",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "3.7 kms",
  "hasSurge": false,
  "sla": {
  "restaurantId": "20068",
  "deliveryTime": 20,
  "minDeliveryTime": 20,
  "maxDeliveryTime": 20,
  "lastMileTravel": 3.799999952316284,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": true,
  "avgRating": "4.0",
  "totalRatings": 10000,
  "new": false
  },
  "subtype": "basic"
  },
  {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "388772",
  "name": "Hotel Swagath",
  "uuid": "51769b4e-3373-4eeb-8619-bc5b59ffbf35",
  "city": "3",
  "area": "Santhosh Nagar",
  "totalRatingsString": "1000+ ratings",
  "cloudinaryImageId": "cvha2euulllx6arxhkd8",
  "cuisines": [
  "South Indian"
  ],
  "tags": [],
  "costForTwo": 20000,
  "costForTwoString": "₹200 FOR TWO",
  "deliveryTime": 24,
  "minDeliveryTime": 24,
  "maxDeliveryTime": 24,
  "slaString": "24 MINS",
  "lastMileTravel": 5.800000190734863,
  "slugs": {
  "restaurant": "swagath-hotel-kothapet-&-dilsukhnagar-kothapet-&-dilsukhnagar",
  "city": "hyderabad"
  },
  "cityState": "3",
  "address": "H, NO.9-7-83/1, New Maruthi nagar, L,B Nagar, Hyderabad, Circle No.3 (LB Nagar Gaddiannaram Municipality), Hyderabad- East Zone, Telangana- 500035",
  "locality": "Santhosh",
  "parentId": 479,
  "unserviceable": false,
  "veg": false,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "aggregatedDiscountInfo": {
  "header": "30% off",
  "shortDescriptionList": [
  {
  "meta": "30% off | Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "30% off up to ₹75 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "aggregatedDiscountInfoV2": {
  "header": "30% OFF",
  "shortDescriptionList": [
  {
  "meta": "Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "30% off up to ₹75 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "distance",
  "fee": 4400,
  "message": ""
  },
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 4400,
  "message": "",
  "title": "Delivery Charge",
  "amount": "4400",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "5.8 kms",
  "hasSurge": false,
  "sla": {
  "restaurantId": "388772",
  "deliveryTime": 24,
  "minDeliveryTime": 24,
  "maxDeliveryTime": 24,
  "lastMileTravel": 5.800000190734863,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "4.2",
  "totalRatings": 1000,
  "new": false
  },
  "subtype": "basic"
  },
  {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "329070",
  "name": "Kamath Hotel",
  "uuid": "aee72e8d-9a4b-4854-91bd-11533c47a653",
  "city": "3",
  "area": "Abids",
  "totalRatingsString": "10000+ ratings",
  "cloudinaryImageId": "wx5qrfddnvfastifgmjy",
  "cuisines": [
  "South Indian"
  ],
  "tags": [],
  "costForTwo": 20000,
  "costForTwoString": "₹200 FOR TWO",
  "deliveryTime": 20,
  "minDeliveryTime": 20,
  "maxDeliveryTime": 20,
  "slaString": "20 MINS",
  "lastMileTravel": 2.4000000953674316,
  "slugs": {
  "restaurant": "kamath-hotel-abids-&-koti-abids-&-koti",
  "city": "hyderabad"
  },
  "cityState": "3",
  "address": "5-8-56/A, Nampally station road Hyderabad.",
  "locality": "Abids & Koti",
  "parentId": 19012,
  "unserviceable": false,
  "veg": true,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "aggregatedDiscountInfo": {
  "header": "20% off",
  "shortDescriptionList": [
  {
  "meta": "20% off | Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "20% off up to ₹50 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "aggregatedDiscountInfoV2": {
  "header": "20% OFF",
  "shortDescriptionList": [
  {
  "meta": "Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "20% off up to ₹50 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "distance",
  "fee": 2300,
  "message": ""
  },
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 2300,
  "message": "",
  "title": "Delivery Charge",
  "amount": "2300",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "2.4 kms",
  "hasSurge": false,
  "sla": {
  "restaurantId": "329070",
  "deliveryTime": 20,
  "minDeliveryTime": 20,
  "maxDeliveryTime": 20,
  "lastMileTravel": 2.4000000953674316,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "4.4",
  "totalRatings": 10000,
  "new": false
  },
  "subtype": "basic"
  },
  {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "495772",
  "name": "Cafe Niloufer",
  "uuid": "b2a76ad7-994f-49f3-99b3-47bfe8d3abd2",
  "city": "3",
  "area": "Old Mla Quarters Road",
  "totalRatingsString": "5000+ ratings",
  "cloudinaryImageId": "e0c63e989612732c70da6d1bb6984850",
  "cuisines": [
  "Bakery",
  "Beverages",
  "Snacks",
  "Desserts"
  ],
  "tags": [],
  "costForTwo": 40000,
  "costForTwoString": "₹400 FOR TWO",
  "deliveryTime": 19,
  "minDeliveryTime": 19,
  "maxDeliveryTime": 19,
  "slaString": "19 MINS",
  "lastMileTravel": 2.799999952316284,
  "slugs": {
  "restaurant": "café-niloufer-himayath-nagar-himayath-nagar",
  "city": "hyderabad"
  },
  "cityState": "3",
  "address": "M/S. ABR CAFE AND BAKERS PRIVATE LIMITED, 3-5-900, Old MLA Quarters Road, HimayathNagar, Hyderabad-Central Zone, Telangana-500029.",
  "locality": "Old Mla Quarters Road",
  "parentId": 9152,
  "unserviceable": false,
  "veg": false,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "aggregatedDiscountInfo": {
  "header": "10% off",
  "shortDescriptionList": [
  {
  "meta": "10% off | Use PARTY",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "10% off | Use code PARTY",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "aggregatedDiscountInfoV2": {
  "header": "10% OFF",
  "shortDescriptionList": [
  {
  "meta": "Use PARTY",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "10% off | Use code PARTY",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "ribbon": [
  {
  "type": "PROMOTED"
  }
  ],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "distance",
  "fee": 2300,
  "message": ""
  },
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 2300,
  "message": "",
  "title": "Delivery Charge",
  "amount": "2300",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "cid=6070217~p=7~eid=00000187-35ec-6bfd-0928-9dc100110722",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "2.7 kms",
  "hasSurge": false,
  "sla": {
  "restaurantId": "495772",
  "deliveryTime": 19,
  "minDeliveryTime": 19,
  "maxDeliveryTime": 19,
  "lastMileTravel": 2.799999952316284,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": true,
  "avgRating": "4.5",
  "totalRatings": 5000,
  "new": false
  },
  "subtype": "basic"
  },
  {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "10258",
  "name": "Bheemas Grand",
  "uuid": "b84ce4ef-9043-4d07-9cb2-c1c6184d8360",
  "city": "3",
  "area": "Banjara Hills",
  "totalRatingsString": "10000+ ratings",
  "cloudinaryImageId": "schjsfazzjcaaywwuap7",
  "cuisines": [
  "South Indian"
  ],
  "tags": [],
  "costForTwo": 15000,
  "costForTwoString": "₹150 FOR TWO",
  "deliveryTime": 28,
  "minDeliveryTime": 28,
  "maxDeliveryTime": 28,
  "slaString": "28 MINS",
  "lastMileTravel": 6.599999904632568,
  "slugs": {
  "restaurant": "bheemas-grand-road-no-10-banjara-hills",
  "city": "hyderabad"
  },
  "cityState": "3",
  "address": "Near Rainbow Children Hospital,Opposite Karvy,Road no 10,Banjara Hills,Hyderabad",
  "locality": "Road No 10",
  "parentId": 1842,
  "unserviceable": false,
  "veg": true,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "aggregatedDiscountInfo": {
  "header": "50% off",
  "shortDescriptionList": [
  {
  "meta": "50% off | Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "50% off up to ₹100 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "aggregatedDiscountInfoV2": {
  "header": "50% OFF",
  "shortDescriptionList": [
  {
  "meta": "Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "50% off up to ₹100 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "distance",
  "fee": 5100,
  "message": ""
  },
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 5100,
  "message": "",
  "title": "Delivery Charge",
  "amount": "5100",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 1,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "6.5 kms",
  "hasSurge": false,
  "sla": {
  "restaurantId": "10258",
  "deliveryTime": 28,
  "minDeliveryTime": 28,
  "maxDeliveryTime": 28,
  "lastMileTravel": 6.599999904632568,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "IT_IS_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "4.0",
  "totalRatings": 10000,
  "new": false
  },
  "subtype": "basic"
  },
  {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "157695",
  "name": "Varalakshmi Tiffins",
  "uuid": "68bfd92c-facc-4d9a-a9d8-08c9ca27fa63",
  "city": "3",
  "area": "Dilsukhnagar",
  "totalRatingsString": "10000+ ratings",
  "cloudinaryImageId": "8523266de1213e8ea57e5df4eedf747e",
  "cuisines": [
  "South Indian"
  ],
  "tags": [],
  "costForTwo": 30000,
  "costForTwoString": "₹300 FOR TWO",
  "deliveryTime": 25,
  "minDeliveryTime": 25,
  "maxDeliveryTime": 25,
  "slaString": "25 MINS",
  "lastMileTravel": 5.800000190734863,
  "slugs": {
  "restaurant": "varalakshmi-tiffins-kothapet-dilsukhnagar",
  "city": "hyderabad"
  },
  "cityState": "3",
  "address": "6-33,Opposit Bashyam School, Bhavani Nagar, Dilshuknagar,500060",
  "locality": "Kothapet & Dilsukhnagar",
  "parentId": 6482,
  "unserviceable": false,
  "veg": true,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "aggregatedDiscountInfo": {
  "header": "40% off",
  "shortDescriptionList": [
  {
  "meta": "40% off | Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "40% off up to ₹80 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "aggregatedDiscountInfoV2": {
  "header": "40% OFF",
  "shortDescriptionList": [
  {
  "meta": "Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "40% off up to ₹80 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "distance",
  "fee": 4400,
  "message": ""
  },
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 4400,
  "message": "",
  "title": "Delivery Charge",
  "amount": "4400",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "5.8 kms",
  "hasSurge": false,
  "sla": {
  "restaurantId": "157695",
  "deliveryTime": 25,
  "minDeliveryTime": 25,
  "maxDeliveryTime": 25,
  "lastMileTravel": 5.800000190734863,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "4.4",
  "totalRatings": 10000,
  "new": false
  },
  "subtype": "basic"
  },
  {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "27739",
  "name": "Cafe Niloufer Classic",
  "uuid": "096c36fb-29e3-4d2f-98fa-048e2c847b09",
  "city": "3",
  "area": "Redhills",
  "totalRatingsString": "10000+ ratings",
  "cloudinaryImageId": "67ca79626844963d6979835661ac45a0",
  "cuisines": [
  "Bakery",
  "Beverages",
  "Snacks",
  "Desserts"
  ],
  "tags": [],
  "costForTwo": 15000,
  "costForTwoString": "₹150 FOR TWO",
  "deliveryTime": 25,
  "minDeliveryTime": 25,
  "maxDeliveryTime": 25,
  "slaString": "25 MINS",
  "lastMileTravel": 4.099999904632568,
  "slugs": {
  "restaurant": "cafe-niloufer-lakdikapul-somajiguda-khairtabad",
  "city": "hyderabad"
  },
  "cityState": "3",
  "address": "11-5-422/C/B, Opposite Hanuman Temple, Lakdikapul, Hyderabad",
  "locality": "Lakdikapul",
  "parentId": 19273,
  "unserviceable": false,
  "veg": false,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "aggregatedDiscountInfo": {
  "header": "10% off",
  "shortDescriptionList": [
  {
  "meta": "10% off | Use PARTY",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "10% off | Use code PARTY",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "aggregatedDiscountInfoV2": {
  "header": "10% OFF",
  "shortDescriptionList": [
  {
  "meta": "Use PARTY",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "10% off | Use code PARTY",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "ribbon": [
  {
  "type": "PROMOTED"
  }
  ],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "distance",
  "fee": 3500,
  "message": ""
  },
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 3500,
  "message": "",
  "title": "Delivery Charge",
  "amount": "3500",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "cid=6070215~p=10~eid=00000187-35ec-6bfd-0928-9dc200110a09",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "4 kms",
  "hasSurge": false,
  "sla": {
  "restaurantId": "27739",
  "deliveryTime": 25,
  "minDeliveryTime": 25,
  "maxDeliveryTime": 25,
  "lastMileTravel": 4.099999904632568,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": true,
  "avgRating": "4.4",
  "totalRatings": 10000,
  "new": false
  },
  "subtype": "basic"
  },
  {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "16158",
  "name": "Royal Tiffin Centre",
  "uuid": "b0aba126-7890-479d-87f8-77ab1dc5cab3",
  "city": "3",
  "area": "Koti",
  "totalRatingsString": "10000+ ratings",
  "cloudinaryImageId": "xxvnkzmpgmbojcakxws4",
  "cuisines": [
  "South Indian"
  ],
  "tags": [],
  "costForTwo": 15000,
  "costForTwoString": "₹150 FOR TWO",
  "deliveryTime": 21,
  "minDeliveryTime": 21,
  "maxDeliveryTime": 21,
  "slaString": "21 MINS",
  "lastMileTravel": 1.2000000476837158,
  "slugs": {
  "restaurant": "royal-tiffin-centre-bogulkunta-abids-koti",
  "city": "hyderabad"
  },
  "cityState": "3",
  "address": "Hanuman Tekdi, Abids, Hyderabad, Telangana 500001",
  "locality": "Hanuman Tekdi",
  "parentId": 4621,
  "unserviceable": false,
  "veg": true,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "aggregatedDiscountInfo": {
  "header": "30% off",
  "shortDescriptionList": [
  {
  "meta": "30% off | Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "30% off up to ₹75 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "aggregatedDiscountInfoV2": {
  "header": "30% OFF",
  "shortDescriptionList": [
  {
  "meta": "Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "30% off up to ₹75 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "distance",
  "fee": 2300,
  "message": ""
  },
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 2300,
  "message": "",
  "title": "Delivery Charge",
  "amount": "2300",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "1.2 kms",
  "hasSurge": false,
  "sla": {
  "restaurantId": "16158",
  "deliveryTime": 21,
  "minDeliveryTime": 21,
  "maxDeliveryTime": 21,
  "lastMileTravel": 1.2000000476837158,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "3.8",
  "totalRatings": 10000,
  "new": false
  },
  "subtype": "basic"
  },
  {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "627920",
  "name": "Chaayos Chai+Snacks=Relax",
  "uuid": "783d46ec-b6a8-45cb-a68e-294b3ce6ce49",
  "city": "3",
  "area": "Abids",
  "totalRatingsString": "50+ ratings",
  "cloudinaryImageId": "0a6f66d75eb042123e34d89bef7189ce",
  "cuisines": [
  "Bakery",
  "Beverages",
  "Chaat",
  "Desserts",
  "Home Food",
  "Italian",
  "Maharashtrian",
  "Snacks",
  "Street Food",
  "Sweets"
  ],
  "tags": [],
  "costForTwo": 25000,
  "costForTwoString": "₹250 FOR TWO",
  "deliveryTime": 21,
  "minDeliveryTime": 21,
  "maxDeliveryTime": 21,
  "slaString": "21 MINS",
  "lastMileTravel": 1.7000000476837158,
  "slugs": {
  "restaurant": "chaayos-chaisnacksrelax-nampally-kachiguda",
  "city": "hyderabad"
  },
  "cityState": "3",
  "address": "5-4-779 to 780, Kathal Mandi Lane, Abids, Goshamahal Circle No. 14, Hyderabad, Telangana-500001",
  "locality": "Nampally",
  "parentId": 281782,
  "unserviceable": false,
  "veg": false,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "aggregatedDiscountInfo": {
  "header": "50% off",
  "shortDescriptionList": [
  {
  "meta": "50% off | Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "50% off up to ₹100 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "aggregatedDiscountInfoV2": {
  "header": "50% OFF",
  "shortDescriptionList": [
  {
  "meta": "Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "50% off up to ₹100 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "ribbon": [
  {
  "type": "PROMOTED"
  }
  ],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "distance",
  "fee": 2300,
  "message": ""
  },
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 2300,
  "message": "",
  "title": "Delivery Charge",
  "amount": "2300",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "cid=6266375~p=13~eid=00000187-35ec-6bfd-0928-9dc300110d7b",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "1.7 kms",
  "hasSurge": false,
  "sla": {
  "restaurantId": "627920",
  "deliveryTime": 21,
  "minDeliveryTime": 21,
  "maxDeliveryTime": 21,
  "lastMileTravel": 1.7000000476837158,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": true,
  "avgRating": "4.2",
  "totalRatings": 50,
  "new": false
  },
  "subtype": "basic"
  },
  {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "654939",
  "name": "Iqbal Cafe",
  "uuid": "775f5fb4-2cce-4e50-b931-f71a5f86a3f2",
  "city": "3",
  "area": "Charminar",
  "totalRatingsString": "500+ ratings",
  "cloudinaryImageId": "638a8587979f354d9794727a8fbb2dad",
  "cuisines": [
  "Biryani"
  ],
  "tags": [],
  "costForTwo": 18000,
  "costForTwoString": "₹180 FOR TWO",
  "deliveryTime": 32,
  "minDeliveryTime": 32,
  "maxDeliveryTime": 32,
  "slaString": "32 MINS",
  "lastMileTravel": 2.799999952316284,
  "slugs": {
  "restaurant": "iqbal-cafe-charminar-charminar",
  "city": "hyderabad"
  },
  "cityState": "3",
  "address": "22-3/756, Purani Haveli Rd, Opp Criminal Court, Malakpet, Hyderabad, Telangana 500024, India",
  "locality": "Purani haveli rd",
  "parentId": 393946,
  "unserviceable": false,
  "veg": false,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "aggregatedDiscountInfo": {
  "header": "10% off",
  "shortDescriptionList": [
  {
  "meta": "10% off | Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "10% off up to ₹40 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "aggregatedDiscountInfoV2": {
  "header": "10% OFF",
  "shortDescriptionList": [
  {
  "meta": "Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "10% off up to ₹40 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "distance",
  "fee": 2300,
  "message": ""
  },
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 2300,
  "message": "",
  "title": "Delivery Charge",
  "amount": "2300",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "2.7 kms",
  "hasSurge": false,
  "sla": {
  "restaurantId": "654939",
  "deliveryTime": 32,
  "minDeliveryTime": 32,
  "maxDeliveryTime": 32,
  "lastMileTravel": 2.799999952316284,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "4.5",
  "totalRatings": 500,
  "new": false
  },
  "subtype": "basic"
  },
  {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "51887",
  "name": "Nrs Nandini",
  "uuid": "e93a64cd-2369-4fc0-a749-a5cae0aae8eb",
  "city": "3",
  "area": "Adikmet",
  "totalRatingsString": "10000+ ratings",
  "cloudinaryImageId": "zzg8m414oj1fpcae621v",
  "cuisines": [
  "South Indian"
  ],
  "tags": [],
  "costForTwo": 15000,
  "costForTwoString": "₹150 FOR TWO",
  "deliveryTime": 19,
  "minDeliveryTime": 19,
  "maxDeliveryTime": 19,
  "slaString": "19 MINS",
  "lastMileTravel": 3,
  "slugs": {
  "restaurant": "nrs-nandini-nallakunta-nallakunta-vidyanagar-2",
  "city": "hyderabad"
  },
  "cityState": "3",
  "address": "Door No 21-565/105,106, University Road, Opposite Shankarmutt, Nallakunta, Hyderabad- 500044",
  "locality": "Nallakunta Main Rd",
  "parentId": 19265,
  "unserviceable": false,
  "veg": true,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "aggregatedDiscountInfo": {
  "header": "20% off",
  "shortDescriptionList": [
  {
  "meta": "20% off | Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "20% off up to ₹50 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "aggregatedDiscountInfoV2": {
  "header": "20% OFF",
  "shortDescriptionList": [
  {
  "meta": "Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "20% off up to ₹50 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "distance",
  "fee": 2900,
  "message": ""
  },
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 2900,
  "message": "",
  "title": "Delivery Charge",
  "amount": "2900",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "3 kms",
  "hasSurge": false,
  "sla": {
  "restaurantId": "51887",
  "deliveryTime": 19,
  "minDeliveryTime": 19,
  "maxDeliveryTime": 19,
  "lastMileTravel": 3,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": false,
  "avgRating": "4.3",
  "totalRatings": 10000,
  "new": false
  },
  "subtype": "basic"
  },
  {
  "type": "restaurant",
  "data": {
  "type": "F",
  "id": "2535",
  "name": "Agra Sweets Banjara",
  "uuid": "7063a0ca-8457-4fe8-b6bf-e2ffc142a5a9",
  "city": "3",
  "area": "Masab Tank",
  "totalRatingsString": "10000+ ratings",
  "cloudinaryImageId": "ydsyhgg51xaxsrjbaxdv",
  "cuisines": [
  "Sweets",
  "Desserts",
  "Chaat",
  "Snacks",
  "Beverages"
  ],
  "tags": [],
  "costForTwo": 25000,
  "costForTwoString": "₹250 FOR TWO",
  "deliveryTime": 28,
  "minDeliveryTime": 28,
  "maxDeliveryTime": 28,
  "slaString": "28 MINS",
  "lastMileTravel": 5.5,
  "slugs": {
  "restaurant": "agra-sweets-masabtank-banjara-hills",
  "city": "hyderabad"
  },
  "cityState": "3",
  "address": "10-5-5/1 Road No.1,Khaja complex, Banjara Hills",
  "locality": "Road No 1",
  "parentId": 34,
  "unserviceable": false,
  "veg": true,
  "select": false,
  "favorite": false,
  "tradeCampaignHeaders": [],
  "aggregatedDiscountInfo": {
  "header": "30% off",
  "shortDescriptionList": [
  {
  "meta": "30% off | Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "30% off up to ₹75 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "aggregatedDiscountInfoV2": {
  "header": "30% OFF",
  "shortDescriptionList": [
  {
  "meta": "Use TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "descriptionList": [
  {
  "meta": "30% off up to ₹75 | Use code TRYNEW",
  "discountType": "Percentage",
  "operationType": "RESTAURANT"
  }
  ],
  "subHeader": "",
  "headerType": 0,
  "superFreedel": ""
  },
  "ribbon": [
  {
  "type": "PROMOTED"
  }
  ],
  "chain": [],
  "feeDetails": {
  "fees": [
  {
  "name": "distance",
  "fee": 4400,
  "message": ""
  },
  {
  "name": "time",
  "fee": 0,
  "message": ""
  },
  {
  "name": "special",
  "fee": 0,
  "message": ""
  }
  ],
  "totalFees": 4400,
  "message": "",
  "title": "Delivery Charge",
  "amount": "4400",
  "icon": ""
  },
  "availability": {
  "opened": true,
  "nextOpenMessage": "",
  "nextCloseMessage": ""
  },
  "longDistanceEnabled": 0,
  "rainMode": "NONE",
  "thirdPartyAddress": false,
  "thirdPartyVendor": "",
  "adTrackingID": "cid=6196546~p=16~eid=00000187-35ec-6bfd-0928-9dc400111047",
  "badges": {
  "imageBased": [],
  "textBased": [],
  "textExtendedBadges": []
  },
  "lastMileTravelString": "5.5 kms",
  "hasSurge": false,
  "sla": {
  "restaurantId": "2535",
  "deliveryTime": 28,
  "minDeliveryTime": 28,
  "maxDeliveryTime": 28,
  "lastMileTravel": 5.5,
  "lastMileDistance": 0,
  "serviceability": "SERVICEABLE",
  "rainMode": "NONE",
  "longDistance": "NOT_LONG_DISTANCE",
  "preferentialService": false,
  "iconType": "EMPTY"
  },
  "promoted": true,
  "avgRating": "4.3",
  "totalRatings": 10000,
  "new": false
  },
  "subtype": "basic"
  }
  ]
const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        {
          resData.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant} />)
        }
      </div>
    </div>
  )
}

const AppLayout = () => {
  return <div className="app">
    <Header />
    <Body />
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)