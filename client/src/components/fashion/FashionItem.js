import React, { Fragment } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Link } from "react-router-dom";
// import { deleteBike } from "../../actions/bike";
import { deleteFashion } from "../../actions/fashion";
const FashionItem = ({
  auth,
  deleteFashion,
  fashion: { _id, text, name, user, date, img, price }
}) => {
  console.log("auth", auth)
  console.log("auth.user.id", auth.user._id)
  return (
    <Fragment>
      <div className="ui items">
        <div className="item">
          <div className="ui small image">
            <img src={img} alt="/" />
          </div>

          <div className="middle aligned content">
            <div className="header">
              <h1 className="ui small header">{text}</h1>
            </div>
            <div className="text" style={{ margin: "10px 0px" }}>
              <i className="user circle icon"></i> Đăng bởi:{" "}
              <a href="!#"> {name}</a>
            </div>
            <div className="date">
              <i className="calendar alternate outline icon"></i>
              Đăng vào: <Moment format="DD/MM/YYYY">{date}</Moment>
            </div>
            <div
              className="text"
              style={{ color: "red", margin: "10px 0px", fontWeight: "bold" }}
            >
              <i className="money bill alternate outline icon"></i> Giá bán:{" "}
              {price}
              VND
            </div>
            <Link to={`/fashion/${_id}`} className="ui mini primary basic button">
              Xem chi tiết
            </Link>
            {!auth.loading && user === auth.user._id && (

              <Link
                onClick={e => deleteFashion(_id)}
                className="ui mini red basic button"
              >
                Xóa bài viết
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="ui divider"></div>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { deleteFashion })(FashionItem);
