import villaWhite from "@/assets/villa-white-duplex.jpeg.asset.json";
import villaBlack from "@/assets/villa-black-marble.jpeg.asset.json";
import kitchen from "@/assets/kitchen-island.jpeg.asset.json";
import listingBanner from "@/assets/listing-banner.jpeg.asset.json";
import poolVilla from "@/assets/property-pool.jpg";
import penthouse from "@/assets/property-penthouse.jpg";
import terrace from "@/assets/property-terrace.jpg";
import land from "@/assets/land-estate.jpg";

export type Property = {
  slug: string;
  title: string;
  location: string;
  price: string;
  status: "For Sale" | "Exclusive" | "Off Plan" | "Sold";
  type: "Duplex" | "Penthouse" | "Terrace" | "Land";
  beds: string;
  baths: string;
  area: string;
  image: string;
  gallery: string[];
  summary: string;
  features: string[];
};

export const properties: Property[] = [
  {
    slug: "the-monolith-duplex",
    title: "The Monolith Duplex",
    location: "Lekki Phase 1, Lagos",
    price: "₦450,000,000",
    status: "For Sale",
    type: "Duplex",
    beds: "05",
    baths: "06",
    area: "480 m²",
    image: villaWhite.url,
    gallery: [villaWhite.url, kitchen.url, villaBlack.url],
    summary:
      "A fully detached architectural duplex with sculpted white massing, glass balustrades and a rooftop terrace. Delivered turn-key with a private compound and dedicated service quarters.",
    features: [
      "Rooftop terrace with lagoon breeze",
      "Fitted open kitchen with island",
      "All rooms en-suite",
      "Boys' quarters and dedicated laundry",
      "24-hour estate security and gate house",
      "Governor's Consent title",
    ],
  },
  {
    slug: "obsidian-court-residence",
    title: "Obsidian Court Residence",
    location: "Ikate Elegushi, Lagos",
    price: "₦520,000,000",
    status: "Exclusive",
    type: "Duplex",
    beds: "05",
    baths: "06",
    area: "520 m²",
    image: villaBlack.url,
    gallery: [villaBlack.url, kitchen.url, villaWhite.url],
    summary:
      "Contemporary five-bedroom residence framed in black marble paving and full-height glazing, with a cantilevered upper floor and covered parking for four cars.",
    features: [
      "Black marble paved forecourt",
      "Cantilevered glass lounge",
      "Overhead and ground water storage",
      "Covered parking for four cars",
      "Smart lighting throughout",
      "C of O title",
    ],
  },
  {
    slug: "azure-pool-villa",
    title: "Azure Pool Villa",
    location: "Banana Island, Ikoyi",
    price: "₦1,250,000,000",
    status: "Exclusive",
    type: "Duplex",
    beds: "06",
    baths: "07",
    area: "850 m²",
    image: poolVilla,
    gallery: [poolVilla, penthouse, kitchen.url],
    summary:
      "A waterfront-adjacent villa arranged around a heated infinity pool and landscaped courtyard. Built for entertaining, with a cinema, gym and staff wing.",
    features: [
      "Heated infinity pool and pool house",
      "Private cinema and gym",
      "Elevator to all floors",
      "Staff wing with separate entrance",
      "Solar inverter and generator",
      "C of O title",
    ],
  },
  {
    slug: "horizon-view-penthouse",
    title: "Horizon View Penthouse",
    location: "Old Ikoyi, Lagos",
    price: "₦820,000,000",
    status: "For Sale",
    type: "Penthouse",
    beds: "04",
    baths: "05",
    area: "620 m²",
    image: penthouse,
    gallery: [penthouse, kitchen.url, poolVilla],
    summary:
      "Full-floor penthouse with uninterrupted lagoon views, a marble-clad reception and bespoke joinery in every room. Concierge, gym and residents' lounge on site.",
    features: [
      "Full-floor plate with private lift lobby",
      "Floor-to-ceiling lagoon glazing",
      "Concierge and residents' lounge",
      "Two dedicated parking bays",
      "Central air conditioning",
      "Fully serviced with facility management",
    ],
  },
  {
    slug: "vision-terraces",
    title: "Vision Terraces",
    location: "Ajah, Lagos",
    price: "₦145,000,000",
    status: "Off Plan",
    type: "Terrace",
    beds: "04",
    baths: "05",
    area: "260 m²",
    image: terrace,
    gallery: [terrace, kitchen.url, listingBanner.url],
    summary:
      "A gated run of four-bedroom terraces built to our own specification and supervised in-house from foundation to finishing. Flexible payment plan over 12 months.",
    features: [
      "Gated terrace scheme, eight units",
      "Fitted kitchen and wardrobes",
      "Interlocked compound and drainage",
      "12-month payment plan available",
      "In-house project supervision",
      "Registered survey and deed of assignment",
    ],
  },
  {
    slug: "vision-court-land",
    title: "Vision Court Serviced Plots",
    location: "Epe Corridor, Lagos",
    price: "₦18,500,000 / plot",
    status: "For Sale",
    type: "Land",
    beds: "—",
    baths: "—",
    area: "500 m² / plot",
    image: land,
    gallery: [land, listingBanner.url],
    summary:
      "Surveyed and serviced residential plots inside a walled estate with graded access roads, drainage and perimeter fencing. Ideal entry point for first-time investors.",
    features: [
      "Fully walled and gated estate",
      "Graded access roads and drainage",
      "Instant allocation on payment",
      "Free survey and deed documentation",
      "Gazette title",
      "Buy-back option within 24 months",
    ],
  },
];

export function getProperty(slug: string) {
  return properties.find((p) => p.slug === slug);
}
