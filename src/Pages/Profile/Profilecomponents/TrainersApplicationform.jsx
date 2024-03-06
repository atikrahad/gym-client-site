import { useForm } from "react-hook-form";
import Modal from "../../../OthersComponents/Modal";
import useUser from "../../../Hooks/useUser";
import axiosPublic from "../../../Api/axiosPublic";

const TrainersApplicationform = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const [userData] = useUser();

  const onSubmit = (e) => {
    const applicantName = userData?.name;
    const applicantEmail = userData?.email;
    const applicantImage = userData?.image;
    const applyDate = new Date();
    const applicationPosition = "pending";

    // const letter =
    const applicationInfo = {
      applicantEmail,
      applicantImage,
      applicantName,
      applicationPosition,
      applyDate,
      letter: e.letter,
      fblink: e.fblink,
      instalink: e.instalink,
      twitterlink: e.twitterlink,
      youtubelink: e.youtubelink,
    };
    console.log(applicationInfo);
    axiosPublic
      .post("/application", applicationInfo)
      .then((res) => console.log(res.data));
    reset();
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={"Apply to Trainer"}
        content={
          <>
            <div className="py-5 text-slate-300">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <textarea
                  name=""
                  placeholder="Cover letter"
                  className="bg-transparent rounded-md outline-none border w-full py-2 px-3"
                  required
                  {...register("letter")}
                  rows="5"
                ></textarea>
                <input
                  placeholder="Facebook link"
                  className="bg-transparent rounded-md outline-none border w-full py-2 px-3"
                  type="url"
                  {...register("fblink")}
                  required
                />
                <input
                  placeholder="Instagram link"
                  className="bg-transparent rounded-md outline-none border w-full py-2 px-3"
                  type="url"
                  {...register("instalink")}
                  required
                />
                <input
                  placeholder="Twitter link"
                  className="bg-transparent rounded-md outline-none border w-full py-2 px-3"
                  type="url"
                  {...register("twitterlink")}
                  required
                />
                <input
                  placeholder="Youtube link"
                  className="bg-transparent rounded-md outline-none border w-full py-2 px-3"
                  type="url"
                  {...register("youtubelink")}
                  required
                />
                <input
                  className="btn-bg outline-none w-full py-2 px-3"
                  type="submit"
                  value={"APPLY"}
                />
              </form>
            </div>
          </>
        }
      ></Modal>
    </div>
  );
};

export default TrainersApplicationform;
