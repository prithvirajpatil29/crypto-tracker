import React from 'react'

const Homepage = () => {
  const submitHandler = () => {
    window.scrollTo(0, 0);
  }
  return (
    <div onClick={submitHandler}>
      <i class="bi bi-arrow-up-circle upsidebtn btn btn-info rounded-circle text-white fs-5"></i>
    </div>
  )
}

export default Homepage