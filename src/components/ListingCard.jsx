import { DollarSign, Pin, Users } from "lucide-react";
import { Link } from "react-router-dom";

import ListingCardImages from "@/components/ListingCardImages";
import ListingFavoriteButton from "@/components/ListingFavoriteButton";
import { Card, Separator } from "@/components/ui";

const ListingCard = ({ listing }) => {
  return (
    <Link to={`/listings/${listing.id}`}>
      <Card className="w-[350px] p-4 transition-shadow hover:shadow-lg">
        <ListingCardImages listing={listing} />
        <Separator className="my-4" />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold">{listing.name}</h2>
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">
                <span className="font-bold text-foreground">
                  {listing.price}
                </span>{" "}
                / night
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Pin className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">
                {listing.location.name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">
                {listing.maxGuests} Guests
              </span>
            </div>
          </div>
          <ListingFavoriteButton listing={listing} />
        </div>
      </Card>
    </Link>
  );
};

export default ListingCard;
