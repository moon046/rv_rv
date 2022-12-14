import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { Link } from "react-router-dom"
import { createBike } from "../../actions/bike";
import { Button, Container, Header, Icon, Modal } from 'semantic-ui-react'
import BikeItem from '../bike/BikeItem'

const PUBLIC_KEY = "pk_test_51M7zRhBbJjfukPr45AM4xY9GbR6BbhToF4w2AO35u3ShMCrzy1EtibG0ymXo0e4MS8gz4vouCEqUUModv9HGZmeY004W3f34a8"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "red",
            color: "green",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "pink",
            color: "blue"
        }
    }
}
const kq = JSON.parse(localStorage.getItem("datane"));
const kq2 = JSON.parse(localStorage.getItem("datane2"));
let SLbai = JSON.parse(localStorage.getItem("datasl"))
let tien=0;
const dataArr = [];
for (let i = 1; i <= SLbai; i += 1) {
    dataArr[i]=JSON.parse(localStorage.getItem(`tab${i}`))
console.log("data",dataArr);
 tien=parseInt(tien+=dataArr[i].cost,10)
console.log("tinh tien ne:", tien)
}
const kqTemp = JSON.parse(localStorage.getItem("datane"));
// console.log("kq", kq);
// console.log("kq2", kq2);
// const priceTemp = kq.price;
// const tien = parseInt(kq.cost + kq2.cost2, 10);

export default function PaymentForm() {
    const [success, setSuccess] = useState(false)
    const [opened, setOpened] = useState(false);
    const stripe = useStripe()
    const elements = useElements()
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    // console.log("data ???? b?? :", priceTemp);
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
            // payment: elements.getElement(PaymentElement)
        })
        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("http://localhost:5000/payment", {
                    id, amount: tien
                })

                if (response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                    console.log(`response`);
                    console.log(response)
                    for(let i=1;i<=SLbai;i++){
                    try {
                        const res = await axios.post(`http://localhost:5000/api/bikes`, dataArr[i], config)
                        // const res2 = await axios.post(`http://localhost:5000/api/bikes`, dataArr[i], config)
                    }
                    catch {
                        try { const res = await axios.post("http://localhost:5000/api/fashions",dataArr[i], config) }
                        catch {
                        try { const res = await axios.post("http://localhost:5000/api/posts",dataArr[i], config) }
                        catch {
                          
                                try {
                                    const res = await axios.post(`http://localhost:5000/api/pets`, dataArr[i], config)
                                } catch {
                                    try {
                                        const res = await axios.post(`http://localhost:5000/api/works`, dataArr[i], config)
                                    } catch {
                                        console.log("th??m d?? ch??? sao")
                                    }
                                }
                            }
                        }
                    }
                }
            }
            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }
    return (
        <><div>
            {/* {kq.price} */}
            {!success ?
                <div>
                    <form onSubmit={handleSubmit}>
                        <center>TH??NG TIN H??A ????N </center>
                        <br /><br/>
                        
                        Kh??ch h??ng: NT Nhi??n <br /><br/>
                        Email: NhienB1805799@student.ctu.edu.vn<br /><br/>
                        T???ng ti???n c???n thanh To??n:   {tien}<br /><br/>
                        Vui l??ng nh???p ?????y ????? th??ng tin v??o th??ng tin thanh to??n ????? qu?? tr??nh ????ng b??i ho??n t???t!<br />
                        <br/>

                        <fieldset className="FormGroup">
                            <center>TH??NG TIN T??I KHO???N THANH TO??N

                            </center>
                            <div className="FormRow"  >

                                <CardElement options={CARD_OPTIONS} />
                                {/* <PaymentElement options={CARD_OPTIONS}/> */}
                            </div>
                        </fieldset>
                        <center>
                            <Button type="submit"
                            >Thanh To??n</Button>
                            <Button onClick={() => setOpened(true)}
                            >H???y</Button>
                        </center>
                    </form>
                    <Modal size="mini"
                        open={opened}
                        onClose={() => setOpened(false)}
                        closeOnDimmerClick={false}
                        closeOnEscape={false}
                        closeOnClickOutside={false}
                        disableEnforceFocus

                    >
                        <Header icon>
                            <Icon name='exclamation triangle' color="red" />
                            C???nh b??o
                        </Header>
                        <Modal.Content>
                            <p >
                                <center>
                                    B???n s??? ????ng tin th???t b???i n???u kh??ng thanh to??n <br />
                                    B???n c?? ch???n ch???c h???y ch????
                                </center>
                            </p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='green' inverted onClick={() => setOpened(false)}>
                                <Icon name='checkmark' /> Ti???p t???c thanh to??n
                            </Button>
                            <Button basic color='red' inverted href="http://localhost:3000" onClick={() => setOpened(false)}>
                                <Icon name='remove' />

                                H???y
                            </Button>

                        </Modal.Actions>
                    </Modal>
                </div>

                :
                <div>
                    {/* <image src={`https://static.vecteezy.com/system/resources/previews/002/743/514/original/green-check-mark-icon-in-a-circle-free-vector.jpg` }/> */}
                   
                   <center> <h2>Thanh To??n Th??nh C??ng
                        </h2>
                        <img src="https://static.vecteezy.com/system/resources/previews/002/743/514/original/green-check-mark-icon-in-a-circle-free-vector.jpg" width={200}   left={200}/>
                       
                       <p>
                        C???m ??n qu?? kh??ch ???? ????ng tin, tin c???a qu?? kh??ch s??? s???m ???????c duy???t, ch??c qu?? kh??ch m???t ng??y t???t l??nh!
                        
                        </p> {/* <Link to={
                            "/addpost"
                        }>Ti???p T???c ????ng Tin</Link>
                         <Link to={
                            "/addpost"
                        }>----</Link>
                        <Link to={"/manager-post"}>Qu???n L?? Tin</Link> */}
                        </center>
                </div>
            }
        </div>

            {/* </Elements> */}
        </>
    )
}