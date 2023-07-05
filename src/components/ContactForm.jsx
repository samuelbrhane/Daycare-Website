import React from "react";

const ContactForm = () => {
  return (
    <form>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
        <div className="flex flex-col">
          <label htmlFor="parentName">Parent&apos;s Name</label>
          <input
            id="parentName"
            type="text"
            required
            placeholder="Parents Name"
            className="input"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="parentPhone">Parent&apos;s Phone</label>
          <input
            id="parentPhone"
            type="text"
            required
            placeholder="Parents Phone"
            className="input"
          />
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <label htmlFor="parentEmail">Parent&apos;s Email</label>
        <input
          id="parentEmail"
          type="email"
          placeholder="Parents Email"
          className="input"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
        <div className="flex flex-col">
          <label htmlFor="childName">Child&apos;s Name</label>
          <input
            id="childName"
            type="text"
            required
            placeholder="Child Name"
            className="input"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="childAge">Child&apos;s Age</label>
          <input
            id="childAge"
            type="number"
            placeholder="Child Age"
            className="input"
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
        ></textarea>
      </div>

      <div className="flex justify-center mt-4">
        <button
          type="button"
          className="rounded py-4 px-20 bg-[#5785f1d6] text-white font-bold "
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
