CSS transform properties:
CSS transform properties allow you to visually manipulate elements (move, rotate, scale, skew) without affecting their actual layout on the page. They are highly efficient for animations, often leveraging your computer's GPU for smooth performance.

transform Property:
This is where you apply one or more transform functions.
Example: transform: translateX(50px) rotate(45deg);
You can list multiple functions; the order matters (applied left to right).

transform-origin Property:
Sets the pivot point for transformations (e.g., rotation, scaling).
Default: center center (the element's middle).
Example: transform-origin: top left; (transforms happen from the top-left corner).

2D Transform Functions:
These operate on a two-dimensional plane (X-axis for horizontal, Y-axis for vertical).
translate(x, y) / translateX(x) / translateY(y):
Moves an element from its current position.
Example: transform: translateX(100px); (moves 100px to the right).
rotate(angle):
Rotates an element around its transform-origin.
Example: transform: rotate(90deg); (rotates 90 degrees clockwise).
scale(factor) / scaleX(factor) / scaleY(factor):
Changes the size of an element. 1 is original size.
Example: transform: scale(1.5); (makes it 50% larger).
skew(angleX, angleY) / skewX(angle) / skewY(angle):
Tilts an element.
Example: transform: skewY(15deg); (tilts vertically).

3D Transform Functions and Properties
These introduce the Z-axis (depth), allowing elements to move or rotate in three-dimensional space.
Z-axis:
Positive Z moves closer to the viewer.
Negative Z moves further away from the viewer.
translate3d(x, y, z) / translateZ(z):
Moves an element along the Z-axis (depth).
Example: transform: translateZ(50px); (moves 50px closer).
rotateX(angle) / rotateY(angle) / rotateZ(angle) / rotate3d(x, y, z, angle):
Rotates an element around the X, Y, or Z axis. rotateZ is the same as 2D rotate.
Example: transform: rotateY(180deg); (flips horizontally).
perspective Property (on Parent):
Crucial for 3D transforms. Applied to the parent element to create a 3D viewing context for its children.
Defines the viewer's distance from the scene. Smaller values create a stronger 3D distortion.
Example: .parent { perspective: 800px; }
transform-style: preserve-3d:
Applied to a parent element to ensure its children maintain their 3D positions and don't flatten out. Essential for complex 3D objects like cubes.
backface-visibility: hidden:
Hides the "back" side of an element when it's rotated to face away from the viewer (useful for card flip effects).
