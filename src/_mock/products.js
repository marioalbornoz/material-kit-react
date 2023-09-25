
// ----------------------------------------------------------------------

const products = [
  {
    "id": "028b3145-7172-4403-9e79-4e863ab5009b",
    "cover": "/assets/images/products/product_1.jpg",
    "name": "Nike Air Force 1 NDESTRUKT",
    "price": 35.64,
    "priceSale": null,
    "colors": [
      "#00AB55",
      "#000000"
    ],
    "status": "sale"
  },
  {
    "id": "83019324-704a-4f2b-9702-4e501e3581a0",
    "cover": "/assets/images/products/product_2.jpg",
    "name": "Nike Space Hippie 04",
    "price": 76.36,
    "priceSale": null,
    "colors": [
      "#000000",
      "#FFFFFF"
    ],
    "status": "new"
  },
  {
    "id": "7e6a3d8c-d1ca-4064-be63-6898f4a83e51",
    "cover": "/assets/images/products/product_3.jpg",
    "name": "Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear",
    "price": 55.79,
    "priceSale": 20.13,
    "colors": [
      "#FFFFFF",
      "#FFC0CB"
    ],
    "status": ""
  },
  {
    "id": "3f07acd5-7ebf-44c9-9231-8570a7193e72",
    "cover": "/assets/images/products/product_4.jpg",
    "name": "Nike Blazer Low 77 Vintage",
    "price": 44.33,
    "priceSale": null,
    "colors": [
      "#FFC0CB",
      "#FF4842",
      "#1890FF"
    ],
    "status": ""
  },
  {
    "id": "866b46e7-d493-4504-9d61-eb63523d4181",
    "cover": "/assets/images/products/product_5.jpg",
    "name": "Nike ZoomX SuperRep Surge",
    "price": 68.65,
    "priceSale": null,
    "colors": [
      "#00AB55",
      "#000000",
      "#FFFFFF",
      "#FFC0CB",
      "#FF4842",
      "#1890FF",
      "#94D82D",
      "#FFC107"
    ],
    "status": "sale"
  },
  {
    "id": "fa1e46ef-f064-4c6b-8bd7-adcdc0b97b01",
    "cover": "/assets/images/products/product_6.jpg",
    "name": "Zoom Freak 2",
    "price": 74.46,
    "priceSale": 24.2,
    "colors": [
      "#00AB55",
      "#000000",
      "#FFFFFF",
      "#FFC0CB",
      "#FF4842",
      "#1890FF",
      "#94D82D",
      "#FFC107"
    ],
    "status": "new"
  },
  {
    "id": "c8e9f80b-3b10-4ef4-b39a-695f7ec938f4",
    "cover": "/assets/images/products/product_7.jpg",
    "name": "Nike Air Max Zephyr",
    "price": 40.24,
    "priceSale": null,
    "colors": [
      "#00AB55",
      "#000000",
      "#FFFFFF",
      "#FFC0CB",
      "#FF4842",
      "#1890FF",
      "#94D82D",
      "#FFC107"
    ],
    "status": "new"
  },
  {
    "id": "e3afde08-86bd-4cfa-9d5b-5bab5c495089",
    "cover": "/assets/images/products/product_8.jpg",
    "name": "Jordan Delta",
    "price": 50.21,
    "priceSale": null,
    "colors": [
      "#00AB55",
      "#000000",
      "#FFFFFF",
      "#FFC0CB",
      "#FF4842",
      "#1890FF",
      "#94D82D",
      "#FFC107"
    ],
    "status": ""
  },
  {
    "id": "469f60e7-6045-4001-a946-195866ade958",
    "cover": "/assets/images/products/product_9.jpg",
    "name": "Air Jordan XXXV PF",
    "price": 89.36,
    "priceSale": 23.86,
    "colors": [
      "#00AB55",
      "#000000",
      "#FFFFFF",
      "#FFC0CB",
      "#FF4842",
      "#1890FF",
      "#94D82D",
      "#FFC107"
    ],
    "status": "new"
  },
  {
    "id": "5cc2dc47-e482-426d-a596-5c9545e769fc",
    "cover": "/assets/images/products/product_10.jpg",
    "name": "Nike Waffle Racer Crater",
    "price": 8.75,
    "priceSale": null,
    "colors": [
      "#00AB55",
      "#000000",
      "#FFFFFF",
      "#FFC0CB",
      "#FF4842",
      "#1890FF",
      "#94D82D",
      "#FFC107"
    ],
    "status": "sale"
  },
  {
    "id": "36ae209a-431f-456c-84ff-57530633e242",
    "cover": "/assets/images/products/product_11.jpg",
    "name": "Kyrie 7 EP Sisterhood",
    "price": 41.88,
    "priceSale": null,
    "colors": [
      "#00AB55",
      "#000000",
      "#FFFFFF",
      "#FFC0CB",
      "#FF4842",
      "#1890FF",
      "#94D82D",
      "#FFC107"
    ],
    "status": ""
  },
  {
    "id": "4c190ef1-ddaa-4400-ac44-00825b21e0ea",
    "cover": "/assets/images/products/product_12.jpg",
    "name": "Nike Air Zoom BB NXT",
    "price": 38.88,
    "priceSale": 27.4,
    "colors": [
      "#00AB55",
      "#000000",
      "#FFFFFF",
      "#FFC0CB",
      "#FF4842",
      "#1890FF",
      "#94D82D",
      "#FFC107"
    ],
    "status": ""
  },
  {
    "id": "26f3eadb-d26f-4687-8ab9-b89a72c60179",
    "cover": "/assets/images/products/product_13.jpg",
    "name": "Nike Air Force 1 07 LX",
    "price": 82.6,
    "priceSale": null,
    "colors": [
      "#00AB55",
      "#000000",
      "#FFFFFF",
      "#FFC0CB",
      "#FF4842",
      "#1890FF",
      "#94D82D",
      "#FFC107"
    ],
    "status": ""
  },
  {
    "id": "e5f298aa-3d4e-46ee-a013-0f6b13e3f2ad",
    "cover": "/assets/images/products/product_14.jpg",
    "name": "Nike Air Force 1 Shadow SE",
    "price": 60.82,
    "priceSale": null,
    "colors": [
      "#00AB55",
      "#000000",
      "#FFFFFF",
      "#FFC0CB",
      "#FF4842",
      "#1890FF",
      "#94D82D",
      "#FFC107"
    ],
    "status": "new"
  },
  {
    "id": "ac9de82d-ea98-4d33-bcdb-2b46202ab75c",
    "cover": "/assets/images/products/product_15.jpg",
    "name": "Nike Air Zoom Tempo NEXT%",
    "price": 21.32,
    "priceSale": 21.43,
    "colors": [
      "#00AB55",
      "#000000",
      "#FFFFFF",
      "#FFC0CB",
      "#FF4842",
      "#1890FF",
      "#94D82D",
      "#FFC107"
    ],
    "status": "new"
  },
  {
    "id": "0592eb25-7964-4701-a784-1beaf2738dfe",
    "cover": "/assets/images/products/product_16.jpg",
    "name": "Nike DBreak-Type",
    "price": 18.92,
    "priceSale": null,
    "colors": [
      "#00AB55",
      "#000000",
      "#FFFFFF",
      "#FFC0CB",
      "#FF4842",
      "#1890FF",
      "#94D82D",
      "#FFC107"
    ],
    "status": ""
  },
  {
    "id": "5b7f9430-a2ec-4839-af66-9acf2152a186",
    "cover": "/assets/images/products/product_17.jpg",
    "name": "Nike Air Max Up",
    "price": 13.76,
    "priceSale": null,
    "colors": [
      "#00AB55",
      "#000000",
      "#FFFFFF",
      "#FFC0CB",
      "#FF4842",
      "#1890FF",
      "#94D82D",
      "#FFC107"
    ],
    "status": "new"
  },
  {
    "id": "5f875f26-1628-49ab-8a0f-c7e48a49dd20",
    "cover": "/assets/images/products/product_18.jpg",
    "name": "Nike Air Max 270 React ENG",
    "price": 71.94,
    "priceSale": 26.96,
    "colors": [
      "#00AB55",
      "#000000",
      "#FFFFFF",
      "#FFC0CB",
      "#FF4842",
      "#1890FF",
      "#94D82D",
      "#FFC107"
    ],
    "status": ""
  },
  {
    "id": "c98403c0-8761-4914-9e78-81b93ac40c5e",
    "cover": "/assets/images/products/product_19.jpg",
    "name": "NikeCourt Royale",
    "price": 50.02,
    "priceSale": null,
    "colors": [
      "#00AB55",
      "#000000",
      "#FFFFFF",
      "#FFC0CB",
      "#FF4842",
      "#1890FF",
      "#94D82D",
      "#FFC107"
    ],
    "status": ""
  },
  {
    "id": "ea2ee238-5737-406e-8d7c-dd7356653a77",
    "cover": "/assets/images/products/product_20.jpg",
    "name": "Nike Air Zoom Pegasus 37 Premium",
    "price": 40.18,
    "priceSale": null,
    "colors": [
      "#00AB55",
      "#000000",
      "#FFFFFF",
      "#FFC0CB",
      "#FF4842",
      "#1890FF",
      "#94D82D",
      "#FFC107"
    ],
    "status": "sale"
  },
  {
    "id": "b6a31a3f-52dc-4be4-9b14-8bc6dd591d34",
    "cover": "/assets/images/products/product_21.jpg",
    "name": "Nike Air Zoom SuperRep",
    "price": 17.8,
    "priceSale": 24.39,
    "colors": [
      "#00AB55",
      "#000000",
      "#FFFFFF",
      "#FFC0CB",
      "#FF4842",
      "#1890FF",
      "#94D82D",
      "#FFC107"
    ],
    "status": "new"
  },
  {
    "id": "908737ee-f1f9-49d2-a4c9-ae69d13bb277",
    "cover": "/assets/images/products/product_22.jpg",
    "name": "NikeCourt Royale",
    "price": 9.95,
    "priceSale": null,
    "colors": [
      "#00AB55",
      "#000000",
      "#FFFFFF",
      "#FFC0CB",
      "#FF4842",
      "#1890FF",
      "#94D82D",
      "#FFC107"
    ],
    "status": ""
  },
  {
    "id": "b8d305de-e940-45aa-8aa1-b07c6137685a",
    "cover": "/assets/images/products/product_23.jpg",
    "name": "Nike React Art3mis",
    "price": 83.8,
    "priceSale": null,
    "colors": [
      "#FF4842",
      "#1890FF"
    ],
    "status": ""
  },
  {
    "id": "3deda9ea-04ce-4bbe-98b1-90f7e1219623",
    "cover": "/assets/images/products/product_24.jpg",
    "name": "Nike React Infinity Run Flyknit A.I.R. Chaz Bear",
    "price": 98.08,
    "priceSale": 28.46,
    "colors": [
      "#1890FF"
    ],
    "status": "sale"
  }
]
console.log('====================================');
console.log(products);
console.log('====================================');
export default products;
