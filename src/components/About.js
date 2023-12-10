import { UserContext } from "../utils/UserContext";
import UserClass from "./UserClass";

const About = () => {
 
  return (
    <div className="min-h-screen text-left ">
      <div class="container mx-auto my-8 p-8 bg-white shadow-lg  border border-gray-300 rounded-lg">
        <h1 class="text-3xl font-bold mb-6">
          🍴 Munchmate: Elevate Your Dining Experience
        </h1>

        <p class="text-lg mb-6">
          Munchmate, a sophisticated Swiggy clone, redefines the food ordering
          landscape with a seamless and feature-rich app.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="mb-6">
            <h2 class="text-2xl font-bold mb-4">✨ Key Features:</h2>
            <ul class="list-disc pl-6">
              <li class="mb-2">
                <span className="font-bold">**Shimmer UI:**</span> Immerse yourself in a visually stunning and
                dynamic user interface, enhancing your overall experience.
              </li>
              <li class="mb-2">
              <span className="font-bold">**Location-Aware Dining:**</span> Leverages the live Swiggy API to
                provide a personalized touch by displaying nearby restaurants,
                featuring the best of Bangalore otherwise.
              </li>
              <li class="mb-2">
              <span className="font-bold">**Search Restaurants:**</span> Effortlessly find your favorite dining
                spots with an intuitive search feature.
              </li>
              <li class="mb-2">
              <span className="font-bold">**Top Rated Filters:**</span>  Explore culinary excellence with the
                ability to filter top-rated restaurants, ensuring a premium
                dining experience.
              </li>
              <li class="mb-2">
              <span className="font-bold">**Delicious Menus:**</span> Dive into mouthwatering menus offered by
                top restaurants, tantalizing your taste buds with every click.
              </li>
              <li class="mb-2">
              <span className="font-bold">**Fully Responsive Design:**</span> Whether on a smartphone, tablet, or
                desktop, Munchmate adapts seamlessly to provide an optimal
                viewing experience.
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-bold mb-4">⚙️ Tech Marvels:</h2>
            <ul class="list-disc pl-6">
              <li class="mb-2">
              <span className="font-bold">**Built with React and TailwindCSS:**</span> A blend of cutting-edge
                technologies for a polished and modern UI.
              </li>
              <li class="mb-2">
              <span className="font-bold">**Custom Hooks:**</span> Elevate functionality with meticulously
                crafted custom hooks, enhancing user engagement.
              </li>
              <li class="mb-2">
              <span className="font-bold">**Redux-Toolkit for State Management:**</span> Utilizes Redux-Toolkit
                for efficient state management, ensuring a smooth and responsive
                app.
              </li>
              <li class="mb-2">
              <span className="font-bold">**Jest (Testing):**</span> Rigorous testing with Jest ensures a robust
                and bug-free application, guaranteeing a flawless user
                experience.
              </li>
              <li class="mb-2">
              <span className="font-bold">**Parcel Bundling Magic:**</span> Employs Parcel as the bundler,
                optimizing performance and speeding up development.
              </li>
            </ul>
          </div>
        </div>

        <p class="text-lg mt-6">
          🌟 **Experience the Culinary Revolution with Munchmate!**
        </p>
      </div>

    
    </div>
  );
};
export default About;
