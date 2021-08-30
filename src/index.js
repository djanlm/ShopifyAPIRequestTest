const axios = require('axios').default; // used to make http requests
const converter = require('json-2-csv'); // used to convert json data into csv
const fs = require('fs'); // used to work with file system, here is used to save a .csv file
require('dotenv/config'); // required to use the .env file

/** the password is used for authentication and will be sent in the header of the request */
const password = process.env.API_PASSWORD;

/** the name of the store */
const storeName = process.env.STORE_NAME;

/** url used to access orders resource */
const urlOrders = `https://${storeName}.myshopify.com/admin/api/2021-07/orders.json`

/** requests all orders that aren't fulfilled */
axios.get(urlOrders, {
  headers: {
    'X-Shopify-Access-Token': password
  },
}).then((response) => {

  /** orders is an array containing all orders returned in the response */
  const { orders } = response.data

  /** stores only the data we need to save in the csv file */
  const requiredData = orders.map(order => {

    /** each order might have more than one product */
    const line_items = order.line_items.map(line_item => (
      {
        sku: line_item.sku,
        title: line_item.title,
      }
    ))

    /** url used to access fulfillments resource */
    const urlFulfillments = `https://${storeName}.myshopify.com/admin/api/2021-07/orders/${order.id}/fulfillments.json`

    /** post request to fulfill all orders returned in the get request */
    axios.post(urlFulfillments, {
      fulfillment: { location_id: 64622035101 }
    }, {
      headers: {
        'X-Shopify-Access-Token': password
      },
    }).then(res => {
      console.log(res.data);
    })

    return ({
      contact_email: order.contact_email,
      shipping_address: order.shipping_address,
      product: line_items,
    }
    );
  })

  /** converts our fetched json data into csv */
  converter.json2csv(requiredData, (err, csv) => {
    if (err) {
      throw err;
    }

    fs.writeFileSync('ordersData.csv', csv); // creates a csv file called "ordersData"
  });

})

