import "./CreateEditFeedBack.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import arrowLeftIcon from "../assets/shared/icon-arrow-left.svg";
import newFeedbackIcon from "../assets/shared/icon-new-feedback.svg";
import editFeedbackIcon from "../assets/shared/icon-edit-feedback.svg";
import { Link, useParams } from "react-router-dom";
import FeedBackInput from "./FeedBackInput";

function CreateEditFeedBack(props) {
  let { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentStatus, setCurrentStatus] = useState(0);
  let categoryList = ["Feature", "UI", "UX", "Enhancement", "Bug"];
  let statusList = ["Suggestion", "Planned", "In-Progress", "Live"];
  let CURRENTFEEDBACK = props.appData?.productRequests.find(
    (req) => req.id == id
  );

  function handleCurrentCategory(categoryIndex) {
    console.log("somflds");
    setCurrentCategory(categoryIndex);
  }

  function handleCurrentStatus(statusIndex) {
    setCurrentStatus(statusIndex);
  }

  function addData(data) {
    props.handleAppData((prevValue) => {
      prevValue.productRequests.push({
        id: prevValue.productRequests.length + 1,
        title: data.title,
        category: categoryList[currentCategory].toLowerCase(),
        upvotes: 0,
        status: statusList[currentStatus].toLowerCase(),
        description: data.description,
      });
      return prevValue;
    });
  }

  function editData(data) {
    props.handleAppData((prevValue) => {
      let oldFeedback = prevValue.productRequests.find((req) => req.id == id);
      let feedbackIndex = prevValue.productRequests.findIndex(
        (req) => req.id == id
      );
      let newFeedback = {
        id: oldFeedback.id,
        title: data.title,
        category: categoryList[currentCategory].toLowerCase(),
        upvotes: oldFeedback.upvotes,
        status: statusList[currentStatus].toLowerCase(),
        description: data.description,
      };
      if (oldFeedback.comments) {
        newFeedback.comments = oldFeedback.comments;
      }
      prevValue.productRequests[feedbackIndex] = newFeedback;
      return prevValue;
    });
  }

  function onSubmit(data) {
    if (props.appData) {
      editData(data);
    } else {
      addData(data);
    }
  }

  useEffect(() => {
    if (props.appData) {
      setCurrentCategory((prevVaule) => {
        let index = categoryList.findIndex(
          (category) => category.toLowerCase() == CURRENTFEEDBACK.category
        );
        return index;
      });

      setCurrentStatus((prevVaule) => {
        let index = statusList.findIndex(
          (status) => status.toLowerCase() == CURRENTFEEDBACK.status
        );
        return index;
      });
    }
  }, []);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ title: "", description: "" });
    }
  }, [formState]);
  return (
    <div className="CreateEditFeedBack">
      <Link to={"/"} className="CreateEditFeedBack__link">
        <img src={arrowLeftIcon} alt=""></img>
        Go Back
      </Link>
      <img
        src={props.appData ? editFeedbackIcon : newFeedbackIcon}
        alt=""
        height={56}
        width={56}
        className="CreateEditFeedBack__logo"
      ></img>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="CreateEditFeedBack__form"
      >
        <h2 className="CreateEditFeedBack__header">
          {props.appData
            ? `Editing ‘${CURRENTFEEDBACK.title}’`
            : "Create New Feedback"}
        </h2>
        <div className="CreateEditFeedBack__input-section">
          <FeedBackInput
            register={register}
            errors={errors}
            name={"title"}
            title={"Feedback Title"}
            description={"Add a short, descriptive headline"}
            type={"text"}
            defaultValue={props.appData ? CURRENTFEEDBACK.title : ""}
          />

          <FeedBackInput
            name={"category"}
            title={"Category"}
            description={"Choose a category for your feedback"}
            type={"select"}
            selectList={categoryList}
            handleCurrent={handleCurrentCategory}
            selectedIndex={currentCategory}
          />

          {props.appData && (
            <FeedBackInput
              name={"status"}
              title={"Update Status"}
              description={"Change feedback state"}
              type={"select"}
              selectList={statusList}
              handleCurrent={handleCurrentStatus}
              selectedIndex={currentStatus}
            />
          )}

          <FeedBackInput
            register={register}
            errors={errors}
            name={"description"}
            title={"Feedback Detail"}
            description={
              "Include any specific comments on what should be improved, added, etc."
            }
            type={"text-area"}
            defaultValue={props.appData ? CURRENTFEEDBACK.description : ""}
          />
        </div>
        <div className="CreateEditFeedBack__btn-box">
          {props.appData && (
            <button className="CreateEditFeedBack__btn CreateEditFeedBack__btn--delete">
              Delete
            </button>
          )}
          <Link
            to={"/"}
            className="CreateEditFeedBack__btn CreateEditFeedBack__btn--cancel"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="CreateEditFeedBack__btn CreateEditFeedBack__btn--add"
          >
            {props.appData ? "Save Changes" : "Add Feedback"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateEditFeedBack;
