import { FunctionalComponent } from "preact";
import destinations, { Destination } from "../data/popularDestinations";

const Card: FunctionalComponent<Destination> = ({
  city,
  imageAlt,
  imageUrl,
  averagePrice,
  propertyCount,
}) => {
  return (
    <div
      class={
        "grid w-full grid-cols-3 overflow-hidden rounded-xl bg-gray-50 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl"
      }
    >
      <img
        src={imageUrl}
        alt={imageAlt}
        class={"col-span-1 h-full object-fill object-center"}
      />
      <div
        class={
          "col-span-2 flex flex-col px-4 py-4 sm:px-8 sm:py-10 xl:py-6 2xl:py-10"
        }
      >
        <h1
          class={"text-xl font-black uppercase tracking-normal text-gray-800"}
        >
          {city}
        </h1>
        <p class={"mt-1 text-base tracking-wide text-gray-600 sm:text-lg"}>
          ${averagePrice} / night average
        </p>
        <a href="" class={"grid"}></a>
        <a
          href=""
          class={
            "mt-auto font-medium tracking-wide text-indigo-600 underline-offset-4 transition-colors hover:text-indigo-700 hover:underline 2xl:text-lg"
          }
        >
          Explore {propertyCount} properties
        </a>
      </div>
    </div>
  );
};

const Destinations = () => {
  return (
    <div
      class={
        "mx-auto max-w-md px-8 py-8 sm:max-w-xl lg:max-w-full lg:py-20 2xl:px-12"
      }
    >
      <h2
        class={"text-xl font-semibold tracking-wide text-gray-800 sm:text-2xl"}
      >
        Popular destinations
      </h2>
      <p class={"mt-3 text-lg tracking-wider text-gray-800"}>
        A selection of great work-friendly cities with lots to see and explore.
      </p>
      <div
        class={
          "mt-8 grid place-items-center gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
        }
      >
        {destinations.map(
          ({ city, imageAlt, imageUrl, averagePrice, propertyCount }) => {
            return (
              <Card
                city={city}
                imageAlt={imageAlt}
                imageUrl={imageUrl}
                averagePrice={averagePrice}
                propertyCount={propertyCount}
                key={city}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Destinations;
