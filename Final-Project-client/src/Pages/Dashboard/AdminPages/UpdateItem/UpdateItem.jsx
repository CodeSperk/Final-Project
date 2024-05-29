import { useForm } from "react-hook-form";
import { ImSpoonKnife } from "react-icons/im";

const UpdateItem = () => {
  const { register, handleSubmit } = useForm();

  const handleUpdate = () => {
    
  }
  return (
    <main className="px-12 py-12 w-full text-center">
    <div className="flex justify-center items-center mb-10">
        <h2 className="uppercase">Update Item</h2>
      </div>

      <section className="bg-[var(--bg-primary)] p-6 md:p-10 lg:p-12 m-12 mt-0">
        <form onSubmit={handleSubmit(handleUpdate)}>
          {/* name field */}
          <div className="flex flex-col space-y-2">
            <label id="recipe-name">Recipe Name *</label>
            <input
              type="text"
              placeholder="Recipe name"
              {...register('name', {required: true})}
              className="px-4 py-2 outline-none rounded-sm"
            />
          </div>
          {/* Category and Price Field */}
          <div className="my-4 flex flex-col gap-4 md:gap-6 md:flex-row">
            <div className="flex flex-col space-y-2 md:w-1/2">
              <label id="recipe-category">Category *</label>
              <select defaultValue="default" className="px-4 py-2 outline-none rounded-sm" {...register('category', {required: true})}>
                <option disabled className="my-2">Select a Category</option>
                <option value="salad" className="my-2">
                  Salad
                </option>
                <option value="pizza" className="my-2">
                  Pizza
                </option>
                <option value="soup" className="my-2">
                  Soup
                </option>
                <option value="dessert" className="my-2">
                  Dessert
                </option>
                <option value="drinks" className="my-2">
                  Drinks
                </option>
              </select>
            </div>
            <div className="flex flex-col space-y-2 md:w-1/2">
              <label id="price">Price *</label>
              <input
                type="number"
                placeholder="Price"
                {...register('price', {required: true})}
                className="px-4 py-2 outline-none rounded-sm"
              />
            </div>
          </div>


          {/* Recipe Field */}
          <div className="flex flex-col space-y-2">
            <label id="recipe">Recipe Details *</label>
            <textarea name="details" id="details" placeholder="Recipe Details" className="px-4 py-2 outline-none rounded-sm w-full" rows="5" {...register('recipe', {required: true})}></textarea>
          </div>

          {/* file input field */}
          <div className="flex flex-col  w-full -ml-4 mt-4">
              <input
                type="file"
                placeholder="Price"
                {...register('image', {required: true})}
                className="px-4 py-2 outline-none rounded-sm"
              />
            </div>


          <button className="flex gap-2 items-center bg-[var(--clr-accent)] w-fit text-white py-2 px-4 hover:px-6 duration-300 mt-4 rounded-sm cursor-pointer">
            Add Item  <ImSpoonKnife />
          </button>
        </form>
      </section>
    </main>
  );
};

export default UpdateItem;