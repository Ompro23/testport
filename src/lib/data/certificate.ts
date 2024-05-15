// certificate.ts

export interface Certificate {
    name: string;
    issuer: string;
    date: Date;
    description: string;
}

export const certificates: Certificate[] = [
    {
        name: "Certificate 1",
        issuer: "Issuer 1",
        date: new Date("2022-01-01"),
        description: "This is the description for Certificate 1.",
    },
    {
        name: "Certificate 2",
        issuer: "Issuer 2",
        date: new Date("2022-02-01"),
        description: "This is the description for Certificate 2.",
    },
    // Add more certificates here if needed
];