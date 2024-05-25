import { ImSpoonKnife } from "react-icons/im";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const AddItems = () => {
  return (
    <main className="w-full">
      <div className="my-12">
        <SectionHeader
          subHeading="What's new"
          heading="Add An Item"
        ></SectionHeader>
      </div>

      <section className="bg-[var(--bg-primary)] p-6 md:p-10 lg:p-12 m-12 mt-0">
        <form>
          {/* name field */}
          <div className="flex flex-col space-y-2">
            <label id="recipe-name">Recipe Name *</label>
            <input
              type="text"
              placeholder="Recipe name"
              className="px-4 py-2 outline-none rounded-sm"
            />
          </div>
          {/* Category and Price Field */}
          <div className="my-4 flex flex-col gap-4 md:gap-6 md:flex-row">
            <div className="flex flex-col space-y-2 md:w-1/2">
              <label id="recipe-name">Category *</label>
              <select className="px-4 py-2 outline-none rounded-sm">
                <option value="" className="my-2">
                  Value1
                </option>
              </select>
            </div>
            <div className="flex flex-col space-y-2 md:w-1/2">
              <label id="price">Price *</label>
              <input
                type="number"
                placeholder="Price"
                className="px-4 py-2 outline-none rounded-sm"
              />
            </div>
          </div>
          {/* Description Field */}
          <div className="flex flex-col space-y-2">
            <label id="details">Recipe Details *</label>
            <textarea name="details" id="details" placeholder="Recipe Details" className="px-4 py-2 outline-none rounded-sm w-full" rows="5"></textarea>
          </div>


          <div className="flex gap-2 items-center bg-[var(--clr-accent)] w-fit text-white py-2 px-4 hover:px-6 duration-300 mt-4 rounded-sm cursor-pointer">
            Add Item  <ImSpoonKnife />
          </div>
        </form>
      </section>
    </main>
  );
};

export default AddItems;
