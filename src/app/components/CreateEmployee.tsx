import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Departments, Department } from "../../../typings";
import { getAllDepartment } from "../../../actions";

export const CreateEmployee = ({
  setShowCreateEmployee,
}: {
  setShowCreateEmployee: Dispatch<SetStateAction<boolean>>;
}) => {
  // const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [image, setImage] = useState("");
  const [dropdownElement, setDropdownElement] = useState(false);
  const [departments, setDepartments] = useState<Departments>([]);
  const [department, setDepartment] = useState("");
  const [name, setName] = useState("");
  // const [userName, setUserName] = useState("");

  useEffect(() => {
    async function fetchDepartament() {
      const data: Departments = await getAllDepartment();

      setDepartments(data);
    }

    fetchDepartament();
  }, []);

  let url;

  if (image) {
    const filename = image.split("\\");
    url = filename[filename.length - 1];
    console.log("url", url);
  }

  // const clinetAction = async (formData: FormData) => {
  //   const addUser = {
  //     name: formData.get("name"),
  //     lastName: formData.get("lastName"),
  //     email: formData.get("email"),
  //     id: formData.get("id"),
  //     image: formData.get("image"),
  //   };

  //   const response = await createUserActionAdmin(addUser);

  //   if (response?.error) {
  //     toast.error(response.error);
  //     console.log("error", response?.error);
  //   } else {
  //     setModal(false);
  //     setDisable(false);
  //     toast.success("User successfully Added");
  //   }
  // };

  // useEffect(() => {
  //   setDisable(false);
  // }, [name, lastName, email, id, image]);

  return (
    <>
      <div className="fixed w-full h-full top-0 left-0 bg-backdrop-modal backdrop-blur-[10px] ">
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col px-[50px] pt-[117px] pb-[127px] gap-[45px]  text-[#343A40] bg-white p-10 rounded-lg shadow-md w-[913px] h-auto mt-[120px]  z-30 ">
          <h1 className="text-4xl text-center font-semibold">
            თანამშრომლის დამატება
          </h1>
          <button
            className="absolute right-[50px] top-10 cursor-pointer"
            onClick={() => setShowCreateEmployee((prev: boolean) => !prev)}
            title="close"
          >
            <Image width={40} height={40} src="/x.svg" alt="close" />
          </button>
          <form
            className="flex flex-col gap-[45px] w-full"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex gap-[45px]  w-full">
              <div className="flex w-full flex-col gap-[3px] border-[#CED4DA]">
                <label htmlFor="name" className="text-[14px]">
                  სახელი*
                </label>
                <input
                  type="text"
                  required
                  min={2}
                  max={255}
                  onChange={(e) => setName(e.target.value)}
                  className="p-[10px] rounded-[6px] outline-0 border-[1px]"
                  id="name"
                />
                <div className="flex gap-2">
                  <Image
                    src="./check.svg"
                    width={16}
                    height={16}
                    alt="Checker"
                  />
                  <p
                    className={`text-[10px] text-[#6C757D] ${
                      name.length > 1 && name.length < 255
                        ? "text-[#08A508]"
                        : "text-[#FA4D4D]"
                    }`}
                  >
                    მინიმუმ 2 სიმბოლო
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image
                    src="./check.svg"
                    width={16}
                    height={16}
                    alt="Checker"
                    className="text-[#08A508]"
                  />
                  <p
                    className={`text-[10px] text-[#6C757D] ${
                      name.length > 1 && name.length < 255
                        ? "text-[#08A508]"
                        : "text-[#FA4D4D]"
                    }`}
                  >
                    მაქსიმუმ 255 სიმბოლო
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-[3px] border-[#CED4DA]">
                <label htmlFor="name" className="text-sm">
                  გვარი*
                </label>
                <input
                  type="text"
                  required
                  min={2}
                  max={255}
                  className="p-[10px] rounded-[6px] outline-0 border-[1px]"
                  id="name"
                />
                <div className="flex gap-2">
                  <Image
                    src="./check.svg"
                    width={16}
                    height={16}
                    alt="Checker"
                  />
                  <p className="text-[10px] text-[#6C757D]">
                    მინიმუმ 2 სიმბოლო
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image
                    src="./check.svg"
                    width={16}
                    height={16}
                    alt="Checker"
                  />
                  <p className="text-[10px] text-[#6C757D]">
                    მაქსიმუმ 255 სიმბოლო
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col  gap-[8px] border-[#CED4DA]">
              <p className="text-sm">ავატარი*</p>
              <input
                id="image"
                type="file"
                title="avatar"
                onChange={(e) => setImage(e.target.value)}
                value={image}
                accept="image/png, image/jpeg"
                required
                className="rounded-sm border cursor-pointer border-[#CED4DA] w-full h-[120px] "
              />

              <label htmlFor="image" className="text-[14x]">
                ავატარი*
                <Image
                  src={`/${image === "" ? "user-icon.png" : url}`}
                  // src="/user-icon.png"
                  width={55}
                  height={55}
                  alt="upload"
                  className=" absolute left-1/2 transform -translate-x-1/2 top-1/2  -translate-y-1/2 cursor-pointer"
                />
              </label>

              {image !== "" && (
                <Image
                  src="/bin.svg"
                  alt="bin"
                  width={24}
                  height={24}
                  className=" absolute   border   left-1/2 transform translate-x-1/2 top-1/2  translate-y-[12px] cursor-pointer"
                  onClick={() => setImage("")}
                />
              )}
            </div>

            <div className="relative flex gap-2 items-center ">
              <div className="flex flex-col gap-[8px] ">
                <label htmlFor="name" className="text-[14px]">
                  დეპარტამენტი*
                </label>
                <div
                  className="relative flex h-[42px] w-[384px]  items-center  border-[#CED4DA] rounded-[6px] 
              outline-0 border-[1px] cursor-pointer"
                  onClick={() => {
                    setDropdownElement((prev) => !prev);
                  }}
                >
                  <p className="text-[14px] p-[10px]">{department}</p>
                  <Image
                    src="arrow-down.svg"
                    width={14}
                    height={8}
                    alt="arrow"
                    className="absolute right-2 cursor-pointer"
                  />
                </div>
              </div>
              {dropdownElement && (
                <div className="absolute border-1 left-0  border-[#8338EC] bg-white w-[450px] h-56 rounded-[10px] overflow-hidden top-20">
                  <div className="relative flex flex-col h-full      w-full  overflow-y-scroll">
                    {departments.map((item: Department) => {
                      return (
                        <div
                          key={item.id}
                          className=" flex gap-2 cursor-pointer hover:bg-[#CED4DA] p-[15px] duration-75 transform transition-all ease-in-out"
                          onChange={() => {
                            setDropdownElement(true);
                          }}
                        >
                          <p
                            className="w-full"
                            onClick={() => {
                              setDropdownElement((prev) => !prev);
                              setDepartment(item.name);
                            }}
                          >
                            {item.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="*:cursor-pointer absolute bottom-[60px] right-[50px]  flex gap-6">
              <button
                className="text-black border-1 border-[#8338EC]  px-4 py-[10px] rounded cursor-pointer"
                onClick={() => setShowCreateEmployee((prev: boolean) => !prev)}
              >
                აუქმება
              </button>
              <button className="bg-purple-600 text-white px-5 py-[10px] rounded cursor-pointer">
                დაამატე თანამშრომელი
              </button>
            </div>
          </form>
        </div>
        <div
          className="fixed w-full h-full"
          onClick={() => setShowCreateEmployee((prev: boolean) => !prev)}
        ></div>
      </div>
    </>
  );
};
