import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
// import { connect } from "react-redux";
// import * as Yup from "yup";
import { createBike } from "../../actions/bike";
import NumberFormat from "react-number-format";
import ReactFileReader from "react-file-reader";

// import { useFormik } from "formik";
import { Button, Divider, Grid, ItemExtra, TextArea } from "semantic-ui-react";
import TextEditor from "./TextEditor";
import PayBtn from "../pages/PayBtn";

const BikeIt = (
  i
) => {
  const arrayTemp = [];
  const [formData, setFormData] = useState({
    text: "",
    brand: "",
    tinhtrang: "",
    price: "",
    phone: "",
    address: "",
    description: "",
    img: "",
    cost: "",
    date1: "",
    costEdit: 5000,
    status: "Chưa duyệt"
  });

  const arr = [];

  const SLbai = JSON.parse(localStorage.getItem("datasl"))
  const [sl, setsl] = useState(Number(SLbai))
  console.log("So luong bai dang",sl);
  const onChange = e => {
    if ([e.target.name] == "date1") {
      const costTemp = e.target.value * formData.costEdit;
      formData.cost = costTemp;
    }
    formData.status = "Chưa duyệt";
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,

    });
  
    // console.log(formData)
  };

  const setLocal = (i) => {
    const kqtemp = JSON.parse(JSON.stringify(i));
   (localStorage.setItem(`tab${kqtemp.i}`, JSON.stringify(formData)))
  }
  const onSubmit = e => {
    e.preventDefault();
    // createBike(formData);
  };

  const handleFiles = files => {
    setFormData({
      ...formData, img: files.base64
    });
  };

  
  return (
    <div>
      <div
        style={{
          margin: "0px 50px"
        }}
      >
        <Grid>
          <Grid.Row>
              <form
                onSubmit={e => onSubmit(e)}
                className="ui form">
                <div className="unstackable two fields">
                  <div className="field">
                    <label>
                      <i className="file image icon"></i> Hình ảnh
                    </label>
                    <div className="ui input">
                      <ReactFileReader
                        fileTypes={["jpg", "png"]}
                        base64={true}
                        handleFiles={handleFiles}
                      >
                        {/* <button type="btn">Upload</button> */}
                        <Button>
                          Upload
                        </Button>
                      </ReactFileReader>
                      <input
                        // onChange={e => onChange(e)}
                        value={formData.img}
                        name="img"
                        // handleFiles={handleFiles}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>
                      <i className="audio description icon"></i> Tiêu đề
                      <sup
                        style={{ color: "red", fontSize: "20px" }}
                        color="red"> *</sup>
                    </label>
                    <div className="ui input">
                      <input
                        value={formData.text}
                        name="text"
                        onChange={e => onChange(e)}
                        type="text"
                        placeholder={formData.text}
                        required
                      // disabled
                      />
                    </div>
                  </div>
                </div>
                <div className="two fields">
                  <div className="field">
                    <label>
                      <i className="location arrow icon"></i> Địa Chỉ
                    </label>
                    <div className="ui input">
                      <TextArea
                        value={formData.address}
                        name="address"
                        onChange={e => onChange(e)}
                        type="text"
                        placeholder="Địa chỉ của bạn"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>
                      <i className="phone icon"></i> Số điện thoại
                    </label>
                    <div className="ui input">
                      <TextArea
                        value={formData.phone}
                        name="phone"
                        onChange={e => onChange(e)}
                        type="text"
                        placeholder="Số điện thoại của bạn"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>
                      <i className="phone icon"></i> Tình trạng xe
                      <sup
                        style={{ color: "red", fontSize: "20px" }}
                        color="red"> *</sup>
                    </label>
                    <div className="ui input">
                      <TextArea
                        value={formData.tinhtrang}
                        name="tinhtrang"
                        onChange={e => onChange(e)}
                        type="text"
                        placeholder="Tình trạng xe của bạn"
                      />
                    </div>
                  </div>
                </div>
                <div className="unstackable two fields">
                  <div className="field">
                    <label>
                      <i className="dollar sign icon"></i> Giá tiền bạn muốn bán
                      <sup
                        style={{ color: "red", fontSize: "20px" }}
                        color="red"> *</sup>
                    </label>

                    <div className="ui input">
                      <NumberFormat
                        thousandSeparator={true}
                        value={formData.price}
                        name="price"
                        onChange={e => onChange(e)}
                        placeholder="Giá tiền"
                        prefix={"$"}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>
                      <i className="time sign icon"></i> Bạn muốn đăng tin trong bao nhiêu ngày:
                      <sup
                        style={{ color: "red", fontSize: "20px" }}
                        color="red"> *</sup>
                    </label>
                    <div className="ui input">
                      <NumberFormat
                        thousandSeparator={true}
                        value={formData.date1}
                        name="date1"
                        onChange={e => onChange(e)}
                        placeholder="Thời gian"
                      // prefix={"ngày"}
                      />
                    </div>
                  </div>
                </div>
                <div className="two fields">
                  <div className="field">
                    <label>
                      <i className="pencil alternate icon"></i> Mô tả
                      <sup
                        style={{ color: "red", fontSize: "20px" }}
                        color="red"> *</sup>
                    </label>
                    <div className="ui input">
                      <TextArea
                        value={formData.description}
                        name="description"
                        onChange={e => onChange(e)}
                        type="text"
                        placeholder="Mô tả về sản phẩm của bạn"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>
                      <i class="car icon"></i> Hãng xe
                      <sup
                        style={{ color: "red", fontSize: "20px" }}
                        color="red"> *</sup>
                    </label>
                    <div className="ui input">
                      <TextArea
                        value={formData.brand}
                        name="brand"
                        onChange={e => onChange(e)}
                        type="text"
                        placeholder="Hãng xe"
                      />
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label>
                    <i className="dollar sign icon"></i> Chi phí bạn phải trả là
                  </label>
                  <div className="ui input">
                    <NumberFormat
                      thousandSeparator={true}
                      value={formData.cost}
                      name="cost"
                      // onChange={e => onChange(e)}
                      // placeholder={'cost'}
                      prefix={"$"}
                      disabled
                    />

                  </div>
                </div>

                {/* <PayBtn BikeItem={formData} /> */}
              </form>
            {/* </Grid.Column> */}


            {/* </div> */}

            {/* <PayBtn BikeItem={formData} /> */}
            {/* </form>
                </Grid.Column> */}




          </Grid.Row>
        </Grid>

        <center>
          {/* <PayBtn BikeItem={formData} /> */}
          {i == SLbai-1 ?  <Button onClick={() => setLocal(i)} className="ui primary basic button">
            Thanh toán
          </Button>
          :<Button onClick={() => setLocal(i)} className="ui primary basic button">Lưu</Button>
              }
        </center>
      </div>
    </div>
  );
};

export default BikeIt;
// connect(null
  // , { createBike }
  // )
  // (withRouter(AddBike));
