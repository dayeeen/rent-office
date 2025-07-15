import { OfficeSpace } from "../types/officeSpace.types";



export const officeSpaces: OfficeSpace[] = [
    {
        id: "1",
        title: "Modern Office Ciwaruga",
        slug: "modern-office-ciwaruga",
        price: 15000000,
        duration: "2 Weeks",
        address: "Jalan Ciwaruga no 21, Bandung",
        about: "Sebuah kantor modern yang terletak di Ciwaruga, Bandung. Didesain untuk kenyamanan dan produktivitas.",
        location: "Ciwaruga, Bandung",
        rating: 4.5,
        tags: ["Popular", "Modern", "Cheaper"],
        image: "/assets/images/thumbnails/thumbnails-1.png",
        images: ["/assets/images/thumbnails/thumbnail-details-1.png", "/assets/images/thumbnails/thumbnail-details-2.png", "/assets/images/thumbnails/thumbnail-details-3.png"],
        features: ["Wi-Fi", "Air Conditioning", "Meeting Room"],
        salesContacts: [
            {
                name: "Abdul Dadang",
                role: "Sales Manager",
                photo: "/assets/images/photos/photo-1.jpg"
            },
            {
                name: "Rina Sari",
                role: "Sales Associate",
                photo: "/assets/images/photos/photo-2.jpg"
            }
        ],
        isFullyBooked: false
    },
    {
        id: "2",
        title: "Braga Cozy Workspace",
        slug: "braga-cozy-workspace",
        price: 12000000,
        duration: "30 Days",
        address: "Jalan no 45 Braga, Bandung",
        about: "Sebuah ruangan kerja yang nyaman dengan suasana ramah, ideal untuk pekerja lepas dan pekerja jarak jauh.",
        location: "Braga, Bandung",
        rating: 4.0,
        tags: ["Cozy", "Affordable"],
        image: "/assets/images/thumbnails/thumbnails-2.png",
        images: ["/assets/images/thumbnails/thumbnail-details-2.png", "/assets/images/thumbnails/thumbnail-details-3.png"],
        features: ["High-Speed Internet", "Coffee Machine", "Quiet Area"],
        salesContacts: [
            {
                name: "Maman Smith",
                role: "Sales Executive",
                photo: "/assets/images/photos/photo-3.jpg"
            }
        ],
        isFullyBooked: false
    },
    {
        id: "3",
        title: "Luxury Office in Dago",
        slug: "luxury-office-dago",
        price: 25000000,
        duration: "30 Days",
        address: "Jalan Dago no 10, Bandung",
        about: "Kantor mewah di Dago dengan fasilitas lengkap dan pemandangan kota yang indah.",
        location: "Dago, Bandung",
        rating: 5.0,
        tags: ["Luxury", "Comfy"],
        image: "/assets/images/thumbnails/thumbnails-3.png",
        images: ["/assets/images/thumbnails/thumbnails-3.png", "/assets/images/thumbnails/thumbnails-4.png"],
        features: ["24/7 Access", "Gym", "Rooftop Lounge"],
        salesContacts: [
            {
                name: "Siti Nurhaliza",
                role: "Senior Sales Manager",
                photo: "/assets/images/photos/photo-4.jpg"
            }
        ],
        isFullyBooked: false
    },
    {
        id: "4",
        title: "Tech Hub in Setiabudi",
        slug: "tech-hub-setiabudi",
        price: 18000000,
        duration: "1 Week",
        address: "Jalan Setiabudi no 30, Bandung",
        about: "Ruang kerja inovatif yang dirancang untuk perusahaan teknologi dan startup.",
        location: "Setiabudi, Bandung",
        rating: 4.8,
        tags: ["Tech", "Modern"],
        image: "/assets/images/thumbnails/thumbnails-4.png",
        images: ["/assets/images/thumbnails/thumbnail-details-4.png", "/assets/images/thumbnails/thumbnail-details-5.png"],
        features: ["Collaboration Spaces", "Tech Support", "Event Space"],
        salesContacts: [
            {
                name: "Budi Santoso",
                role: "Sales Consultant",
                photo: "/assets/images/photos/photo-5.jpg"
            }
        ],
        isFullyBooked: false
    },
    {
        id: "5",
        title: "Jakarta Office Space",
        slug: "jakarta-office-space",
        price: 15000000,
        duration: "2 Weeks",
        address: "Jalan Sudirman no 1, Jakarta",
        about: "Kantor modern di pusat bisnis Jakarta dengan akses mudah ke transportasi umum.",
        location: "Sudirman, Jakarta",
        rating: 4.7,
        tags: ["Affordable", "Modern"],
        image: "/assets/images/thumbnails/thumbnails-5.png",
        images: ["/assets/images/thumbnails/thumbnail-details-5.png", "/assets/images/thumbnails/thumbnail-details-1.png"],
        features: ["Wi-Fi", "Meeting Room", "Parking"],
        salesContacts: [
            {
                name: "Andi Wijaya",
                role: "Sales Executive",
                photo: "/assets/images/photos/photo-6.jpg"
            }
        ],
        isFullyBooked: false
    },
    {
        id: "6",
        title: "Cozy Workspace in Kemang",
        slug: "cozy-workspace-kemang",
        price: 12000000,
        duration: "2 Weeks",
        address: "Jalan Kemang Raya no 10, Jakarta",
        about: "Ruang kerja yang nyaman dan tenang di kawasan Kemang, ideal untuk freelancer.",
        location: "Kemang, Jakarta",
        rating: 4.2,
        tags: ["Cheaper"],
        image: "/assets/images/thumbnails/thumbnails-6.png",
        images: ["/assets/images/thumbnails/thumbnail-details-2.png", "/assets/images/thumbnails/thumbnail-details-3.png"],
        features: ["High-Speed Internet", "Coffee Machine", "Quiet Area"],
        salesContacts: [
            {
                name: "Rina Sari",
                role: "Sales Associate",
                photo: "/assets/images/photos/photo-7.jpg"
            }
        ],
        isFullyBooked: false
    },

]