import { listings } from "@/api/data/listings";
import ListingList from "@/components/ListingList";

const HomePage = () => {
  return (
    <div className="container py-4">
      <ListingList listings={listings} />
    </div>
  );
};

export default HomePage;
