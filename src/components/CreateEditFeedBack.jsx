import "./CreateEditFeedBack.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormSelect from "./FormSelect";
import arrowLeftIcon from "../assets/shared/icon-arrow-left.svg";
import newFeedbackIcon from "../assets/shared/icon-new-feedback.svg";
import editFeedbackIcon from "../assets/shared/icon-edit-feedback.svg";

function CreateEditFeedBack() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentStatus, setCurrentStatus] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const [isEdit, setIsEdit] = useState(false);
  let categoryList = ["Feature", "UI", "UX", "Enhancement", "Bug"];
  let statusList = ["Suggestion", "Planned", "In-Progress", "Live"];

  function handleCurrentCategory(categoryIndex) {
    setCurrentCategory(categoryIndex);
  }

  function handleCurrentStatus(statusIndex) {
    setCurrentStatus(statusIndex);
  }

  function onSubmit(data) {
    let newFeedback = {
      id: "13",
      title: data.title,
      category: categoryList[currentCategory].toLowerCase(),
      upvotes: 0,
      status: statusList[currentStatus].toLowerCase(),
      description: data.description,
    };
    console.log(newFeedback);
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ title: "", description: "" });
    }
  }, [formState]);
  return (
    <div className="CreateEditFeedBack">
      <button className="CreateEditFeedBack__link">
        <img src={arrowLeftIcon} alt=""></img>
        Go Back
      </button>
      <img
        src={isEdit ? editFeedbackIcon : newFeedbackIcon}
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
          {isEdit ? "Editing ‘Add a dark theme option’" : "Create New Feedback"}
        </h2>
        <div className="CreateEditFeedBack__input-section">
          <div className="CreateEditFeedBack__input-box">
            <label className="CreateEditFeedBack__label">
              <h3 className="CreateEditFeedBack__sub-header">Feedback Title</h3>
              <p className="CreateEditFeedBack__detail">
                Add a short, descriptive headline
              </p>
            </label>
            <input
              className="CreateEditFeedBack__input CreateEditFeedBack__input--text"
              type="text"
              name="title"
              {...register("title", { required: true })}
              style={errors.title ? { border: "1px solid #D73737" } : {}}
            ></input>
            {errors.title && <span className="error">Can’t be empty</span>}
          </div>
          <div className="CreateEditFeedBack__input-box">
            <label className="CreateEditFeedBack__label">
              <h3 className="CreateEditFeedBack__sub-header">Category</h3>
              <p className="CreateEditFeedBack__detail">
                Choose a category for your feedback
              </p>
            </label>
            <FormSelect
              selectList={categoryList}
              handleCurrent={handleCurrentCategory}
            />
          </div>
          {isEdit && (
            <div className="CreateEditFeedBack__input-box">
              <label className="CreateEditFeedBack__label">
                <h3 className="CreateEditFeedBack__sub-header">
                  Update Status
                </h3>
                <p className="CreateEditFeedBack__detail">
                  Change feedback state
                </p>
              </label>
              <FormSelect
                selectList={statusList}
                handleCurrent={handleCurrentStatus}
              />
            </div>
          )}
          <div className="CreateEditFeedBack__input-box">
            <label className="CreateEditFeedBack__label">
              <h3 className="CreateEditFeedBack__sub-header">
                Feedback Detail
              </h3>
              <p className="CreateEditFeedBack__detail">
                Include any specific comments on what should be improved, added,
                etc.
              </p>
            </label>
            <textarea
              className="CreateEditFeedBack__input CreateEditFeedBack__input--text-area"
              type="text"
              name="description"
              {...register("description", { required: true })}
              style={errors.description ? { border: "1px solid #D73737" } : {}}
            ></textarea>
            {errors.description && (
              <span className="error">Can’t be empty</span>
            )}
          </div>
        </div>
        <div className="CreateEditFeedBack__btn-box">
          {isEdit && (
            <button className="CreateEditFeedBack__btn CreateEditFeedBack__btn--delete">
              Delete
            </button>
          )}
          <button className="CreateEditFeedBack__btn CreateEditFeedBack__btn--cancel">
            Cancel
          </button>
          <button
            type="submit"
            className="CreateEditFeedBack__btn CreateEditFeedBack__btn--add"
          >
            {isEdit ? "Save Changes" : "Add Feedback"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateEditFeedBack;
