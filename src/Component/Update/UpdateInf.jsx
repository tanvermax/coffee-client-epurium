import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateInf = () => {
  const loadallcoffee = useLoaderData() || {};

  const [allcoffee,setAlcoffee] = useState(loadallcoffee)

  console.log(allcoffee);
  //
  const { _id, name, shape, supplier, test, category, details, photourl } =
    allcoffee;

  const handleupdate = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const shape = from.shape.value;
    const supplier = from.supplier.value;
    const test = from.test.value;
    const category = from.category.value;
    const details = from.details.value;
    const photourl = from.photourl.value;
    const updatednewCoffee = {
      name,
      shape,
      supplier,
      test,
      category,
      details,
      photourl,
    };
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatednewCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
            Swal.fire({
                title: 'succes!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
      });
    //   const remaining = allcoffee.filter( coffee=> coffee._id !== _id)
      setAlcoffee(updatednewCoffee)
  };

  return (
    <div>
      <h1>Upadate Your info : {name} </h1>

      <div className="flex justify-center items-center min-h-screen ">
        {" "}
        {/* Light cream background */}
        <div className="w-full max-w-4xl bg-[#F4F3F0] shadow-xl rounded-lg p-8">
          {" "}
          {/* Form container */}
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-700">
            Update Coffe Info
          </h1>
          <form
            onSubmit={handleupdate}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Name(new name)</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Enter coffee name"
                className="input input-bordered w-full bg-white"
              />
            </div>

            {/* Chef */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Chef(new name)</span>
              </label>
              <input
                type="text"
                name="shape"
                defaultValue={shape}
                placeholder="Enter coffee chef"
                className="input input-bordered w-full bg-white"
              />
            </div>

            {/* Supplier */}
            <div>
              <label className="label">
                <span className="label-text font-medium">
                  Supplier(new name)
                </span>
              </label>
              <input
                type="text"
                defaultValue={supplier}
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full bg-white"
              />
            </div>

            {/* Taste */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Taste(new name)</span>
              </label>
              <input
                type="text"
                name="test"
                defaultValue={test}
                placeholder="Enter coffee taste"
                className="input input-bordered w-full bg-white"
              />
            </div>

            {/* Category */}
            <div>
              <label className="label">
                <span className="label-text font-medium">
                  Category(new name)
                </span>
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Enter coffee category"
                className="input input-bordered w-full bg-white"
              />
            </div>

            {/* Details */}
            <div>
              <label className="label">
                <span className="label-text font-medium">
                  Details(new name)
                </span>
              </label>
              <input
                type="text"
                defaultValue={details}
                name="details"
                placeholder="Enter coffee details"
                className="input input-bordered w-full bg-white"
              />
            </div>

            {/* Photo */}
            <div className="md:col-span-2">
              <label className="label">
                <span className="label-text font-medium">Photo(new Photo)</span>
              </label>
              <input
                type="text"
                name="photourl"
                defaultValue={photourl}
                placeholder="Enter photo URL"
                className="input input-bordered w-full bg-white"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="btn bg-[#D2B48C] text-white border-none hover:bg-[#b69474] w-full max-w-sm"
              >
                Update Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateInf;
