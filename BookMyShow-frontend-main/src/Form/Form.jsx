import React from 'react'
import './Form.css';
function Form() {
  return (
    <div>
        {/* <!-- Section: Design Block --> */}
<section className="text_center_text-lg-start">

  {/* <!-- Jumbotron --> */}
  <div className="container py-4">
    <div className="row g-0 align-items-center">
      <div className="col-lg-6 mb-5 mb-lg-0">
        <div className="card-cascading-right-bg-body-tertiary">
          <div className="card-body p-5 shadow-5 text-center">
            <h2 className="fw-bold mb-5">Sign up now</h2>
            <form>
              {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
              <div className="row">
                <div class="col-md-6 mb-4">
                  <div data-mdb-input-init class="form-outline">
                    <input type="text" id="form3Example1" class="form-control" />
                    <label class="form-label" for="form3Example1">First name</label>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div data-mdb-input-init class="form-outline">
                    <input type="text" id="form3Example2" class="form-control" />
                    <label class="form-label" for="form3Example2">Last name</label>
                  </div>
                </div>
              </div>

              {/* <!-- Email input --> */}
              <div data-mdb-input-init className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control" />
                <label class="form-label" for="form3Example3">Email address</label>
              </div>

              {/* <!-- Password input --> */}
              <div data-mdb-input-init className="form-outline mb-4">
                <input type="password" id="form3Example4" className="form-control" />
                <label class="form-label" for="form3Example4">Password</label>
              </div>

              {/* <!-- Checkbox --> */}
              <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                {/* <label className="form-check-label" for="form2Example33">
                  Subscribe to our newsletter
                </label> */}
              </div>

              {/* <!-- Submit button --> */}
              <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                Sign up
              </button>

              {/* <!-- Register buttons --> */}
              <div class="text-center">
                <p>or sign up with:</p>
                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-google"></i>
                </button>

                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>

                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" className="w-100 rounded-4 shadow-4"
          alt="" />
      </div>
    </div>
  </div>
  {/* <!-- Jumbotron --> */}
</section>
{/* <!-- Section: Design Block --> */}

    </div>
  )
}

export default Form