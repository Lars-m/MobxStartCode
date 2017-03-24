import mobx from "mobx";

var peopleStore = mobx.observable([
    { name: "Michel" },
    { name: "Me" }
]);
window.peopleStore = peopleStore;
export default peopleStore;
