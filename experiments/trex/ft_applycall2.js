var animal = {
  anim: "dog",
  get_anim: function () {
    return this.anim;
  },
};
function getAnimal() {
  return this.get_anim();
}
var myObj = {
  anim: "camel",
  get_anim: function () {
    return this.anim;
  },
};
getAnimal.call(myObj);
