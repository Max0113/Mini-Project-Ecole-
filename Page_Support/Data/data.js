export const SupportAssets = {
    hero: "/Source/Image.png"
};

export const ContactCardsData = [
    {
        icon: "fa-solid fa-location-dot",
        title: "OUR OFFICE",
        lines: ["123 Mobility Plaza, Tech District", "San Francisco, CA 94105"],
        note: "Mon-Fri from 8am to 6pm"
    },
    {
        icon: "fa-solid fa-phone",
        title: "PHONE NUMBER",
        lines: ["+1 (555) 123-4567"],
        note: "Support available 24/7"
    },
    {
        icon: "fa-regular fa-envelope",
        title: "EMAIL US",
        lines: ["support@atlasdrive.com"],
        note: "Response within 2 hours"
    }
];

export const FormFieldsData = [
    {
        type: "text",
        label: "First Name",
        name: "firstName",
        placeholder: "John",
        grid: "half"
    },
    {
        type: "text",
        label: "Last Name",
        name: "lastName",
        placeholder: "Doe",
        grid: "half"
    },
    {
        type: "email",
        label: "Email Address",
        name: "email",
        placeholder: "john@example.com",
        grid: "full"
    },
    {
        type: "select",
        label: "Inquiry Type",
        name: "inquiryType",
        grid: "full",
        options: [
            { label: "General Inquiry", value: "general" },
            { label: "Bookings & Pricing", value: "booking" },
            { label: "Corporate Accounts", value: "corporate" },
            { label: "Partnerships", value: "partnerships" }
        ]
    },
    {
        type: "textarea",
        label: "Message",
        name: "message",
        placeholder: "How can we help you?",
        grid: "full"
    }
];
