**LESSON
1.introduction to the course
2.installation and Devlopment Tools
3.Create Angular app
    1.create project folder
    2.install angular@cli
    3.create app as frontend
4.Add Header
    1.Generate Commonent
    2.Add UI
5.List Food
    1.Create Food Model
    2.Create Data.ts
        1.Add Sample foods
    3.add immage of assets
    4.Create Food Service
    5.create home Component
6.Search Function
    1.Add method to Food Service
    2.Add Search Route
    3.Show Search Result In Home Componnet
    4.Generate Search component
        1.Add to Home Commponent
        2.Add Ts
        3.Add Html
        4.Add css
7.Tags Function
    1.Create Tag Model
    2.Add Sample_tags in data.ts
    3.food Service
        1.Add get all sample_tags
        2.Add get all foods by tags method
    4.Add tags Route
    5.Show Tag Result in Home Component
    6.Generate Tag Component
        1.Add to Home Component
        2.Add ts 
        3.Add Html
        4.Add css
8.Add Food Page
    1.Add Method in Food Service
    2.generate Food Page Component
        1.Add Route
        2.Add Ts
        3.Add Html
        4.Add Css
9.Cart Page
    1.Create CartItem Model
    2.Create Cart Model
    3.Generate Cart Service
    4.Add Cart Button In Food Page
    5.Generate Cart Component
        1.Add Route
        2.Add Ts
        3.generate title component in partials
        4.add title component in cart html
        5.Add Html
        6.Add Css
10.Not Found Page
    1.Generate  component
        1.Add Ts
        2.Add Html
        3.Add Css
    2.Add @ Pages
        1.Home page
        2.Food Page
        3.Cart Page
11.Backend
    1.Create backend Folder
    2.Npm InIt
    3.Npm Install Typescript
    4.Create tsconfig.json
    5.crate .gitignore
    5.copy data.ts to backend/src
    7.npm install exxpress cors
    8.Create Server.ts
        1.Install @types
        2.Add Apis
    9.Npm install nodemon ts-node --save-dev
    10.Add urs.ts To Frontend
    11.Add http Client Module
    12.Update Food Services
12.login page
        1.generate component
            1.Add Routes
            2.Add ts
            3.Add Html
                1.Imort Reactive Forms Modules
            4.Add Css
        2.Add Login Api
            1.Use Json Jsonwebtoken
             
            2.Add   npm install Jsonwebtoken
            3.Test Using Postman
        3.generate user Service
            1.Generate user Model
            2.Add User Subject
            3.Add Ngx-toastr
                1.import module
                2.Import BrowserAnimation Module
                3.Add styles in angular json
            4.Add to Header
        1.Add local Storage Methods
        2.Add Log Out Method
            1.Add to Header
13.connect Login API To Mongobd Atlas
    1.Moving APIS Into routers
    2.Create Mongobdb Atlas
    3.Create .env file
    4.Install
        1.mongoose 
        2.dotenv
        3.bcryptjs
        4.jsonwebtoken
        5.express-async-handler
    5.connect To Mongodb atlas
        create models folder inside thi folder create Once InterFase And Create Schema
    6.use Mongodb instead of data.ts in Apis
14.Register Page
    1.Add Register Api
    2.Add Register Service Mathod
    3.Add Register Link
    4.Add Register Componetnt
15.Loding
    1.Add Image
    2.Add Component
    3.Add Service
    4.Add Interceptor
        in app module inside of provider add http interseptor for loading interseptor
16 CheckOut Page
    1.Create Order Model
    2.Create Check Out Componnets
        1.Add Router
    3.Add User To UserService
    4.Add Cart To CartService
    5.Create Order Items List Componnt
    6.Adding Map to CheckOut Page
        1.Add Leaflet npm package
            1.Add @types/leaflet
            2.Add Css to angular.json
        2.Add AddressLatLng to Order Model
        3.Create Map component
            1.Add to checkout page
            2.Add TS
                1.Change app-map selector to map
            3.Add Html
            4.Add CSS
        4.Add Auth Guard
    7.Save Order
        1.Add Order Model
        2.Add Order Status Enum
        3.Add Auth Middleware
        4.Add Order Router
            1.Add Create Api
        5.Add Order Urls To urls.ts
        6.Add Order Service
            1.Add Create Method
18.payment Page
    1.Generate Component
    2.Add 'getOrderForCurrentOrder API
    3.Add Order Service Methods
    4.connect component to service
    5.make the map component readonly   

19.Adding Paypal

    1.Generate Component
        1.Add to payment page
    2.Get Paypal client Id
    3.Add Paypal JS to index.html
    4.Set up Paypal button
    5.Add Pay api to order router
    6.Get Paypal sandbox account

20. Order Track Page
    1.Generate Component
        1.Add to routes
    2.Add Api
        1.Add to urls.ts
    3.Add Method tp order.srvice
    4.Add Html
    5.Add css
                           