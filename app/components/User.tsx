import Image from "next/image";
import { UserType } from "../data/types";

const User = ({
  user,
  setSelectedUserId,
}: {
  user: UserType;
  setSelectedUserId: (id: string) => void;
}) => {
  const imageSrc = "/users/" + user.avatar;

  return (
    <div className="bg-[#433352] text-[#c3b3d1] min-w-[10rem] my-2 p-2 rounded-lg">
      <button
        className="flex gap-2 items-center"
        onClick={() => setSelectedUserId(user.id)}
      >
        <Image
          src={imageSrc}
          alt={user.name}
          width={25}
          height={25}
          className="rounded-full"
        />
        <p className="text-sm">{user.name}</p>
      </button>
    </div>
  );
};

export default User;
