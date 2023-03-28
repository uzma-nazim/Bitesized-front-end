import React from "react";

const EducatorProfilePic = ({showImage,handleProfileChange,camera}) => {
  return (
    <label htmlFor="upload-file">
      {showImage ? (
        <img src={showImage} alt="" width="160px" />
      ) : (
        <img src={camera} alt="" width="160px" />
      )}
      <h3 className="image-heading fontbold">Upload your picture</h3>
      <input
        type="file"
        name="profilepic"
        onChange={handleProfileChange}
        id="upload-file"
        hidden
      />
    </label>
  );
};

export default EducatorProfilePic;
