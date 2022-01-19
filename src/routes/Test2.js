export const Test2 = () => {
  
  return (
    <div>
      <h4>Refactor this app</h4>
      <p>
        The routing system this app uses works, but there's a lot of duplication
        between the routes and the nav links, so adding new pages is cumbersome.
        Also, there's no way to tell what page we're on without looking at the
        location bar in the browser. Restructure App.js to render its pages and
        nav links from a single array of routes.
      </p>
      <ul>
        <li>
          Create an array of routes, each item in the array should include the
          name of the page, its path, and the component to be rendered
        </li>
        <li>Loop over the array to create the links in the navbar</li>
        <li>Loop over the array to create the routes</li>
        <li>Create a reusable component for nav links</li>
        <li>
          Within the navbar, indicate to the user what page they're currently on
        </li>
        <li>Add a new page to the app with the text "hello world"</li>
      </ul>
    </div>
  );
};
