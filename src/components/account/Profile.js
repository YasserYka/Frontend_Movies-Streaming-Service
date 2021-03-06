import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout, loadUser } from "../../actions/userAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        avatarId: -1,
        bio: "Bio",
        creationDate: "2020/09/09",
        email: "Email",
        enabled: false,
        fullName: "Full Name",
        lastSeen: "2020/09/09",
        username: "Username"
      }
    }

    this.changeAvatar = this.changeAvatar.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  static propTypes = {
    user: PropTypes.object,
    loadUser: PropTypes.func.isRequired
  };



  componentDidMount(prevState) {
    this.setState({user: this.props.profile})
  }

  logout() {}

  changeAvatar(event) {
    if (event) event.preventDefault();

    const newAvatarId = parseInt(event.target.getAttribute("data-img-id"));

    this.setState(prevState => ({
      user: {
        ...prevState.user,
        avatarId: newAvatarId
      }
    }));
  }

  changeHandler(event){
    if (event) event.preventDefault();

    const { name, value } = event.target;

    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
  }

  submitChanges(){
    
  }

  render() {

    return (
      <div className="container">
        {/* Left navigation box */}
        <div className="row flex-lg-nowrap">
          <div className="col-12 col-lg-auto mb-3" style={{ width: "200px" }}>
            <div className="card p-3">
              <h6 className="card-title font-weight-bold">Manage</h6>
              <div className="e-navlist e-navlist--active-bg">
                <ul className="nav">
                  <li className="nav-item">
                    
                    <Link to={"/userslist"} className="nav-link px-2 active">
                      
                      <i className="fa fa-users mr-1" aria-hidden="true"></i>
                      <span> Users </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    
                    <Link to={"/movieslist"} className="nav-link px-2 active">
                      
                      <i className="fa fa-film" aria-hidden="true"></i>
                      <span> Movies </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            {/* Inforamation form */}
            <div className="row">
              <div className="col mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="e-profile">
                      <div className="row">
                        <div className="col-12 col-sm-auto mb-3">
                          <div className="mx-auto" style={{ width: "140px" }}>
                            <div
                              className="d-flex justify-content-center align-items-center rounded"
                              style={{ height: "140px" }}
                            >
                              <img
                                src={`/avatar${this.state.user.avatarId}.png`}
                                className="rounded-circle z-depth-0"
                                style={{
                                  maxWidth: "150px",
                                  maxHeight: "150px",
                                }}
                                alt="avatar"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                          <div className="text-center text-sm-left mb-2 mb-sm-0">
                            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                              {this.state.user.fullName}
                            </h4>
                            <p className="mb-0">{this.state.user.username}</p>
                            <div className="text-muted">
                              <small>Last seen {this.state.user.lastSeen}</small>
                            </div>
                            <div className="mt-2">
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                data-toggle="modal"
                                data-target="#exampleModal"
                              >
                                Change Picture
                              </button>
                              <div
                                className="modal fade"
                                id="exampleModal"
                                tabIndex="-1"
                                role="dialog"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div className="modal-dialog" role="document">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="exampleModalLabel"
                                      >
                                        Pick a picutre
                                      </h5>
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      <div className="container">
                                        <div className="col mt-3 mb-3">
                                          <img
                                            src={`/avatar0.png`}
                                            data-dismiss="modal"
                                            data-img-id="0"
                                            onClick={this.changeAvatar}
                                            className="rounded-circle z-depth-0 mt-1 mb-1 close"
                                            style={{
                                              maxWidth: "150px",
                                              maxHeight: "150px",
                                              float: "right",
                                            }}
                                            alt="avatar"
                                          />
                                          <img
                                            src={`/avatar1.png`}
                                            data-dismiss="modal"
                                            data-img-id="1"
                                            onClick={this.changeAvatar}
                                            className="rounded-circle z-depth-0 mt-1 mb-1 close"
                                            style={{
                                              maxWidth: "150px",
                                              maxHeight: "150px",
                                              float: "left",
                                            }}
                                            alt="avatar"
                                          />
                                        </div>
                                        <div className="col">
                                          <img
                                            src={`/avatar2.png`}
                                            className=""
                                            data-dismiss="modal"
                                            data-img-id="2"
                                            onClick={this.changeAvatar}
                                            className="rounded-circle z-depth-0 mt-1 mb-1 close"
                                            style={{
                                              maxWidth: "150px",
                                              maxHeight: "150px",
                                              float: "right",
                                            }}
                                            alt="avatar"
                                          />
                                          <img
                                            src={`/avatar3.png`}
                                            data-dismiss="modal"
                                            data-img-id="3"
                                            onClick={this.changeAvatar}
                                            className="rounded-circle z-depth-0 mt-1 mb-1 close"
                                            style={{
                                              maxWidth: "150px",
                                              maxHeight: "150px",
                                              float: "left",
                                            }}
                                            alt="avatar"
                                          />
                                        </div>
                                        <div className="col">
                                          <img
                                            src={`/avatar4.png`}
                                            data-dismiss="modal"
                                            data-img-id="4"
                                            onClick={this.changeAvatar}
                                            className="rounded-circle z-depth-0 mt-1 mb-1 close"
                                            style={{
                                              maxWidth: "150px",
                                              maxHeight: "150px",
                                              float: "right",
                                            }}
                                            alt="avatar"
                                          />
                                          <img
                                            src={`/avatar5.png`}
                                            data-dismiss="modal"
                                            data-img-id="5"
                                            onClick={this.changeAvatar}
                                            className="rounded-circle z-depth-0 mt-1 mb-1 close"
                                            style={{
                                              maxWidth: "150px",
                                              maxHeight: "150px",
                                              float: "left",
                                            }}
                                            alt="avatar"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-center text-sm-right">
                            {this.state.user.enabled ? (
                              <span className="badge badge-secondary">
                                Verified
                              </span>
                            ) : (
                              <span className="badge badge-danger">
                                Not Verified
                              </span>
                            )}
                            <div className="text-muted">
                              <small>Joined {this.state.user.lastSeen}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a href="" className="active nav-link">
                            Settings
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content pt-3">
                        <div className="tab-pane active">
                          <form className="form" noValidate="">
                            <div className="row">
                              <div className="col">
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Full Name</label>
                                      <input
                                        autoComplete="off"
                                        className="form-control"
                                        type="text"
                                        name="fullName"
                                        onChange={this.changeHandler}
                                        placeholder={this.state.user.fullName}
                                      />
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Username</label>
                                      <input
                                        autoComplete="off"
                                        className="form-control"
                                        type="text"
                                        name="username"
                                        onChange={this.changeHandler}
                                        placeholder={this.state.user.username}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Email</label>
                                      <input
                                        autoComplete="off"
                                        className="form-control"
                                        type="text"
                                        name="email"
                                        onChange={this.changeHandler}
                                        placeholder={this.state.user.email}
                                        readOnly
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col mb-3">
                                    <div className="form-group">
                                      <label>About</label>
                                      <textarea
                                        className="form-control"
                                        rows="5"
                                        name="bio"
                                        onChange={this.changeHandler}
                                        placeholder={this.state.user.bio}
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 col-sm-6 mb-3">
                                <div className="mb-2">
                                  <b>Change Password</b>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Current Password</label>
                                      <input
                                        autoComplete="off"
                                        className="form-control"
                                        type="password"
                                        placeholder="••••••"
                                        readOnly
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>New Password</label>
                                      <input
                                        autoComplete="off"
                                        className="form-control"
                                        type="password"
                                        placeholder="••••••"
                                        readOnly
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>
                                        Confirm
                                        <span className="d-none d-xl-inline">
                                          Password
                                        </span>
                                      </label>
                                      <input
                                        autoComplete="off"
                                        className="form-control"
                                        type="password"
                                        placeholder="••••••"
                                        readOnly
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-sm-5 offset-sm-1 mb-3">
                                <div className="mb-2">
                                  <b>Keeping in Touch</b>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <label>Email Notifications</label>
                                    <div className="custom-controls-stacked px-2">
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          autoComplete="off"
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="notifications-blog"
                                          defaultChecked=""
                                        />
                                        <label
                                          className="custom-control-label"
                                          htmlFor="notifications-blog"
                                        >
                                          Blog posts
                                        </label>
                                      </div>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          autoComplete="off"
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="notifications-news"
                                          defaultChecked=""
                                        />
                                        <label
                                          className="custom-control-label"
                                          htmlFor="notifications-news"
                                        >
                                          Newsletter
                                        </label>
                                      </div>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          autoComplete="off"
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="notifications-offers"
                                          defaultChecked=""
                                        />
                                        <label
                                          className="custom-control-label"
                                          htmlFor="notifications-offers"
                                        >
                                          Personal Offers
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col d-flex justify-content-end">
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                  onClick={this.submitChanges.bind(this)}
                                >
                                  Save Changes
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side boxes */}
              <div className="col-12 col-md-3 mb-3">
                {/* Logout box */}
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="px-xl-3">
                      <Link to={"/"} className="btn btn-block btn-secondary">
                        <i className="fa fa-sign-out"></i>
                        <span>Logout</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Support box */}
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-title font-weight-bold">Support</h6>
                    <p className="card-text">
                      Get fast, free help from our friendly assistants.
                    </p>
                    <button
                      data-toggle="modal"
                      data-target="#exampleModal2"
                      type="button"
                      className="btn btn-primary"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleModal2"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      New Movie
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">
                          Your Email:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message-text" className="col-form-label">
                          Your full name:
                        </label>
                        <input className="form-control" id="message-text" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message-text" className="col-form-label">
                          Subject:
                        </label>
                        <input className="form-control" id="message-text" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message-text" className="col-form-label">
                          Message:
                        </label>
                        <textarea
                          className="form-control"
                          id="message-text"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.user.profile,
});

export default connect(mapStateToProps, { logout, loadUser })(Profile);
