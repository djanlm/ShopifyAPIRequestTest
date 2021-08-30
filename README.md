# Shopify API Orders Request
This script allows you to fetch all orders that aren't fulfilled yet from your Shopify store. After receiving all the data needed it marks all orders as fufilled.
It also converts the json data returned by the API into a CSV file containing customer email, shipping address and products SKU and its title.

## Requirements
To open and run this project you will need:
* [git](https://git-scm.com/download/win) *this link is for windows*
* [nodejs](https://nodejs.org/)
* [npm](https://nodejs.org/) *it comes with node*


## Setting up your store
To rece
## Getting Started

* Create or choose a folder where you gonna clone the project.
* Clone the repository with the command `git clone https://github.com/djanlm/ShopifyAPIRequestTest`.
* Run `npm install` to install all dependencies.


Configure your own .env file. In the repository there's an .env.example that can be used as a model.
In the .env file you should insert your API password and the name of your store. 

The REST Admin APIs require a Shopify access token or an API password for making authenticated requests.
Following the next steps you can get a password to authenticate using basic HTTP authentication
1.	From your Shopify admin, click Apps.

2.	Click Manage private apps.
![ManagePrivateApps](https://github.com/djanlm/ShopifyAPIRequestTest/blob/master/ManagePrivateApps.jpg)

3. Enable Private App Development.

![EnableAppDevelopment](https://github.com/djanlm/ShopifyAPIRequestTest/blob/master/EnablePrivateAppDevelopment.jpg)

4.	Click Create a new private app.

![CreatePrivateAPP](https://github.com/djanlm/ShopifyAPIRequestTest/blob/master/CreatePrivateAPP.jpg)

5.	Enter the details for your private app.

6.	Click Save.

7.	Use the generated API password as the access token. Add it in the .env file


REST Admin API endpoints are organized by resource. We'll need to use different API endpoints depending on the service we want to provide. In this case we gonna use the Order resource.

All resources can be find in this [page](https://shopify.dev/api/admin/rest/reference#selecting-apis-for-your-app).

The order resource details with all the data it returns can be found [here](https://shopify.dev/api/admin/rest/reference/orders/order).



