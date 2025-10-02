interface Consultant {
    id: number;
    name: string;
    title: string;
    specialty: string;
    categories: string[];
    rate: string;
    rating: number;
    reviews: number;
    currency: string;
    availability: string;
    languages: string[];
    location: string;
    timezone: string;
    image: string;
    bannerImage: string;
    bio: string;
    experience: {
        title: string;
        company: string;
        period: string;
        description: string;
    }[];
    education: {
        degree: string;
        institution: string;
        year: string;
    }[];
    certifications: {
        name: string;
        institution: string;
        year: string;
    }[];
    skills: string[];
    availabilitySlots: {
        day: string;
        times: string[];
    }[];
    sessions: {
        id: string;
        client: string;
        topic: string;
        date: string;
        time: string;
        duration: string;
        status: string;
        notes: string;
    }[];
    testimonials: {
        text: string;
        author: string;
        position: string;
        rating: number;
    }[];
    contact: {
        email: string;
        phone: string;
        website: string;
    };
}