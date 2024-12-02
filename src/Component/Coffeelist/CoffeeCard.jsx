import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ allcoff, onDelete }) => {
  const { name, photourl, shape, _id } = allcoff;
  console.log(allcoff);

  const handledelt = (_id) => {
    console.log("item deleted", _id);
    fetch(`https://coffee-store-serverv1-1jo29owv1-tanvers-projects-3b319ea4.vercel.app/coffee/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "succes!",
            text: "deleted Successfully",
            icon: "success",
            confirmButtonText: "close",
          });
        }
      });
    onDelete(_id);
  };

  return (
    <div className="cofcard">
      <div className="flex items-center bg-[#F4F3F0] p-4 rounded-lg shadow-md">
        {/* Coffee Image */}
        <div className="w-1/4">
          <img
            src={photourl} // Replace with your coffee image URL
            alt="Coffee Cup"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Coffee Details */}
        <div className="ml-6 flex-1">
          <h2 className="text-lg font-semibold text-gray-800">Name:{name}</h2>
          <p className="text-gray-700">{shape}</p>
          <p className="text-gray-700">Price: 890 Taka</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col px-5 space-x-2  gap-2 items-center">
          <button className="bg-[#D2B48C] w-full ml-2 text-black p-2 text-xl rounded hover:bg-[#b69474]">
            <FontAwesomeIcon icon={faEye} />
          </button>
          <Link
            to={`/update/${_id}`}
            className="bg-[#353330] w-full text-white  text-xl p-2 rounded hover:bg-[#b69474]"
          >
            <FontAwesomeIcon icon={faPen} />
          </Link>
          <button
            onClick={() => handledelt(_id)}
            className="bg-[#ee4747] w-full text-white text-xl p-2 rounded hover:bg-[#b69474]"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
