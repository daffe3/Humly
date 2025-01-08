import { useLoaderData, Form, useSearchParams } from "@remix-run/react";
import { json } from "@remix-run/node";
import { fetchGraphQL, LOCATIONS_QUERY } from "../utils/graphql";
import { LoaderData } from "../utils/types";
import LocationCard from "../components/LocationCard";
import { useState, useEffect } from "react";

export const loader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const type = url.searchParams.get("type") || "";
  const dimension = url.searchParams.get("dimension") || "";

  const data = await fetchGraphQL(LOCATIONS_QUERY, {
    filter: { type, dimension },
  });

  return json<LoaderData>({ locations: data.data.locations.results });
};

export default function LocationsPage() {
  const { locations } = useLoaderData<LoaderData>();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, []);

  return loading ? (
    <div className="text-center text-lg">Loading...</div>
  ) : (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Rick and Morty Locations</h1>
      <Form method="get" className="mb-4">
        <label className="block mb-2">
          Filter by Type:
          <input
            type="text"
            name="type"
            defaultValue={searchParams.get("type") || ""}
            className="border p-2 w-full rounded-md"
            placeholder="Enter type..."
          />
        </label>
        <label className="block mb-2">
          Filter by Dimension:
          <input
            type="text"
            name="dimension"
            defaultValue={searchParams.get("dimension") || ""}
            className="border p-2 w-full rounded-md"
            placeholder="Enter dimension..."
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
        >
          Apply Filters
        </button>
      </Form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {locations.length === 0 ? (
          <p className="col-span-full text-center text-lg text-gray-500">
            No locations found
          </p>
        ) : (
          locations.map((location) => (
            <LocationCard key={location.id} {...location} />
          ))
        )}
      </div>
    </div>
  );
}
