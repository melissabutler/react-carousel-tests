import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";
import photos from "./photos.js"

it("renders without crashing", function() {
  render(<Carousel photos={photos} />);
});
it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);
  
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
});

it("hides left arrow at the start of the slideshow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  expect(container.querySelector(".bi-arrow-left-circle")).toContainHTML('<i class="bi-arrow-left-circle" style="display: none;"')
})

it("hides the rigth arrow at the end of the slideshow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow)

  expect(container.querySelector(".bi-arrow-right-circle")).toContainHTML('<i class="bi-arrow-right-circle" style="display: none;"')

})