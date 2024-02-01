/**
 * <div id="parent">
 * <div id="child">
 * <h1>I am an tag</h1>
 * <h2>I am an tag</h2>
 * </div>
 * <div id="child">
 * <h1>I am an tag</h1>
 * <h2>I am an tag</h2>
 * </div>
 *
 * </div>
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am tag"),
    React.createElement("h2", {}, "I am tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am tag"),
    React.createElement("h2", {}, "I am tag"),
  ]),
]);

console.log(parent); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
