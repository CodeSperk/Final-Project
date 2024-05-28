import { ImSpoonKnife } from "react-icons/im";
import SectionHeader from "../../../../Components/SectionHeader/SectionHeader";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data)
    //image upload to imgbb
    const imageFile = { image : data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type' : 'multipart/form-data'
      }
    })
    if(res.data.success){
      // now send the menu data tot the server with the image url
      const newMenu = {
      name : data.name,
      category : data.category,
      price : parseFloat(data.price),
      recipe : data.recipe,
      image : res.data.data.display_url
      }
      
      const res2 = await axiosSecure.post('/menu', newMenu);
      if(res2.data.insertedId){
        //show success popup
        Swal.fire({
          title: `${data.name} Added successful`,
          icon: "success"
        });
      }
      
    }
  };



  return (
    <main className="w-full">
      <div className="my-12">
        <SectionHeader
          subHeading="What's new"
          heading="Add An Item"
        ></SectionHeader>
      </div>

      <section className="bg-[var(--bg-primary)] p-6 md:p-10 lg:p-12 m-12 mt-0">
        <form onSubmit={handleSubmit(onSubmit)}>
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

export default AddItems;
