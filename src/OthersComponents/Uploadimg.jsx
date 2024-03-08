const Uploadimg = ({ setImage }) => {
  return (
    <input
      onChange={(e) => {
        console.log(e.target.files[0]);
        const img = e.target.files[0];
        const data = new FormData();
        data.append("image", img);
        fetch(`${import.meta.env.VITE_imageserver}`, {
          method: "POST",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => setImage(data.data.url));
      }}
      type="file"
      hidden
      className="file"
    />
  );
};

export default Uploadimg;
