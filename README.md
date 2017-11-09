# LinkedIn-Automator
Automatically send invitations to your LinkedIn suggestions using criteria specified by you.

# Installation

Clone the repository.

````sh
git clone https://github.com/NiyeT/LinkedIn-Automator.git
````

# Usage

• Navigate inside of the LinkedIn-Automator directory and open either automator.min.js or automator.js in a text editor.   
- automator.min.js for best execution time.
- automator.js for clarity and/or modification purposes.

• Change the values located in the array "my_key_terms" to terms you'd like your LikedIn invitation recipients to have in their   
  bio.

````javascript
const my_key_terms=["New York","ninja","hard working","Software","Engineer"];
````

• Copy the contents of automator file you're editing.

![alt text](https://i.imgur.com/9TwFqy4.png)

• Sign into your LinkedIn account.

![alt text](https://i.imgur.com/vY2QKjL.jpg)

• Navigate to your LinkedIn network page.
 -https://linkedin.com/mynetwork/

![alt text](https://i.imgur.com/iZcH3mB.jpg?1)

• Open Developer Tools (see commands below) and paste the automator file.

- OS X: ⌥⌘U
- Linux: CTRL+U
- Windows: CTRL + U
- Try googling how to open developer tools with your browser if none of these work.

![alt text](https://i.imgur.com/cCjpOs0.jpg?1)

• Press Enter to start the automator.

• Enter this command at any time to stop the automator.

````javascript
linkedInAutomator.stop();
````
