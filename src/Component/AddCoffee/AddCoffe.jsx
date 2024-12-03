import Swal from 'sweetalert2'


const AddCoffe = () => {
  const handlefrom = (event) => {
    event.preventDefault();

    const from = event.target;
    const name = from.name.value;
    const shape = from.coffechef.value;
    const supplier = from.supplier.value;
    const test = from.test.value;
    const category = from.category.value;
    const details = from.details.value;
    const photourl = from.photourl.value;
    const newCoffee = {
      name,
      shape,
      supplier,
      test,
      category,
      details,
      photourl,
    };

    console.log(newCoffee);

    // send data to the server

    fetch("https://coffee-store-serverv1.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
            Swal.fire({
                title: 'succes!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      {" "}
      {/* Light cream background */}
      <div className="w-full max-w-4xl bg-[#F4F3F0] shadow-xl rounded-lg p-8">
        {" "}
        {/* Form container */}
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-700">
          Add New Coffee
        </h1>
        <p className="text-center mb-6 text-gray-600">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <form
          onSubmit={handlefrom}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="input input-bordered w-full bg-white"
            />
          </div>

          {/* Chef */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Chef</span>
            </label>
            <input
              type="text"
              name="coffechef"
              placeholder="Enter coffee chef"
              className="input input-bordered w-full bg-white"
            />
          </div>

          {/* Supplier */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              className="input input-bordered w-full bg-white"
            />
          </div>

          {/* Taste */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Taste</span>
            </label>
            <input
              type="text"
              name="test"
              placeholder="Enter coffee taste"
              className="input input-bordered w-full bg-white"
            />
          </div>

          {/* Category */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee category"
              className="input input-bordered w-full bg-white"
            />
          </div>

          {/* Details */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="input input-bordered w-full bg-white"
            />
          </div>

          {/* Photo */}
          <div className="md:col-span-2">
            <label className="label">
              <span className="label-text font-medium">Photo</span>
            </label>
            <input
              type="text"
              name="photourl"
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
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffe;
