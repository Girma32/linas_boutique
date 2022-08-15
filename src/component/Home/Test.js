import React from "react";

function Test({ comment, namePerson, title }) {
  return (
    <div class="h-full w-full text-center">
      <img
        alt="testimonial"
        class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
        src="https://dummyimage.com/302x302"
      />
      <p class="leading-relaxed">{comment}</p>
      <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
      <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
        {namePerson}
      </h2>
      <p class="text-gray-500">{title}</p>
    </div>
  );
}

export default Test;
