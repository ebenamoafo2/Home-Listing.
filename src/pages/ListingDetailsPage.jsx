import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import api from "@/api";
import ListingDetailsCard from "@/components/ListingDetailsCard";
import { Spinner } from "@/components/ui";

const ListingDetailsPage = () => {
  const { listingId } = useParams();

  const [listing, setListing] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const abortController = useRef(null);

  useEffect(() => {
    const fetchListing = async () => {
      setIsLoading(true);
      setError(null);

      abortController.current = new AbortController();

      try {
        const response = await api.get(`/api/listings/${listingId}`, {
          signal: abortController.current?.signal,
        });
        setListing(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }
        setError("Something went wrong. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchListing();

    return () => {
      abortController.current?.abort();
    };
  }, [listingId]);

  const renderListing = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center">
          <Spinner size="sm" />
        </div>
      );
    }

    if (error) {
      return <div className="text-center">{error}</div>;
    }

    return <ListingDetailsCard listing={listing} />;
  };

  return <div className="container py-4">{renderListing()}</div>;
};

export default ListingDetailsPage;
