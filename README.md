# Canvas - Painting E-Commerce Web Application

**Canvas** is an e-commerce platform designed to sell paintings with an intuitive, user-friendly interface and real-time updates. The application consists of three major components: a **Frontend** for users, a **Backend** for handling API requests and database management, and an **Admin Panel** for product management.


## Features

### **User Features**
- **Product Upload:** Upload paintings/products via the admin panel with Cloudinary for image storage.
- **Add to Cart:** Seamless product addition to the cart with real-time updates.
- **Filter and Categorize Products:** Browse products by category for easy filtering and selection.
- **Cart Updates:** Add items with real-time quantity and price updates in the cart.
- **New Collections:** Automatically include the newest products in the "New Collection" section.
- **Remove from Cart:** Easily remove items from the cart with real-time feedback.
- **Cart Notification:** Real-time notification updates with cart icon badges showing the number of items.
- **Auto-Update Prices:** Both total and individual product prices are automatically updated as items are added or removed from the cart.
  
### **Admin Features**
- **Product Management:** Easily add or remove products through the admin panel with just a few clicks.
- **Real-Time Image Upload:** Upload and store images using Cloudinary for efficient image management.
- **Delete Products:** Quickly remove items from the catalog in the Admin Panel.

---

## Tech Stack

- **Frontend**: React.js (deployed on Vercel)
- **Backend**: Node.js, Express.js (deployed on Render)
- **Database**: MongoDB (for storing user and product data)
- **Image Hosting**: Cloudinary (for storing and serving images)
- **State Management**: React useState and Context API
- **Authentication**: JWT-based user authentication for secure login and signup.

---

## Installation and Setup

### **1. Clone the Repository**
```bash
git clone https://github.com/deepraj21/canvas
cd canvas
```

### **2. Install Dependencies**
Navigate to the backend, frontend, and admin panel directories individually and install the required dependencies.

```bash
cd Backend
npm install
```

```bash
cd Frontend
npm install
```

```bash
cd Admin
npm install
```

### **3. Environment Variables**
Create a `.env` file in your backend directory with the following credentials:

```
MONGODB_URI=<your-mongodb-uri>
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
```

### **4. Run the Applications**
Run the backend and frontend locally for development.

- **Backend**:
  ```bash
  node index.js
  ```
  The backend should run on `http://localhost:4000/`

- **Frontend**:
  ```bash
  npm start
  ```
  The frontend should run on `http://localhost:3000/`

- **Admin Panel**:
  ```bash
  npm run dev
  ```
  The admin panel should run on `http://localhost:5173/`

---

## API Endpoints

### **User APIs**

- **Signup**: `POST /signup`
- **Login**: `POST /login`
- **Get All Products**: `GET /allProducts`
- **Add to Cart**: `POST /addtocart`
- **Remove from Cart**: `POST /removefromcart`
- **Get Cart Data**: `POST /getcart`
- **New Collection**: `GET /newcollection`
- **Popular Items**: `GET /popularitems`

### **Admin APIs**

- **Upload Product Image**: `POST /upload` (Uses Cloudinary for image storage)
- **Add Product**: `POST /addProduct`
- **Delete Product**: `POST /deleteProduct`

---

## Deployment

### **Frontend**: Vercel

The frontend is deployed on Vercel for ease of deployment and scalability. 

Access: [Canvas Frontend](https://canvas-v1.vercel.app/)

### **Backend**: Render

The backend is deployed on Render, which handles the API requests, database connections, and image storage management.

Access: [Canvas Backend](https://canvas-backend-vgcc.onrender.com/)

### **Admin Panel**: Vercel

The admin panel is deployed separately on Vercel for managing the product catalog.

Access: [Canvas Admin Panel](https://canvas-admin-panel.vercel.app/)

---

## Future Enhancements

- **Payment Gateway Integration**: Add support for online payments using Stripe or PayPal.
- **User Profile & Orders**: Implement user profiles with order history.
- **Search Functionality**: Add product search across the site for easier navigation.
- **Wishlist**: Allow users to save products to their wishlist.
  
---

## Contributing

Feel free to raise issues or submit pull requests to contribute to this project. You can reach out with any questions or feature suggestions.

---

## License

This project is licensed under the MIT License.
