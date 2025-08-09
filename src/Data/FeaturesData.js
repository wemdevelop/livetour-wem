import { AlertCircle, BadgeCheck, Banknote, BarChart2, BellRing, Building2, BusFront, CheckCircle, ClipboardList, FileBadge, FileBarChart, FileClock, FileText, Filter, MessageSquareText, PackagePlus, PlaneTakeoff, ShieldCheck, ShieldUser, ShieldX, ShipWheel, Target, UserCog, Users, Users2 } from "lucide-react";

// Feature images mapping
export const mockImages = {
  superAdmin: "../../src/assets/features/admin-supervisor.png",
  AccountManger: "../../src/assets/features/accountant (1).png",
  TourExcutive: "../../src/assets/features/photography.png",
  Accountant: "../../src/assets/features/profit.png",
  manage: "../../src/assets/features/leadership.png",
  packageIcon: "../../src/assets/features/checklist.png",
  follow: "../../src/assets/features/box.png",
  agileiternary: "../../src/assets/features/whatsapp-removebg-preview.png",
  remberverification: "../../src/assets/features/id.png",
  remberDriver: "../../src/assets/features/driver.png",
  loginAlerts: "../../src/assets/features/login-warning (1).png",
  Terminate: "../../src/assets/features/closing (2).png",
  verifieded: "../../src/assets/features/user.png",
  recorded: "../../src/assets/features/profile (1).png",
  filters: "../../src/assets/features/parental-control (3).png",
  filter: "../../src/assets/features/working-with-laptop.png",
  resouces: "../../src/assets/features/human.png",
  Target: "../../src/assets/features/focus (1).png",
  reports: "../../src/assets/features/bar-chart.png",
  salary: "../../src/assets/features/salary.png",
  verification: "../../src/assets/features/assets.png",
  livetourremeber: "../../src/assets/features/salary.png",
  emailTemps: "../../src/assets/features/email-temps.png",
  resourceimage: "../../src/assets/features/salary.png",
  Properties: "../../src/assets/features/assets.png",
  Vehicles: "../../src/assets/features/fleet-management (1).png",
  Agents: "../../src/assets/features/manager (3).png",
  Houseboats: "../../src/assets/features/houseboat (2).png",
  livetourevrything: "../../src/assets/features/enquiry-screen-1.png",
  resoucesManagement: "../../src/assets/contacts/screen-top-prop-no1.png",
};

// Main features list
export const features = [
  "Live Dashboard",
  "The Agile Sales Process",
  "LivetourPRO Remember Everything",
  "Security and Productivity",
  "Manage Accounts and Reports",
  "Resource Management",
  "Email Templates",
  "LivetourPRO is More Flexible",
];

// Live Dashboard section data
export const liveDashboardData = [
  {
    icon: ShieldUser,
    title: "Super Admin",
    description: "Control users, insights, and system security.",
  },
  {
    icon: UserCog,
    title: "Account Manager",
    description: "Host tours and manage client interactions.",
  },
  {
    icon: PlaneTakeoff,
    title: "Tour Executive",
    description: "Handle tasks and monitor tour operations.",
  },
  {
    icon: FileBarChart,
    title: "Accountant",
    description: "Track finances and generate key reports.",
  },
];

// Agile Sales Process section data
export const agileSalesData = [
  {
    icon: Users,
    title: "Manage Enquiries / Leads",
    description: "Track, assign, and convert leads efficiently.",
  },
  {
    icon: ClipboardList,
    title: "Itinerary Builder",
    description: "Create custom itineraries with drag-and-drop ease.",
  },
  {
    icon: PackagePlus,
    title: "Package Conversion",
    description: "Turn itineraries into bookable packages instantly.",
  },
  {
    icon: MessageSquareText,
    title: "Follow With Email & WhatsApp",
    description: "Send branded updates via Email, SMS, or WhatsApp.",
  },
];


// Security and Productivity section data
export const securityData = [
  {
    icon: BellRing,
    title: "Login Alerts",
    description: "Get real-time email/SMS alerts on system logins.",
  },
  {
    icon: ShieldX,
    title: "Terminate Access",
    description: "Block suspicious logins instantly from the alert.",
  },
  {
    icon: BadgeCheck,
    title: "Mark As Verified",
    description: "Avoid alerts by verifying trusted devices.",
  },
  {
    icon: FileClock,
    title: "Everything Recorded",
    description: "Track all logins and changes with audit logs.",
  },
  {
    icon: Filter,
    title: "Filter By User",
    description: "Filter logs to monitor specific user activity.",
  },
];


// Manage Accounts and Reports section data
export const accountsData = [
  {
    icon: BarChart2,
    title: "Office Accounts",
    description: "Monitor income, expenses, salaries, and transfers in one dashboard.",
  },
  {
    icon: Banknote,
    title: "Accounts For Resources",
    description: "Track transactions for properties, agents, and vendors with ease.",
  },
  {
    icon: Target,
    title: "Target Meter",
    description: "Set sales goals and monitor team performance visually.",
  },
  {
    icon: FileText,
    title: "Generate Reports",
    description: "Create insightful reports by agent, market, or property.",
  },
  {
    icon: FileBadge,
    title: "Generate Salary Statements",
    description: "Auto-generate slips with incentives, loans, and deductions.",
  },
];


// Resource Management section data
export const resourceData = [
  {
    icon: Building2,
    title: "Manage Properties",
    description: "Add properties, rates, and amenities with easy bulk edits.",
  },
  {
    icon: BusFront,
    title: "Manage Vehicles",
    description: "Organize vehicles by type and auto-fetch accurate pricing.",
  },
  {
    icon: Users2,
    title: "Manage Agents",
    description: "Track agent profiles, balances, and performance.",
  },
  {
    icon: ShipWheel,
    title: "Manage Houseboats",
    description: "List houseboats with room details and seasonal rates.",
  },
];


// Flexibility section data
export const flexibilityData = [
  {
    icon: "AccountManger",
    title: "Use LivetourPRO as Your Website CMS",
    description: "Coming soon! Manage pages, blogs, SEO, and bookings—all from one travel-focused dashboard.",
  },
  {
    icon: "superAdmin",
    title: "Need External Inventory Integration?",
    description: "Connect with APIs like Galileo or Amadeus, with B2B access for agents and resellers.",
  },
  {
    icon: "AccountManger",
    title: "Custom Integrations Available",
    description: "Easily sync LivetourPRO with your CRM, accounting, or third-party tools.",
  },
];

// Remember Everything section data
export const rememberEverythingData = [
  {
    icon: CheckCircle,
    title: "Reservation Verification",
    description:
      "LivetourPRO promptly verifies each reservation and ensures everything is accurate.",
  },
  {
    icon: AlertCircle,
    title: "Forgot to assign a driver?",
    description:
      "LivetourPRO checks everything thoroughly. If a driver is not assigned, it will notify you dashboard.",
  },
];

// Newsletter data for Email Templates section
export const newsletterData = {
  icon: "verification",
  title: "Newsletters",
  description: "Send newsletters to stay connected with customers, offer deals, and boost referrals.",
};