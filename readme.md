<!-- Question number 01  -->
getElementById() enables us to call or access an html element by the the id.
For example; If I write getElementById('btn') , it will call the html element that has btn id, and I can access it and make necessary adjustment. 

On the other hand, getElementsByClassName() let us access to the html elements that have the same class names.
For example; If I write getElementsByClassName('card'), I can access or get all the elements that has card class name, and I can loop through it to make necessary modifications or adjustments.


querySelector() is a method to select a html element by using class name. It return the immediate or first elements of the particular classname.
For example; If the class name 'selector' has in a total of 3 elements and I call it by using querySelector('selector'), it will return the immediate or first element among the selector class list.


querySelectorAll(), on the other hand return a node list of all html elements that contains 'selector' class name.

<!-- Question number 02  -->
To create a new element, we use createElement(), and insert the element into the DOM by using appendChild()
Here is an example of how it is being used;
const newElement = createElement('h1')  // <!-- created a new h1 tag -->
newElement.appendChild('name-id')      //  <!-- Inserted the h1 to DOM-->


<!-- Question number 03  -->
Event bubble is kind of a tree. When we click on DOM element, program start to find the root, where the click was performed. It start to search from the top html element, and it search through every html elements to downwards to find the root element. When it succeed to get the root element where an even was triggered or the clicked was placed, it returns to the top by calling every parents elements from the place where the event was triggered.


<!-- Question number 04  -->
Event Delegation leverage the event bubbling model. When we need to set events on multiple child elements, instead of calling all the child element, we can call the parent element and set the eventListener to that parent to handle all the child. This methods lets us propagate the event upwards, same as the bubble works.



<!-- Question number 05  -->
preventDefault() let us stop the auto reloading when we use a submit button in the form. 

stopPropagation() methods enables us to stop the bubbling and prevent triggering all the parent elements after an event. It stop the propagation to the current parent element and block bubble to the upwards.