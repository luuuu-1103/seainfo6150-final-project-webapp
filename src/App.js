import React, {useEffect, useState} from "react";
import { Switch, Route, Link } from "react-router-dom";
import { isEmpty } from "lodash";
import styles from "./App.module.css";
import Home from "./components/Home/Home.jsx";
import SignInForm from "./components/SignInForm/SignInForm.jsx";
// import Bar from "./components/Content/Content.jsx";
// import Baz from "./components/Article/Article.jsx";
import Error from "./Error/Error.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Thank from "./components/Thank/Thank.jsx";
// import articles from "./articles";
import Article from "./components/Article/Article.jsx";
import Content from "./components/Content/Content.jsx";
import Keeper from "./components/Keeper/Keeper.jsx";
import ArticlePart2 from "./components/ArticlePart2/ArticlePart2";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
// const externalContent = {
//   id: "article-1",
//   title: "An Article",
//   author: "April Bingham",
//   text: "Some text in the article",
// };

// function createArticle(item) {
//   return (
//     <Article 
//       key={item.id}
//       name={item.title}
//       articleBody={item.body}
//       URL={item.docURL}
//     />
//   );
// }

function App() {
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    const fetchData = async () =>{
    const response = await fetch("https://run.mocky.io/v3/7ab1751a-58f1-49ab-a9b8-4837b156b953");
    const responseJson = await response.json();
    setFetchedData(Object.values(responseJson));
    };
    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);
  
  return (
    <>
      
      <header className={styles.header}>
        <nav>
          <ul className={styles.navs}>
            {/* these links should show you how to connect up a link to a specific route */}
            <li className={styles.list}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.list}>
              <Link to="/keeper">Keeper</Link>
            </li>
            <li className={styles.list}>
              <Link to="/signinform">Sign In</Link>
            </li>
            <li className={styles.list}>
              <Link to="/article">Article</Link>
            </li>
            <li className={styles.list}>
              <Link to="/articlepart2">ArticlePart2</Link>
            </li>
            <li className={styles.list}>
              <Link to="/content">Content</Link>
            </li>
            <li className={styles.list}>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className={styles.list}>
              <Link to="/thank">Thank You</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/keeper" exact component={Keeper} />
        <Route path="/signinform" exact component={SignInForm} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/thank" exact component={Thank} />
        
        <Route 
          path="/content" 
          exact 
          render={() => <Content articles={fetchedData} />} />
        {/* passing parameters via a route path */}
        <Route
          path="/article/:detailedarticles"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <Article
              detailedarticles={match.params.detailedarticles}
              
            />
          )}
        />
        <Route
          path="/article"
          exact
          render={() => <Article articles={fetchedData} />}
        />
        
        <Route
          path="/articlepart2"
          exact
          render={() => <ArticlePart2 />}
          />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
