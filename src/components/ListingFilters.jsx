import { Search } from "lucide-react";
import { memo, useState } from "react";

import { Button, DateRangePicker, Input, Stepper } from "@/components/ui";

const ListingFilters = ({ onChange }) => {
  const [dates, setDates] = useState();
  const [guests, setGuests] = useState(0);
  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    onChange({ dates, guests, search });
  };

  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
      {/* Search */}
      <Input
        className="w-full sm:w-[300px] md:w-[400px]"
        placeholder="Search destinations"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {/* Dates */}
      <div className="w-full sm:w-auto">
        <DateRangePicker
          value={dates}
          onChange={setDates}
          minDate={new Date()}
          placeholder="Add dates"
        />
      </div>

      {/* Guests */}
      <div className="w-full sm:w-auto">
        <Stepper label="guest" value={guests} onChange={setGuests} />
      </div>

      {/* Submit */}
      <Button onClick={handleSubmit} className="w-full sm:w-auto">
        <Search className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default memo(ListingFilters);
