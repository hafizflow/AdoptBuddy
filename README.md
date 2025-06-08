# 🐾 Local Pet Adoption & Rescue Map

A web application that connects local pet rescue organizations and individual rescuers with potential adopters through an interactive map-based platform. It simplifies the pet adoption process and fosters community-based rescue efforts.

## 🌟 Features

### 🔐 User Authentication & Roles
- **User Registration** as:
    - 🏡 Potential Adopter
    - 🐶 Rescue Organization / Individual Rescuer
    - 🔧 Admin (predefined)
- Secure Login/Logout
- Session Management
- Role-based Authorization
- User Profile Management (including location)

### 🐕 Pet Listing & Management (Rescuers)
- Create detailed pet profiles:
    - Species, breed, age, gender, size, color
    - Health info (vaccination, spay/neuter)
    - Temperament, description, photos
    - **Exact location** for map visualization
- Set and update pet status (Available, On Hold, Adopted)
- Edit or delete existing listings

### 🔍 Pet Discovery & Adoption (Adopters)
- Browse all adoptable pets in a gallery
- **Search by location** (address or current location)
- **Advanced Filters**: species, breed, size, temperament, etc.
- Interactive map with pet and shelter markers
- View full pet profiles and photo galleries
- Save pets to a personal **Favorites** list
- Submit multi-step **Adoption Applications**
- Track application status

### 📥 Adoption Workflow (Rescue Organizations)
- Review incoming adoption applications
- Update application status (Received, Under Review, Approved, Denied)
- (Optional) Basic messaging with adopters

### 🗺️ Mapping API Integration
- Use **Leaflet.js / OpenStreetMap**, or Google Maps / Mapbox (free tier)
- Geocoding & reverse geocoding
- Distance calculation and directions
- Map visualization of pets and shelters

### 🔧 Technical Requirements
- **MVC Architecture**
- **Dynamic & Responsive** web pages
- Full **CRUD** functionality for:
    - Users
    - Pet listings
    - Adoption applications
    - Favorites
- Form validation (client + server)
- Optional external APIs:
    - Breed Data (Dog API, Cat API, API Ninjas)
    - Image Hosting (Cloudinary, Imgur)

---

## 🛠 Tech Stack 
- **Frontend**: HTML5, CSS3, JavaScript (React), Bootstrap/Tailwind
- **Backend**: PHP + Laravel
- **Database**: MySQL
- **Mapping API**: Leaflet.js (OpenStreetMap), Google Maps API, or Mapbox
- **Authentication**: JWT / Sessions
- **Optional APIs**:
    - [Dog API](https://thedogapi.com)
    - [Cloudinary](https://cloudinary.com)


