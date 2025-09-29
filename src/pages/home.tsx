import CustomerTestimonials from "@/components/custom/CustomerTestimonials";
import Hero from "@/components/custom/Hero";
import PopularTours from "@/components/custom/Populartours";
import NewsletterPromotion from "@/components/custom/Promotionsection";
import HotelRoomsCarousel from "@/components/custom/RoomCaroussel";
import TopDestinations from "@/components/custom/Topdestinations";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <TopDestinations></TopDestinations>
      <PopularTours></PopularTours>
      <HotelRoomsCarousel></HotelRoomsCarousel>
      <NewsletterPromotion></NewsletterPromotion>
      <CustomerTestimonials></CustomerTestimonials>
    </div>
  );
}
