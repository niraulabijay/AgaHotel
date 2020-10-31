import React from "react";

function RegisterForm() {
  return (
    <>
      <form action="">
        <div class="form-group">
          {/* <label for="first-name" class="label-up"
                    >First name</label
                      > */}
          <input
            type="text"
            class="form-control"
            id="first-name"
            placeholder="First name"
          />
        </div>
        <div class="form-group">
          {/* <!-- <label for="last-name" class="label-up">Last name</label> --> */}
          <input
            type="text"
            class="form-control"
            id="last-name"
            placeholder="Last name"
          />
        </div>
        <div class="form-group">
          {/* <!-- <label for="email" class="label-up">Email</label> --> */}
          <input
            type="text"
            class="form-control"
            id="last-name"
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          {/* <!-- <label for="password1" class="label-up">Password</label> --> */}
          <input
            type="password"
            class="form-control"
            id="password1"
            placeholder="Enter password"
          />
        </div>
        <div class="form-group">
          {/* <!-- <label for="password2" class="label-up"
                        >Enter your password again</label
                      > --> */}
          <input
            type="password"
            class="form-control"
            id="password2"
            placeholder="Enter your password again"
          />
        </div>
        <div class="form-group check">
          <input type="checkbox" id="check1" />
          <span className="checkspan">
            I have read and agree to the Aga Rewards
            <a href="">terms and conditions</a> .
          </span>
        </div>
        <div class="form-group">
          <input type="checkbox" id="ckeck2" />
          <span className="checkspan">
            I have read and agree that my personal data will be processed by the
            Aga Hotel Group in accordance with the
            <a href="">privacy policy</a>
          </span>
        </div>
        <div class="form-btn">
          <a href=""> Join Now </a>
        </div>
      </form>
    </>
  );
}

export default RegisterForm
