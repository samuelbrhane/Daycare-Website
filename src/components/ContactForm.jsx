import React, { useState } from "react";
import { toast } from "react-toastify";
const toastOptions = {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    childName: "",
    childAge: "",
    comment: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({ ...formData }),
    });

    if (response.status === 200) {
      toast.success("Thank you for getting in touch with us.", toastOptions);
      setFormData({
        parentName: "",
        parentPhone: "",
        parentEmail: "",
        childName: "",
        childAge: "",
        comment: "",
      });
    } else {
      toast.error("Email can not be send.", toastOptions);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
        <div className="flex flex-col">
          <label htmlFor="parentName">Parent&apos;s Name</label>
          <input
            id="parentName"
            type="text"
            required
            placeholder="Parent's Name"
            className="input"
            value={formData.parentName}
            onChange={(e) =>
              setFormData({ ...formData, parentName: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="parentPhone">Parent&apos;s Phone</label>
          <input
            id="parentPhone"
            type="text"
            required
            placeholder="Parent's Phone"
            className="input"
            value={formData.parentPhone}
            onChange={(e) =>
              setFormData({ ...formData, parentPhone: e.target.value })
            }
          />
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <label htmlFor="parentEmail">Parent&apos;s Email</label>
        <input
          id="parentEmail"
          type="email"
          placeholder="Parent's Email"
          className="input"
          required
          value={formData.parentEmail}
          onChange={(e) =>
            setFormData({ ...formData, parentEmail: e.target.value })
          }
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
        <div className="flex flex-col">
          <label htmlFor="childName">Child&apos;s Name</label>
          <input
            id="childName"
            type="text"
            required
            placeholder="Child's Name"
            className="input"
            value={formData.childName}
            onChange={(e) =>
              setFormData({ ...formData, childName: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="childAge">Child&apos;s Age</label>
          <input
            id="childAge"
            type="number"
            required
            placeholder="Child's Age"
            className="input"
            value={formData.childAge}
            onChange={(e) =>
              setFormData({ ...formData, childAge: e.target.value })
            }
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="comment">Comment: </label>
        <textarea
          name=""
          id="comment"
          className="w-full input"
          rows="5"
          placeholder="Comment..."
          value={formData.comment}
          onChange={(e) =>
            setFormData({ ...formData, comment: e.target.value })
          }
        ></textarea>
      </div>

      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="rounded py-4 px-20 bg-[#f38600] text-white font-bold "
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
