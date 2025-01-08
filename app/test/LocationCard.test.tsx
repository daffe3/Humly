import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LocationCard from "../components/LocationCard";

const mockLocation = {
  name: "Earth",
  type: "Planet",
  dimension: "C-137",
  residents: [
    {
      id: "1",
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      image: "https://example.com/rick.jpg",
    },
  ],
};

describe("LocationCard", () => {
  test("renders location details correctly", () => {
    render(<LocationCard {...mockLocation} />);

    const dimensionElement = screen.getByText(/Dimension:/).parentElement;
    expect(dimensionElement?.textContent).toContain("C-137");

    expect(screen.getByText(/Type:/)).toBeInTheDocument();
    expect(screen.getByText(/Planet/)).toBeInTheDocument();
    expect(screen.getByText(/Earth/)).toBeInTheDocument();
  });
});
