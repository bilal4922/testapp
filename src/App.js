import React, { useState, useEffect } from "react";
// import ReactFacebookLogin from "react-facebook-login";
// import ReactDOM from "react-dom";
// import FacebookLogin from "react-facebook-login";
// const responseFacebook = (response) => {
//   console.log("login result", response);
// };
// const componentClicked = (data) => {
//   console.warn(data);
// };
export default function ScreenSize() {
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };
  const [email, setEmail] = useState("Continue with email");
  
  function Blog(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }
  
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'},
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

  const [table, settable] = useState(false);

   const handleClick = () => {
    console.log('this is:', this);
    
    setEmail("Continue with Google account");
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);
  return (
    <div>
      <Blog posts={posts} />
      <div
        style={{
          width: windowDimension.winWidth,
          height: "60px",
         
          backgroundColor: table? "#011E8D":'red',
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >


        <img
          style={{
            resizeMode: "contain",
            // backgroundColor: "orange",
            paddingLeft: "150px",
          }}
          src="https://www.leh-ladakh-taxi-booking.com/img/best-hotels-leh-ladakh/logo-booking-com.png"
          alt="bookingdotcomlogo"
        />
        <img
          style={{
            resizeMode: "contain",
            paddingRight: "150px",
            height: "40px",
            width: "40px",
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/1024px-United-kingdom_flag_icon_round.svg.png?20170727094807"
          alt="bookingdotcomlogo"
        />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <h2>
          Sign in or create an account <br />{" "}
        </h2>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form for="email" style={{ width: "310px" }}>
          <label>
            Email address: <br />{" "}
          </label>
          <input style={{ width: "310px", height: "30px" }} />
         
         
        </form>
       
        <button
            style={{
              backgroundColor: "#011E8D",
              color: "white",
              width: "310px",
              height: "40px",
            }}
            onClick={ handleClick}
          >
            {email}
          </button>
          <p style={{ textAlign: "center" }}>
            --- or use one of these option ---
          </p>
       
        <div
          style={{
            justifyContent: "space-between",
            width: "300px",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <div
            style={{
              border: "1px solid grey",
              padding: "15px",
              height: "50px",
              width: "50px",
              // backgroundColor: "blue",
            }}
          >
            <img
              style={{
                height: "40px",
                width: "40px",
              }}
              src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
              alt="facebooklogo"
            />
          </div>
          <div
            style={{
              border: "1px solid grey",
              padding: "15px",
              height: "50px",
              width: "50px",
            }}
          >
            <img
              style={{ height: "40px", width: "40px" }}
              src="https://cdn-teams-slug.flaticon.com/google.jpg"
              alt="googlelogo"
            />
          </div>
          <div
            style={{
              border: "1px solid grey",
              padding: "15px",
              height: "50px",
              width: "50px",
              // backgroundColor: "blue",
            }}
          >
            <img
              style={{ height: "40px", width: "40px" }}
              src="https://static.vecteezy.com/system/resources/previews/003/720/446/original/phone-icon-telephone-icon-symbol-for-app-and-messenger-vector.jpg"
              alt="applelogo"
            />
          </div>
        </div>
        {/* <div>
          <FacebookLogin
            appId="822858015725956"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
          />
        </div> */}
      </div>
    </div>
  );
}