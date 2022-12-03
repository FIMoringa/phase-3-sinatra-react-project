# Moringa Blog
This is a fullstack blog application created with ruby/Sinatra in the backend and react in the front end. An author has many posts and a post belongs to ane author. It was created for learning purposes

<img width="1476" alt="Screenshot 2022-12-03 at 20 27 09" src="https://user-images.githubusercontent.com/50773868/205453735-06a53e04-9106-46e7-81fd-820e33845c78.png">


<img width="1328" alt="Screenshot 2022-12-03 at 20 06 32" src="https://user-images.githubusercontent.com/50773868/205453573-8a9a5d67-b40d-47b1-81a6-452d0270d055.png">


## Learning Goals

- Build a web basic API with Sinatra and Active Record to support a React
  frontend


## Project  Requirements


- Use Active Record to interact with a database.
- At a minimum, set up the following API routes in Sinatra:
  - create and read actions for both models
  - full CRUD capability for one of the models
- Build a separate React frontend application that interacts with the API to
  perform CRUD actions.
- Implement proper front end state management. You should be updating state using a
  setState function after receiving your response from a POST, PATCH, or DELETE 
  request. You should NOT be relying on a GET request to update state. 
- Use good OO design patterns. You should have separate classes for each of your
  models, and create instance and class methods as necessary. 
- Routes in your application (both client side and back end) should follow RESTful
  conventions.
- Use your back end optimally. Pass JSON for related associations to the front 
  end from the back end. You should use active record methods in your controller to grab
  the needed data from your database and provide as JSON to the front end. You
  should NOT be relying on filtering front end state or a separate fetch request to
  retrieve related data.


## Getting Started

### Backend Setup

- `git clone git@github.com:FIMoringa/phase-3-sinatra-react-project.git`
- `cd phase-3-sinatra-react-project/backend`
- `bundle install` to install the gems.

You can start your server with:

```console
$ bundle exec rake server
```

This will run your server on port
[http://localhost:9292](http://localhost:9292).

### Frontend Setup

Your backend and your frontend should be in **two different repositories**.

`cd phase-3-sinatra-react-project/frontend`

```console
$ npm start
```

### Fetch Example

Your React app should make fetch requests to your Sinatra backend! Here's an
example:

```js
fetch("http://localhost:9292/posts")
  .then((r) => r.json())
  .then((data) => console.log(data));
```

## Author

##### 👤 **Kalunge**

- GitHub: [@kalunge](https://github.com/kalunge)
- Twitter: [@kalunge](https://twitter.com/titus_muthomi)
- LinkedIn: [kalunge](https://linkedin.com/in/titus_muthomi)

##  Contributing

Feel free to check the [issues page](https://github.com/FIMoringa/phase-3-sinatra-react-project/issues)

## Show your support

Give a :star: if you like this project!
## Resources

- [create-react-app][]
- [Postman][postman download]

[create-react-app]: https://create-react-app.dev/docs/getting-started
[create repo]: https://docs.github.com/en/get-started/quickstart/create-a-repo
[dbdiagram.io]: https://dbdiagram.io/
[postman download]: https://www.postman.com/downloads/
[network tab]: https://developer.chrome.com/docs/devtools/network/
