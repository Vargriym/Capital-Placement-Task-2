export interface UserInfo {
    id: number;
    name: string;
    country: string;
    initials: string;
    info: string;
    hashtags: string;
    tags: string[];
    selectedcandidate?: boolean
}


const usersInfo: UserInfo[] = [
    {
        id: 1,
        name: "Frances R. Kostka",
        country: "Saudi Arabia",
        initials: "FR",
        info: 'Bachelor in Information Technology and Cyber Security (2023 - 2023)',
        hashtags: "#top_candidate #top_candidate",
        tags: ["New York", "Marketing", "London"],
    },
    {
        id: 2,
        name: "Aaliyah Sanderson",
        country: "Saudi Arabia",
        initials: "AS",
        info: "Bachelor in Marketing(2023 - 2023)",
        hashtags: "#top_candidate #top_candidate",
        tags: ["New York", "Marketing", "London"],
        selectedcandidate: true
    },
    {
        id: 3,
        name: "Michael D. McKee",
        country: "Saudi Arabia",
        initials: "MM",
        info: "Bachelor in Finance (2023 - 2023)",
        hashtags: "#top_candidate #top_candidate",
        tags: ["New York", "Marketing", "London"],
    },
    {
        id: 4,
        name: "Christel R. Sclafani",
        country: "Saudi Arabia",
        initials: "CS",
        hashtags: "#top_candidate #top_candidate",
        tags: ["New York", "Marketing", "London"],
        info: "Bachelor in Bio-chemical Engineering (2020 - 2023)",
    },
    {
        id: 5,
        name: "Jerry S. Pollock",
        country: "Saudi Arabia",
        initials: "JP",
        info: "Bachelor in Marketing (2023 - 2023)",
        hashtags: "#top_candidate #top_candidate",
        tags: ["New York", "Marketing", "London"],
    },
    {
        id: 6,
        name: "Jerry S. Pollock",
        country: "Saudi Arabia",
        initials: "JP",
        info: "Bachelor in Marketing (2023 - 2023)",
        hashtags: "#top_candidate #top_candidate",
        tags: ["New York", "Marketing", "London"],
    },
    {
        id: 7,
        name: "Aaliyah Sanderson",
        country: "Saudi Arabia",
        initials: "AS",
        info: "Bachelor in Marketing(2023 - 2023)",
        hashtags: "#top_candidate #top_candidate",
        tags: ["New York", "Marketing", "London"],
    },
];

export default usersInfo;
