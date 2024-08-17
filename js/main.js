const collapsibles = document.querySelectorAll(".collapsible");
/* 
document：表示整个 HTML 或 XML 文档。它是 JavaScript 中用于访问和操作文档内容的根节点。
作用：通过 document 对象，可以使用多种方法和属性来查找、访问和修改页面中的元素。
querySelectorAll：这是 document 对象上的一个方法，用于返回与指定的 CSS 选择器匹配的所有元素节点。
参数：接受一个 CSS 选择器字符串，表示要查找的元素。
返回值：返回一个静态的 NodeList 对象，包含所有匹配的元素。
注意：返回的 NodeList 对象是一个类数组对象，它不是一个数组，因此不能使用数组的方法。 

.collapsible：这是一个 CSS 类选择器，表示类名为 collapsible 的所有元素。点号（.）表示这是一个类选择器。
选择器字符串：.collapsible 是传递给 querySelectorAll 方法的选择器字符串，用于指定要查找的元素。
*/

collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded"); //this：在事件处理器中，this 关键字指向触发事件的元素，即当前被点击的 collapsible 元素。
    //classList 是一个包含元素所有类名的 DOMTokenList 对象，toggle 方法用于在类列表中切换指定的类。
  })
);

// Navigation Shrink
// 使用 JavaScript 来监听页面滚动事件，并在用户向下滚动时给导航栏添加一个类，以实现缩小效果。
window.addEventListener("scroll", function () {
  var navigation = document.querySelector(".navigation");

  if (window.scrollY > 50) {
    //window.scrollY 返回页面在垂直方向上滚动的像素值。当用户滚动页面时，这个值会增大。如果用户回到页面顶部，这个值会变为 0。
    navigation.classList.add("nav--shrink");
  } else {
    navigation.classList.remove("nav--shrink");
  }
});
