import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
// import { connect } from "react-redux";
import { createBike } from "../../actions/bike";
import NumberFormat from "react-number-format";
import ReactFileReader from "react-file-reader";
import { Button, Grid, ItemExtra, TextArea } from "semantic-ui-react";
import TextEditor from "./TextEditor";
import PayBtn from "../pages/PayBtn";

const AddWork = (
    // { createBike }
) => {
    const [formData, setFormData] = useState({
        text: "",
        nganh: "",
        age: "",
        price: "",
        phone: "",
        address: "",
        description: "",
        img: "",
        cost: "",
        date1: "",
        costEdit: 4000,
        status: "Chưa duyệt"
    });

    const onChange = e => {
        const costTemp = e.target.value * formData.costEdit;
        formData.cost = costTemp;
        formData.status = "Chưa duyệt";
        localStorage.setItem("datane", JSON.stringify(formData));
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,

        });

        // console.log(formData)
    };

    const onSubmit = e => {
        e.preventDefault();
        // createBike(formData);

    };
    const handleClickH = () => {

        window.location.href = "http://localhost:3000/payment";
    }


    console.log('---------------------------');

    console.log("date1:", formData.date1);
    // console.log('formdata:',formData);
    // const textk = "kkkk";

    const handleFiles = files => {
        setFormData({
            ...formData, img: files.base64
        });
        // setFormData({...formData, e.target.img: e.target.value})
    };
    //   const [editorState, setEditorState] = useState(() =>
    //   EditorState.createEmpty()
    // );
    return (
        <div>
            <div className="banner-tuyendung"></div>
            <h1 className="ui header" style={{ textAlign: "center" }}>
                Đăng tin tuyển dụng{" "}
            </h1>
            <div
                style={{
                    margin: "0px 50px"
                }}
            >
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <div className="banner-dangtin2"></div>
                        </Grid.Column>
                        <Grid.Column width={10}>
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
                                        </label>
                                        <div className="ui input">
                                            <input
                                                value={formData.text}
                                                name="text"
                                                onChange={e => onChange(e)}
                                                type="text"
                                                placeholder={formData.text}
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
                                            <i className="phone icon"></i> Ngành nghề bạn muốn tuyển dụng
                                        </label>
                                        <div className="ui input">
                                            <TextArea
                                                value={formData.nganh}
                                                name="nganh"
                                                onChange={e => onChange(e)}
                                                type="text"
                                                placeholder="Ngành nghề bạn muốn tuyển dụng"
                                            />
                                            {/* <TextareaAutosize1
                        aria-label="empty textarea"
                        placeholder="Empty"
                        style={{ width: 200 }}
                      /> */}
                                            {/* <TextEditor
                        value={tinhtrang}
                        name="tinhtrang"
                        onChange={e => onChange(e)} /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="unstackable two fields">
                                    <div className="field">
                                        <label>
                                            <i className="dollar sign icon"></i> Lương tối thiếu
                                        </label>

                                        <div className="ui input">
                                            <NumberFormat
                                                thousandSeparator={true}
                                                value={formData.luong}
                                                name="luong"
                                                onChange={e => onChange(e)}
                                                placeholder="Lương tối thiểu"
                                                prefix={"$"}
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label>
                                            <i className="time sign icon"></i> Bạn muốn đăng tin trong bao nhiêu ngày:
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
                                        </label>
                                        <div className="ui input">
                                            <TextArea
                                                value={formData.description}
                                                name="description"
                                                onChange={e => onChange(e)}
                                                type="text"
                                                placeholder="Mô tả về thú cưng của bạn"
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label>
                                            <i class="car icon"></i> Hình thức trả lương
                                        </label>
                                        <div className="ui input">
                                            <TextArea
                                                value={formData.hinhthuctraluong}
                                                name="hinhthuctraluong"
                                                onChange={e => onChange(e)}
                                                type="text"
                                                placeholder="Hình thức trả lương"
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
                                <center>
                                    {/* <Button href="http://localhost:3000/payment" className="ui button" onClick={() => handleClickH()}> */}
                                        {/* <Button type="submit" className="ui button"  > */}
                                        {/* className="btn" onClick={() => HandleOkPayment(true)} */}
                                        {/* <Link to={'/payment'} className="ui  button"/> */}
                                        {/* Thanh Toán && Đăng bài */}
                                    {/* </Button> */}
                                    {/* </button> */}
                                    {/* </Link> */}

                                    {/* <Link to="/payment" className="ui primary basic button">
                 Đăng Tin
                </Link> */}
                                    <Link to="/work" className="ui primary basic button">
                                        Chuyển đến trang tin về thú cưng
                                    </Link></center>
                                <PayBtn BikeItem={formData} />
                            </form>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div className="banner-doc"></div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    );
};

export default AddWork;
// connect(null
  // , { createBike }
  // )
  // (withRouter(AddBike));
