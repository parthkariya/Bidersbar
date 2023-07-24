import React, { useEffect, useRef, useState } from "react";
import { PageHero } from "../../common";
import images from "../../constants/images";
import "./EditProfile.css";
import { AiOutlineCamera } from "react-icons/ai";
import { useBiddingContext } from "../../context/bidding_context";
import { useUserContext } from "../../context/user_context";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import createNotification from "../../utils/Notification";

const EditProfile = () => {
  const { setEditProfile, profile_data } = useBiddingContext();
  const { logindata } = useUserContext();
  let navigate = useNavigate();

  const regEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexpMobile = /^[0-9\b]+$/;

  const [getname, setName] = useState("");
  const [getemail, setEmail] = useState("");
  const [getnumber, setNumber] = useState("");
  const [getimage, setImage] = useState();
  const [getimagetype, setImageType] = useState("");
  const [geterrmsg, seterrmsg] = useState(false);

  const [file, setFile] = useState([]);
  const [getimg, setImg] = useState(null);
  useEffect(() => {
    console.log("file", getimg);
  });

  // const { getRootProps, getInputProps } = useDropzone({
  //   // accept: "image/*",
  //   // accept: get_index === "image" ? "image/*" : "vector/*",
  //   accept: "image/*",
  //   onDrop: (acceptedFiles) => {
  //     {
  //       setFile(
  //         acceptedFiles.map((file) =>
  //           Object.assign(file, {
  //             preview: URL.createObjectURL(file),
  //           })
  //         )
  //       );
  //     }
  //   },
  // });

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const changeHandler = (event) => {
    const imgUrl = URL.createObjectURL(event.target.files[0]);
    setImg(imgUrl);

    setFile(event.target.files[0]);
    console.log(file);
  };

  const onHandleTelephoneChange = (e) => {
    let telephone = e.target.value;
    console.log("telephone", telephone);
    if (telephone === "" || regexpMobile.test(telephone)) {
      setNumber(telephone);
    } else {
      return;
    }
  };

  const onHandleEmailChange = (e) => {
    let email = e.target.value;
    console.log("email", email);

    if (email === "" || regEx.test(email)) {
      setEmail(email);
    } else {
      return;
    }
  };

  const edit_profile = async (e) => {
    // const img = { uri: file, name: getimagename, type: getimagetype };
    // console.log(img);

    e.preventDefault();
    if (getname === "") {
      createNotification("error", "Error!", "Please enter full name");
      return;
    } else if (getemail === "") {
      createNotification("error", "Error!", "Please enter email");
      return;
    } else if (regEx.test(getemail) === false) {
      createNotification("error", "Error!", "Please enter valid email");
      return;
    } else if (getnumber === "") {
      createNotification("error", "Error!", "Please enter number");
      return;
    } else if (regexpMobile.test(getnumber) === false) {
      createNotification("error", "Error!", "Please enter valid number");
      return;
    } else {
      var params = {
        id: logindata.id,
        profile_picture: file,
        full_name: getname,
        email: getemail,
        contact_number: getnumber,
      };

      console.log("-=-=-=->", params);
      const data = await setEditProfile(params);
      console.log(data);
      if (data.success == 1) {
        // createNotification("success", "Success!", data.message);
        // alert(data.message);
        // navigate("/payment");
        seterrmsg(true);
      } else {
        createNotification("error", "Error!", data.message);
      }
    }
  };

  return (
    <div>
      <PageHero title={"Edit Profile"} />
      <div className="editprofile_main_wrapp">
        <div className="editprofile_photo_sec">
          <div className="editprofile_photo_wrapp">
            {getimg === null ? (
              <img src={images.profile} />
            ) : (
              <img src={getimg} />
            )}
            <div className="editprofile_camara_icon">
              <input
                type="file"
                ref={hiddenFileInput}
                onChange={changeHandler}
                style={{ display: "none" }}
                // multiple
                accept="image/*"
              />
              <button onClick={handleClick}>
                <AiOutlineCamera className="camera_icon" />
              </button>
            </div>
          </div>
        </div>
        <p className="h2 editprofile-name">{profile_data.full_name}</p>
        <p className="editprofile-txt">{profile_data.email}</p>
        <div className="editprofile-line"></div>
        <form className="editprofile-form">
          <div className="editprofile-box">
            <div>
              <label className="editprofile-lbl">Full Name</label>
              <span className="clr-red">*</span>
            </div>
            <input
              type="text"
              placeholder="Enter your Full name"
              className="editprofile-inp"
              value={getname}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="editprofile-box">
            <div>
              <label className="editprofile-lbl">Email ID</label>
              <span className="clr-red">*</span>
            </div>
            <input
              type="text"
              className="editprofile-inp"
              // value={getemail}
              placeholder="Enter your email"
              onChange={(e) => onHandleEmailChange(e)}
            />
          </div>
          <div className="editprofile-box">
            <div>
              <label className="editprofile-lbl">Phone No.</label>
              <span className="clr-red">*</span>
            </div>
            <input
              type="number"
              className="editprofile-inp"
              placeholder="Enter your number"
              onChange={(e) => onHandleTelephoneChange(e)}
            />
          </div>
          {geterrmsg === true ? (
            <p style={{ color: "#39e681", fontSize: "12px" }}>Updated!</p>
          ) : null}
          <button
            className="btn-main margin-top btn-width"
            onClick={edit_profile}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
