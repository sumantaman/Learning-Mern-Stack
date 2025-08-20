import axios from "axios";

const payKhalti = async (data) => {
  if (!data) throw { message: "payment data is required" };
  if (!data.amount) throw { message: "Payment amount is required" };
  if (!data.purchaseOrderName)
    throw { message: "purchase order name  is required" };


  const body = {
    return_url :'http://localhost:5173/home',
    amount : data.amount,
    website_url :'http://localhost:5173/login/product',
    purchase_order_id : data.purchaseOrderId,
    purchase_order_name : data.purchaseOrderName,
    customer_info :{
        name : data.customer.name,
        email: data.customer.mail,
        phone: data.customer.phone,
    }
  }

  const response = await axios.post("https://dev.khalti.com/api/v2/epayment/initiate/", body, {
    headers: {
      // set in env api key
      Authorization: "Key 6ae18d73c9d148b188d8fb16315d81c3",
    },
  });
  return response.data;
  //     let config = {
  //   method: 'post',
  //   maxBodyLength: Infinity,
  //   url: 'https://dev.khalti.com/api/v2/epayment/initiate/',
  //   headers: {
  //     'Authorization': 'Key 6ae18d73c9d148b188d8fb16315d81c3',
  //     'Content-Type': 'application/json'
  //   },
  //   data : data
  // };

  // axios.request(config)
  // .then((response) => {
  //   console.log(JSON.stringify(response.data));
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
};

export default { payKhalti };
