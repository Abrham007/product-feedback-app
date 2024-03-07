import "./CreateEditFeedBack.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import arrowLeftIcon from "../../assets/shared/icon-arrow-left.svg";
import newFeedbackIcon from "../../assets/shared/icon-new-feedback.svg";
import editFeedbackIcon from "../../assets/shared/icon-edit-feedback.svg";
import { Link, useParams, useNavigate } from "react-router-dom";
import FeedBackInput from "../UI/Inputs/FeedBackInput";
import { useDispatch, useSelector } from "react-redux";
import BackBtn from "../UI/Buttons/BackBtn";
import {
  addNewPost,
  editPost,
  deletePost,
  selectProductRequests,
} from "../../features/productRequests/productRequestsSlice";

function CreateEditFeedBack(props) {
  // The id passed for editing from the FeedBackDeatil component
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  // This is for the custom select input
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentStatus, setCurrentStatus] = useState(0);

  let categoryList = ["Feature", "UI", "UX", "Enhancement", "Bug"];
  let statusList = ["Suggestion", "Planned", "In-Progress", "Live"];

  // This will get the post for editing for better UX from the redux store
  let CURRENTFEEDBACK = useSelector((state) =>
    state.productRequests.posts.find((req) => req._id == id)
  );

  // This is passed to the custom select input's
  function handleCurrentCategory(categoryIndex) {
    setCurrentCategory(categoryIndex);
  }

  function handleCurrentStatus(statusIndex) {
    setCurrentStatus(statusIndex);
  }

  // This will add new post directly to the database through redux
  async function addData(data) {
    try {
      dispatch(
        addNewPost({
          title: data.title,
          category: categoryList[currentCategory].toLowerCase(),
          upvotes: 0,
          status: statusList[currentStatus].toLowerCase(),
          description: data.description,
        })
      );
    } catch (err) {
      console.log("Failed to save the post: ", err);
    }
  }

  // This will edit old post directly to the database through redux
  async function editData(data) {
    try {
      dispatch(
        editPost({
          postId: id,
          title: data.title,
          category: categoryList[currentCategory].toLowerCase(),
          status: statusList[currentStatus].toLowerCase(),
          description: data.description,
        })
      );
    } catch (err) {
      console.error("Failed to edit the post: ", err);
    }
  }

  // This will delelte a post directly on the database through redux
  function handleDelete(event) {
    event.preventDefault();
    try {
      dispatch(
        deletePost({
          postId: id,
        })
      );
    } catch {}

    navigate("/");
  }

  // This will determine to edit post or create the post and navigate
  // to the respective pages
  function onSubmit(data) {
    if (props.isEdit) {
      editData(data);
      navigate(`/feedbackdetail/${id}`);
    } else {
      addData(data);
      navigate("/");
    }
  }

  // This will load the correct catagory and status if it is on edit
  // from the redux store
  useEffect(() => {
    if (props.isEdit) {
      let currentCategoryIndex = categoryList.findIndex(
        (category) => category.toLowerCase() == CURRENTFEEDBACK.category
      );
      let currentStatusIndex = statusList.findIndex(
        (status) => status.toLowerCase() == CURRENTFEEDBACK.status
      );
      setCurrentCategory(currentCategoryIndex);
      setCurrentStatus(currentStatusIndex);
    }
  }, []);

  // This will reset the input fields upon successful submtion
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ title: "", description: "" });
    }
  }, [formState]);
  return (
    <div className="CreateEditFeedBack">
      <BackBtn />

      <img
        src={props.isEdit ? editFeedbackIcon : newFeedbackIcon}
        alt=""
        height={56}
        width={56}
        className="CreateEditFeedBack__logo"
      ></img>

      <form
        role="form"
        onSubmit={handleSubmit(onSubmit)}
        className="CreateEditFeedBack__form"
      >
        <h2 className="CreateEditFeedBack__header">
          {props.isEdit
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
            defaultValue={props.isEdit ? CURRENTFEEDBACK.title : ""}
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

          {props.isEdit && (
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
            defaultValue={props.isEdit ? CURRENTFEEDBACK.description : ""}
          />
        </div>

        <div className="CreateEditFeedBack__btn-box">
          {props.isEdit && (
            <button
              onClick={handleDelete}
              className="CreateEditFeedBack__btn CreateEditFeedBack__btn--delete"
            >
              Delete
            </button>
          )}

          <button
            onClick={() => navigate(-1)}
            className="CreateEditFeedBack__btn CreateEditFeedBack__btn--cancel"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="CreateEditFeedBack__btn CreateEditFeedBack__btn--add"
          >
            {props.isEdit ? "Save Changes" : "Add Feedback"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateEditFeedBack;
