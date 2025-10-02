export const consultants = [
    {
        id: 1,
        name: "Dr. Sarah Johnson",
        title: "Senior Business Consultant",
        specialty: "Business Strategy",
        categories: ["Business", "Strategy", "Marketing"],

        rate: "150",
        rating: 4.9,
        reviews: 124,
        currency: "USD",
        availability: "Available now",
        languages: ["English", "French"],
        location: "New York, USA",
        timezone: "EST",

        image: "/placeholder.svg?height=600&width=600",
        bannerImage: "/banner-placeholder.jpg",

        bio: "Dr. Sarah Johnson is a seasoned business strategist with over 15 years of experience helping companies optimize their operations and growth strategies. She holds a Ph.D. in Business Administration from Harvard Business School and has worked with Fortune 500 companies as well as startups.",

        experience: [
            { title: "Senior Business Consultant", company: "McKinsey & Company", period: "2015 - Present", description: "Led cross-functional teams in developing and executing corporate strategies across multiple industries." },
            { title: "Strategy Director", company: "Boston Consulting Group", period: "2010 - 2015", description: "Directed high-profile projects, focusing on business expansion and organizational restructuring." },
            { title: "Business Analyst", company: "Bain & Company", period: "2005 - 2010", description: "Provided data-driven insights and financial modeling to support senior consultants." },
        ],

        education: [
            { degree: "Ph.D. in Business Administration", institution: "Harvard Business School", year: "2005" },
            { degree: "MBA", institution: "Stanford University", year: "2002" },
            { degree: "B.S. in Economics", institution: "University of Pennsylvania", year: "2000" },
        ],

        certifications: [
            { name: "Certified Management Consultant (CMC)", institution: "ICMCI", year: "2012" },
            { name: "Lean Six Sigma Black Belt", institution: "ASQ", year: "2008" },
        ],

        skills: ["Corporate Strategy", "Market Analysis", "Change Management", "Leadership Coaching", "Financial Forecasting"],

        availabilitySlots: [
            { day: "Monday", times: ["10:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"] },
            { day: "Wednesday", times: ["1:00 PM - 6:00 PM"] },
            { day: "Friday", times: ["9:00 AM - 12:00 PM"] },
        ],

        sessions: [
            { id: "s1", client: "Michael Smith", topic: "Restructuring Marketing Department", date: "2025-10-01", time: "10:00 AM EST", duration: "60 mins", status: "Completed", notes: "Discussed restructuring roadmap, projected ROI increase by 35%." },
            { id: "s2", client: "Jessica Lee", topic: "Startup Funding Strategy", date: "2025-10-05", time: "3:00 PM EST", duration: "90 mins", status: "Upcoming", notes: "Focus on Series A funding pitch preparation." },
        ],

        testimonials: [
            { text: "Invaluable insights for restructuring our marketing department.", author: "Michael Smith", position: "CMO at TechCorp", rating: 5 },
            { text: "Her strategic guidance helped us secure Series A funding.", author: "Jessica Lee", position: "CEO at InnovateTech", rating: 5 },
        ],

        contact: {
            email: "sarah.johnson@consultpro.com",
            phone: "+1 (555) 123-4567",
            website: "https://sarahjohnsonconsulting.com",
        },
    },

    {
        id: 2,
        name: "Michael Chen",
        title: "Senior Financial Advisor",
        specialty: "Financial Planning",
        categories: ["Finance", "Investment", "Retirement"],

        rate: "120",
        rating: 4.7,
        reviews: 98,
        currency: "USD",
        availability: "Available in 2 hours",
        languages: ["English", "Mandarin"],
        location: "San Francisco, USA",
        timezone: "PST",

        image: "/placeholder.svg?height=600&width=600",
        bannerImage: "/banner-placeholder.jpg",

        bio: "Michael Chen is an experienced financial advisor specializing in retirement and investment planning. With 12 years of experience, he has helped hundreds of clients secure their financial future.",

        experience: [
            { title: "Financial Advisor", company: "Fidelity Investments", period: "2014 - Present", description: "Guided clients through retirement planning, wealth management, and portfolio optimization." },
            { title: "Investment Analyst", company: "Charles Schwab", period: "2010 - 2014", description: "Analyzed investment opportunities and assisted in developing client portfolios." },
        ],

        education: [
            { degree: "MBA in Finance", institution: "UC Berkeley Haas School of Business", year: "2010" },
            { degree: "B.S. in Finance", institution: "UCLA", year: "2007" },
        ],

        certifications: [
            { name: "Certified Financial Planner (CFP)", institution: "CFP Board", year: "2015" },
            { name: "Chartered Financial Analyst (CFA)", institution: "CFA Institute", year: "2012" },
        ],

        skills: ["Wealth Management", "Retirement Planning", "Risk Assessment", "Portfolio Optimization"],

        availabilitySlots: [
            { day: "Tuesday", times: ["9:00 AM - 12:00 PM"] },
            { day: "Thursday", times: ["2:00 PM - 5:00 PM"] },
        ],

        sessions: [
            { id: "s1", client: "Anna Kim", topic: "Retirement Portfolio", date: "2025-10-02", time: "1:00 PM PST", duration: "60 mins", status: "Upcoming", notes: "Focus on IRA and 401k balancing." },
            { id: "s2", client: "John Lee", topic: "Investment Risk Management", date: "2025-09-28", time: "10:00 AM PST", duration: "45 mins", status: "Completed", notes: "Reviewed bond vs equity risk." },
        ],

        testimonials: [
            { text: "Michael helped me set up a solid retirement plan.", author: "Anna Kim", position: "Software Engineer", rating: 5 },
            { text: "He explained investment risks clearly and helped me diversify.", author: "John Lee", position: "Entrepreneur", rating: 4 },
        ],

        contact: {
            email: "michael.chen@consultpro.com",
            phone: "+1 (555) 234-5678",
            website: "https://michaelchenfinance.com",
        },
    },

    {
        id: 3,
        name: "Jessica Williams",
        title: "Brand Marketing Consultant",
        specialty: "Marketing & Branding",
        categories: ["Marketing", "Branding", "Social Media"],

        rate: "135",
        rating: 4.8,
        reviews: 156,
        currency: "USD",
        availability: "Available tomorrow",
        languages: ["English", "Spanish"],
        location: "Austin, USA",
        timezone: "CST",

        image: "/placeholder.svg?height=600&width=600",
        bannerImage: "/banner-placeholder.jpg",

        bio: "Jessica Williams is a brand strategist with a decade of experience building identities and scaling social media presence for global brands and startups alike.",

        experience: [
            { title: "Head of Brand Strategy", company: "Ogilvy", period: "2016 - Present", description: "Oversaw campaigns for multinational companies and scaled influencer marketing strategies." },
            { title: "Marketing Specialist", company: "HubSpot", period: "2012 - 2016", description: "Worked on inbound marketing campaigns and content strategies." },
        ],

        education: [
            { degree: "MBA in Marketing", institution: "NYU Stern School of Business", year: "2012" },
            { degree: "B.A. in Communications", institution: "USC", year: "2010" },
        ],

        certifications: [
            { name: "Digital Marketing Professional", institution: "AMA", year: "2017" },
            { name: "HubSpot Inbound Certified", institution: "HubSpot Academy", year: "2015" },
        ],

        skills: ["Brand Positioning", "Social Media Growth", "Influencer Marketing", "Content Strategy"],

        availabilitySlots: [
            { day: "Wednesday", times: ["9:00 AM - 3:00 PM"] },
            { day: "Friday", times: ["12:00 PM - 5:00 PM"] },
        ],

        sessions: [
            { id: "s1", client: "GreenTech", topic: "Brand Refresh", date: "2025-09-30", time: "11:00 AM CST", duration: "2 hrs", status: "Completed", notes: "Rebranding strategy focused on eco-conscious narrative." },
            { id: "s2", client: "Local Bakery", topic: "Social Media Growth", date: "2025-10-04", time: "2:00 PM CST", duration: "90 mins", status: "Upcoming", notes: "Plan to launch Instagram reels and TikTok campaigns." },
        ],

        testimonials: [
            { text: "Jessica transformed our brand presence on social media.", author: "Karen Thomas", position: "Founder at Local Bakery", rating: 5 },
            { text: "Her rebranding advice helped us stand out in a crowded market.", author: "Mark Johnson", position: "CEO at GreenTech", rating: 5 },
        ],

        contact: {
            email: "jessica.williams@consultpro.com",
            phone: "+1 (555) 345-6789",
            website: "https://jessicawilliamsbranding.com",
        },
    },

    {
        id: 4,
        name: "Robert Garcia",
        title: "Corporate Legal Consultant",
        specialty: "Legal Consultation",
        categories: ["Legal", "Business Law", "Contracts"],

        rate: "175",
        rating: 4.9,
        reviews: 87,
        currency: "USD",
        availability: "Available now",
        languages: ["English", "Portuguese"],
        location: "Miami, USA",
        timezone: "EST",

        image: "/placeholder.svg?height=600&width=600",
        bannerImage: "/banner-placeholder.jpg",

        bio: "Robert Garcia is a corporate legal consultant with over 18 years of experience handling business contracts, mergers, and compliance issues.",

        experience: [
            { title: "Legal Advisor", company: "Deloitte Legal", period: "2010 - Present", description: "Advised multinational corporations on mergers and acquisitions." },
            { title: "Corporate Lawyer", company: "Skadden, Arps, Slate, Meagher & Flom LLP", period: "2005 - 2010", description: "Drafted and negotiated high-value contracts for Fortune 500 companies." },
        ],

        education: [
            { degree: "J.D.", institution: "Columbia Law School", year: "2005" },
            { degree: "B.A. in Political Science", institution: "University of Florida", year: "2002" },
        ],

        certifications: [
            { name: "Licensed Attorney", institution: "Florida Bar Association", year: "2005" },
            { name: "Certified Compliance & Ethics Professional (CCEP)", institution: "SCCE", year: "2013" },
        ],

        skills: ["Contract Negotiation", "Corporate Compliance", "M&A Advisory", "Litigation Strategy"],

        availabilitySlots: [
            { day: "Monday", times: ["1:00 PM - 5:00 PM"] },
            { day: "Thursday", times: ["9:00 AM - 12:00 PM"] },
        ],

        sessions: [
            { id: "s1", client: "GlobalTech", topic: "M&A Consultation", date: "2025-09-29", time: "4:00 PM EST", duration: "3 hrs", status: "Completed", notes: "Reviewed merger agreements and compliance checklist." },
            { id: "s2", client: "Startup X", topic: "Contract Review", date: "2025-10-06", time: "10:00 AM EST", duration: "1 hr", status: "Upcoming", notes: "Drafting partnership contracts for seed funding." },
        ],

        testimonials: [
            { text: "Robert's legal expertise saved us millions during our merger.", author: "Sophia Davis", position: "CFO at GlobalTech", rating: 5 },
            { text: "Quick, clear, and incredibly knowledgeable.", author: "Daniel Lopez", position: "Founder of Startup X", rating: 5 },
        ],

        contact: {
            email: "robert.garcia@consultpro.com",
            phone: "+1 (555) 456-7890",
            website: "https://robertgarcialegal.com",
        },
    },

    {
        id: 5,
        name: "Emily Patel",
        title: "UX/UI Design Consultant",
        specialty: "UX/UI Design",
        categories: ["Design", "UX", "Product"],

        rate: "125",
        rating: 4.6,
        reviews: 112,
        currency: "USD",
        availability: "Available in 3 hours",
        languages: ["English", "Hindi"],
        location: "Chicago, USA",
        timezone: "CST",

        image: "/placeholder.svg?height=600&width=600",
        bannerImage: "/banner-placeholder.jpg",

        bio: "Emily Patel is a creative UX/UI designer with 8 years of experience designing intuitive and beautiful digital products for startups and enterprises.",

        experience: [
            { title: "Lead UX Designer", company: "IDEO", period: "2017 - Present", description: "Led design sprints for startups and enterprise apps." },
            { title: "Product Designer", company: "Airbnb", period: "2014 - 2017", description: "Worked on improving booking flows and mobile UX." },
        ],

        education: [
            { degree: "M.S. in Human-Computer Interaction", institution: "Georgia Tech", year: "2014" },
            { degree: "B.A. in Graphic Design", institution: "RISD", year: "2012" },
        ],

        certifications: [
            { name: "Certified UX Designer", institution: "NN/g", year: "2016" },
            { name: "Google UX Design Certificate", institution: "Google", year: "2015" },
        ],

        skills: ["Wireframing", "Prototyping", "User Testing", "Design Systems", "Accessibility"],

        availabilitySlots: [
            { day: "Tuesday", times: ["1:00 PM - 4:00 PM"] },
            { day: "Friday", times: ["10:00 AM - 1:00 PM"] },
        ],

        sessions: [
            { id: "s1", client: "AppFlow", topic: "Mobile App UX Audit", date: "2025-09-27", time: "11:00 AM CST", duration: "2 hrs", status: "Completed", notes: "Identified UX bottlenecks in onboarding flow." },
            { id: "s2", client: "EduTech", topic: "Learning Platform Redesign", date: "2025-10-03", time: "2:30 PM CST", duration: "90 mins", status: "Upcoming", notes: "Focus on accessibility and responsive design." },
        ],

        testimonials: [
            { text: "Emily made our app so much easier to use!", author: "Tom Harris", position: "CEO at AppFlow", rating: 5 },
            { text: "Her design input increased user retention by 20%.", author: "Priya Kumar", position: "Product Lead at EduTech", rating: 4 },
        ],

        contact: {
            email: "emily.patel@consultpro.com",
            phone: "+1 (555) 567-8901",
            website: "https://emilypateldesign.com",
        },
    },

    {
        id: 6,
        name: "David Kim",
        title: "Senior Software Developer",
        specialty: "Software Development",
        categories: ["Technology", "Development", "Web"],

        rate: "140",
        rating: 4.8,
        reviews: 143,
        currency: "USD",
        availability: "Available now",
        languages: ["English", "Korean"],
        location: "Seattle, USA",
        timezone: "PST",

        image: "/placeholder.svg?height=600&width=600",
        bannerImage: "/banner-placeholder.jpg",

        bio: "David Kim is a senior full-stack developer specializing in scalable web applications. With 10+ years of coding experience, he has worked with both startups and Fortune 500 companies.",

        experience: [
            { title: "Senior Software Engineer", company: "Amazon", period: "2016 - Present", description: "Led teams in building scalable cloud-native services." },
            { title: "Full-Stack Developer", company: "Stripe", period: "2012 - 2016", description: "Developed APIs and payment integrations used globally." },
        ],

        education: [
            { degree: "M.S. in Computer Science", institution: "University of Washington", year: "2012" },
            { degree: "B.S. in Computer Science", institution: "UC Berkeley", year: "2010" },
        ],

        certifications: [
            { name: "AWS Certified Solutions Architect", institution: "Amazon Web Services", year: "2018" },
            { name: "Certified Kubernetes Administrator (CKA)", institution: "CNCF", year: "2019" },
        ],

        skills: ["React", "Node.js", "Cloud Architecture", "DevOps", "API Design"],

        availabilitySlots: [
            { day: "Monday", times: ["9:00 AM - 12:00 PM"] },
            { day: "Wednesday", times: ["2:00 PM - 5:00 PM"] },
        ],

        sessions: [
            { id: "s1", client: "FinTechPro", topic: "API Scaling Consultation", date: "2025-09-28", time: "10:30 AM PST", duration: "2 hrs", status: "Completed", notes: "Optimized Node.js microservices for scalability." },
            { id: "s2", client: "ShopEase", topic: "E-Commerce App Architecture", date: "2025-10-04", time: "1:00 PM PST", duration: "2 hrs", status: "Upcoming", notes: "Recommended microservices-based cloud solution." },
        ],

        testimonials: [
            { text: "David improved our API scalability tenfold.", author: "Lisa Wong", position: "CTO at FinTechPro", rating: 5 },
            { text: "His architecture advice was spot on for our growth stage.", author: "Raj Patel", position: "CEO at ShopEase", rating: 5 },
        ],

        contact: {
            email: "david.kim@consultpro.com",
            phone: "+1 (555) 678-9012",
            website: "https://davidkim.dev",
        },
    },
];
