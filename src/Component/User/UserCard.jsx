import { Result } from "postcss";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";

const UserCard = ({ user, setUserdata, userData }) => {
  const { deletuser } = useContext(AuthContext);
  const { name, _id, email, lastSignInTime } = user;

  const handledelet = (_id) => {
    console.log(_id);

    fetch(
      `https://coffee-store-serverv1.vercel.app/users/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaning = userData.filter((user) => user._id !== _id);
        setUserdata(remaning);
        deletuser();
      });
  };
  return (
    <div className="cofcard">
      <div
        className="max-w-2xl mx-4 sm:max-w-sm     const deletuser= (email)=>{
        setLoading(true);
        return deleteUser(currentuser)
    }md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900"
      >
        <div className="rounded-t-lg h-32 overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          ></img>
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center h-32"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Woman looking front"
          ></img>
        </div>
        <div className="text-center mt-2">
          <h2 className="font-semibold">{name}</h2>
          <p className="text-gray-500 text-base">ID: {_id}</p>
          <p className="text-gray-500 text-base">Email: {email}</p>
          <p className="text-gray-500 text-base">
            last Sign in time: {lastSignInTime}
          </p>
        </div>
        <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
          <li className="flex flex-row gap-5 btn items-center justify-around">
            <svg
              className="w-4 fill-current text-blue-900"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <div>2k</div>
          </li>
          <button className="flex flex-row gap-5 btn items-center justify-between">
            Edit
            <div>""</div>
          </button>
          <button
            onClick={() => handledelet(_id)}
            className="flex flex-row gap-5 btn items-center justify-around"
          >
            delet
            <div>X</div>
          </button>
        </ul>
        <div className="p-4 border-t mx-8 mt-2">
          <button className="lg:w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
