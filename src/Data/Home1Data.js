// src/DataPages/Home1Data.js

import dashboardImg from '../assets/slider/dashboard.png';
import itineraryImg from '../assets/clients/itenary (2).png';
import leadsImg from '../assets/clients/leads.png';
import followupsImg from '../assets/clients/home_4.png';
import vouchersImg from '../assets/clients/home_5.png';

export const tabData = [
  {
    name: 'Dashboard',
    title: 'Dashboard',
    description:
      'Your business is live here. Everything updates in real-time — watch how your employees work for you.',
    image: dashboardImg,
  },
  {
    name: 'Itinerary Builder',
    title: 'Itinerary Builder',
    description:
      "Impressing your clients is crucial. Don't waste time typing emails — send beautiful itineraries, trip plans, and quotes instantly.",
    image: itineraryImg,
  },
  {
    name: 'Leads Management',
    title: 'Leads Management',
    description:
      'LivetourPRO captures enquiries from your website. You can also bulk upload enquiries and assign them to your executives.',
    image: leadsImg,
  },
  {
    name: 'Follow Ups',
    title: 'Follow Ups',
    description:
      'Everything in one place. You stay in control with our exceptional auto sales follow-up system.',
    image: followupsImg,
  },
  {
    name: 'Automated Voucher & Invoice',
    title: 'Automated Voucher & Invoice',
    description:
      'Once a package is confirmed, LivetourPRO generates vouchers and invoices. It also handles reservations and driver allocations.',
    image: vouchersImg,
  },
];
