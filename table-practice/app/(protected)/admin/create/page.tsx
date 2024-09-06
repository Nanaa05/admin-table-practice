import React from "react";
import FormCreate from "@/components/admin/formCreate";
const create = () => {
  return (
    <div>
      <div className="w-full h-64 flex flex-col justify-center">
        <div className="w-full h-fit flex m-1">
          <div className="shrink h-fit w-20 m-"></div>
          <div className="grow h-fit w-80 m- text-6xl font-bold">
            Post Registration
          </div>
          <div className="shrink h-fit w-20 m-"></div>
        </div>
        <div className="w-full h-fit flex m-1">
          <div className="shrink h-fit w-20 m-"></div>
          <div className="grow h-fit w-80 m- text-xl">
            Create New Post for Admin Stuff
          </div>
          <div className="shrink h-fit w-20 m-"></div>
        </div>
      </div>
      <div className="w-full border-solid border-0 border-t border-gray-300 mb-20"></div>
      <div className="w-full h-48 flex flex-col">
        <div className="w-full h-fit flex">
          <div className="shrink h-fit w-20 m-"></div>
          <div className="grow h-fit w-80 m- text-xl">
            <FormCreate></FormCreate>
          </div>
          <div className="shrink h-fit w-20 m-"></div>
        </div>
      </div>
    </div>
  );
};

export default create;
