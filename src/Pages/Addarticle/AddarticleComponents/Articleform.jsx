import { FaCloudUploadAlt } from "react-icons/fa";
const Articleform = () => {
    const handleSubmit = ()=> {

    }
  return (
    <div className="max-w-screen-md gap-10 py-40 flex items-center justify-between mx-auto">
      <div className="w-full">
        <form onSubmit={handleSubmit}>
          <input className="outline-none border-orange-600 border-b-2 py-2 px-3 bg-transparent w-full" type="text" maxLength={50} placeholder="Title" />
          <select className="outline-none border-orange-600 border-b-2 py-2 px-3 bg-transparent w-full" name="" id="">
            <option value="Body">Body</option>
            <option value="Body">Body</option>
            <option value="Body">Body</option>
            <option value="Body">Body</option>
          </select>
          <textarea placeholder="Description" className="outline-none border-orange-600 border-b-2 mt-5 py-2 px-3 bg-transparent w-full" name="" id="" cols="30" rows="5"></textarea>
          <input type="submit" className="btn-bg w-full my-10" value={"Add Article"} />
        </form>
      </div>
      <div className="w-full">
        <div className="w-full flex flex-col items-center justify-center border-orange-600 border border-dashed h-80">
            <input type="file" hidden/>
            <FaCloudUploadAlt className="main-color text-4xl"></FaCloudUploadAlt>
            <p className="main-color text-3xl font-semibold">Uoload Image</p>
        </div>
      </div>
    </div>
  );
};

export default Articleform;
