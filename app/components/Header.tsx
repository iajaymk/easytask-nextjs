import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-col gap-2 items-center py-6 bg-gradient-to-b from-[#2c0a4c] to-[#450d80] text-white text-center">
      <Image
        src="/task-management-logo.png"
        alt="Easy Task Logo"
        width={100}
        height={100}
        loading="eager"
      />
      <h1>EasyTask App</h1>
      <p>Enterprise level task management without friction</p>
    </div>
  );
};

export default Header;
